import { useNavigation } from "@react-navigation/native";

import { Container, Logo, BackIcon, BackButton } from "./styles";

import logoImg from "@assets/logo.png";

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    // navigation.goBack(); // Volta para a tela anterior
    // navigation.popToTop(); // volta para o início da aplicação
    navigation.navigate('groups'); // volta para o início da aplicação
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}
