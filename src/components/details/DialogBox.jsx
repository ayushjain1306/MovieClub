import React, { useState } from "react";
import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button, styled } from "@mui/material";

const NewTextField = styled(TextField)`
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
`
const AnotherTextField = styled(TextField)`
    
`

const NewButton = styled(Button)`
    width: 30%;
    background-color: #620aa0;
    font-weight: bold;

    &:hover {
        background-color: #620aa0;
        opacity: 0.9;
    }
`

const NewBox = styled(Box)`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const inputField = {
    movieName: "",
    username: "",
    date: ""
}

const DialogBox = ({ open, setOpen, showName }) => {
    const [fieldData, setfieldData] = useState({...inputField, movieName: showName});

    const handleChange = (e) => {
        setfieldData({...fieldData, [e.target.id]: e.target.value})
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const details = JSON.stringify(fieldData)
            localStorage.setItem("Ticket Details", details)
            alert("Ticket is booked for the show ", showName);
            setfieldData(inputField);
            handleClose();
          },
        }}
      >
        <DialogTitle>Get The Ticket</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To book the ticket for the show, fill the details below. (* represents required)
          </DialogContentText>
          <NewTextField
            autoFocus
            required
            margin="dense"
            id="movieName"
            label="Enter the name of the Show"
            variant="outlined"
            defaultValue = {showName}
            onChange = {(e) => handleChange(e)}
          />
          <NewTextField
            autoFocus
            required
            margin="dense"
            id="username"
            label="Enter your name"
            variant="outlined"
            onChange = {(e) => handleChange(e)}
          />
          <NewBox>
            <label htmlFor="date">Fill the date for the show: </label>
            <AnotherTextField
                autoFocus
                required
                margin="dense"
                id="date"
                type="date"
                variant="outlined"
                onChange = {(e) => handleChange(e)}
            />
          </NewBox>
        </DialogContent>
        <DialogActions>
          <NewButton variant = "contained" onClick={handleClose}>Cancel</NewButton>
          <NewButton variant = "contained" type="submit">Book Now</NewButton>
        </DialogActions>
      </Dialog>
    )
}

export default DialogBox;