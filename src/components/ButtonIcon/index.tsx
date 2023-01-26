import { TouchableOpacityProps } from "react-native";

import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof Icon.glyphMap
  type?: ButtonIconTypeStyleProps;
};

export function ButtonIcon({ icon, type = "PRIMARY", ...props }: ButtonIconProps) {
  return (
    <Container {...props}>
      <Icon name={icon} type={type}/>
    </Container>
  );
}
