import { useNavigation } from "@react-navigation/native";

import { Box } from "@components/Box";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Hightlight";
import { Input } from "@components/Input";
import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  const navigate = useNavigation();

  function handlePlayers() {
    navigate.navigate("players", { group: "Rocket" });
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova Turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Box height={132}>
          <Input placeholder="Nome da turma" />
          <Button title="Criar" onPress={handlePlayers} />
        </Box>
      </Content>
    </Container>
  );
}
