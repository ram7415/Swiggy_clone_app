import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h2>This is about us page</h2>
      {/* <User
        name={"Ram functional component"}
        location={"indore"}
        contact={"yram"}
      /> */}
      <UserClass
        name={"Ram class component"}
        location={"indore"}
        contact={"yram"}
      />
    </div>
  );
};
export default About;
