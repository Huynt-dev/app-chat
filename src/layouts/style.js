import styled from "styled-components";
import { Layout as LayoutA } from "antd";

export const Layout = styled(LayoutA)`
  background-color: ${({ theme }) => theme.colors.nav};
`;
