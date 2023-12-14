import { TCard } from "@/types";
import * as Styles from "./styles";

export function CardProject({
  descricao,
  icon,
  title,
  urlProject,
  urlBlock,
}: TCard) {
  return (
    <Styles.Content
      descricao={descricao}
      title={title}
      urlProject={urlProject}
      icon={icon}
      urlBlock={urlBlock}
    >
      <div className="Card">
        <div className="iconCard">
          <span>{icon}</span>
        </div>
        <div className="diviser">
          <span></span>
        </div>
        <div className="titleAndDescricao">
          <h1>{title}</h1>
          <p>{descricao}</p>
          <a href={urlProject} target="_blank">
            Link GitHub!
          </a>
        </div>
      </div>
    </Styles.Content>
  );
}
