import styled from "styled-components";
import { darkAlphaColor } from "../../globalStyles";
import { motion } from "framer-motion";
import { Button } from "../../common/Button";
import { Link } from "../../common/Link";

export const ProjectContainer = styled(motion.div)`
  width: 100%;
  height: 40vw;
  position: relative;
  z-index: 9;

  @media screen and (max-width: 480px) {
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

  img {
    width: 85%;
    height: 80%;
  }

  @media screen and (max-width: 480px) {
    height: 70vw;
    position: static;
    transform: none;
    width: 100%;
    max-width: 300px;
  }
`;

export const ProjectInfo = styled.div`
  width: 32%;
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

  @media screen and (min-width: 768px) {
    background: transparent;
    box-shadow: none;
    backdrop-filter: unset;
  }

  @media screen and (max-width: 480px) {
    padding: 0.5rem;
    position: static;
    transform: none;
    width: 100%;
    max-width: 300px;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const ProjectDesc = styled.p`
  font-size: 1rem;
  margin: 1rem 0;
  line-height: 1.7rem;

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
    line-height: 1.2rem;
    margin: 0.7rem 0;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.6rem;
    line-height: 1rem;
  }
`;

export const TechStack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  @media screen and (max-width: 768px) {
    gap: 1rem;
  }

  @media screen and (max-width: 480px) {
    gap: 0.5rem;
    flex-flow: row wrap;
  }
`;

export const TechContainer = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  padding: 4px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 18px;
    height: 18px;
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

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 0.8rem;
  }

  @media screen and (max-width: 760px) {
    flex-direction: column;
    margin-top: 0.8rem;
    gap: 0.8rem;
  }

  @media screen and (max-width: 640px) {
    gap: 0.7rem;
  }
`;

export const LinkButton = styled(Link)`
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const ButtonLiveApp = styled(Button)`
  @media screen and (max-width: 1024px) {
    width: 100%;
    font-size: 1rem;
    padding: 8px;

    @media screen and (max-width: 640px) {
      padding: 4px 8px;
      font-size: 8px;
    }
  }
`;

export const ButtonKnowMore = styled(Button)`
  @media screen and (max-width: 1024px) {
    width: 100%;
    font-size: 1rem;
    padding: 8px;
  }

  @media screen and (max-width: 640px) {
    padding: 4px 8px;
    font-size: 8px;
  }
`;
