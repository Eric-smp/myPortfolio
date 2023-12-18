import { InputElement, Button } from "@/components";
import ArrowRigth from "@/assets/svg/arrowRigth.svg";
import * as Styles from "./styles";

export function FormContact() {
  return (
    <Styles.Content>
      <InputElement />
      <Button
        label="Enviar mensagem"
        insertIcon={true}
        icon={<ArrowRigth />}
        backColor="#8A42DB"
      />
    </Styles.Content>
  );
}
