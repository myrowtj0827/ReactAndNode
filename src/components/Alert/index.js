import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert as MuiAlert, AlertTitle } from '@material-ui/lab';

const Alert = props => {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={props.open}
      message={props.message}
      onClose={props.handleclose || handleClose}
      autoHideDuration={props.noHide ? null : 4000}
      >
      <MuiAlert elevation={6} {...props} severity={props.severity || 'error'} onClose={props.handleclose || handleClose}>
      {!props.severity || props.severity == 'error'?(
        <AlertTitle>An error occurred</AlertTitle>
        ):'' } 
        {props.message}
      </MuiAlert>
    </Snackbar>
  );

};

export default Alert;