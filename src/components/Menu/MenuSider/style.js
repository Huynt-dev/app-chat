import styled from "styled-components";
import {
  Layout,
  Menu as MenuA,
  Avatar as AvatarA,
  Popover as PopoverA,
  List as ListA,
  Divider as DividerA,
  Modal as ModalA,
  Button as ButtonA,
} from "antd";

const { Sider } = Layout;
const { SubMenu } = MenuA;

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

export const SiderMain = styled(Sider)`
  background-color: ${({ theme }) => theme.colors.header};
`;

export const Menu = styled(MenuA)`
  .active {
    background-color: ${({ theme }) => theme.colors.active};
  }
  background-color: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.fonts.light};
`;

export const SubMenuA = styled(SubMenu)`
  background-color: ${({ theme }) => theme.colors.header};
`;

export const Avatar = styled(AvatarA)`
  background-color: #c9d4e5;
  box-shadow: 0 0 0 1px #fff;
`;

export const Wrapper = styled.div`
  margin: 15px;
`;

export const Popover = styled(PopoverA)``;

export const List = styled(ListA)``;

export const Divider = styled(DividerA)``;

export const Modal = styled(ModalA)``;

export const Button = styled(ButtonA)``;

export const By = styled.div`
  display: block;
  position: absolute;

  justify-content: center;
  bottom: 50px;
  transform: rotate(90deg);
  p {
    color: white;
    letter-spacing: 5px;
    margin: 0;
  }
`;
