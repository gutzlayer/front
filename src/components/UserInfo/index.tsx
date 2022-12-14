import React from 'react';

import { Container, NameText, Progress, UserPicture } from './styles';
import { IUserInfo } from './types';

const UserInfo = ({image, nome, percentual}: IUserInfo) => {
  return (
    <Container>
        <UserPicture src={image}>
        <div>
            <NameText>{nome}</NameText>
            <Progress percentual={percentual} />
        </div>
        </UserPicture>
    </Container>
  )
}

export default UserInfo;