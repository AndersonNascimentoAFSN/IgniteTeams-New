import { ReactNode } from "react";
import { Container, ContainerStylesProps } from "./styles";

type BoxProps = ContainerStylesProps & {
  children: ReactNode;
};

export function Box({ children, height }: BoxProps) {
  return <Container height={height}>{children}</Container>;
}
