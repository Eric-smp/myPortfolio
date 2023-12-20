import { TextContact, FormContact } from "@/components";

import * as Styles from "./styles";

export function BodyContacts() {
  return (
    <Styles.Wrapper>
      <div className="Content">
        <div className="textBody">
          <TextContact />
        </div>
        <div className="formContent">
          <FormContact />
        </div>
      </div>
    </Styles.Wrapper>
  );
}
