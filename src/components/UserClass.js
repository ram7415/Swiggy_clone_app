import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
  }
  render() {
    return (
      <div className="user-card">
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase count
        </button>
        <h1>count:{this.state.count}</h1>
        <h1>count2:{this.state.count2}</h1>
        <h1>Name: {this.props.name}</h1>
        <h2>location:{this.props.location}</h2>
        <h2>Contact:{this.props.contact}</h2>
      </div>
    );
  }
}
export default UserClass;
