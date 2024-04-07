
import "./Card.css";

const Card = () => {
	return (

		  <section className="nft-container">
			{/* Container Image */}
			<div className="container-image">
			  <div className="main-image" />
			  <div className="color-image" />
			</div>
			{/* Container Title */}
			<div className="container-title">
			  <h1><a href>Equilibrium #3429</a> </h1>
			  <p>We Aim to make you an self-sufficient Learner</p>
			</div>
			{/* Pricing and Timing */}
			<div className="container-details">
			  {/* Pricing */}
			  <div className="pricing">
				<div className="pricing-img" />
				<div>
				  <p>E-Cell</p>
				</div>
			  </div>
			  <div className="timing">
				<div className="timing-img" />
				<div>
				  <p></p>
				</div>
			  </div>
			</div>
			<hr className="container-line" />
			{/* Author */}
			<div className="author">
			  <img src="/Users/rachit/react-sideNavbar/react-sideNavbar/src/images/image-equilibrium.jpg" alt="" />
			  <p>Representative <a href="/" className="author-name">Vivek</a></p>
			</div>
		  </section>

	  );
	}

export default Card;
