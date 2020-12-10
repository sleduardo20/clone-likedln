import Footer from 'components/Footer';
import Header from 'components/Header';
import mockFooter from '../../components/Footer/mock';

interface BaseProps {
  children: React.ReactNode;
}

const Base = ({ children }: BaseProps) => {
  return (
    <div>
      <Header />
      {children}
      <Footer links={mockFooter} />
    </div>
  );
};

export default Base;
