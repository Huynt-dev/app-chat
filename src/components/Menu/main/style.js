import styled from "styled-components";
import { Layout, Menu, Avatar } from "antd";
const { Sider } = Layout;
const { SubMenu } = Menu;

export const ContentProfile = styled.div`
  .ant-spin-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      margin: 0;
    }
  }
`;

export const SiderA = styled(Sider)`
  background-color: ${({ theme }) => theme.colors.header};
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuA = styled(Menu)`
  .active {
    background-color: ${({ theme }) => theme.colors.active};
  }
  background-color: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.fonts.light};
`;

export const SubMenuA = styled(SubMenu)`
  background-color: ${({ theme }) => theme.colors.header};
`;

export const AvatarA = styled(Avatar)`
  background-color: #c9d4e5;
  box-shadow: 0 0 0 1px #fff;
`;

export const Wrapper = styled.div`
  margin: 15px;
`;
