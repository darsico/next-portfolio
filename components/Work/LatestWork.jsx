import tw from "twin.macro";
import Section from "../Section";
import {
  WorkArticle,
  WorkContent,
  WorkCTA,
  WorkDescription,
  WorkImage,
  WorkSecondImage,
  WorkSubtitle,
  WorkTitle,
} from "./Work.style";

const LatestWork = () => {
  return (
    <Section id="work">
      <figure>
        <WorkImage
          src="https://raw.githubusercontent.com/darsico/portafolio-dh/3034cfd5814a082e1066c6dfcfe949d962cfcec2/images/fondo-card.jpg"
          alt=""
        />
      </figure>
      <WorkArticle>
        <WorkContent>
          <WorkSubtitle>Pagina Web</WorkSubtitle>
          <WorkTitle>
            Tarjeta personal web <span>→</span>
          </WorkTitle>
          <WorkDescription>
            Realizado utilizando conceptos básicos de HTML, CSS, con ayuda del framework Tailwind.
          </WorkDescription>
          <WorkCTA href="https://darsico.github.io/tarjeta-personal-web/" target="_blank">
            Ver proyecto
          </WorkCTA>
        </WorkContent>
        <WorkSecondImage
          src="https://raw.githubusercontent.com/darsico/portafolio-dh/3034cfd5814a082e1066c6dfcfe949d962cfcec2/images/website-card.png"
          alt=""
        />
      </WorkArticle>
    </Section>
  );
};

export default LatestWork;
