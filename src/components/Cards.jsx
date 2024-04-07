import Card from "./Card";
function  Cards(){
    return(
        <div style={{
            display:"flex",justifyContent:" space-around",flexWrap:"wrap"
        }}>
            <Card 
        link="/" 
        title="Equilibrium #3429" 
        description="We Aim to make you a self-sufficient Learner" 
        pricing="E-Cell" 
        timing="Your timing text" 
        author="Vivek" 
        authorImage="/Users/rachit/react-sideNavbar/react-sideNavbar/src/images/image-equilibrium.jpg" 
        authorLink="/" 
      />
        <Card 
            link="/" 
            title="Equilibrium #3429" 
            description="We Aim to make you a self-sufficient Learner" 
            pricing="E-Cell" 
            timing="Your timing text" 
            author="Vivek" 
            authorImage="/Users/rachit/react-sideNavbar/react-sideNavbar/src/images/image-equilibrium.jpg" 
            authorLink="/" 
      />
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}
export default Cards;