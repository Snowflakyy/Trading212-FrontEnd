import * as S from "./elements";
import {
  HTMLHeadingPropsH1,
  HTMLHeadingPropsH3,
  HTMLHeadingPropsH4,
  HTMLHeadingPropsBody,
  HTMLSpanProps,
} from "../../types";
export interface H1Props extends HTMLHeadingPropsH1 {
  variant?: "bold" | "medium";
}

export const H1Bd = ({ variant = "bold", ...props }: H1Props) => {
  return <S.Heading1 {...props} variant={variant} />;
};
export const H1Md = ({ variant = "medium", ...props }: H1Props) => {
  return <S.Heading1 {...props} variant={variant} />;
};

export interface H3Props extends HTMLHeadingPropsH3 {
  variant?: "bold" | "medium";
}

export const H3Bd = ({ variant = "bold", ...props }: H3Props) => {
  return <S.Heading3 {...props} variant={variant} />;
};

export const H3Md = ({ variant = "medium", ...props }: H3Props) => {
  return <S.Heading3 {...props} variant={variant} />;
};

export interface H4Props extends HTMLHeadingPropsH4 {
  variant?: "large" | "medium" | "small";
}

export const H4Lg = ({ variant = "large", ...props }: H4Props) => {
  return <S.Heading4 {...props} variant={variant} />;
};
export const H4Md = ({ variant = "medium", ...props }: H4Props) => {
  return <S.Heading4 {...props} variant={variant} />;
};
export const H4Sm = ({ variant = "small", ...props }: H4Props) => {
  return <S.Heading4 {...props} variant={variant} />;
};

export interface BodyProps extends HTMLHeadingPropsBody {
  variant: "large" | "medium" | "small" | "button";
  subvariant: "none" | "medium" | "regular" | "semibold" | "regular2";
  error?: boolean;
}
export const BodyLg = ({
  variant = "large",
  subvariant = "none",
  ...props
}: BodyProps) => {
  return <S.Body {...props} variant={variant} subvariant={subvariant} />;
};
BodyLg.defaultProps = {
  variant: "large",
  subvariant: "",
};

export const BodyBtn = ({
  variant = "button",
  subvariant = "none",
  ...props
}: BodyProps) => {
  return <S.Body {...props} variant={variant} subvariant={subvariant} />;
};
BodyLg.defaultProps = {
  variant: "button",
  subvariant: "none",
};

export const BodyMdMd = ({
  variant = "medium",
  subvariant = "medium",
  ...props
}: BodyProps) => {
  return <S.Body {...props} variant={variant} subvariant={subvariant} />;
};
BodyMdMd.defaultProps = {
  variant: "medium",
  subvariant: "medium",
};
export const BodyMdRg = ({
  variant = "medium",
  subvariant = "regular",
  ...props
}: BodyProps) => {
  return <S.Body {...props} variant={variant} subvariant={subvariant} />;
};
BodyMdRg.defaultProps = {
  variant: "medium",
  subvariant: "regular",
};
export const BodyMdSb = ({
  variant = "medium",
  subvariant = "regular2",
  ...props
}: BodyProps) => {
  return <S.Body {...props} variant={variant} subvariant={subvariant} />;
};
BodyMdSb.defaultProps = {
  variant: "medium",
  subvariant: "regular2",
};

export const BodySmRg = ({
  variant = "small",
  subvariant = "regular",
  ...props
}: BodyProps) => {
  return <S.Body {...props} variant={variant} subvariant={subvariant} />;
};
BodySmRg.defaultProps = {
  variant: "small",
  subvariant: "regular",
};
export const BodySmMd = ({
  variant = "small",
  subvariant = "medium",
  error = false,
  ...props
}: BodyProps) => {
  return (
    <S.Body
      {...props}
      variant={variant}
      error={error}
      subvariant={subvariant}
    />
  );
};
BodySmMd.defaultProps = {
  variant: "small",
  subvariant: "medium",
  error: false,
};

export interface SpanProps extends HTMLSpanProps {
  gradient: "none" | "purpleToBlue";
}

export const SpanElement = ({ gradient = "none", ...props }: SpanProps) => {
  return <S.Span {...props} gradient={gradient} />;
};

// export interface BodyMdProps extends BodyProps{
//   subvariant : "medium" | "regular" | "semibold"
// }
// export const BodyMdMd = ({variant="medium", subvariant="medium",...props}:BodyMdProps)=>
// {
//   return <S.BodyMd {...props} variant={variant} subvariant={subvariant}/>
// }

// export const BodyMdRg = ({variant="medium", subvariant="regular",...props}:BodyMdProps)=>
//   {
//     return <S.BodyMd {...props} variant={variant} subvariant={subvariant}/>
//   }

//   export const BodyMdSb = ({variant="medium", subvariant="semibold",...props}:BodyMdProps)=>
//     {
//       return <S.BodyMd {...props} variant={variant} subvariant={subvariant}/>
//     }

// export interface H5Props extends HTMLHeadingProps {
//   variant?: "regular";
// }

// export const H5 = ({ variant = "regular", ...props }: H5Props) => {
//   return <S.Heading5 {...props} variant={variant} />;
// };

// export interface H6Props extends HTMLHeadingProps {
//   variant?: "regular";
// }

// export const H6 = ({ variant = "regular", ...props }: H6Props) => {
//   return <S.Heading6 {...props} variant={variant} />;
// };

// export interface ParagraphProps extends HTMLHeadingProps {
//   variant?: "regular";
// }

// export const Paragraph = ({
//   variant = "regular",
//   ...props
// }: ParagraphProps) => {
//   return <S.Paragraph {...props} variant={variant} />;
// };

export const Typography = {
  H1Bd,
  H1Md,
  H3Bd,
  H4Md,
  BodyLg,
  BodyMdMd,
  BodyMdRg,
  BodyMdSb,
};
