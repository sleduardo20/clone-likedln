import Footer from 'components/Footer';
import Header from 'components/Header';
import mockFooter from '../../components/Footer/mock';

import { Container } from './styles';

interface BaseProps {
  children: React.ReactNode;
}

const Base = ({ children }: BaseProps) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer links={mockFooter} />
    </Container>
  );
};

export default Base;
