import styled, { keyframes } from "styled-components";
import { Avatar, Col, Row, Input } from "antd";
import { MenuOutlined } from "@ant-design/icons";
const { Search } = Input;
export const Row1 = styled(Row)`
  height: 100%;
`;

export const Col1 = styled(Col)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.nav};
`;

export const MenuMobile = styled(MenuOutlined)`
  display: none;
  padding: 10px;
  box-sizing: border-box;
  font-size: 30px;
  color: ${({ theme }) => theme.fonts.light};
  @media (max-width: 768px) {
    display: block;
  }
`;

export const SearchRoom = styled(Search)`
  padding: 10px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.input};
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchRoom2 = styled(Search)`
  display: none;
  padding: 10px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const BoxRoom = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100vh - 52px);

  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.8);
  }

  ::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(255, 255, 255, 0.8);
  }

  .active {
    background-color: ${({ theme }) => theme.colors.active};
  }
`;
const animation2 = keyframes`
  from {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }

  to {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
`;

export const BoxMessage = styled.div`
  display: flex;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.active};
  color: ${({ theme }) => theme.fonts.light};
  padding: 10px;
  cursor: pointer;
  box-sizing: border-box;
  -webkit-animation: ${animation2}0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: ${animation2} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.active};
    padding: 10px;
  }

  p {
    margin: 0;
  }
`;

export const AvatarA = styled(Avatar)`
  background-color: #c9d4e5;
  box-shadow: 0 0 0 1px #fff;
  box-sizing: border-box;
`;

export const Rooms = styled.div`
  display: inline-block;
  margin-left: 10px;
  box-sizing: border-box;
  height: auto;

  @media (max-width: 768px) {
    display: none;
  }

  .name {
    width: 100%;
    font-weight: bold;
  }

  .last-message {
    display: block;
    font-style: italic;
    max-width: 150px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
