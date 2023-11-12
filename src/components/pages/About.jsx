//About.jsx file

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 40px;
  border-radius: 10px;
  background-color: #f8f9fa;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 32px;
  color: #343a40;
  margin-bottom: 20px;
  text-align: center;
`;

const Text = styled.p`
  font-size: 18px;
  color: #343a40;
  line-height: 1.6;
  margin-bottom: 20px;
`;

export default function About() {
  return (
    <Container>
      <Title>About Me</Title>
      <Text>
        I am a full stack developer with a passion for building web applications that are efficient,
        scalable, and user-friendly. With several years of experience in both front-end and back-end
        technologies, I am adept at turning ideas into high-quality, maintainable code.
      </Text>
      <Text>
        My expertise includes working with technologies such as React, Node.js, Express, MongoDB,
        and SQL databases. I have a strong foundation in HTML, CSS, and JavaScript, and I am
        constantly exploring new tools and frameworks to stay up-to-date with the latest industry trends.
      </Text>
      <Text>
        When I'm not coding, I enjoy exploring new technologies, participating in hackathons,
        and contributing to open-source projects. I thrive in collaborative environments and am
        always eager to learn from and share knowledge with fellow developers.
      </Text>
    </Container>
  );
}
