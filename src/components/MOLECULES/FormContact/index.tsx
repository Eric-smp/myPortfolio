import { ButtonContacts, Button } from "@/components";
import ArrowRigth from "@/assets/svg/arrowRigth.svg";
import IconGitHub from "@/assets/svg/iconGitHub.svg";
import IconGmail from "@/assets/svg/iconGmail.svg";
import IconLinkedin from "@/assets/svg/iconLinkedin.svg";
import IconInstagram from "@/assets/svg/iconInstagram.svg";
import * as Styles from "./styles";

export function FormContact() {
  return (
    <Styles.Content>
      <ButtonContacts
        icone={<IconGmail />}
        link={"mailto:e.sousa5980@gmail.com"}
        title={"E-mail"}
        user="e.sousa5980@gmail.com"
      />
      <ButtonContacts
        icone={<IconGitHub />}
        link={"https://github.com/Eric-smp"}
        title={"GitHub"}
        user="@Eric-smp"
      />
      <ButtonContacts
        icone={<IconLinkedin />}
        link={"https://www.linkedin.com/in/eric-smp/"}
        title={"E-mail"}
        user="@Eric-smp"
      />
      <ButtonContacts
        icone={<IconInstagram />}
        link={"https://www.instagram.com/eric__sampaio/"}
        title={"Instagram"}
        user="@EricSampaio"
      />
      {/* <Button
        label="Enviar mensagem"
        insertIcon={true}
        icon={<ArrowRigth />}
        backColor="#8A42DB"
      /> */}
    </Styles.Content>
  );
}
