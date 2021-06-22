import React, {  useState, forwardRef,useEffect } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton"
import firebase from "../../../config/firebase";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import DoneAllIcon from "@material-ui/icons/DoneAll";


function PostNewProd() {
  const [openOkMsg,setopenOkMsg] = useState(false);
  const [adData, setAdData] = useState({
    title: "",
    description: "",
    price: "",
    product_Imgs: {
      img1: {},
      img2: {},
      img3: {},
    },
    done_by: "",
    brand: "",
    category: "",
    record_state: 1,
    transaction_date:""
  });
  useEffect(()=>{
    firebase.database().ref('categories').once('value',function (cat){
     if(cat.val()){
      if(Object.keys(cat.val()).length !== 0){
        setCategories(Object.keys(cat.val()))
      }
    }
      })
  },[])
  const [categories, setCategories] = useState([])
  var reader,files = [];

  function selectImg(e, imgno) {
    e.preventDefault();
    var input = document.createElement("input");
    input.type = "file";

    input.onchange = (e) => {
      files = e.target.files;
      var name = "img" + imgno;
      let old = adData.product_Imgs;
      setAdData({
        ...adData,
        product_Imgs: { ...old, [name]: files[0] },
      });

      reader = new FileReader();
      reader.onload = function () {
        document.getElementById(`productImg${imgno}`).src = reader.result;
      };
      reader.readAsDataURL(files[0]);
    };
    input.click();
  }

  function removeImg(imgno) {
    document.getElementById(`productImg${imgno}`).src = "";
    let old = adData.product_Imgs;
    let name = "img" + imgno;
    setAdData({
      ...adData,
      product_Imgs: { ...old, [name]: {} },
    });
  }

  function uploadImg(file, i) {
    
    let loadingDiv = document.getElementById("uploadingloaderwrapper");
    return new Promise((resolve, reject) => {
      let task;
      var storageRef = firebase.storage().ref("ad_images/" + file[i].name);
      task = storageRef.put(file[i]);

      task.on(
        "state_changed",
        function progress(snapshot) {
          var percentage = Math.floor(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          loadingDiv.innerHTML = `<h1>Loading... <br/> ${percentage}%</h1>`;

          // use the percentage as you wish, to show progress of an upload for example
        }, // use the function below for error handling
        function (error) {
          loadingDiv.innerHTML = "";
          console.log(error);
          alert(error.message);
        },
        function complete() {
          //This function executes after a successful upload
          task.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            resolve(downloadURL);
            loadingDiv.innerHTML = "";
            // loadingDiv.innerHTML = "";
           
            return downloadURL
          });
        }
      );
    });
  }
  // New Ad post function with Image
  async function uploadNewProduct(e) {
    e.preventDefault();
   
    let k = [];
    let imgUrls = [];
    for (var i = 0; i < 3; i++) {
      k.push(Object.entries(adData.product_Imgs)[i][1]);
      let c = k[i];
      let d =[];

      if(c.name){
        imgUrls.push(await  uploadImg(k, i)) 
     
      }

     if(i === 2){

        // getting currenty data

        var date = new Date();
        var month = [];
        month[0] = "Jan";
        month[1] = "Feb";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "Aug";
        month[8] = "Sepr";
        month[9] = "Oct";
        month[10] = "Nov";
        month[11] = "Dec";
        var n = month[date.getMonth()];
        var todayDate = date.getDate();
        var currentYear = date.getFullYear();
        var postdate = todayDate + " " + n + " " + currentYear;

        // uploading to Database
          let key = firebase.database().ref(`categories/${adData.category}`).push().key;
          firebase.database().ref(`categories/${adData.category}`).child(key).set({ 
            key: key,
            title: adData.title,
            description: adData.description,
            price: adData.price,
            product_Imgs: imgUrls,
            condition: adData.condition.trim().length === 0 ? "Not Defined": adData.condition,
            brand: adData.brand.trim().length === 0 ? "No Brand" : adData.brand,
            category: adData.category,
            done_by: key,
            record_state: 1,
            transaction_date: postdate
          });
          setAdData({
            ...adData,
            title: "",
            description: "",
            price: "",
            condition: "",
            brand: "",
            product_Imgs: {
              img1: {},
              img2: {},
              img3: {},
            },
          });
          handleDialogBox()
      }
    }
  }
  
  const handleDialogBox = () => {
    openOkMsg ? setopenOkMsg(false) : setopenOkMsg(true); 
  };

  const handleformDetails = (e) => {
    setAdData({
      ...adData,
      [e.target.name]: e.target.value
    })
  };

  return (
    <div>
      {console.log(adData)}
      <div id="uploadingloaderwrapper"></div>
      <div className="">
        <div className="my_row">
          <div className="post_container">
            <div className="post_top">
              <h2>ADD NEW AD</h2>
            </div>
            <div className="post_body">
              <form
                action=""
                onSubmit={(e) => uploadNewProduct(e)}
                method="POST"
              >
                <div className="post_detailBox">
                  <br></br>
                  <h3>INCLUDE SOME DETAILS</h3>
                </div>
                <div className="post_detailBox">
                  <label htmlFor="title">Ad title *</label>
                  <input
                    name="title"
                    value={adData.title}
                    onChange={(e)=>handleformDetails(e)}
                    type="text"
                    placeholder="Enter Title"
                  />
                  <span>
                    Mention the key features of your Ad (e.g. brand, model,
                    type, quality)
                  </span>
                </div>
                <div className="post_detailBox ">
                  <label htmlFor="description">Description *</label>
                  <textarea
                    name="description"
                    value={adData.description}
                    onChange={(e)=>handleformDetails(e)}
                    type="text"
                    placeholder="Enter Short Description"
                  />
                </div>
                <div className="post_detailBox postsecDivider">
                  <label htmlFor="title">Brand *</label>
                  <input
                    name="brand"
                    value={adData.brand}
                    onChange={(e)=>handleformDetails(e)}
                    type="text"
                    placeholder="Enter brand name"
                  />
                  
                </div>

                <div className="post_detailBox">
                  <h3>SELECT A CATEGORY</h3>
                </div>
                <div className="post_detailBox form-group  postsecDivider">
                  <label htmlFor="price">Categories*</label>
                  <select name="category" className="form-control" onChange={(e)=>handleformDetails(e)} >
                    {categories.length !== 0 ?
                    categories.map((category, index) => {
                      return (
                        <option value={category} key={index}> {category} </option>
                      )
                    })
                    :
                    <option value={"No Categories found!"}>No Categories found! </option>
                  }

                  </select>
                </div>

                <div className="post_detailBox">
                  <h3>SET  PRICE</h3>
                </div>
                <div className="post_detailBox postsecDivider">

                  <div className="input-group mb-2 " style={{ width: "95%", }}>
                    <div className="input-group-prepend" >
                      <div class="input-group-text" style={{ borderColor: "#00a49f", background: "#8ec045", color: "#fff", fontWeight: "800" }}>RS</div>
                    </div>
                    <input className="form-control m-0 "
                      name="price"
                      value={adData.price}
                      onChange={(e)=> handleformDetails(e)}
                      type="number"
                      placeholder="Price"
                      min="1"
                      style={{
                        borderColor: "#8ec045", boxShadow: "none"
                      }}
                    />
                  </div>
                </div>
                <div className="post_detailBox">
                  <h3>UPLOAD PRODUCT IMAGES (required)</h3>
                </div>
                <div className="post_detailBox postsecDivider prodImgwrapper">
                  <div className="SelectprodImgWrapper">
                    <button
                      className="imgSelbtn"
                      onClick={(e) => selectImg(e, 1)}
                    >
                      {adData.product_Imgs.img1 &&
                      adData.product_Imgs.img1.name ? (
                        <img
                          id="productImg1"
                          className="formProdimg"
                          alt="product img"
                        />
                      ) : (
                        <>
                          <svg
                            width="36px"
                            height="36px"
                            viewBox="0 0 1024 1024"
                            data-aut-id="icon"
                            fill="#002f34"
                          >
                            <path d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z"></path>
                          </svg>
                          <span>Add Photo</span>
                        </>
                      )}
                    </button>

                    {adData.product_Imgs.img1 &&
                    adData.product_Imgs.img1.name ? (
                      <ClearIcon
                        onClick={() => removeImg(1)}
                        className="removeimg"
                      />
                    ) : null}
                  </div>
                  <div className="SelectprodImgWrapper">
                    <button
                      className="imgSelbtn"
                      onClick={(e) => selectImg(e, 2)}
                    >
                      {adData.product_Imgs.img2 &&
                      adData.product_Imgs.img2.name ? (
                        <img
                          id="productImg2"
                          className="formProdimg"
                          alt="product img"
                        />
                      ) : (
                        <>
                          <svg
                            width="36px"
                            height="36px"
                            viewBox="0 0 1024 1024"
                            data-aut-id="icon"
                            fill="#002f34"
                          >
                            <path d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z"></path>
                          </svg>
                          <span>Add Photo</span>
                        </>
                      )}
                    </button>
                    {adData.product_Imgs.img2 &&
                    adData.product_Imgs.img2.name ? (
                      <ClearIcon
                        onClick={() => removeImg(2)}
                        className="removeimg"
                      />
                    ) : null}
                  </div>
                  <div className="SelectprodImgWrapper">
                    <button
                      className="imgSelbtn"
                      onClick={(e) => selectImg(e, 3)}
                    >
                      {adData.product_Imgs.img3 &&
                      adData.product_Imgs.img3.name ? (
                        <img
                          id="productImg3"
                          className="formProdimg"
                          alt="product img"
                        />
                      ) : (
                        <>
                          <svg
                            width="36px"
                            height="36px"
                            viewBox="0 0 1024 1024"
                            data-aut-id="icon"
                            fill="#002f34"
                          >
                            <path d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z"></path>
                          </svg>
                          <span>Add Photo</span>
                        </>
                      )}
                    </button>
                    {adData.product_Imgs.img3 && adData.product_Imgs.img3.name ? (
                      <ClearIcon
                        onClick={() => removeImg(3)}
                        className="removeimg"
                      />
                    ) : null}
                  </div>
                </div>

                <div className="post_detailBox ">
                  {adData.price &&
                    adData.description &&
                    adData.title &&
                    adData.product_Imgs.img1 ? (
                    <button className="postBtn">
                      Post Now
                      {/* <span id="Upprogress"></span> */}
                    </button>
                  ) : (
                    <button className="postBtnnot">Post Now</button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ConfirmDialog open={openOkMsg} Close={handleDialogBox} />
    </div>
  );
}
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ConfirmDialog = (props) => {
  const {open, Close} = props

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={Close}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
       
        <DialogTitle id="alert-dialog-slide-title">{"Hooray !"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Ad Posted Successfully !
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
          <IconButton
            color="primary"
            onClick={props.Close}
          >
            <DoneAllIcon />
          </IconButton>
        </DialogActions>
      </Dialog>
    </>
  );
};


export default PostNewProd;
