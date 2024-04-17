import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h3>opps</h3>
      <h4>Something went Wrong</h4>
      <h4>
        {err.status}:{err.statusText}
      </h4>
    </div>
  );
};
export default Error;
