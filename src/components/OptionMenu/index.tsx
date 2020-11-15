import { useRouter } from 'next/router';
import Link from 'next/link';
import { Option } from './styles';

const defaultProps = {
  activeClassName: 'active',
};

type Props = {
  href: string;
  linkName: string;
  activeClassName?: string;
} & typeof defaultProps;

export const NavLink = ({ href, linkName, activeClassName }: Props) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <Option className={router.pathname === href ? activeClassName : ''}>
        {linkName}
      </Option>
    </Link>
  );
};

NavLink.defaultProps = defaultProps;
