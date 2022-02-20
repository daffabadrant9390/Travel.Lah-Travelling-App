import React from "react";
import styled from "styled-components";
import testimonial1 from "../assets/testimonial1.jpg";
import testimonial2 from "../assets/testimonial2.jpg";
import testimonial3 from "../assets/testimonial3.jpg";
const testimonialsData = [
  {
    id: 1,
    image: testimonial1,
    name: "Spencer Selover",
    jobTitle: "Product Manager",
    company: "Facebook",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio esse deserunt non iste quia optio sint atque quasi maiores voluptatibus?",
  },
  {
    id: 2,
    image: testimonial2,
    name: "Christina Morillo",
    jobTitle: "Math Lecturer",
    company: "University of Waterloo",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio esse deserunt non iste quia optio sint atque quasi maiores voluptatibus?",
  },
  {
    id: 3,
    image: testimonial3,
    name: "Justin Shiver",
    jobTitle: "CEO",
    company: "Hackerrank",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio esse deserunt non iste quia optio sint atque quasi maiores voluptatibus?",
  },
];

const Testimonials = () => {
  return (
    <Section id="testimonials">
      <div className="heading">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        {testimonialsData.map((testi) => {
          return (
            <div className="testimonial" key={testi.id}>
              <p>{testi.testimonial}</p>
              <div className="profile-info">
                <img src={testi.image} alt={testi.name} />
                <div className="job">
                  <h3>{testi.name}</h3>
                  <span>
                    {testi.jobTitle} - {testi.company}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

const Section = styled.section`
  margin: 5rem 0;
  .heading {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin: 0 2rem;
    .testimonial {
      padding: 1rem;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      background-color: aliceblue;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      cursor: pointer;
      &:hover {
        transform: translate(0.2rem, -0.4rem);
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.35);
      }
      p {
        color: #aaaaaa;
        font-size: 0.9rem;
        order: 1;
      }
      .profile-info {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        order: 0;
        img {
          width: 3rem;
          height: 3rem;
          border-radius: 3rem;
          object-fit: cover;
        }
        .job {
          display: flex;
          flex-direction: column;
          h3 {
            font-weight: 500;
          }
          span {
            font-size: 0.9rem;
            color: #aaaaaa;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      margin: 0rem;
    }
  }
`;

export default Testimonials;
