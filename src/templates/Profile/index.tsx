import { FiUpload, FiEdit, FiMoreVertical } from 'react-icons/fi';
import Button from 'components/Button';

import { Wrapper } from 'components/Wrapper';
import Avatar from 'components/Avatar';
import {
  ContentLeft,
  ProfileInfo,
  Image,
  WrapperButtons,
  ContentRight,
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
        </ProfileInfo>
      </ContentLeft>
      <ContentRight>
        <h1>Dhashboards</h1>
      </ContentRight>
    </Wrapper>
  );
};

export default Profile;
