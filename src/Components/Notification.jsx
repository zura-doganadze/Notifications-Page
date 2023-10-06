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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Author = styled.span`
  font-size: 16px;
  font-weight: 800;
  color: #1c202b;
`;
const Type = styled.span`
  color: #5e6778;
  font-size: 16px;
  margin: 0 7px;
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
                  <div>
                    <Author>{item.author}</Author>
                    <Type>{item.type}</Type>

                    {/* {item.content.includes(".webp") ? (
                      <img src={item.content} />
                    ) : (
                      <span>{item.content}</span>
                    )} */}
                    <span>{item.content}</span>
                  </div>
                  <Time>{item.time}</Time>
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
