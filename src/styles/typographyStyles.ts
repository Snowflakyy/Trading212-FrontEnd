import { css } from "styled-components";
import { TypographyStylesProps } from "./types";

export const typography: TypographyStylesProps = {
  h1: {
    bold: css`
      font-feature-settings: "cv12" on, "cv13" on;
      font-size: 70px;
      font-style: normal;
      font-weight: 700;
      line-height: 100%;
      letter-spacing: -2.1px;
    `,
    medium: css`
      font-feature-settings: "cv12" on, "cv13" on;
      /* Headline/H1 Medium */
      font-size: 70px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%; /* 70px */
      letter-spacing: -2.1px;
    `,
  },
  h3: {
    bold: css`
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: 100%;
      letter-spacing: -2.1px;
    `,
    medium: css`
      font-family: Play;
      font-size: 34px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.3px;
    `,
  },
  h4: {
    large: css`
      font-family: Play;
      font-size: 28px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.3px;
    `,
    medium: css`
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 32px; /* 133.333% */
      letter-spacing: -0.48px;
    `,
    small: css`
      font-family: Play;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.3px;
    `,
  },

  body: {
    large: css`
      font-family: Inter;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.3px;
 
    `,
    button: css`
      font-family: Inter;
      font-size: 17px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -0.3px;
    `,

    medium: {
      medium: css`
        font-family: Inter;
        font-size: 17px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: -0.3px;
      `,
      regular: css`
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.3px;
      `,
      regular2: css`
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.3px;
      `,
    },
    small: {
      regular: css`
        font-family: Inter;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.3px;
      `,
      medium: css`
        font-family: Inter;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: -0.1px;
      `,
    },
  },
};

//const StyledH1Medium = styled.h1`${typography.h1.medium}`;
