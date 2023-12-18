import { TButton } from "@/types";
import * as Styles from "./styles";

export function Button({
  label,
  onClick,
  backColor,
  backColorHover,
  icon,
  insertIcon,
}: TButton) {
  return (
    <Styles.Content
      label={label}
      onClick={onClick}
      backColor={backColor}
      icon={icon}
      insertIcon={insertIcon}
    >
      <h2>{label}</h2>
      <span>{icon}</span>
    </Styles.Content>
  );
}
