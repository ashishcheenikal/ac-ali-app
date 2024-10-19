import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    
  return <div className="bg-yellow-300">404: Error - {error.data}</div>;
};
export default ErrorPage;
