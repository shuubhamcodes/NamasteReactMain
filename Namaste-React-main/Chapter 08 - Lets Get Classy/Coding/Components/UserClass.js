import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count: 0,
            count2: 2
        }
    }
    render(){
        const {name,location} =this.props;
        const{count1,count2}= this.state;
        return (
            <div className="user-card">
              <h2>name:{name}</h2>
              <h2>count:{count}</h2>
              <h2>count:{count2}</h2>
              <h3>location:{location}</h3>
              <h4>Contact: @shubham</h4>
            </div>
          );
    }
}


export default UserClass


