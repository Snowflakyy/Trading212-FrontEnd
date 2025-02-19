import { ReactNode } from "react";
import { BodyMdMd } from "../Typography";
import * as S from "./elements"
interface NavLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
    to: string | object;
    activeClassName?: string;
    activeStyle?: React.CSSProperties;
    exact?: boolean;
    isActive?: (match:string | null , location: Location) => boolean;
    end?: boolean;
}
export const Link = ({children,to,target,...props}:NavLinkProps)=>{
    <S.Link to={to} target={target} {...props}>
       {children} 
    </S.Link>
}