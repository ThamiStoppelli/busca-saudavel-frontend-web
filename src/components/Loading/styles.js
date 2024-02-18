import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2%;

  .dot {
  background-color: white;
  width: 10px;
  height: 10px;
  border-radius: 100vw;
}

.one {
  animation: dot1;
  animation-delay: 0.5s;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
.two {
  animation: dot2;
  animation-delay: 0.25s;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
.three {
  animation: dot3;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
@keyframes dot1 {
  0% {
    margin-bottom: 0;
  }
  50% {
    margin-bottom: 1rem;
  }
  100% {
    margin-bottom: 0;
  }
}
@keyframes dot2 {
  0% {
    margin-bottom: 0;
  }
  50% {
    margin-bottom: 1rem;
  }
  100% {
    margin-bottom: 0;
  }
}
@keyframes dot3 {
  0% {
    margin-bottom: 0;
  }
  50% {
    margin-bottom: 1rem;
  }
  100% {
    margin-bottom: 0;
  }
}
`;
