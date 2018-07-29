import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class LockScreen extends React.Component {
    constructor(props){
        super(props);
        this.emailCallback = this.emailCallback.bind(this);
        this.state = {
            open: false,
            email: "",
            isError: false,
            labelDisabled: true,
            errorLabel: " "
        };
    }

    emailCallback(event){
        this.setState({ email: event.target.value, errorLabel: " " }, () => {

        });
    }
    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        console.log(this.state.email);
        this.setState({ open: false });
    };
    componentDidMount(){
        fetch('/isLoggedIn', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: {}
        })
        .then(res => res.json())
        .then(data => {
           console.log(data.body);
           if(!data) this.handleClickOpen();
           else this.handleClose();
        });
    }

    onEmailError = () =>{
        this.setState({ email: '', isError: true, errorLabel: "Invalid Email Address" });
        // this.setState({ isError: true });
    };
    handleEmailSubmit = () =>{

        const email = this.state.email;
        console.log(email);
        // this.setState({email: ''});
        fetch('/validateEmail', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                input: email
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                this.handleClose();
                sessionStorage.setItem("validEmail", true);
            }
            else{
                this.onEmailError();
            }
        });
    };
    render() {
        return (
            <div>

                <Button onClick={this.handleClickOpen}></Button>

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    disableBackdropClick
                    disableEscapeKeyDown
                >
                    <img src="img/logo.png" width="250px" className="lock-logo" />
                    <DialogTitle id="form-dialog-title">ExecVision Buyer's Guide to Conversation Intelligence Technology.</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="form-subtitle">
                            To Access this Document, Please Enter Your Corporate<br></br>Email Address
                        </DialogContentText>
                        <div className="form-container">
                            <p>Business Email:</p>
                            <TextField
                                autoFocus={true}
                                margin="dense"
                                error={this.state.isError}
                                id="name"
                                label=" "
                                InputLabelProps={{
                                    focused: true
                                }}
                                helperText={this.state.errorLabel}
                                FormHelperTextProps={{
                                    error: this.state.isError
                                }}
                                type="email"
                                fullWidth
                                onChange={this.emailCallback.bind(this)}
                                value={this.state.email}
                            />
                            <Button onClick={() => this.handleEmailSubmit()} color="primary" id="submit-btn">
                                Submit
                            </Button>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        {/*<Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>*/}
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default LockScreen;