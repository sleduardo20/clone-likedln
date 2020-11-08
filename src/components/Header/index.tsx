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
  return (
    <Container>
      <Logo />
      <NavPages>
        <Option>
          <IconFeed />
          <strong>Feed</strong>
        </Option>
        <Option>
          <IconNetwork />
          <strong>Network</strong>
        </Option>
        <Option>
          <IconJobs />
          <strong>Jobs</strong>
        </Option>
        <Option>
          <IconChat />
          <strong>Chat</strong>
        </Option>
        <Option>
          <IconNotices />
          <strong>Notices</strong>
        </Option>
      </NavPages>
      <Search>
        <Input icon={<FiSearch />} />
      </Search>

      <Profile>
        <Avatar />
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
