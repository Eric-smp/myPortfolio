import { ChildrenType } from "@/types";
import * as Styles from "./styles";

export function Container({ children }: ChildrenType) {
  return <Styles.MasterContainer>{children}</Styles.MasterContainer>;
}
