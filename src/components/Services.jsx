import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      icon: service1,
      title: "Get Best Prices",
      subtitle:
        "Pay through our application, save thousands and get amazing rewards.",
    },
    {
      id: 2,
      icon: service2,
      title: "Covid Safe",
      subtitle:
        "We have all curated hotels that have all the precaution for a covid safe environment.",
    },
    {
      id: 3,
      icon: service3,
      title: "Flexible Payment",
      subtitle:
        "Enjoy the flexible payment through our app and get rewards on every payment.",
    },
    {
      id: 4,
      icon: service4,
      title: "Find The Best Near You",
      subtitle:
        "Find the best hotels and places to visit near you in a single click.",
    },
  ];

  return (
    <Section id="services">
      {servicesData.map((service) => {
        return (
          <div className="service" key={service.id}>
            <div className="icon">
              <img src={service.icon} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.subtitle}</p>
          </div>
        );
      })}
    </Section>
  );
};

const Section = styled.section`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  .service {
    padding: 2rem;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    cursor: default;
    border-radius: 0.3rem;
    box-shadow: 0px 7px 29px 0px rgba(100, 100, 111, 0.2);
    transition: 0.3s ease-in-out;
    &:hover {
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.35);
      transform: translate(0.2rem, -0.4rem);
    }
    &:hover p {
      color: #333333;
    }
    .icon {
      img {
        height: 2.4rem;
      }
    }
    h3 {
      font-weight: 600;
      color: #333333;
    }
    p {
      transition: 0.2s ease-in-out;
      color: #aaaaaa;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 280px) and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export default Services;
