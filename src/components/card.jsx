import React from "react";
import "../styles/card.css";

// Example images (replace with your own URLs)
// import completImg from "../assets/complet.jpg";
// import logicImg from "../assets/logic.jpg";
// import uReadyImg from "../assets/uready.jpg";

const cardData = [
  {
    title: "CompLet101",
    link: "#",
    description:
      "For tenants facing mould, diaspora professionals underpaid for their impact, founders penalised by unfair lending, and caregivers battling neglect—our complaint letters turn lived experience into rights-aware documentation that gets results.",
    // image: completImg,
  },
  {
    title: "LocalLogic",
    link: "#",
    description:
      "For Residents, MSMEs, SMEs, and large enterprises navigating housing repairs, highway disruptions, HMO licensing, or environmental failures—we map the process, so you act with precision, not guesswork.",
    // image: logicImg,
  },
  {
    title: "UReady",
    link: "#",
    description:
      "For individuals, businesses, and diaspora communities preparing submissions—whether to councils, regulators, or institutions—we ensure your documents are clear, compliant, and strategically positioned for impact.",
    // image: uReadyImg,
  },
];

const Cards = () => {
  return (
    <div className="cards-container">
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.image} alt={card.title} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>

            <a href={card.link} className="card-link">
              <div className="card-button">Learn More</div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
