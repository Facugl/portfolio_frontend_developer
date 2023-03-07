import styled from "styled-components";
import { greenColor, primaryColor } from "../../globalStyles";
import { motion } from "framer-motion";
import { Button } from "../../common/Button";

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageContainer = styled(motion.div)`
  width: 40%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const AvatarWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: -10px 110px;
    background: linear-gradient(315deg, #00ccff, #d400d4);
    transition: 0.5s;
    animation: animate 4s linear infinite;

    @media screen and (max-width: 1024px) {
      inset: -10px 110px;
    }

    @media screen and (max-width: 768px) {
      inset: -10px 80px;
    }

    @media screen and (max-width: 480px) {
      inset: 0 90px;
    }
  }

  &:hover::before {
    inset: -20px 0px;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &::after {
    content: "";
    position: absolute;
    inset: 6px;
    background: ${greenColor};
    border-radius: 50%;
    z-index: 1;
  }

  &:hover div img {
    opacity: 0;
  }

  @media screen and (max-width: 1024px) {
    width: 300px;
    height: 300px;
    margin: 0 auto;
  }

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }

  @media screen and (max-width: 480px) {
    width: 250px;
    height: 250px;
    margin: 0 auto;
  }
`;

export const AvatarImg = styled.div`
  position: absolute;
  inset: 30px;
  border: 6px solid #070a1c;
  z-index: 3;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    position: relative;
    font-size: 1.5em;
    text-align: center;
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;

    @media screen and (max-width: 480px) {
      font-size: 1em;
    }

    span {
      font-weight: 300;
      font-size: 0.75em;
    }
  }

  a {
    position: relative;
    margin-top: 10px;
    padding: 10px 20px;
    background: #fff;
    color: #070a1c;
    border-radius: 25px;
    font-weight: 500;
    font-size: 1.25em;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-decoration: none;
    transition: 0.5s;

    &:hover {
      letter-spacing: 0.2em;
    }

    @media screen and (max-width: 480px) {
      font-size: 1em;
    }
  }
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: 0.5s;
  pointer-events: none;
  z-index: 3;
`;

export const InfoContainer = styled(motion.div)`
  width: 55%;
  position: relative;
  z-index: 9;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8rem;

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
  }

  @media screen and (max-width: 480px) {
    padding: 0.5rem 2rem;
    margin-top: 0;
    font-size: 1rem;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: start;
  align-content: center;
  margin: 4rem auto;
  gap: 4rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 2rem auto;
    gap: 2rem;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 2rem;
    margin: 2rem auto;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  z-index: 9;

  @media screen and (max-width: 760px) {
    gap: 1rem;
  }
`;

export const ButtonDownloadCV = styled(Button)`
  @media screen and (max-width: 640px) {
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const SkillWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 5rem;

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
  }

  @media screen and (max-width: 480px) {
    flex-direction: row;
    gap: 10px;
    margin-top: 3rem;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;
