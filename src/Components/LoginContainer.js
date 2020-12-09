import React, {Component} from "react";
import LoginComponents from "./LoginComponents";
import { postLogin } from '../API/LoginAPI';

class LoginContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      pasword: '',
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.onFailure = this.onFailure.bind(this);
  }

  onSuccess(responseData){
    console.log(responseData);
    localStorage.setItem('profile', JSON.stringify(responseData));
    this.props.history.push('/dashboard');
  }

  onFailure(responseData){
    alert(responseData.message);
  }

  onEmailChange(e){
    this.setState({
      email: e.target.value,
    });
  }

  onPasswordChange(e){
    this.setState({
      password: e.target.value,
    });
  }

  onSubmitClick(e){
    const { email, password } = this.state;

    const postData= {
      email: email,
      password: password,
    };

    postLogin(postData, this.onSuccess, this.onFailure);
  }


   render(){
     const { email, password } = this.state;
     return(
       <>
            <LoginComponents

                 email={email}
                 password={password}
                 onEmailChange={this.onEmailChange}
                 onPasswordChange={this.onPasswordChange}
                 onSubmitClick={this.onSubmitClick}
            />
       </>
     );
   }
}

export default LoginContainer;
