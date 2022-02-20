import React from "react";
import styled from "styled-components";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <FooterContainer>
      <span>Copyright &copy; Travel.Lah 2021 | All rights reserved. </span>
      <div className="social__links">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/m-daffa-badran-thoriq/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/daffabadrant9390" target="_blank">
              <BsGithub />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <BsFacebook />
            </a>
          </li>
        </ul>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  padding: 2.5rem;
  justify-content: space-between;
  align-items: center;
  background-color: aliceblue;
  border-radius: 0.5rem;
  gap: 1rem;
  span {
    color: #333333;
  }
  .social__links {
    ul {
      display: flex;
      list-style-type: none;
      gap: 1.5rem;
      li {
        a {
          text-decoration: none;
          svg {
            font-size: 1.3rem;
            color: #333333;
            transition: 0.3s ease-in-out;
            &:hover {
              color: #302ce9;
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
    justify-content: center;
    span {
      text-align: center;
    }
    .social__links {
      ul {
        gap: 1rem;
      }
    }
  }
`;

export default Footer;
