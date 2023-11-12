
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


export default function Project() {
  return (
    <Container>
      <Title>My Projects</Title>
      <hr />
      <Text>Description:</Text>
      <Text>Technologies:</Text>
      <Text>Link:</Text>
      {/* Add a link to your project */}
      <a href="https://findingrich.com">
        Project Link
      </a>
      <hr />
      <Text>Description:</Text>
      <Text>Technologies:</Text>
      <Text>Link:</Text>
      {/* Add a link to your project */}
      <a href="https://rich-taveras.github.io/findingrich/" target="_blank" rel="noopener noreferrer">
        Project Link
      </a>
      <hr />
      <Text>Description:</Text>
      <Text>Technologies:</Text>
      <Text>Link:</Text>
      {/* Add a link to your project */}
      <a href="https://rich-taveras.github.io/TIC-TAC-TOE/" target="_blank" rel="noopener noreferrer">
        Project Link
      </a>
      <hr />
      <Text>Description:</Text>
      <Text>Technologies:</Text>
      <Text>Link:</Text>
      {/* Add a link to your project */}
      <a href="https://cleanpoolsflorida.com/" target="_blank" rel="noopener noreferrer">
        Project Link
      </a>
      <hr />
    </Container>
  );
}
 



