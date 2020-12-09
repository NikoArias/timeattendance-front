import React, { Component } from "react";
import RegisterComponent from "./RegisterComponent";
import { postRegister } from "../API/RegisterAPI"

class RegisterContainer extends Component{
  constructor(props){
    super(props);
    this.state ={
      username: "",
      fullname: '',
      password: "",
      error: "",
    };
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.onFailure = this.onFailure.bind(this);
    this.onFullNameChange = this.onFullNameChange.bind(this);

  }

  onUsernameChange(event) {
      this.setState({
          username: event.target.value,
      });
  }

  onFullNameChange(e){
    this.setState({
      fullname: e.target.value,
    });
  }

  onPasswordChange(event) {
      this.setState({
          password: event.target.value,
      });
  }

  onSuccess(responseData){
    alert(responseData.message);
    this.props.History.push('/dashboard');
  }

  onFailure(responseData){
    alert(responseData.message);
  }

  onClick(e){
    const {username, fullname, password} = this.state
    const shortid = require('shortid');

    const postData = {
      email:username,
      fullname:fullname,
      password: password,
      id: shortid.generate(),
    };
    postRegister(postData, this.onSuccess, this.onFailure)
}


render() {
      const { username, fullname, password, error } = this.state;
      return (
        <>
        <RegisterComponent
          username={username}
          fullname={fullname}
          password={password}
          onUsernameChange={this.onUsernameChange}
          onPasswordChange={this.onPasswordChange}
          onFullNameChange={this.onFullNameChange}
          onClick={this.onClick}
          error={error}/>
        </>
    );
}}

export default RegisterContainer;
