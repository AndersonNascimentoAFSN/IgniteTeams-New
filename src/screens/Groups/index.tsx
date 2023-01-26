import { Header } from "@components/Header";
import { Highlight } from "@components/Hightlight";

import { Container } from "./styles";

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight 
        title="Turmas"
        subtitle="Jogue com a sua turma"
      />
    </Container>
  );
}
