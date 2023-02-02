import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Box } from "@components/Box";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Hightlight";
import { Input } from "@components/Input";
import { Container, Content, Icon } from "./styles";
import { groupCreate } from "@storage/group/groupCreate";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const navigate = useNavigation();

  function handleChangeGroup(groupName: string) {
    setGroup(groupName);
  }

  async function handlePlayers() {
    try {
      await groupCreate(group);
      navigate.navigate("players", { group });
    } catch (error) {
      console.log(error);
    }
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
          <Input
            placeholder="Nome da turma"
            onChangeText={(groupName) => handleChangeGroup(groupName)}
          />
          <Button title="Criar" onPress={handlePlayers} />
        </Box>
      </Content>
    </Container>
  );
}
