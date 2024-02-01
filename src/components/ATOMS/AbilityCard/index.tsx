import { TAbilit } from "@/types";
import * as Styles from "./styles";

export function AbilityCard({ icon, language }: TAbilit) {
  return (
    <Styles.Card>
      <div className="Content">
        <h3>{language}</h3>
        <span>{icon}</span>
      </div>
    </Styles.Card>
  );
}
