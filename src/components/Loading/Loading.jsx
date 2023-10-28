import "./styles.css";
import logo from "../../static/img/primal-force-logo.png";

const Loading = () => {
  return (
    <img className="loader" alt="" src={logo} width="96px" height="96px" />
  );
};

export default Loading;
