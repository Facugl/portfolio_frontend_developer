import styled from "styled-components";
import { grayColor, primaryColor } from "../../globalStyles";

export const ExperienceWrapper = styled.div`
  margin-top: 2.5rem;

  @media screen and (max-width: 480px) {
    margin: 2rem 2rem 0;
  }
`;

export const Label = styled.h3`
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${primaryColor};
  margin-bottom: 1rem;
`;

export const Card = styled.article`
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.02);

  @media screen and (max-width: 480px) {
    padding: 1.25rem 1rem;
  }
`;

export const Role = styled.h4`
  font-size: 1.15rem;
  color: #fff;

  span {
    color: ${primaryColor};
  }
`;

export const Meta = styled.p`
  font-size: 0.85rem;
  margin-top: 0.25rem;
  opacity: 0.8;
`;

export const Highlights = styled.ul`
  list-style: none;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  li {
    position: relative;
    padding-left: 1rem;
    color: ${grayColor};
    font-size: 0.95rem;
    line-height: 1.5rem;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.6rem;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${primaryColor};
    }
  }
`;

export const Tags = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  li {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: ${primaryColor};
    padding: 0.3rem 0.7rem;
    border: 1px solid rgba(62, 166, 255, 0.4);
    border-radius: 999px;
  }
`;
