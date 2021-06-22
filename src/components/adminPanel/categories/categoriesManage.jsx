import React, { useEffect, useState, forwardRef } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import firebase from "../../../config/firebase";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditRounded from "@material-ui/icons/EditRounded";
import PageviewIcon from "@material-ui/icons/Pageview";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import RefreshRounded from "@material-ui/icons/RefreshRounded";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Loader from "../others/Loader";
import Copyright from "../others/Copyright";
import ClearIcon from "@material-ui/icons/Clear";
import FullScreenLoader from "../others/fullScreenLoader";
import defaultimg from "../../../images/no-image.jpg"
import { CardMedia } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
    minHeight: "180px",
    "&:hover":{
      boxShadow: "5px 5px 15px #00000053",
      transition: ".3s ease-in",

    },

  },
  table: {
    width: "max-content",

  },
  container: {
    width: "max-content",
  },
  media: {
    height: "50px",
    width: "50px",
    borderRadius: "50%",
  },
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  media: {
    height: "50px",
    width: "50px",
    borderRadius: "50%",
  },
}));

const db = firebase.database();
const dbCategoryRef = db.ref("categories");
const dbRecordStatusRef = db.ref("record_status");
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

const CategoriesManage = (props) => {
  const classes = useStyles();
  const [categories, setCategories] = useState([]);
  const [loader, setLoader] = useState(true);
  const [addNewCateForm, setAddNewCateForm] = useState(false);
  const [pageAlertBox, setPageAlertBox] = useState({
    open: false,
    head: "",
    info: "",
    btn1: true,
    btn2: false,
  });
  const [fullScreenLoader, setFullScreenLoader] = useState(false);
  const [perc, setPerc] = useState(0);
  const [recordState, setRecordState] = useState([]);
  
  const handleClickOpenMainAlertBox = () => {
    pageAlertBox.open ? 
    setPageAlertBox({...pageAlertBox, open: false,
    })
    :
    setPageAlertBox({...pageAlertBox,open: true})
  }
  const setAlertDetails = (d) =>{
    setPageAlertBox({
        open: d.open,
        head: d.head,
        info: d.info,
        btn1: d.btn1,
        btn2: d.btn2,
    })
  }
  const [newCategory, setNewCategory] = useState({
    Record_State: 1,
    Done_By: "",
    transaction_date: "",
    Image_URL: ""
  });
  
  useEffect(() => {
    //   let cate= "Health";
    //   const ad = {
    //       title: "Dirilis Ertugrul Printed T-shirt For Men",
    //       price: 550,
    //       country: "Pakistan",
    //       category: cate,
    //       details: `Fabric Cotton Jersey
    //       Export Quality Fabric & Sizes
    //       Trendy
    //       Fabric Cotton Jersey
    //       Export Quality Fabric & Sizes
    //       Trendy`,
    //       gallery: ["https://static-01.daraz.pk/p/b4bae8e7155958667b54c8b3946035c5.jpg_340x340q80.jpg_.webp"]          
    //     }

    // let key = firebase.database().ref(`categories/${cate}`).push().key;
    // firebase.database().ref(`categories/${cate}`).child(key).set(ad)
  }, []);

  useEffect(() => {
    getAllCategories();
    getAllRecordStates();
    
  }, []);


  function getAllCategories() {
    let arr = [];
   
    dbCategoryRef.on('child_added', function(data){
      if(data.val()){
        arr.push(data.val())
        setCategories(arr);
        setLoader(false);    
      }else{
        setCategories([]);
      }
    })
    setTimeout(()=>{
      loader &&  setLoader(false);  
      if(arr.length == 0){
        setCategories([]);
      } 
    },700)
  }
  function getAllRecordStates() {
    dbRecordStatusRef.once('value').then((data)=>{
      if(data.val()){
        setRecordState(data.val());   
      }
    })
  }
  const handleAdNewCateForm = () =>{
    setNewCategory({
      Record_State: 1,
      Done_By: "",
      transaction_date: "",
      Image_URL: ""
    })
    if(addNewCateForm){
      setAddNewCateForm(false);
    }else{
    setAddNewCateForm(true);}
  }
  function selectImg(e) {
    let files = [];
    let reader;
    e.preventDefault();
    var input = document.createElement("input");
    input.type = "file";

    input.onchange = (e) => {
      files = e.target.files;;
      setNewCategory({
        ...newCategory,
        Image_URL: files[0]
      });

      reader = new FileReader();
      reader.onload = function () {
        document.getElementById('catergoryImg').src = reader.result;
      };
      reader.readAsDataURL(files[0]);
    };
    input.click();
  }
  function removeImg() {
    document.getElementById(`catergoryImg`).src = "";
    setNewCategory({
      ...newCategory,
      Image_URL: ''
    });
  }
  function addNewCategory() {
      if(newCategory.Image_URL && newCategory.title && newCategory.description && newCategory.Record_State){
      return new Promise((resolve, reject) => {
        setFullScreenLoader(true);
        setPerc(0);
        let task;
        var storageRef = firebase.storage().ref("category-images/" + newCategory.Image_URL.name);
        task = storageRef.put(newCategory.Image_URL);
        task.on(
          "state_changed",
          function progress(snapshot) {
            var percentage = Math.floor(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setPerc(percentage);
          }, //  function below for error handling
          function (error) {
            console.log(error);
            alert(error.message);
          },
          function complete() {
            //This function executes after a successful upload
            task.snapshot.ref.getDownloadURL().then(function (downloadURL) {
              resolve(downloadURL);
              setFullScreenLoader(false);
              addDataToDB(downloadURL)
              setPerc(0)
              return downloadURL
            });
          }
        );
      });
      
    }else{
      setPageAlertBox({
        open: true,
        head: "Alert!",
        info: "Please Fill the form",
        btn1: true,
        btn2: false,
    })
    }
 
  }

  const addDataToDB = (url) =>{
    let cate = newCategory.title.toLowerCase();
    if(cate){
      cate = cate.toLowerCase();
      dbCategoryRef.child(cate).get().then((exists)=>{
        if(exists.exists()){
          setPageAlertBox({open: true,head:"Alert!",info: "This Category already exists!",btn1: true, btn2: false})
        }else{

          let key = firebase.database().ref(`categories/${cate}`).push().key;
          firebase.database().ref(`categories/${cate}`).set({
            id: key,
            title : cate,
            description : newCategory.description,
            Image_URL : url,
            Record_State: newCategory.Record_State,
            Done_By: firebase.auth().currentUser.uid,
            transaction_date: postdate
            
          }).then(()=>{
            handleAdNewCateForm();
            getAllCategories();
            setPageAlertBox({open: true,head:"Good News!",info: "New Category Added Successfully!",btn1: true, btn2: false})
          })
        }
      })
     
    }else{
      setPageAlertBox({open: true,head:"Alert!",info: "Please Enter Category name",btn1: true, btn2: false})
    }
  }


  // firebase.auth().createUserWithEmailAndPassword("sufyan@gmail.com", "sufyan123")
  // .then((result) => {
  //   console.log(result.user)
  // })

// function sd(){
//     let s = firebase.database().ref('record_status').push().key;
//     firebase.database().ref('record_status').child(1).set({
//       id : 1 ,
//       title :"New",
//       description :"new record has been submited",
//       Record_State:1 ,
//       Done_By: firebase.auth().currentUser.uid,
//       transaction_date: postdate
//     })
//   }
  return (
    <React.Fragment>
      {fullScreenLoader &&
      <FullScreenLoader percent={perc}/>
      }
      {/* <button onClick={sd}>dssds</button> */}
      <MainAlertBox data={pageAlertBox} close={handleClickOpenMainAlertBox}/>
      <div className="mb-3 d-flex ">
      <Button onClick={()=> setAddNewCateForm(true)} variant="contained" color="primary">Add New +</Button>
      <IconButton className="ml-auto"
                  color="secondary"
                  onClick={getAllCategories}
                  style={{textAlign: "left",padding:"0 !important"}}
                >
                  <RefreshRounded />
                </IconButton>
      </div>
      {categories.length !== 0 ? (
        <>
     
          <CustomizedTables
            allCategories={categories}
            getAllCategories={getAllCategories}
            recordState={recordState}
           setAlertDetails={setAlertDetails}
           perc={setPerc}
           setFullLoader={setFullScreenLoader}
          />
        </>
      ) : 
        loader ? <Loader /> :<> <h1>No Categories found!</h1><p>Check your Internet connection also.</p></>
        
      }
    <Dialog
        open={addNewCateForm}
        TransitionComponent={Transition}
        
        onClose={handleAdNewCateForm}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleAdNewCateForm}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Add New Category
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="UserupdateFormAdmin">
          <Typography variant="h6" gutterBottom>
            Enter Name
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                name="title"
                label="Category name"
                fullWidth
                error={newCategory.title === ""}
                helperText={newCategory.title === "" ? 'Empty! please Enter ' : newCategory.title ? newCategory.title.length  <3 ? "Category Name shuold be greater 2 letter": ' ':' '  }
                value={newCategory.title}
                onChange={(e) => setNewCategory({
                  ...newCategory,title: e.target.value
                })} 
              />
              <TextField
                required
                name="description"
                label="Description"
                fullWidth
                error={newCategory.description === ""}
                helperText={newCategory.description === "" ? 'Empty! please Enter ' : newCategory.description ? newCategory.description.length  <3 ? "Category Name shuold be greater 2 letter": ' ':' '  }
                value={newCategory.description}
                onChange={(e) => setNewCategory({
                  ...newCategory,
                  description: e.target.value
                })} 
              />
                 <label htmlFor="Record_State">Record Status*</label>
                  <select name="Record_State" className="form-control" onChange={(e) => setNewCategory({
                  ...newCategory,
                  Record_State: parseInt(e.target.value)
                })} >
              {recordState &&
              recordState.length !== 0 ?
                    recordState.map((record, index) => {
                      return (
                        <option value={record.Record_State} key={index}>{record.title}</option>
                      )
                    })
                    :
                    <option value={1}>No Record Status found! </option>
                  }
                  </select>
               <div className="mt-3 SelectprodImgWrapper SelectprodImgWrapper-2">
              <button
                      className="imgSelbtn"
                      onClick={(e) => selectImg(e)}
                    >
                      {newCategory.Image_URL &&
                      newCategory.Image_URL.name ? (
                        <img
                          id="catergoryImg"
                          className="formProdimg"
                          alt="Category image"
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
                    {newCategory.Image_URL &&
                    newCategory.Image_URL.name ? (
                      <ClearIcon
                        onClick={removeImg}
                        className="removeimg"
                      />
                    ) : null}
                    </div>
            </Grid>
          </Grid>
          <p
            style={{ margin: "5px  0" }}
            id="updErrMsg"
            style={{ color: "red" }}
          ></p>
          <Button
            style={{ marginTop: "10px", marginLeft: "7px" }}
            variant="contained"
            color="secondary"
            onClick={addNewCategory}
          >
            Add
            &nbsp;
            <DoneAllIcon color="#fff" />
          </Button>
         
        </div>
      </Dialog>
    
    </React.Fragment>
  );
};


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textTransform: "capitalize"
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    textTransform: "capitalize",

  },
}))(TableRow);
const GtRecState = (props) =>{
  const [record, setRecord] = useState("") 
  useEffect(()=>{
    firebase.database().ref('record_status').child(props.no).get().then((rec)=>{
      if(rec.exists()){
        setRecord(rec.val().title);
      }
    })
  },[])
  return(
    record
  )
}
function CustomizedTables(props) {
  const classes = useStyles();
 
  return (
    <>
      <TableContainer component={Paper}  className={classes.container}>
        <Table stickyHeader className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Image</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="left">Record State</StyledTableCell>
              <StyledTableCell align="left">Description</StyledTableCell>
              <StyledTableCell align="left">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.allCategories.map((category, i) => (
               <>
                <StyledTableRow key={i}>
                  <StyledTableCell component="th" scope="row">
                  {category.Image_URL !== "" ?
                    <CardMedia
                      className={classes.media}
                      image={category.Image_URL}
                    />
                    :  <CardMedia
                    className={classes.media}
                    image={defaultimg}
                  />}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {category.title}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {<GtRecState no={category.Record_State}/>}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {category.description}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <FullScreenUserDetails
                      selectedCategory={category.title}
                      getAllCategories={props.getAllCategories}
                      setAlertDetails={props.setAlertDetails}
                    />
                    <UpdateForm
                      selectedCategory={category.title}
                      getAllCategories={props.getAllCategories}
                      recordState={props.recordState}
                      setAlertDetails={props.setAlertDetails}
                      perc={props.perc}
                      setFullLoader={props.setFullLoader}
                    />
                    <ConfirmDialog
                      delUser={category.title}
                      getAllCategories={props.getAllCategories}
                      setAlertDetails={props.setAlertDetails}
                    />
                  </StyledTableCell>
                </StyledTableRow>
                </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ConfirmDialog = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deleteUser = (delUser) => {
    let d = {}
    if (delUser) {
      dbCategoryRef
        .child(delUser)
        .get()
        .then((snapshot) => {
          if (snapshot.exists()) {
            handleClose();
            dbCategoryRef.child(delUser).remove();
            props.getAllCategories();
            d ={open: true,head:"Alert!",info: "Deleted successfully!",btn1: true, btn2: false}
            props.setAlertDetails(d);
 
          }
        })
        .catch((error) => {
          d ={open: true,head:"Alert!",info: "Deleted successfully!",btn1: true, btn2: false}
          props.setAlertDetails(d)
        });
    } else {
      d ={open: true,head:"Alert!",info: "Deleted successfully!",btn1: true, btn2: false}
      props.setAlertDetails(d)
    }
  };
  return (
    <>
      <IconButton
        onClick={handleClickOpen}
        aria-label="delete"
        color="secondary"
      >
        <DeleteIcon />
      </IconButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Alert !"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to delete this Category?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <IconButton color="primary" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => deleteUser(props.delUser)}
          >
            <DoneAllIcon />
          </IconButton>
        </DialogActions>
      </Dialog>
    
    </>
  );
};

const UpdateForm = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [imgExist, setImgExist] = useState(false);
  const [updDetails, setupdDetails] = useState({
    Done_By: "",
    Image_URL: "",
    Record_State: 0,
    description: "",
    id: "",
    title: "",
    transaction_date: ""
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setupdDetails({
      Done_By: "",
      Image_URL: "",
      Record_State: 0,
      description: "",
      id: "",
      title: "",
      transaction_date: ""
    })
  };

  const handleUserUpdDetails = (event) => {
    setupdDetails({
      ...updDetails,
      [event.target.name]: event.target.value,
    });
    return true;
  };


  function getPreviousData(selectedCategory) {
    console.log(selectedCategory)
    if (selectedCategory) {

      dbCategoryRef
        .child(selectedCategory)
        .get()
        .then((snapshot) => {
          if (snapshot.exists()) {
            setupdDetails(snapshot.val())
            snapshot.val().Image_URL &&
            snapshot.val().Image_URL.length !== 0 ? setImgExist(true) : setImgExist(false)
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  }
  const removeImg = () =>{
    let updateImgElement = document.getElementById('catergoryImg');
    updateImgElement.src="";
    setImgExist(false)
  }
  function selectImg(e) {
    let files = [];
    let reader;
    e.preventDefault();
    var input = document.createElement("input");
    input.type = "file";

    input.onchange = (e) => {
      files = e.target.files;;
      setupdDetails({
        ...updDetails,
        Image_URL: files[0]
      });

      reader = new FileReader();
      reader.onload = function () {
        setImgExist(true);
        document.getElementById('catergoryImg').src = reader.result;
      };
      reader.readAsDataURL(files[0]);
    };
    input.click();
  }

  function imageUploadToDB() {
    let d = {};
    if(updDetails.Image_URL && updDetails.title && updDetails.description && updDetails.Record_State){
    return new Promise((resolve, reject) => {
      props.perc(0)
      props.setFullLoader(true)
      let task;
      var storageRef = firebase.storage().ref("category-images/" + updDetails.Image_URL.name);
      task = storageRef.put(updDetails.Image_URL);
      task.on(
        "state_changed",
        function progress(snapshot) {
          var percentage = Math.floor(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          props.perc(percentage)
        }, //  function below for error handling
        function (error) {
          alert(error.message);
        },
        function complete() {
          //This function executes after a successful upload
          task.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            resolve(downloadURL);
            props.setFullLoader(false)
            // addDataToDB(downloadURL)
            props.perc(0)
            return downloadURL
          });
        }
      );
    });
    
  }else{
    d ={open: true,head:"Alert!",info: "Please fill the form",btn1: true, btn2: false}
      props.setAlertDetails(d);
  }

}
async function updateCategory(selectedCategory){
  let d = {};
  selectedCategory.toLowerCase();
  if (selectedCategory && updDetails.title && updDetails.description && updDetails.Image_URL && imgExist) {
    dbCategoryRef
      .child(selectedCategory)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
     
          if(updDetails.Image_URL.name){
          imageUploadToDB().then(
            function(url) { 
              if(url){

                dbCategoryRef.child(selectedCategory).remove().then(()=>{
                  dbCategoryRef.child(updDetails.title).set({
                    id: updDetails.id,
                    title: updDetails.title,
                    description: updDetails.description,
                    Image_URL: url,
                    Record_State: updDetails.Record_State,
                    Done_By: firebase.auth().currentUser.uid,
                    transaction_date: postdate
                  });
                })
                handleClose();
                setTimeout(()=>{ props.getAllCategories()},500)

                d ={open: true,head:"Success Alert!",info: "Updated Category successfully!",btn1: true, btn2: false}
                props.setAlertDetails(d);
              
              }else{
                d ={open: true,head:"Alert!",info: "Some Error accured!",btn1: true, btn2: false}
                props.setAlertDetails(d);
              }
            },
            function(error) { 
              d ={open: true,head:"Alert!",info: error,btn1: true, btn2: false}
              props.setAlertDetails(d);
            }
          );
          }
          else{
            dbCategoryRef.child(selectedCategory).remove().then(()=>{
              dbCategoryRef.child(updDetails.title).set({
                id: updDetails.id,
                title: updDetails.title,
                description: updDetails.description,
                Image_URL: updDetails.Image_URL,
                Record_State: updDetails.Record_State,
                Done_By: firebase.auth().currentUser.uid,
                transaction_date: postdate
              });
            })
            handleClose();
            setTimeout(()=>{ props.getAllCategories()},500)
            d ={open: true,head:"Success Alert!",info: "Updated Category successfully!",btn1: true, btn2: false}
            props.setAlertDetails(d);
          }
      
        }
      })
      .catch((error) => {
        d ={open: true,head:"Alert!",info: error.message,btn1: true, btn2: false}
        props.setAlertDetails(d);
      });
  } else {
    d ={open: true,head:"Alert!",info: "Please Fill all the fields",btn1: true, btn2: false}
    props.setAlertDetails(d);
  }
};
// const addDataToDB = (url) =>{
//   let cate = updDetails.title;
//   if(cate){
//     cate = cate.toLowerCase();
//     dbCategoryRef.child(cate).get().then((exists)=>{
//       if(exists.exists()){
//         setPageAlertBox({open: true,head:"Alert!",info: "This Category already exists!",btn1: true, btn2: false})
//       }else{

//         let key = firebase.database().ref(`categories/${cate}`).push().key;
//         firebase.database().ref(`categories/${cate}`).set({
//           id: key,
//           title : newCategory.title,
//           description : newCategory.description,
//           Image_URL : url,
//           Record_State: newCategory.Record_State,
//           Done_By: firebase.auth().currentUser.uid,
//           transaction_date: postdate
          
//         }).then(()=>{
//           handleAdNewCateForm();
//           getAllCategories();
//           setPageAlertBox({open: true,head:"Good News!",info: "New Category Added Successfully!",btn1: true, btn2: false})
//         })
//       }
//     })
   
//   }else{
//     setPageAlertBox({open: true,head:"Alert!",info: "Please Enter Category name",btn1: true, btn2: false})
//   }
// }
  return (
    <>
    {console.log(updDetails)}
      <IconButton
        onClick={() => {
          handleClickOpen();
          getPreviousData(props.selectedCategory);
        }}
        aria-label="update"
        color="primary"
      >
        <EditRounded />
      </IconButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              User Details
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="UserupdateFormAdmin">
          <Typography variant="h6" gutterBottom>
            User Meta Details
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                name="title"
                label="title"
                fullWidth
                error={updDetails.title === ""}
                helperText={updDetails.title === "" ? 'Empty! please Enter ' : updDetails.title ? updDetails.title.length  <3 ? "Category Name shuold be greater 2 letter": ' ':' '  }
                value={updDetails.title}
                onChange={(e) => handleUserUpdDetails(e)}
             />
             <TextField
                required
                name="description"
                label="Description"
                fullWidth
                error={updDetails.description === ""}
                helperText={updDetails.description === "" ? 'Empty! please Enter ' : updDetails.description ? updDetails.description.length  <3 ? "Category Name shuold be greater 2 letter": ' ':' '  }
                value={updDetails.description}
                onChange={handleUserUpdDetails} 
              />
                 <label htmlFor="Record_State">Record Status*</label>
                  <select name="Record_State" className="form-control" value={updDetails.Record_State} onChange={(e) => setupdDetails({
                  ...updDetails,
                  Record_State: parseInt(e.target.value)
                })} >
              {props.recordState &&
              props.recordState.length !== 0 ?
                    props.recordState.map((record, index) => {
                      return (
                        <option value={record.Record_State} key={index}>{record.title}</option>
                      )
                    })
                    :
                    <option value={1}>No Record Status found! </option>
                  }
                  </select>
               <div className="mt-3 SelectprodImgWrapper">
              <button
                      className="imgSelbtn"
                      onClick={(e) => selectImg(e)}
                    >
                      {imgExist ? (
                        <img
                          id="catergoryImg"
                          className="formProdimg"
                          alt="Category image"
                          src={updDetails.Image_URL}
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
                    {imgExist ? (
                      <ClearIcon
                        onClick={removeImg}
                        className="removeimg"
                      />
                    ) : null}
                    </div>
          
            </Grid>
          </Grid>
          <p
            style={{ margin: "5px  0" }}
            id="updErrMsg"
            style={{ color: "red" }}
          ></p>
          <Button
            style={{ marginTop: "10px", marginLeft: "7px" }}
            variant="contained"
            color="secondary"
            onClick={() => updateCategory(props.selectedCategory)}
          >
            Update
            &nbsp;
            <DoneAllIcon color="#fff" />
          </Button>
        </div>
      </Dialog>
    </>
  );
};

function FullScreenUserDetails(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [viewCategoryDetails, setViewCategoryDetails] = useState({
    title: "",
    ads: 0
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function getPreviousData(selectedCategory) {
    if (selectedCategory) {
      let items = [];
      dbCategoryRef
        .child(selectedCategory)
        .get()
        .then((snapshot) => {
          if (snapshot.exists()) {
            items.push(Object.keys(snapshot.val()))
            setViewCategoryDetails({
              ads: items.length ,
              title: selectedCategory
            });
          }
        })
        .catch((error) => {
   
          alert(error.message);
        });
    }
  }
  return (
    <>
      <IconButton
        onClick={() => {
          handleClickOpen();
          getPreviousData(props.selectedCategory);
        }}
        aria-label="View"
      >
        <PageviewIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
             Category Details
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="UserupdateFormAdmin" style={{ minWidth: "400px" }}>
          <List>
            <ListItem>
             
              <ListItemText
                primary={viewCategoryDetails.title}
                secondary="Name"
              />
            </ListItem>
            <Divider />

            <ListItem>
              <ListItemText
                primary={viewCategoryDetails.ads}
                secondary="Total Ads in this category"
              />
            </ListItem>
          </List>
          <Box pt={4}>
            <Copyright />
          </Box>
        </div>
      </Dialog>
    </>
  );
}



const MainAlertBox = (props) =>{
  const {open,btn1,btn2,info,head} = props.data;
  const close = props.close;

  return(
    <Dialog
        open={open}
        TransitionComponent={Transition}
        
        onClose={close}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{head}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {info}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {btn2 && 
          <IconButton color="primary" onClick={close}>
            <CloseIcon />
          </IconButton>
          }
          {
            btn1 &&
            <IconButton
            color="secondary"
            onClick={close}
          >
            <DoneAllIcon />
          </IconButton>
          }
         
        </DialogActions>
      </Dialog>
  
  )
}

const mapStateToProps = (store) => ({
  currentuser: store.currentuser,
  allProducts: store.allProducts,
});

export default connect(mapStateToProps, null)(withRouter(CategoriesManage));
