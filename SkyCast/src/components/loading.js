import loading from "../assests/loading.gif";
import "../css/loader.css";

export default function Loading() {
  return (
    <div className="loading">
      <img src={loading} alt="Loading..." />
    </div>
  );
}
