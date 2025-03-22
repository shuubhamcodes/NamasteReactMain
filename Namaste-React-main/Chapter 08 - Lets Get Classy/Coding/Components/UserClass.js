import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); // Call to parent class constructor
    this.state = {
     userInfo:{
        name:"Dummy",
        location:"Default"
     }
    };
  }
async componentDidMount(){
    const data = await fetch("https://api.github.com/users/shuubhamcodes")
    const json = await data.json()
    console.log(json)
    this.setState(
        {
            userInfo:json,
        }
    )
}
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
  
   
    return (
      <div className="user-card">
        <img src ={avatar_url} />
        <h2>Name: {name}</h2>
        <h2>Count: </h2>
        {/* <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increment Count
        </button> */}
        <h3>Location: {location}</h3>
        <h4>Contact: @shubham</h4>
      </div>
    );
  }
}

export default UserClass;
