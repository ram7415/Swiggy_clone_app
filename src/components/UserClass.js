import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        Location: "indore",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/user/ram7415");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  render() {
    const { name, location } = this.state.userInfo;
    return (
      <div>
        <h1>Name:{name}</h1>
        <h1>location:{location}</h1>
      </div>
    );
  }
}
export default UserClass;
