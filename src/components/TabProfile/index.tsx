import Avatar from 'components/Avatar';
import { useCallback, useState } from 'react';
import {
  Container,
  About,
  Description,
  Projects,
  Cards,
  Card,
  Skills,
  CardsSkills,
  CardSkills,
} from './styles';

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
      <Projects>
        <h2>Projects</h2>
        <Cards>
          <Card>
            <img
              src="https://static.collectui.com/shots/4414691/foody-web-landing-page-design-large"
              alt=" Landing Page by Madhu"
            />
            <p>Zara redesign concept</p>
            <span>UX/UI design, 15.07.2020</span>
          </Card>
          <Card>
            <img
              src="https://static.collectui.com/shots/4028202/credit-card-checkout-medium"
              alt=" Landing Page by Madhu"
            />
            <p>SCTHON event brand identity</p>
            <span>Graphic design, 03.31.2020</span>
          </Card>
          <Card>
            <img
              src="https://static.collectui.com/shots/4405774/mvmt-watches-medium"
              alt=" Landing Page by Madhu"
            />
            <p>Drozd. Brand identity. 2020</p>
            <span>Graphic design, 03.04.2020</span>
          </Card>
        </Cards>
        <h4 onClick={handleSeeMore}>Show all</h4>
      </Projects>
      <Skills>
        <h2>Skills & Endoresments</h2>
        <CardsSkills>
          <CardSkills>
            <strong>
              Front End <span>6</span>
            </strong>
          </CardSkills>
          <CardSkills>
            <strong>
              ReactJS <span>7</span>
            </strong>
          </CardSkills>
          <CardSkills>
            <strong>
              Communication <span>9</span>
            </strong>
          </CardSkills>
        </CardsSkills>
        <h4 onClick={handleSeeMore}>Show all</h4>
      </Skills>
    </Container>
  );
};

export default TabProfile;
