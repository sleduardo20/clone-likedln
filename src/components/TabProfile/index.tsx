import { useCallback, useState } from 'react';
import { Container, About, Description } from './styles';

export interface TabProfileProps {
  seeMore: boolean;
}

const TabProfile = () => {
  const [more, setMore] = useState(false);

  const handleSeeMore = useCallback(() => {
    setMore(state => !state);
  }, []);
  return (
    <Container>
      <About>
        <h2>About</h2>
        <Description seeMore={more}>
          <span>
            Formado em Sistemas de Informação pela Universidade UNITPAC
            Araguaína TO;
            <br /> Experiência em sistemas ERP;
            <br />
            <br />
            Conhecimento em: <br />
            Html / Css / Javascript / Typescript / ReactJS / SQL <br />
            <br />
            GitHub / APIs REST
            <br />
            <br />
            SQL Server / POSTGRES
            <br />
            <br />
            Report Builder / Power BI
            <br />
            <br />
            Soft skills: pensamento crítico, trabalho em equipe, comunicação,
            empatia.
          </span>
        </Description>

        <h4 onClick={handleSeeMore}>See More</h4>
      </About>
    </Container>
  );
};

export default TabProfile;
