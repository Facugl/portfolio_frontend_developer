import styled from "styled-components";
import { darkAlphaColor } from "../../globalStyles";
import { motion } from "framer-motion";
import { Button } from "../../common/Button";
import { Link } from "../../common/Link";

export const ProjectContainer = styled(motion.div)`
  width: 100%;
  height: 40vw;
  max-height: 576px;
  position: relative;
  z-index: 9;

  @media screen and (max-width: 1200px) {
    height:50vw;
    max-height: none;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height:auto;
    gap: 20px;
  }
`;

export const ProjectImage = styled(motion.div)`
  width: 73.33%;
  height: 100%;
  background-color: ${darkAlphaColor};
  position: absolute;
  left: ${({ position }) => (position === "left" ? "0%" : "")};
  right: ${({ position }) => (position === "right" ? "0%" : "")};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;

  img {
    width: 85%;
    height: 80%;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  @media screen and (max-width: 768px) {
    height: 42vw;
    position: static;
    transform: none;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 60vw;
    margin: 0 px;
  }
`;

export const ProjectInfo = styled.div`
  width: 25%;
  position: absolute;
  top: 50%;
  left: ${({ position }) => (position !== "left" ? "0%" : "")};
  right: ${({ position }) => (position !== "right" ? "0%" : "")};
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 2rem rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.4px);
  -webkit-backdrop-filter: blur(7.4px);
  padding: 1rem;
  z-index: 10;

  @media screen and (min-width: 768px) {
    background: transparent;
    box-shadow: none;
    backdrop-filter: unset;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 0rem;
    position: static;
    transform: none;
    width: 73.33%;
  }

  @media screen and (max-width: 480px) {
    padding: 1rem 0.5rem;
    width: 100%;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const ProjectDesc = styled.p`
  font-size: 1rem;
  margin: 1rem 0;
  line-height: 1.7rem;

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
    line-height: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.7rem;
  }
`;

export const TechStack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .7rem;

  @media screen and (max-width: 768px) {
    // gap: 1rem;
    flex-flow: row wrap;
    margin: 1rem 0;
  }
`;

export const TechContainer = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  padding: 4px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const TechImage = styled.img`
  width: 100%;
  border-radius: 50%;
  object-fit: contain;
`;

export const ButtonsWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    gap: 1rem;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 1.5rem;
    gap: 0.8rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: row;
    margin-top: 1.35rem;
    gap: 0.7rem;
  }
`;

export const LinkButton = styled(Link)`
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const ButtonLiveApp = styled(Button)`
  font-size: 12px;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 12px;

    @media screen and (max-width: 768px) {
      padding: 12px 24px;
    }
  }
`;

export const ButtonKnowMore = styled(Button)`
  font-size: 12px;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    padding: 12px;
  }

  @media screen and (max-width: 768px) {
    padding: 12px 24px;
  }
`;
