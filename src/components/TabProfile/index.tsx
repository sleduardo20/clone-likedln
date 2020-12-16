import Avatar from 'components/Avatar';
import { useCallback, useState } from 'react';

import {
  Container,
  About,
  DescriptionAbout,
  Projects,
  Cards,
  Card,
  Skills,
  CardsSkills,
  CardSkills,
  Experience,
  List,
  Item,
  DescriptionItem,
  Education,
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
        <DescriptionAbout seeMore={more}>
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
        </DescriptionAbout>

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
      <Experience>
        <h2>Experience</h2>
        <List>
          <Item>
            <Avatar
              size="small"
              src="https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20(1%20of%201)-5.jpg?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <DescriptionItem>
              <strong>Analista de Relatório</strong>
              <span>
                Rad Informática Consultoria E Assessoria
                <strong>2 yrs 11mos</strong>
              </span>

              <p>
                Desenvolvimento de relatórios gerenciais e dashboards, em banco
                de dados microsoft sql server utilizando as ferramentas Report
                Builder e Power BI.
              </p>
            </DescriptionItem>
          </Item>
          <Item>
            <Avatar
              size="small"
              src="https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20(1%20of%201)-5.jpg?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <DescriptionItem>
              <strong>Analista de Suporte</strong>
              <span>
                Rad Informática Consultoria E Assessoria
                <strong>6 yrs 1mos</strong>
              </span>

              <p>
                Atendimento ao cliente com suporte em sistema ERP presencial e
                remoto, treinamento de novos usuários, monitoramento de
                solicitações e dúvidas do sistema, melhoria contínua buscando
                soluções e informando com setor de desenvolvimento para
                alterações.
              </p>
            </DescriptionItem>
          </Item>
        </List>
      </Experience>
      <Education>
        <h2>Education</h2>

        <List>
          <Item>
            <Avatar
              src="https://www.unitpac.com.br/imagens/noticias/confira-os-editais-de-monitoria-do-itpac-noticia.jpg"
              size="small"
            />
            <DescriptionItem>
              <strong>
                Instituto Tocantinense Presidente Antônio Carlos (ITPAC)
              </strong>
              <span>Sistemas da Informação</span>
              <strong>2010 - 2014</strong>
            </DescriptionItem>
          </Item>
          <Item>
            <Avatar
              src="https://pbs.twimg.com/profile_images/1291682473592659968/sEorc6oh_400x400.jpg"
              size="small"
            />
            <DescriptionItem>
              <strong>Rocketseat</strong>
              <span>Bootcamp GoStack</span>
              <strong>2020 - 2021</strong>
              <p>
                O GoStack é um treinamento intensivo, no formato de Bootcamp. No
                GoStack o aluno vai a fundo nas tecnologias NodeJS, ReactJS e
                React Native, e todo o ecossistema ao redor dessas ferramentas,
                do zero ao deploy. Incluindo testes automatizados, integração
                contínua, publicação nas stores, e todas as bibliotecas e
                frameworks importantes.
              </p>
            </DescriptionItem>
          </Item>
        </List>
      </Education>
    </Container>
  );
};

export default TabProfile;
