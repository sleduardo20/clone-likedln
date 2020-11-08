import { InputHTMLAttributes } from 'react';
import { Container } from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input = ({ icon, ...rest }: InputProps) => {
  return (
    <Container>
      {!!icon && icon}
      <input type="text" />
    </Container>
  );
};

export default Input;
