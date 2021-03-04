import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useDebounce from "helpers/useDebounce";
import { Input, Button, Badge, Empty } from "antd";
import {
  Center,
  Row1,
  Col1,
  AvatarA,
  BoxMessage,
  Container,
  BadgeA,
  TextA,
  Btn,
} from "./style";
import { UserOutlined } from "@ant-design/icons";
import { getUsers, searchUser } from "redux/users/action";
import { checkUserInRoom } from "redux/rooms/actions";
const { Search } = Input;

const Users = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const debouncedSearch = useDebounce(searchValue, 500);

  const users = useSelector((state) => state.user.users);

  const findUser = (idUser) => {
    dispatch(checkUserInRoom({ idUser, history }));
  };

  useEffect(() => {
    const callAPI = async () => {
      if (debouncedSearch) {
        setIsSearching(true);
        await dispatch(searchUser(debouncedSearch));
        setIsSearching(false);
      } else {
        dispatch(getUsers());
      }
    };
    callAPI();
  }, [dispatch, debouncedSearch]);

  return (
    <Container>
      <div>
        <Search
          className="Search"
          placeholder="tìm kiếm..."
          onChange={(e) => setSearchValue(e.target.value)}
          loading={isSearching}
        />

        <Row1>
          {!users.length ? (
            <Center>
              <Empty description={false} />
            </Center>
          ) : (
            users.map((x, index) => {
              return (
                <Col1 key={index} xs={24} md={12} lg={8}>
                  <div>
                    <BoxMessage>
                      <BadgeA>
                        <Badge status={x.isOnline ? "success" : "default"}>
                          <AvatarA
                            shape="square"
                            size={60}
                            src={x.avatar}
                            icon={<UserOutlined />}
                          />
                        </Badge>
                      </BadgeA>

                      <TextA>
                        <h3>{x.name}</h3>
                        <p>
                          Email: <span>{x.email}</span>
                        </p>
                      </TextA>

                      <Btn>
                        <Button
                          onClick={() => {
                            findUser(x._id);
                          }}
                        >
                          Send Messages
                        </Button>
                      </Btn>
                    </BoxMessage>
                  </div>
                </Col1>
              );
            })
          )}
        </Row1>
      </div>
    </Container>
  );
};

export default Users;
