import React from 'react';
import "./Card.css";

function Card(props) {
  return (
    <section className="nft-container">
      {/* Container Image */}
      <div className="container-image">
        <div className="main-image"  > <img src={props.src} alt="" /></div>
        <div className="color-image" />
      </div>
      {/* Container Title */}
      <div className="container-title">
        <h1><a href={props.link}>{props.title}</a> </h1>
        <p>{props.description}</p>
      </div>
      {/* Pricing and Timing */}
      <div className="container-details">
        {/* Pricing */}
        <div className="pricing">
          <div className="pricing-img" />
          <div>
            <p>{props.pricing}</p>
          </div>
        </div>
        <div className="timing">
          <div className="timing-img" />
          <div>
            <p>{props.timing}</p>
          </div>
        </div>
      </div>
      <hr className="container-line" />
      {/* Author */}
      <div className="author">
        <img src={props.authorImage} alt="" />
        <p>Representative <a href={props.authorLink} className="author-name">{props.author}</a></p>
      </div>
    </section>
  );
}

export default Card;

