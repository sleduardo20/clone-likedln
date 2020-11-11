import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from 'react';

import { Container, ContainerProps } from './styles';

export type ButtonSizes = 'small' | 'medium' | 'large';

type ButtonTypes =
  | ButtonHTMLAttributes<HTMLButtonElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = {
  size: ButtonSizes;
  label?: string;
  color: 'white' | 'blue';
  border?: boolean;
  icon?: React.ReactNode;
  as?: React.ElementType;
} & ButtonTypes;

const Button: React.ForwardRefRenderFunction<ContainerProps, ButtonProps> = ({
  size,
  icon,
  color,
  border,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <Container size={size} color={color} border={border} {...rest}>
      {icon}
      {!!children && <small>{children}</small>}
    </Container>
  );
};

export default forwardRef(Button);
