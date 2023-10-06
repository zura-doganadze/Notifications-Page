import { useState } from "react";
import Notification from "./Components/Notification";
import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  display: flex;
  justify-items: center;
  justify-content: center;
`;
function App() {
  return (
    <Main>
      <Notification />
    </Main>
  );
}

export default App;
