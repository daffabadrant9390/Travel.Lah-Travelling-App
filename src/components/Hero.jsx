import styled from "styled-components";
import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <Section id="hero">
      <div className="background">
        <img src={heroImg} alt="img-for-hero-section" />
      </div>
      <div className="content">
        <div className="heading">
          <h1>Travel To Explore</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam id
            asperiores magnam quaerat, explicabo eum! Hic, voluptate dignissimos
            molestias adipisci recusandae, quis dolore esse accusamus illo
            cumque, placeat libero fugit!
          </p>
        </div>
        <div className="search-input">
          <div className="input-group">
            <label htmlFor="location">Where you want to go</label>
            <input
              type="text"
              id="location"
              placeholder="Search your location"
            />
          </div>
          <div className="input-group">
            <label htmlFor="check-in">Check-in</label>
            <input type="date" id="check-in" />
          </div>
          <div className="input-group">
            <label htmlFor="check-out">Check-out</label>
            <input type="date" id="check-out" />
          </div>
          <button>Explore Now</button>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
  margin-top: 2rem;
  .background {
    height: 100%;
    img {
      width: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
    z-index: 3;
    .heading {
      color: #ffffff;
      h1 {
        font-size: 3rem;
        font-weight: 700;
        letter-spacing: 0.2rem;
      }
      p {
        font-size: 1rem;
        margin-top: 0.5rem;
        padding: 0 20vw;
        text-align: center;
        line-spacing: 1rem;
      }
    }
    .search-input {
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .input-group {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 1.25rem;
        gap: 0.2rem;
        label {
          font-size: 1.2rem;
          color: #0345ce;
        }
        input {
          background: transparent;
          border: none;
          padding: 0.3rem;
          color: #000000;
          text-align: center;
          &[type="date"] {
            padding-left: 3rem;
          }
          &::placeholder {
            color: #000000;
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        padding: 1rem;
        cursor: pointer;
        border-radius: 0.3rem;
        text-transform: uppercase;
        border: none;
        color: #ffffff;
        font-size: 1.1rem;
        background-color: #4361ee;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #023e8a;
        }
      }
    }
  }
  @media screen and (min-width: 678px) and (max-width: 1080px) {
    height: 20rem;
    gap: 0.5rem;
    .background {
      img {
        height: 100%;
        border-radius: 0.5rem;
        object-fit: cover;
        overflow: hidden;
      }
    }
    .content {
      gap: 1rem;
      .heading {
        h1 {
          font-size: 2.4rem;
        }
        p {
          font-size: 0.9rem;
          padding: 0 15vw;
        }
      }
      .search-input {
        .input-group {
          padding: 0 0.3rem;
          label {
            font-size: 0.8rem;
          }
          input {
            font-size: 0.7rem;
            &[type="date"] {
              padding-left: 1rem;
            }
          }
        }
        button {
          padding: 0.3rem;
          font-size: 0.8rem;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 678px) {
    height: 25rem;
    .background {
      img {
        height: 100%;
        border-radius: 0.5rem;
        object-fit: cover;
        overflow: hidden;
      }
    }
    .content {
      gap: 0.5rem;
      .heading {
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          padding: 2vw;
        }
      }
      .search-input {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0.8rem
        gap: 0.5rem;
        .input-group {
          padding: 0 0.3rem;
          label {
            font-size: 0.8rem;
          }
          input {
            font-size: 0.7rem;
            &[type="date"] {
              padding-left: 1rem;
            }
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
      }
    }
  }
`;

export default Hero;
