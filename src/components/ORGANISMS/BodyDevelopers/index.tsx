import { CardProject } from "@/components";
import ImgCalculator from "@/assets/svg/iconCalculadora.svg";
import * as Styles from "./styles";

export function BodyDevelopers() {
  return (
    <Styles.Wrapper>
      <h1>Meus desenvolvimentos</h1>
      <div className="projetct">
        <div className="contenctProject">
          <CardProject
            descricao="Essa foi a minha primeira calculadora usando HTML, CSS e JavaScript"
            icon={<ImgCalculator />}
            title="Calculadora"
            urlProject={"https://github.com/Eric-smp/Calculadora"}
          />
        </div>
      </div>
    </Styles.Wrapper>
  );
}
