import { CardProject, DescriptionDev } from "@/components";
import ImgCalculator from "@/assets/svg/iconCalculadora.svg";
import ImgGame from "@/assets/svg/iconGame.svg";
import ImgPokeApi from "@/assets/svg/iconSitePokeApi.svg";
import ImageChat from "@/assets/svg/iconChat.svg";
import { useRouter } from "next/router";
import * as Styles from "./styles";

export function BodyDevelopers() {
  const router = useRouter();
  return (
    <Styles.Wrapper>
      <DescriptionDev />
      <div className="projetct">
        <div className="contenctProject">
          <CardProject
            title="Pokeapi"
            descricao="Foi o meu primeiro site desenvolvido me basenado em um já existente. Nesse site utilizei o básico de HTML, CSS e JavaScript."
            icon={<ImgPokeApi />}
            urlProject={"https://github.com/Eric-smp/pokeapi"}
          />
          <CardProject
            title="Calculadora"
            descricao="Essa foi a minha primeira calculadora usando HTML, CSS e JavaScript."
            icon={<ImgCalculator />}
            urlProject={"https://github.com/Eric-smp/Calculadora"}
          />
          <CardProject
            title="Secret-Word"
            descricao="Nesse projeto eu montei um jogo onde o usuário deve achar a palavra correta."
            icon={<ImgGame />}
            urlProject={"https://github.com/Eric-smp/Secret-Word"}
          />
          <CardProject
            title="portfólio"
            descricao="O portfólio foi uma das maneiras que eu utilizei para me apresentar, mostrar todos os meus projetos e também as minhas habilidades no mundo da programação."
            icon={<ImgGame />}
            urlProject={"https://github.com/Eric-smp/myPortfolio"}
          />
          <CardProject
            title="College Chat"
            descricao="Um aplicativo de mensagem criado para universidades e escolas, com esse software, os alunos poderão cosultar os professores fora do ambiente escolar, de forma rapida e direta."
            icon={<ImageChat />}
            urlProject={() => router.push("/error")}
            urlBlock
          />
        </div>
      </div>
    </Styles.Wrapper>
  );
}
