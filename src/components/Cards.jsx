import Card from "./Card";
function  Cards(){
    return(
        <div style={{
            display:"flex",justifyContent:" space-around",flexWrap:"wrap"
        }}>
            <Card 
        link="/" 
        title="E-Cell" 
        description="We Aim to make you a self-sufficient Learner" 
        src="https://media.licdn.com/dms/image/C5103AQFpwMIu7L-ijg/profile-displayphoto-shrink_800_800/0/1570894667452?e=2147483647&v=beta&t=fkhbucmoZG6ZLSbhh9EkPdESRpLXvrOBDsnQa29fIFs"
        pricing="" 
        timing="" 
        author=": Vivek" 
        authorImage="https://pbs.twimg.com/profile_images/1742085398606888960/si-Cz_UA_400x400.jpg" 
        authorLink="/" 
      />
        <Card 
            link="/" 
            title="Music Club" 
            description="We Aim to make you a good musician" 
            pricing="" 
            timing="" 
            src="https://i.pinimg.com/736x/f5/9d/c3/f59dc328a644de08da19fb0900a9261f.jpg"
            author=":Suyash" 
            authorImage="https://pbs.twimg.com/profile_images/1742085398606888960/si-Cz_UA_400x400.jpg" 
            authorLink="/" 
      />

           <Card 
            link="/" 
            title="Robotics Club" 
            description="We Aim to make you toys for you." 
            pricing="" 
            timing="" 
            src="https://cdn11.bigcommerce.com/s-dl22izwaan/images/stencil/original/products/538/9246/apixscohn__40365.1626881396.jpg?c=1g"
            author=": Aman" 
            authorImage="https://pbs.twimg.com/profile_images/1742085398606888960/si-Cz_UA_400x400.jpg" 
            authorLink="/" 
      />
            <Card 
            link="/" 
            title="Competitive Coding" 
            description="We Aim to make you a good software developer" 
            pricing="" 
            timing="" 
            author=": Anuj" 
            src="https://upload.wikimedia.org/wikipedia/en/1/1d/ICPC_International_Collegiate_Programming_Contest_logo%2C_Aug_2018.png"
            authorImage="https://pbs.twimg.com/profile_images/1742085398606888960/si-Cz_UA_400x400.jpg" 
            authorLink="/" 
      />
            <Card 
            link="/" 
            title="Influencer Club" 
            description="We Aim to make you a influencer who influence people in good way." 
            pricing="" 
            timing="" 
            src="https://cdn.dribbble.com/users/274783/screenshots/2634968/influence_gif_3.gif"
            author=": Udita" 
            authorImage="https://pbs.twimg.com/profile_images/1742085398606888960/si-Cz_UA_400x400.jpg" 
            authorLink="/" 
      />
        </div>
    )
}
export default Cards;