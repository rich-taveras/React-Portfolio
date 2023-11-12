

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
  font-size: 24px;
  color: #007bff;
`;

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
    <path d="M2.328 2a8.192 8.192 0 0 1 9.948 7.743c0 .127 0 .255-.006.383A5.865 5.865 0 0 0 14 8 5.941 5.941 0 0 0 8.857 2.858a5.854 a5.854 0 0 0-3.884 2.31A2.085 2.085 0 0 0 4.85 5.312C2.348 5.305.5 7.17.5 9.63c0 2.42 1.983 4.4 4.42 4.4a3.87 3.87 0 0 0 2.296-.774c.168.013.337.02.506.02A8.191 8.191 0 0 1 2.328 2z"/>
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.23 1.87.88 2.33.67.07-.52.28-.88.51-1.08-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 the current .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12 .51.56.82 1.27 .82 2.15 0 3.07-1.87 3.75-3.65 3.95 .29.25.54.73 .54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15 .46 .55 .38 C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z"/>
  </svg>
);

export default function Home() {
  return (
    <Container>
      <Title>Hello, I'm [Rich Taveras]</Title>
      <Subtitle>Full Stack Developer</Subtitle>
      <Image src="assets/images/me.jpg" alt="Rich Taveras" />
      <div>
        <IconLink href="https://twitter.com/@taverasr" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </IconLink>
        <IconLink href="https://github.com/rich-taveras" target="_blank" rel="noopener noreferrer">
          <GithubIcon />
        </IconLink>
      </div>
    </Container>
  );
}
