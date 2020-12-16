import { FiUpload, FiEdit, FiMoreVertical, FiNavigation } from 'react-icons/fi';
import Link from 'next/link';

import Button from 'components/Button';
import { Wrapper } from 'components/Wrapper';
import Avatar from 'components/Avatar';
import TabContent from 'components/Tabs';
import TabProfile from 'components/TabProfile';
import TabActivity from 'components/TabActivity';
import TabArticles from 'components/TabArticles';

import {
  ContentLeft,
  ProfileInfo,
  Image,
  WrapperButtons,
  ContentProfile,
  Location,
  Description,
  GroupButtons,
  Tabs,
  ContentRight,
  Dashboard,
  Visitors,
  VisitorInfo,
} from './styles';

const Profile = () => {
  return (
    <Wrapper>
      <ContentLeft>
        <ProfileInfo>
          <WrapperButtons>
            <Button color="white" size="small" icon={<FiUpload />} />

            <div>
              <Button color="white" size="medium" icon={<FiEdit />}>
                Edit Profile
              </Button>
              <Button color="white" size="small" icon={<FiMoreVertical />} />
            </div>
          </WrapperButtons>

          <Image src="https://images.unsplash.com/photo-1602526215099-19d4d14797d6?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />

          <Avatar
            size="large"
            src="https://avatars3.githubusercontent.com/u/56615577?s=460&u=9bd6fb040ce1183ec389d2d95eeb216074713314&v=4"
          />
          <ContentProfile>
            <h2>
              <p>
                Eduardo Sousa Lima
                <img src="/img/logoPremium.svg" alt="logo Premium" />
              </p>
              <Location>
                <FiNavigation />
                <p> Blumenau, Santa Catarina</p>
              </Location>
            </h2>

            <Description>
              Front End Developer ReactJS, Systems Analyst
            </Description>
            <GroupButtons>
              <Button color="blue" size="large">
                Contact Info
              </Button>
              <Button size="large" border>
                1,043 Connections
              </Button>
            </GroupButtons>
          </ContentProfile>
        </ProfileInfo>
        <Tabs>
          <TabContent
            title01="Profile"
            title02="Activity & Interests"
            title03="Articles"
            content01={<TabProfile />}
            content02={<TabActivity />}
            content03={<TabArticles />}
          />
        </Tabs>
      </ContentLeft>

      <ContentRight>
        <Dashboard>
          <h1>
            your dashboard
            <Link href="/#">
              <a>Go to stats</a>
            </Link>
          </h1>

          <strong>360</strong>
          <span>views today</span>
          <strong>15</strong>
          <span>post views</span>
          <strong>9</strong>
          <span>search apperaances</span>
        </Dashboard>
        <Visitors>
          <h1>
            visitors
            <Link href="/#">
              <a>view all</a>
            </Link>
          </h1>

          <div>
            <Avatar
              src="https://images.unsplash.com/photo-1591361796603-01599a42e701?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGF2YXRhciUyMHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              size="small"
            />
            <VisitorInfo>
              <strong>Darlene Stone</strong>
              <span>HR-Manager</span>
            </VisitorInfo>
          </div>
          <div>
            <Avatar
              src="https://images.unsplash.com/photo-1561997895-2e5d84cc3ac2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fGF2YXRhciUyMHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              size="small"
            />
            <VisitorInfo>
              <strong>Theresa Steward</strong>
              <span>IOS Developer</span>
            </VisitorInfo>
          </div>
          <div>
            <Avatar
              src="https://images.unsplash.com/photo-1594616838951-c155f8d978a0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDJ8fGF2YXRhcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              size="small"
            />
            <VisitorInfo>
              <strong>Brandon Wilson</strong>
              <span>Senior UX Designer</span>
            </VisitorInfo>
          </div>
          <div>
            <Avatar
              src="https://images.unsplash.com/photo-1605951619579-3f5f6c36c646?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGF2YXRhciUyMHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              size="small"
            />
            <VisitorInfo>
              <strong>Kyle Fisher</strong>
              <span>Product Designer</span>
            </VisitorInfo>
          </div>
        </Visitors>
      </ContentRight>
    </Wrapper>
  );
};

export default Profile;
