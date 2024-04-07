import Event from "./Event";
import Contactus from "./contactform";
import Nav from "./Nav";

function Events() {
    return (
    <div style={{display:"flex",gap:"50px"}}>
    <Nav />
    <div style={{display:"flex",gap:"50px",flexDirection:"column",width:"90vw",justifyContent:"space-evenly"}}>
        <h1 style={{fontSize:"84px",textAlign:"center",color:"white",padding:"50px"}}>Events</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <Event title="BGMI" description="Feel the beat and let loose at DJ Night, where the campus transforms into a dance floor. Professional DJs will spin tracks, creating an energetic ambiance that keeps the crowd moving. It's the perfect blend of music and celebration. " src="https://damru.rishihood.edu.in/images/Bgmi.jpg"/>
            <Event title="Dance" description="Feel the beat and let loose at DJ Night, where the campus transforms into a dance floor. Professional DJs will spin tracks, creating an energetic ambiance that keeps the crowd moving. It's the perfect blend of music and celebration." src="https://damru.rishihood.edu.in/images/duo.avif"/>
            <Event title="Fashion Show" description="Feel the beat and let loose at DJ Night, where the campus transforms into a dance floor. Professional DJs will spin tracks, creating an energetic ambiance that keeps the crowd moving. It's the perfect blend of music and celebration." src="https://damru.rishihood.edu.in/assets/Fashion%20Show.jpg"/>
        </div>
        <br></br>
        <br></br>
        <br></br>


        <Contactus/>
        </div>
        </div>
    )
}
export default Events;