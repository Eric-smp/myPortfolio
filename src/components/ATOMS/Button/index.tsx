import { TButton } from "@/types";
import * as Styles from "./styles";

export function Button({ label, onClick }: TButton) {
  return (
    <Styles.Content label={label} onClick={onClick}>
      <h2>{label}</h2>
    </Styles.Content>
  );
}
