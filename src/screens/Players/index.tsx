import { useState } from "react";
import { FlatList } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Hightlight";
import { Input } from "@components/Input";
import { PlayerCard } from "@components/PlayerCard";
import { Button } from "@components/Button";
import { ListEmpty } from "@components/ListEmpty";

import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { groupRemove } from "@storage/group/groupRemove";

type RouteParams = {
  group: string;
};

export function Players() {
  const [player, setPlayer] = useState("");
  const [players, setPlayers] = useState<string[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<string>("");

  const route = useRoute();

  const { group } = route.params as RouteParams;

  const { navigate } = useNavigation();

  function handleAddPlayer() {
    const playerAlreadyAdded = players.find(
      (playerName) => playerName === player
    );

    if (playerAlreadyAdded) return;

    setPlayers((players) => [player, ...players]);

    setPlayer("");
  }

  function handleSelectTeam(teamName: string) {
    setSelectedTeam(teamName);
  }

  function handleRemovePlayer(playerName: string) {
    setPlayers((players) => players.filter((player) => player !== playerName));
  }

  async function handleRemoveGroup(groupName: string) {
    await groupRemove(groupName);
    navigate("groups");
  }

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="adicione a galera e separe os times" />

      <Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
          value={player}
          onChangeText={(text) => setPlayer(text)}
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item.toLowerCase() === selectedTeam.toLowerCase()}
              onPress={() => handleSelectTeam(item)}
            />
          )}
          horizontal
        />
        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={handleRemovePlayer} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="N??o h?? pessoas nesse time." />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button
        title="Remover turma"
        type="SECONDARY"
        onPress={() => handleRemoveGroup(group)}
      />
    </Container>
  );
}
