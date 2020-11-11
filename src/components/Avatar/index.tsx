import { Container } from './styles';

export interface AvatarProps {
  size?: 'small' | 'medium' | 'large';
  src: string;
}

const Avatar = ({
  size = 'large',
  src = 'https://avatars3.githubusercontent.com/u/56615577?s=460&u=9bd6fb040ce1183ec389d2d95eeb216074713314&v=4',
}: AvatarProps) => {
  return (
    <Container size={size}>
      <img src={src} alt="Profile" />
    </Container>
  );
};

export default Avatar;
