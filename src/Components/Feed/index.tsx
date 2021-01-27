import React from 'react'
import Styled from 'styled-components'

import IconButton from '~/Components/IconButton'
import FeedBody from './FeedBody'

const Container = Styled.View`
  padding: 8px 0px;
`;

const FeedHeader = Styled.View`
  flex-direction:row;
  padding: 8px 16px;
  justify-content: space-between;
`;

const ProfileContainer = Styled.View`
  flex-direction: row;
  align-items: center;
`;

const ProfileImage = Styled.Image`
  border-radius: 48px;
  border-width: 1px;
  border-color: #D3D3D3;
`;

const Username = Styled.Text`
  font-weight: bold;
  margin-left: 8px;
`;

const FeedFooter = Styled.View`
  padding: 0px 8px;
`;

const Description = Styled.Text``;

interface Props {
  id: number;
  name: string;
  photo: string;
  description: string;
  images: Array<string>;
}

const Feed = ({id, name, photo, description, images}:Props) => {
  return (
    <Container>
      <FeedHeader>
        <ProfileContainer>
          <ProfileImage 
            source={{uri: photo}}
            style={{ width: 32, height: 32}}
          />
          <Username>{name}</Username>
        </ProfileContainer>
        <IconButton iconName="dotMenu"/>
      </FeedHeader>
      <FeedBody id={id} images={images}/>
      <FeedFooter>
        <Description numberOfLines={2}>
          <Username>{name}</Username>
          {description}
        </Description>
      </FeedFooter>
    </Container>
  )
}

export default Feed