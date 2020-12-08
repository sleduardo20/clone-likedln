import { useRouter } from 'next/router';
import Link from 'next/link';
import { Option } from './styles';

interface NavLinkProps {
  href: string;
  linkName: string;
  icon?: React.ReactNode;
  activeClassName?: string;
}

export const NavLink = ({
  href,
  linkName,
  activeClassName = 'active',
  icon,
}: NavLinkProps) => {
  const router = useRouter();

  return (
    <Link href={href} passHref prefetch={false}>
      <Option className={router.pathname === href ? activeClassName : ''}>
        {icon}
        <strong>{linkName}</strong>
      </Option>
    </Link>
  );
};
