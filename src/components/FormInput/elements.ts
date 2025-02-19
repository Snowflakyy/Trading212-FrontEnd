import styled, { css } from "styled-components";
import { FormInputProps } from "./FormInput";
import { Icon as _icon } from "../Icon";
import { theme } from "../../styles";
import { Button as _button } from "../Button";

export const FormInputContainer = styled.div(
  () => css`
    position: relative;
    padding: ${theme.paddings.padding2} 0px;
    align-items: center;
    border-bottom: 1px solid #bcbcbc;
    display: flex;
  `
);
export const Icon = styled(_icon)(() => css``);
export const FormInput = styled.input<{ variant?: string }>(
  ({ variant }) => css`
    display: flex;
    padding: ${theme.paddings.padding2};
    align-items: flex-end;
    gap: 4px;
    border-radius: 12px;
    border: none;
    outline: none;
    width: 95%;
    box-shadow: 0px 1px 2px 0px rgba(20, 21, 26, 0.05);
    background: transparent;
    color: ${theme.colors.text};
    ${theme.typography.body.medium.large};
    &::placeholder {
      color: ${theme.colors.textSecondary};
      ${theme.typography.body.fe};
      opacity: 0.5;
    }
    &:hover,
    &:focus {
      border: none;
      outline: none;
      ${variant === "alert" && css``}
    }

    ${variant === "alert" && css``}
  `
);

export const Button = styled(_button)(() => css``);
