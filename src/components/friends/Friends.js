import React, { useCallback, useState, useEffect } from "react";
import Styled from "styled-components";

const FriendsWrap = Styled.div`
  display:flex;
  flex-direction:column;
  margin-top: 100px;
  margin-left: 50px;

  .friends {
    font-size: 30px;
    color: #000000;
    font-weight: bold;
    text-decoration:none;
  }

  .search {
    display:flex;
    margin-top: 10px;
    margin-bottom: 20px;

    input {
      width: 300px;
      height: 40px;
      background-color:#fffff;
      border: 2px solid #FD6F22;
      color: black;
      padding: 5px;
      font-size: 15px;
      margin-right: 15px;
    }
    input::placeholder {
      color: grey;
    }
    input:focus {
      outline: none;
    }

    .buttonClass {
      type: submit;
      font-size: 20px;
      width:80px;
      height:40px;
      text-align:center;
      text-decoration:none;
      border-width:2px;
      color:#FFFFFF;
      border-color:#333029;
      font-weight:bold;
      border-top-left-radius:15px;
      border-top-right-radius:15px;
      border-bottom-left-radius:15px;
      border-bottom-right-radius:15px;
      box-shadow: 0px 1px 0px 0px #1c1b18;
      text-shadow: 0px 1px 0px #ffffff;
      background:linear-gradient(#FD6F22, #FD6F22);
    }
    
    .buttonClass:hover {
      background: linear-gradient(#FDAE82, #FDAE82);
    }
  }

  .scrollView {
    overflow: auto;
    width: 410px;
    height: 450px;
    background: #FDAE82;
    padding: 3px 3px 3px 3px;
  }

  p {
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    margin-top: 10px;
    margin-left: 15px;
  }
  h1 {
		font-weight: bold;
	}
`;

const Friends = ({ list }) => {
  const [userName, setUserName] = useState("");
  const [friendsList, setFriendsList] = useState([
    "기연",
    "경민",
    "소린",
    "주은",
    "대장",
    "햄토리",
    "델리",
    "사랑해델리",
    "왕사랑",
    "왕감사",
    "우리팀짱",
  ]);

  //seEffect(() => {}, []);

  let changedList = [];
  function isUserName(userName) {
    if (friendsList && friendsList.includes(userName)) {
      changedList.push(userName);
      setFriendsList(changedList);
    } else {
      setFriendsList(changedList);
    }
  }

  useCallback(() => {
    isUserName(userName);
  }, [friendsList]);

  const handleChange = (event) => {
    setUserName(event.target.value);
    setFriendsList(friendsList);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    isUserName(userName);
  };

  return (
    <FriendsWrap>
      <h1>친구 찾기</h1>
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="친구 이름을 입력해주세요"
            value={userName}
            onChange={handleChange}
          />
          <button className="buttonClass">찾기</button>
        </form>
      </div>
      <div className="scrollView">
        {friendsList &&
          friendsList.map((friend, index) => <p key={index}>{friend}</p>)}
      </div>
    </FriendsWrap>
  );
};

export default Friends;
