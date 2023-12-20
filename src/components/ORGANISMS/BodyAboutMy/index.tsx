import { AbilityDev } from "@/components";
import * as Styles from "./styles";

export function BodyAboutMy() {
  return (
    <Styles.Wrapper>
      <div className="content">
        <h1>Sobre mim</h1>
        <p>
          Desenvolvedor Front-end com experiencia em React, Next, JavaScript,
          TypeScript, Styled-Components. Fascinado pelo desenvolvimento de
          componentes reutilizáveis, utilizando o método Atomic Design. Também
          possuo experiencia em projetos gerenciados por Metodologias Ágeis.
          Cursando o 5º Semestre de Análise e Desenvolvimento de Sistemas.
        </p>
      </div>
      <h1>Habilidades</h1>

      <AbilityDev />
    </Styles.Wrapper>
  );
}
