import styled from "styled-components";
import { grayColor, primaryColor } from "../../globalStyles";
import { Form, Field } from "formik";
import { motion } from "framer-motion";
import { Button } from "../../common/Button";

const errorColor = "#fc8181";

export const FormContact = styled(Form)`
  width: 100%;
  max-width: 560px;
  margin: 2.5rem auto 0;
  position: relative;
  z-index: 999;
`;

export const FormCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.02);

  @media screen and (max-width: 480px) {
    padding: 1.25rem 1rem;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25rem;
`;

export const Label = styled.label`
  color: ${grayColor};
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
`;

export const Input = styled(Field)`
  width: 100%;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  color: #fff;
  caret-color: ${primaryColor};
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 6px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: ${grayColor};
    opacity: 0.5;
  }

  &:focus {
    border-color: ${primaryColor};
    box-shadow: 0 0 0 3px rgba(62, 166, 255, 0.15);
  }

  &.input-error {
    border-color: ${errorColor};
    caret-color: ${errorColor};
  }

  &.input-error:focus {
    box-shadow: 0 0 0 3px rgba(252, 129, 129, 0.15);
  }
`;

export const TextArea = styled(Input)`
  resize: none;
`;

export const ErrorMsg = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${errorColor};
  margin-top: 0.4rem;
`;

export const ButtonSubmit = styled(Button)`
  margin: 0.5rem auto 0;
  min-width: 200px;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
