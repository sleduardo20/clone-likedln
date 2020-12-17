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

import Link from 'next/link';
import { NavLink } from '../OptionMenu';
import Logo from '../Logo';
import Avatar from '../Avatar';
import Input from '../Input';

import {
  Container,
  Content,
  NavPages,
  Search,
  Profile,
  Info,
  Outher,
} from './styles';

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo />

        <NavPages>
          <NavLink href="/feed" linkName="Feed" icon={<IconFeed />} />
          <NavLink href="/network" linkName="Network" icon={<IconNetwork />} />
          <NavLink href="/jobs" linkName="Jobs" icon={<IconJobs />} />
          <NavLink href="/chat" linkName="Chat" icon={<IconChat />} />
          <NavLink href="/notices" linkName="Notices" icon={<IconNotices />} />
        </NavPages>
        <Search>
          <Input name="search" placeholder="Search" icon={<FiSearch />} />
        </Search>

        <Profile>
          <Avatar
            src="https://avatars3.githubusercontent.com/u/56615577?s=460&u=9bd6fb040ce1183ec389d2d95eeb216074713314&v=4"
            size="small"
          />
          <Info>
            <strong>
              <Link href="/profile">
                <a>Eduardo Sousa Lima</a>
              </Link>
            </strong>
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
      </Content>
    </Container>
  );
};

export default Header;
