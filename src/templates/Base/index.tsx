import Footer from 'components/Footer';
import Header from 'components/Header';
import { Wrapper } from 'components/Wrapper';

import mockFooter from '../../components/Footer/mock';

interface BaseProps {
  children: React.ReactNode;
}

const Base = ({ children }: BaseProps) => {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer links={mockFooter} />
    </>
  );
};

export default Base;
