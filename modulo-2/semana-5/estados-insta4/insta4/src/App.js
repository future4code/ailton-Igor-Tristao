import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50'}
          fotoPost={'https://picsum.photos/200'}
        />

        <Post
          nomeUsuario={'pedrinho'}
          fotoUsuario={'https://picsum.photos/48'}
          fotoPost={'https://picsum.photos/150'}
        />

        <Post
          nomeUsuario={'carlinhos'}
          fotoUsuario={'https://picsum.photos/30'}
          fotoPost={'https://picsum.photos/10'}
        />
      </MainContainer>
    );
  }
}

export default App;
