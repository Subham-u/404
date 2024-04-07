import Card from "./Card";
function  Cards(){
    return(
        <div style={{
            display:"flex",justifyContent:" space-around",flexWrap:"wrap"
        }}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}
export default Cards;