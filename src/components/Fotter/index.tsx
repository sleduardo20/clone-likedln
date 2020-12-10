import Link from 'next/link';
import { FiHelpCircle, FiSettings } from 'react-icons/fi';

import Button from '../Button';
import Logo from '../Logo';

import {
  Container,
  Content,
  Navigation,
  FastAcecces,
  Language,
} from './styles';

type LinkProps = {
  title: string;
  link: string;
};

export interface FooterProps {
  links: LinkProps[];
}

const Footer = ({ links }: FooterProps) => {
  return (
    <Container>
      <Content>
        <Logo hasName />

        <Navigation>
          <ul>
            <h3>Navigation</h3>
            {links.map(link => (
              <li key={link.title}>
                <Link href={link.link}>
                  <a>{link.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </Navigation>
        <FastAcecces>
          <h3>Fast access</h3>
          <Button
            color="blue"
            icon={<FiHelpCircle />}
            size="large"
            positionIconLeft
          >
            Questions?
          </Button>
          <Button
            color="blue"
            icon={<FiSettings />}
            size="large"
            positionIconLeft
          >
            Settings
          </Button>
        </FastAcecces>
        <Language>
          <h3>Language</h3>
          <select name="language">
            <option value="eng">english</option>
            <option value="pt-br">portuguese</option>
          </select>
        </Language>
      </Content>
    </Container>
  );
};

export default Footer;
