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

  margin-top: 25px;
`;
const Img = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 19px;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 800;
  color: #1c202b;
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
  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>Notifications</Title>
          <p>Mark all as read</p>
        </Header>
        <div>
          {userData.map((item) => {
            return (
              <Notifications>
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
