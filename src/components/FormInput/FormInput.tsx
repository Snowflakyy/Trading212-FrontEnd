import React, { useState } from "react";
import * as S from "./elements";
import { Control, FieldValues, Path, useController } from "react-hook-form";
import { HTMLInputProps } from "../../types";
import { IconProps } from "../Icon";

export interface FormInputProps<T extends FieldValues = any>
  extends Omit<HTMLInputProps, "name" | "defaultValue"> {
  name: Path<T>;
  label?: string;
  //   control: Control<T, any>;
  control?: any;
  variant?: string;
  textarea?: boolean;
  rows?: number; // Add rows for textarea
}
interface IconExtendedProps extends IconProps {
  altpath?: string;
}
type CombinedFormInputProps<T extends FieldValues = any> = FormInputProps<T> &
  IconExtendedProps;

// fill,variant,iconPath,children,stroke,viewBox,strokeOpacity
export const FormInput = <T extends FieldValues = any>({
  placeholder,
  variant,
  name,
  textarea,
  rows,
  path,
  altpath,
  fill,
  viewBox = "0 0 20 20", // Default value for viewBox
  stroke,
  strokeOpacity,
  type,
  ...props
}: CombinedFormInputProps<T>) => {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const InputComponent = textarea ? "textarea" : "input";

  const inputType =
    type === "password" && !isPasswordVisible ? "password" : "text";

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <S.FormInputContainer>
      <S.FormInput
        {...props}
        as={InputComponent}
        variant="alert"
        placeholder={placeholder}

        rows={textarea ? rows : undefined}
        type={inputType}
      />
      {type === "password" && (
        <S.Button
          onClick={handleTogglePasswordVisibility}
          variant="tertiary"
          iconPath={isPasswordVisible ? altpath : path}
          viewBox={viewBox}
          fill="none"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
        ></S.Button>
      )}
    </S.FormInputContainer>
  );
  
};
// import React, { useState } from "react";
// import * as S from "./elements";
// import { Control, FieldValues, Path, useController } from "react-hook-form";
// import { HTMLInputProps } from "../../types";
// import { IconProps } from "../Icon";

// export interface FormInputProps<T extends FieldValues = any>
//   extends Omit<HTMLInputProps, "name" | "defaultValue"> {
//   name: Path<T>;
//   label?: string;
//   //   control: Control<T, any>;
//   control: any;
//   variant?: string;
//   textarea?: boolean;
//   rows?: number; // Add rows for textarea
// }
// interface IconExtendedProps extends IconProps {
//   altpath?: string;
// }
// type CombinedFormInputProps<T extends FieldValues = any> = FormInputProps<T> &
//   IconExtendedProps;

// // fill,variant,iconPath,children,stroke,viewBox,strokeOpacity
// export const FormInput = <T extends FieldValues = any>({
//   placeholder,
//   variant,
//   name,
//   control,
//   textarea,
//   rows,
//   path,
//   altpath,
//   fill,
//   viewBox = "0 0 20 20", // Default value for viewBox
//   stroke,
//   strokeOpacity,
//   type,
//   ...props
// }: CombinedFormInputProps<T>) => {
//   const {
//     field: { onChange, onBlur, value, ref },
//     fieldState: { invalid, isTouched, isDirty, error },
//   } = useController({
//     name,
//     control,
//     rules: { required: true },
//     defaultValue: "" as any,
//   });
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);

//   const InputComponent = textarea ? "textarea" : "input";

//   const inputType =
//     type === "password" && !isPasswordVisible ? "password" : "text";

//   const handleTogglePasswordVisibility = () => {
//     setIsPasswordVisible((prev) => !prev);
//   };

//   return (
//     <S.FormInputContainer>
//       <S.FormInput
//         {...props}
//         as={InputComponent}
//         variant="alert"
//         placeholder={placeholder}
//         onChange={onChange}
//         onBlur={onBlur}
//         value={value}
//         ref={ref}
//         rows={textarea ? rows : undefined}
//         type={inputType}
//       />
//       {type === "password" && (
//         <S.Button
//           onClick={handleTogglePasswordVisibility}
//           variant="tertiary"
//           iconPath={isPasswordVisible ? altpath : path}
//           viewBox={viewBox}
//           fill="none"
//           stroke={stroke}
//           strokeOpacity={strokeOpacity}
//         ></S.Button>
//       )}
//     </S.FormInputContainer>
//   );
//   // if (error) {
//   //   return (
//   //     <>
//   //       <S.FormInput
//   //         {...props}
//   //         as={InputComponent}
//   //         variant="alert"
//   //         placeholder={placeholder}
//   //         onChange={onChange}
//   //         onBlur={onBlur}
//   //         value={value}
//   //         ref={ref}
//   //         rows={textarea ? rows : undefined} // Only include rows for textarea
//   //       />
//   //     </>
//   //   );
//   // }
//   // return (
//   //   <>
//   //     <S.FormInput
//   //       {...props}
//   //       as={InputComponent}
//   //       placeholder={placeholder}
//   //       onChange={onChange}
//   //       onBlur={onBlur}
//   //       value={value}
//   //       ref={ref}
//   //       rows={textarea ? rows : undefined} // Only include rows for textarea
//   //     />
//   //   </>
//   //);
// };

