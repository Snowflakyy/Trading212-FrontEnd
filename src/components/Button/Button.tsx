import React, { forwardRef, ForwardedRef, ReactElement, Children } from "react";
import * as S from "./elements";
import { Icon } from "../Icon";
import { HTMLButtonProps } from "../../types";
export interface ButtonProps extends HTMLButtonProps {
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "ghost"
    | "yellow"
    | "follow"
    | "buy"
    | "sell";
  iconPath?: "none" | string;
  fill?: "none" | string;
  stroke?: "none" | string;
  strokeOpacity?: number;
  strokeWidth?: number;
  viewBox?: string;
}

// export const Button = (isGame : boolean,children : ReactElement) => {

//   return (
//     <S.Button>{children}</S.Button>
//   )
// }
//BodyMDMD

export const Button = forwardRef(
  (
    {
      fill,
      variant,
      iconPath,
      children,
      stroke,
      viewBox,
      strokeOpacity,
      strokeWidth,
      disabled,
      ...props
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <S.Button {...props} variant={variant} disabled={disabled} ref={ref}>
        {children}{" "}
        {iconPath != null && (
          <Icon
            path={iconPath}
            strokeWidth={strokeWidth}
            viewBox={viewBox}
            stroke={stroke}
            strokeOpacity={strokeOpacity}
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
          />
        )}
      </S.Button>
    );
  }
);