import Club from "./club";
import Contactus from "./contactform";
function Clubs() {
    return (<>
        <h1 style={{fontSize:"84px",textAlign:"center",color:"white",padding:"50px"}}>Events</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <Club title="DJ Night" description="Feel the beat and let loose at DJ Night, where the campus transforms into a dance floor. Professional DJs will spin tracks, creating an energetic ambiance that keeps the crowd moving. It's the perfect blend of music and celebration." src=""/>
            <Club title="DJ Night" description="Feel the beat and let loose at DJ Night, where the campus transforms into a dance floor. Professional DJs will spin tracks, creating an energetic ambiance that keeps the crowd moving. It's the perfect blend of music and celebration." src=""/>
            <Club title="DJ Night" description="Feel the beat and let loose at DJ Night, where the campus transforms into a dance floor. Professional DJs will spin tracks, creating an energetic ambiance that keeps the crowd moving. It's the perfect blend of music and celebration." src=""/>
        </div>

        <Contactus/>
    </>
    )
}
export default Clubs;