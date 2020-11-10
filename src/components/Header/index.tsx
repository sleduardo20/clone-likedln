import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  FiRss as IconFeed,
  FiUsers as IconNetwork,
  FiBriefcase as IconJobs,
  FiMessageSquare as IconChat,
  FiBell as IconNotices,
  FiMoreHorizontal as IconMenuVertical,
  FiSearch,
  FiArrowUpRight,
} from 'react-icons/fi';

import Logo from '../Logo';
import Avatar from '../Avatar';
import Input from '../Input';

import {
  Container,
  NavPages,
  Option,
  Search,
  Profile,
  Info,
  Outher,
} from './styles';

const Header = () => {
  const router = useRouter();

  return (
    <Container>
      <Logo />
      <NavPages>
        <Option className="active">
          <Link href="/feed" passHref prefetch={false}>
            <a>
              <IconFeed />
              <strong>Feed</strong>
            </a>
          </Link>
        </Option>

        <Option className="">
          <Link href="/network" passHref prefetch={false}>
            <a>
              <IconNetwork />
              <strong>Network</strong>
            </a>
          </Link>
        </Option>

        <Option className="">
          <Link href="/jobs" passHref prefetch={false}>
            <a>
              <IconJobs />
              <strong>Jobs</strong>
            </a>
          </Link>
        </Option>

        <Option className="">
          <Link href="/chat" passHref prefetch={false}>
            <a>
              <IconChat />
              <strong>Chat</strong>
            </a>
          </Link>
        </Option>

        <Option className="">
          <Link href="/notices" passHref prefetch={false}>
            <a>
              <IconNotices />
              <strong>Notices</strong>
            </a>
          </Link>
        </Option>
      </NavPages>
      <Search>
        <Input name="search" placeholder="Search" icon={<FiSearch />} />
      </Search>

      <Profile>
        <Avatar size="small" />
        <Info>
          <strong>Eduardo Sousa Lima</strong>
          <span>
            367 views today
            <p>
              + 32 <FiArrowUpRight />
            </p>
          </span>
        </Info>
      </Profile>
      <Outher>
        <IconMenuVertical />
        <strong>Outher</strong>
      </Outher>
    </Container>
  );
};

export default Header;
