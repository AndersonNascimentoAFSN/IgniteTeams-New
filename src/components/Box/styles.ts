import styled from "styled-components/native";

export type ContainerStylesProps = {
  height?: number
}

export const Container = styled.View<ContainerStylesProps>`
  height: ${({height}) => height ? height : 0}px;
  justify-content: space-between;
`;
