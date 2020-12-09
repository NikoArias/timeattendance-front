import React, {Component} from "react";
import AddTimeComponent from './AddTimeComponent';
import { postTimeCreate } from '../API/TimeAPI';

class AddTimeContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      date:'',
      arrhour: '',
      leahour:'',
    };

    this.onArrHourChange=this.onArrHourChange.bind(this);
    this.onLeaHourChange=this.onLeaHourChange.bind(this);
    this.onDateChange=this.onDateChange.bind(this);
    this.onClick=this.onClick.bind(this);
    this.onSuccesCallBack= this.onSuccesCallBack.bind(this);
    this.onFailureCallBack= this.onFailureCallBack.bind(this);

  }

  onArrHourChange(e){
    this.setState({
      arrhour: e.target.value,
    });
  }

  onLeaHourChange(e){
    this.setState({
      leahour: e.target.value,
    });
  }

  onDateChange(e){
    this.setState({
      date: e.target.value,
    });
  }

  onClick(e){
     const { date, arrhour, leahour}= this.state;
       let profileString = localStorage.getItem('profile');
         const profile = JSON.parse(profileString);
         console.log(profile, arrhour, leahour, date);

             const shortid = require('shortid');
             const postData = {
               date:date,
               arrhour:arrhour,
               leahour:leahour,
               id: shortid.generate(),
               userId: profile.id,
               username: profile.fullname,

             };
          postTimeCreate(postData, this.onSuccesCallBack, this.onFailureCallBack)

  }

  onSuccesCallBack(responseData){
    console.log(responseData);
  }

  onFailureCallBack(responseData){
    console.log(responseData);
  }

   render(){
     const { date, arrhour, leahour}= this.state;
     return(
       <>
          <AddTimeComponent

          date={date}
          arrhour={arrhour}
          leahour={leahour}
          onArrHourChange={this.onArrHourChange}
          onLeaHourChange={this.onLeaHourChange}
          onDateChange={this.onDateChange}
          onClick={this.onClick}

          />
        </>
     );
   }
}

export default AddTimeContainer;
