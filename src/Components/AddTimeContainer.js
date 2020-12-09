import React, {Component} from "react";
import AddTimeComponent from './AddTimeComponent';

class AddTimeContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      arrhour: '',
      leahour:'',
    };
  }
   render(){
     return(
       <>
          <AddTimeComponent
          />
        </>
     );
   }
}

export default AddTimeContainer;
