import styled from "styled-components";
import { motion } from "framer-motion";
import { grayColor, primaryColor } from "../../globalStyles";
import { Form, Field } from "formik";
import { Button } from "../../common/Button";

export const Paragraph = styled.p`
  margin-top: 1rem;
  line-height: 1.7rem;
  text-align: center;
`;

export const FormContact = styled(Form)`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin: 2rem auto 0;
  border-radius: 0.25rem;
  position: relative;
  z-index: 999;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: ${grayColor};
  margin-bottom: 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;
`;

export const Input = styled(Field)`
  border-radius: 0.25rem;
  font-size: 1rem;
  padding: 8px;
  margin-bottom: 0.5rem;
  border: 2px solid ${primaryColor};
  outline: none;
  color: ${primaryColor};
  background-color: #cfdbd530;
  caret-color: ${primaryColor};

  &::placeholder {
    font-size: 1rem;
    color: ${grayColor};
    opacity: 0.8;
  }

  &.input-error {
    border-color: #fc8181;
    caret-color: #fc8181;
  }

  &.input-ok {
    border-color: #42cc79;
    color: #42cc79;
    caret-color: #42cc79;
    background-color: #cfdbd530;
    font-weight: 700;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const TextArea = styled(Input)`
  resize: none;

  &::placeholder {
    font-size: 1rem;
    color: ${grayColor};
    opacity: 0.8;
  }
`;

export const ErrorMsg = styled.div`
  font-size: 0.8rem;
  font-weight: 700;
  color: #fc8181;
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
`;

export const ButtonSubmit = styled(Button)`
  width: 25%;
  margin-top: 2rem;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
