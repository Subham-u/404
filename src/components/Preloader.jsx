import "./preloader.css";

function Preloader(){
    return(
        <>
            <div className="loading" style={{width: "100vw",
    height: "100vh",
    backgroundColor: "linear-gradient(45deg, #a36c07 0%, #0a484d 20%, #055983 40%, #8d0044 60%, #04804c 80%, #a50f01 100%)",
  backgroundSize: "600%",
  position: "absolute",
  left: "0"}}>
            <div className="logo"><img src="/images/welcome-3688628-3231459.webp" alt="" style={{width: '350px'}} /></div>
            <div className="dots animate">
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            </div>
        </div>
      </>

    )
}
export default Preloader;