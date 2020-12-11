import React from "react";
import MainLayout from "../layouts/MainLayout";
import {
  Contents,
  HeaderPage,
  Chat,
  Time,
  Text,
  Box,
  InputChat,
} from "./style";

const HomePage = () => {
  return (
    <MainLayout>
      <HeaderPage>
        <h1>ok la</h1>
      </HeaderPage>
      <Contents>
        <Chat>
          <Box>
            <Text>asdasdasdasdas</Text>
            <Time>10:10</Time>
          </Box>
        </Chat>

        <Chat friend>
          <Box>
            <Text>asdasdasdasdas</Text>
            <Time>10:10</Time>
          </Box>
        </Chat>

        <Chat>
          <Box>
            <Text>asdasdasdasdas</Text>
            <Time>10:10</Time>
          </Box>
        </Chat>
      </Contents>
      <InputChat placeholder="Say some thing" />
    </MainLayout>
  );
};

export default HomePage;
