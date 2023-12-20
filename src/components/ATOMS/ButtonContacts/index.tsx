import { TContacts } from "@/types";
import * as Styles from "./styles";

export function ButtonContacts({ icone, link, title, user }: TContacts) {
  return (
    <Styles.InputStyle icone={icone} link={link} title={title} user={user}>
      <div className="content">
        <div className="textContent">
          <span onClick={() => window.open(link, "_blank")}>{icone}</span>
          <h1 onClick={() => window.open(link, "_blank")}>{title}</h1>
          <h3 onClick={() => window.open(link, "_blank")}>{user}</h3>
        </div>
      </div>
    </Styles.InputStyle>
  );
}
