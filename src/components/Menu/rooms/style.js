import styled from "styled-components";
import { Avatar, Col, Row, Input } from "antd";
const { Search } = Input;
export const Row1 = styled(Row)`
  height: 100%;
`;

export const Col1 = styled(Col)`
  background-color: ${({ theme }) => theme.colors.nav};
`;

export const SearchInput = styled(Input)`
  background: ${({ theme }) => theme.colors.input};
`;

export const SearchRoom = styled(Search)`
  padding: 10px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.input};
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

export const BoxMessage = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.active};
  color: ${({ theme }) => theme.fonts.light};
  padding: 10px;
  cursor: pointer;
  box-sizing: border-box;
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
