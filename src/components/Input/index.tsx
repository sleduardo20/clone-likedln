import { InputHTMLAttributes } from 'react';
import { Container } from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ReactNode;
}

const Input = ({ name, icon, ...rest }: InputProps) => {
  return (
    <Container name={name} icon={icon}>
      {!!icon && icon}
      <input type="text" {...rest} />
    </Container>
  );
};

export default Input;
