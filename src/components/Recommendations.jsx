import React, { useState, useEffect } from "react";
import styled from "styled-components";
import destination1 from "../assets/Destination1.png";
import destination2 from "../assets/Destination2.png";
import destination3 from "../assets/Destination3.png";
import destination4 from "../assets/Destination4.png";
import destination5 from "../assets/Destination5.png";
import destination6 from "../assets/Destination6.png";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

const Recommendations = () => {
  const recomendationsData = [
    {
      id: 1,
      image: destination1,
      title: "Singapore",
      subtitle: "Singapore, officially the Republic of Singapore, is a...",
      cost: "38,800",
      duration: "Approx 2 night trip",
      categories: [
        "All",
        "The Package Holiday",
        "The Group Tour",
        "Long Term Slow Travel",
      ],
    },
    {
      id: 2,
      image: destination2,
      title: "Thailand",
      subtitle: "Thailand is a Southeast Asia country. It's known for...",
      cost: "54,200",
      duration: "Approx 2 night trip",
      categories: ["All", "The Group Tour", "Long Term Slow Travel"],
    },
    {
      id: 3,
      image: destination3,
      title: "Paris",
      subtitle: "Paris, France's capital, is a major European city and a...",
      cost: "45,500",
      duration: "Approx 2 night trip",
      categories: ["All", "The Package Holiday", "The Group Tour"],
    },
    {
      id: 4,
      image: destination4,
      title: "New Zealand",
      subtitle: "New Zealand is an island country in the...",
      cost: "24,100",
      duration: "Approx 1 night trip",
      categories: ["All", "The Group Tour"],
    },
    {
      id: 5,
      image: destination5,
      title: "Bora Bora",
      subtitle: "Bora Bora is a small South Pacific island northwest of...",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
      categories: [
        "All",
        "The Package Holiday",
        "The Group Tour",
        "Long Term Slow Travel",
      ],
    },
    {
      id: 6,
      image: destination6,
      title: "London",
      subtitle: "London, the capital of England and the United...",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
      categories: ["All", "The Group Tour", "Long Term Slow Travel"],
    },
  ];

  const packages = [
    "All",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  const [activePkg, setActivePkg] = useState("All");
  const [filteredRecommendations, setFilteredRecommendations] = useState([]);
  useEffect(() => {
    const filtered = recomendationsData.filter((recom) => {
      return recom.categories.includes(activePkg);
    });
    setFilteredRecommendations(filtered);
  }, [activePkg]);

  return (
    <Section id="recommendations">
      <div className="heading">
        <h2>Recommend Destinations</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                key={index}
                className={activePkg === pkg ? "active" : ""}
                onClick={() => setActivePkg(pkg)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {filteredRecommendations.map((recommendation) => {
          return (
            <div className="destination" key={recommendation.id}>
              <img src={recommendation.image} alt={recommendation.title} />
              <h3>{recommendation.title}</h3>
              <p>{recommendation.subtitle}</p>
              <div className="destination-info">
                <div className="destination-services">
                  <img src={info1} alt="destination services icon" />
                  <img src={info2} alt="destination services icon" />
                  <img src={info3} alt="destination services icon" />
                </div>
                <h4>$ {recommendation.cost}</h4>
              </div>
              <div className="destination-distance">
                <span>1000 Kms</span>
                <span>{recommendation.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

const Section = styled.section`
  padding: 2rem 0;
  .heading {
    text-align: center;
  }
  .packages {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      width: max-content;
      list-style-type: none;
      li {
        padding: 1rem 2rem;
        cursor: pointer;
      }
      .active {
        color: #8338ec;
        font-weight: 700;
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 0 1rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        transform: translateY(-0.6rem);
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.35);
      }
      img {
        width: 100%;
      }
      .destination-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .destination-services {
          display: flex;
          gap: 0.3rem;
          img {
            width: 2rem;
            height: 2rem;
            border-radius: 1rem;
            background-color: #4d2ddb84;
          }
        }
      }
      .destination-distance {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      padding: 0 1rem;
      ul {
        li {
          font-size: 0.7rem;
          padding: 0.5rem;
        }
        .active {
          border-bottom-width: 0.2rem;
        }
      }
    }
    .destinations {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      padding: 0;
      gap: 2rem;
    }
  }
`;

export default Recommendations;
