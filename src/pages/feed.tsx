import { Wrapper } from 'components/Wrapper';
import Base from '../templates/Base';

const Home = () => {
  return (
    <Base>
      <Wrapper>
        <div
          style={{
            height: '56rem',
            width: '100%',
            margin: '0 auto',
            background: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '0.8rem',
          }}
        >
          <h1 style={{ fontSize: '5rem' }}>Feeds</h1>
        </div>
      </Wrapper>
    </Base>
  );
};

export default Home;
