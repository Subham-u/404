import "./events.css";
import "./preloader.css";

function Event(props) {
    return (
      <div className="card">
        <div className="lines"></div>
        <div className="imgbox">
          <img src={props.src} alt="" />
        </div>
        <div className="content">
          <div className="details">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <a href="https://subham-u.github.io/card-num/">Register Now</a>
          </div>
        </div>
      </div>

      
    );
  }
  
  export default Event;