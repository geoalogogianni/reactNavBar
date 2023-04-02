import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

export default function App(props) {
   const [openDialog, handleDisplay] = React.useState(false);

   const handleClose = () => {
      handleDisplay(false);
   };

   const openDialogBox = () => {
      handleDisplay(true);
   };
   
   
   return (
      <div className="team">
         <h2 className="team">
            Messages Page
         </h2>
         <button className="buttonStyle" onClick = {openDialogBox}>
            Open Dialog
         </button>
         <Dialog onClose = {handleClose} open = {openDialog}>
            <DialogTitle> Confirm Dialog </DialogTitle>
            <h3 style = {{ marginTop: "-10px", padding: "5px 10px" }}>
                  Are you sure to open a dialog? {" "}
            </h3>
            <br></br>
            <div className="divStyle">
               <button className="confirmButtonStyle" onClick = {handleClose}>
                  Confirm
               </button>
               <button  className="confirmButtonStyle" onClick = {handleClose}>
                  Cancel
               </button>
            </div>
         </Dialog>
      </div>
   );
}