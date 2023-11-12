

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  text-align: center;
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 48px;
  color: #343a40;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  color: #6c757d;
  margin-bottom: 30px;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 30px;
`;

const IconLink = styled.a`
  margin: 0 10px;
  font-size: 30px;
  color: #007bff;
`;

export default function Home() {
  return (
    <Container>
      <Title>Hello, I'm [Rich Taveras]</Title>
      <Subtitle>Full Stack Developer</Subtitle>
      <Image src="assets/images/me.jpg" alt="Rich Taveras" />
      <div>
        <IconLink href="https://twitter.com/taverasr" target="_blank"><i class="fab fa-twitter"></i></IconLink>
        <IconLink href="https://github.com/rich-taveras" target="_blank"><i class="fab fa-github"></i></IconLink>
      </div>
    </Container>
  );
}
