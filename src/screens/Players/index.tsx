import { Header } from "@components/Header";
import { Highlight } from "@components/Hightlight";
import { Container } from "./styles";

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      
      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separa os times"
      />
    </Container>
  );
}
