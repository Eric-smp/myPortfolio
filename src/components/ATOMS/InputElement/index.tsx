import { Button } from "../Button";
import * as Styles from "./styles";

export function InputElement() {
  return (
    <Styles.InputStyle>
      <input type="text" name="" id="" placeholder="Nome" />
      <input type="text" name="" id="" placeholder="E-mail" />
      <textarea placeholder="Deixe sua mensagem" />
    </Styles.InputStyle>
  );
}
