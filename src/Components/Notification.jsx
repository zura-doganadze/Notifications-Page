import React, { useState } from "react";
import data from "../../data.json";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  max-width: 730px;
  margin: 63px 0;
`;
const Container = styled.div`
  max-width: 100%;
  width: 90%;
  margin: 33px 0;
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Notifications = styled.div`
  display: flex;
  padding: 17px;
  margin-top: 25px;
  border-radius: 10px;
`;
const Img = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 19px;
`;
const TitleContainer = styled.div`
  display: flex;
  column-gap: 11px;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 800;
  color: #1c202b;
`;
const NotificationNumber = styled.span`
  color: #fff;
  font-size: 16px;
  padding: 3px 8px;
  background-color: #0a327b;
  border-radius: 6px;
`;
const Button = styled.button`
  cursor: pointer;
  border: none;
  background: none;
`;
const DetailsWrap = styled.div`
  text-align: left;
`;
const DetailsContainer = styled.div``;
const Author = styled.span`
  font-size: 16px;
  font-weight: 800;
  color: #1c202b;
  cursor: pointer;
  &:hover {
    color: #0a327b;
  }
`;

const Type = styled.span`
  color: #5e6778;
  font-size: 16px;
  margin: 0 7px;
`;
const Content = styled.div`
  display: inline;
  cursor: pointer;
  &:hover {
    color: #0a327b;
  }
`;
const Message = styled.div`
  margin-top: 13px;
  background-color: #e5effa;
  color: #5e6778;
  cursor: pointer;
`;
const ContentImg = styled.img`
  max-width: 45px;
  max-height: 45px;
  cursor: pointer;
`;
const ActivePoint = styled.div`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #f65552;
  margin-left: 6px;
`;
const Time = styled.span`
  color: #939cad;
  font-size: 16px;
`;
const Notification = () => {
  const [userData, setUserData] = useState(data);

  const markAsRad = () => {
    const clone = [...userData].map((item) => {
      item.read = true;
      return item;
    });
    setUserData(clone);
  };

  const handleSingleClick = (index) => {
    const clone = [...userData];
    clone[index].read = true;
    setUserData(clone);
  };

  return (
    <Wrapper>
      <Container>
        <Header>
          <TitleContainer>
            <Title>Notifications</Title>
            <NotificationNumber>
              {userData.filter((item) => !item.read).length}
            </NotificationNumber>
          </TitleContainer>
          <Button onClick={markAsRad}>Mark all as read</Button>
        </Header>
        <div>
          {userData.map((item, index) => {
            return (
              <Notifications
                onClick={() => {
                  handleSingleClick(index);
                }}
                style={
                  item.read ? { background: "#fff" } : { background: "#e1f0fe" }
                }
              >
                <Img
                  src={`./images/avatar-${item.author
                    .replace(" ", "-")
                    .toLowerCase()}.webp`}
                  alt=""
                />
                <DetailsWrap>
                  <DetailsContainer>
                    <Author>{item.author}</Author>
                    <Type>{item.type}</Type>
                    <ContentImg src={item.img} alt="" />
                    <Content
                      style={
                        item.type == "left the group" ||
                        item.type == "has joined your group"
                          ? {
                              color: "#0A3278",
                              fontSize: "16px",
                              fontWeight: 800,
                            }
                          : {
                              color: "#5E6778",
                              fontSize: "16px",
                              fontWeight: 800,
                            }
                      }
                    >
                      {item.content}
                    </Content>
                    {item.read ? null : <ActivePoint></ActivePoint>}{" "}
                  </DetailsContainer>
                  <Time>{item.time}</Time>
                  <Message
                    style={
                      item.message ? { padding: "17px 20px" } : { padding: "0" }
                    }
                  >
                    {item.message}
                  </Message>
                </DetailsWrap>
              </Notifications>
            );
          })}
        </div>
      </Container>
    </Wrapper>
  );
};

export default Notification;
