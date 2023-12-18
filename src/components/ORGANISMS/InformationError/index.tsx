import { useRouter } from "next/router";
import * as Styles from "./styles";

export function InformationError() {
  const router = useRouter();
  return (
    <Styles.Content>
      <div className="exit">
        <span>
          <h1 onClick={() => router.push("/developers")}>Voltar</h1>
        </span>
      </div>
      <div className="figureError">
        <h1> 404</h1>
      </div>

      <div className="textError">
        <h1>indisponível</h1>
      </div>
    </Styles.Content>
  );
}
