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
const db = firebase.database();
const dbRecordStateRef = db.ref("record_status");

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

const ManageRecordState = () => {
    const [recordStates, setRecordStates] = useState([]);
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        getAllRecordStates();        
    }, []);
      function getAllRecordStates() {
        let arr = [];
        dbRecordStateRef.on('child_added', function(data){
          if(data.val()){
            arr.push(data.val())
            setRecordStates(arr);
            setLoader(false);    
          }else{
            setRecordStates([]);
          }
        })
        setTimeout(()=>{
          loader &&  setLoader(false);  
          if(arr.length == 0){
            setRecordStates([]);
          } 
        },700)
      }
    return (
        <div>
        {recordStates.length !== 0 ? (
        <>
         <CustomizedTables
            allRecordStates={recordStates}
          />
        </>
      ) : 
        loader ? <Loader /> :<> <h1>No Records State found!</h1><p>Check your Internet connection also.</p></>
      }
        </div>
    )
}
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
  

  function CustomizedTables(props) {
    const classes = useStyles();
   
    return (
      <>
        <TableContainer component={Paper}  className={classes.container}>
          <Table stickyHeader className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">ID</StyledTableCell>
                <StyledTableCell>Title</StyledTableCell>
                <StyledTableCell align="left">Description</StyledTableCell>
                <StyledTableCell align="left">TransactionDate</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.allRecordStates.map((recordState, i) => (
                 <>
                  <StyledTableRow key={i}>
                    <StyledTableCell component="th" scope="row">
                    {recordState.id}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {recordState.title}
                    </StyledTableCell>
                  
                    <StyledTableCell component="th" scope="row">
                      {recordState.description}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {recordState.transaction_date}
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
export default ManageRecordState
