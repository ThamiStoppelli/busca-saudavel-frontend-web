import React from 'react';

import { Container } from './styles'

function Loading({bgcolor}) {
  return (
      <Container>
          <div style={{backgroundColor: bgcolor}} className='dot one'></div>
          <div style={{backgroundColor: bgcolor}} className='dot two'></div>
          <div style={{backgroundColor: bgcolor}} className='dot three'></div>
      </Container>
  );
}

export default Loading;