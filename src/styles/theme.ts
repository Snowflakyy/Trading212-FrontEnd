import { DefaultTheme } from "styled-components";
import { typography } from "./typographyStyles";
import { colors } from "./colorStyles";
import { breakpoints } from "./breakpoints";
import { paddings } from "./paddings";
import { Breakpoints, Colors, Paddings } from "./types";

interface Theme extends DefaultTheme {
    colors: Colors;
    typography: any; // Replace 'any' with the actual type of typography if available
    breakpoints: Breakpoints;
    paddings: Paddings;
    gradients:any;
  }
export const theme: Theme = {
    colors,
  typography,
  gradients: {
    purpleToBlue: `background: linear-gradient(90deg, #F67BF9 0%, #B57BEF 50%, #9EC5FF 100%);
    background-clip: text;-webkit-background-clip: text;
    -webkit-text-fill-color: transparent;font-feature-settings: 'cv12' on, 'cv13' on;`,
  },
  breakpoints,
  paddings
};
