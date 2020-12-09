import React, {Component} from "react";
import AddTimeComponent from './AddTimeComponent';

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
