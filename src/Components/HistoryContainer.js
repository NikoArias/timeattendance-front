import React, {Component} from "react";
import HistoryComponent from './HistoryComponent';
import { getTime } from '../API/TimeAPI';

class HistoryContainer extends Component {
  constructor(props){
    super(props);
    this.state = {

    };

   this.onSuccesCallBack= this.onSuccesCallBack.bind(this);
   this.onFailureCallBack= this.onFailureCallBack.bind(this);

  }

onSuccesCallBack(responseData){
  console.log(responseData);
  this.setState({
    data: responseData,
  })
}

onFailureCallBack(responseData){
  console.log(responseData)
}

componentDidMount() {
  let profileString = localStorage.getItem('profile');
    const profile = JSON.parse(profileString);
    getTime(profile.id, this.onSuccesCallBack, this.onFailureCallBack);

}

   render(){
     const{data}=this.state;
     return(
       <>
          <HistoryComponent
          data= {data}
          />
        </>
     );
   }
}

export default HistoryContainer;
