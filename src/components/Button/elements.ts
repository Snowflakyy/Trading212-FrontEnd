import styled, { css } from "styled-components";
import type { ButtonProps } from "./Button";
import { HTMLButtonProps } from "../../types";
import { theme } from "../../styles";
const buttonStyles = {
  primary: css`
    background: #fff;
    color: #14151a;
    box-shadow: 0px 1px 2px 0px rgba(20, 21, 26, 0.05);
    &:hover {
      background: #b8b8b8;
    }
    &:focused {
    }
  `,
  secondary: css`
    background: #14151a;
    color: #fff;
    box-shadow: 0px 1px 2px 0px rgba(20, 21, 26, 0.05);
    &:hover {
      background: rgba(211, 195, 255, 0.8);
    }
  `,
  tertiary: css`
    background: rgba(255, 255, 255, 0.16);
    color: ${theme.colors.textPrimaryDark};
    border: none;
  `,
  ghost: `
  
  `,
  yellow: css`
    background: ${theme.colors.button.primary};
    color: ${theme.colors.button.secondaryPurple};
    border: none;
    &:hover {
      background: ${theme.colors.button.primaryHover};
    }
  `,
  buy: css`
    border: 1px solid ${theme.colors.button.primaryBuy};
    background: ${theme.colors.button.primaryBuy};
    box-shadow: 0px 8px 16px 0px rgba(255, 255, 255, 0.16) inset,
      0px 2px 0px 0px rgba(255, 255, 255, 0.1) inset,
      0px 1px 2px 0px rgba(24, 24, 27, 0.15);
    color: ${theme.colors.textPrimaryLight};
    &:hover,
    &:focus {
      box-shadow: 0px 0px 0px 4px rgba(0, 255, 30, 0.14),
        0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    }
  `,
  sell: css`
    border: 1px solid rgba(24, 24, 27, 0.06);

    background: ${theme.colors.button.primarySell};
  color: ${theme.colors.textPrimaryDark};
    box-shadow: 0px 8px 16px 0px rgba(255, 255, 255, 0.02) inset,
      0px -4px 8px 0px rgba(0, 0, 0, 0.02),
      0px 2px 0px 0px rgba(255, 255, 255, 0.02) inset,
      0px 1px 0.5px 0.05px rgba(24, 24, 27, 0.05);
      &:hover,
    &:focus {
      background:${theme.colors.button.primarySell}50;
    }
  `,
  follow: css`
    background: ${theme.colors.secondaryPurple};
    border: 1px solid var(--linear_stroke_glass, rgba(255, 255, 255, 0.19));
  `,
};
export const Button = styled.button<ButtonProps>(
  ({ variant, disabled }) => css`
    display: inline-flex;
    padding: 6px 10px;
    justify-content: center;
    align-items: center;
    gap: 2px;
    border-radius: 10px;
    border:none;
    cursor: pointer;
    transition: 0.5s ease-in;
    &:hover {
      transition: 0.5s ease-in;
    }
    & > * {
       ${theme.typography.body.small.medium}
    }

    ${variant == "primary" && buttonStyles.primary}
    ${variant == "secondary" && buttonStyles.secondary}
    ${variant == "tertiary" && buttonStyles.tertiary}
    ${variant == "ghost" && buttonStyles.ghost}
    ${variant == "yellow" && buttonStyles.yellow}
        ${variant == "follow" && buttonStyles.follow}
    ${variant == "buy" && buttonStyles.buy}
    ${variant == "sell" && buttonStyles.sell}
  `
);

/*
import styled, { css } from "styled-components";
import type { ButtonProps } from "./Button";

const buttonStyles = {
  primary: css`
    height: 40px;
    font-size: 1.5rem;
    outline: transparent;
    background-color: transparent;
    color: #d9d9d9;
    border: transparent;
    border-bottom: 3px solid #4ee1ad;
    cursor: pointer;
    transition: 200ms ease-in-out;
    margin-top: 20px;

    width: 100%;
    max-width: 200px;

    &:hover {
      color: #4ee1ad;
    }
  `,
  secondary: css`
    height: 40px;
    font-size: 1.5rem;
    outline: transparent;
    background-color: transparent;
    color: #d9d9d9;
    border: transparent;
    border: 3px solid #4ee1ad;
    cursor: pointer;
    transition: 200ms ease-in-out;
    margin-top: 20px;
    border-radius: 10px;

    width: 100%;
    max-width: 200px;

    &:hover {
      color: #4ee1ad;
    }
  `,
};

export const Button = styled.button<ButtonProps>(
  ({ variant }) => css`
    ${variant == "primary" && buttonStyles.primary}
    ${variant == "secondary" && buttonStyles.secondary}
  `
);

*/
