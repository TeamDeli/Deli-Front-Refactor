import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import UserInfo from "../components/friends/UserInfo";
import Friends from "../components/friends/Friends";
import defaultImage from "../user.svg";
import WishList from "../components/friends/WishList";
import productImg from "../components/friends/bingsu.jpeg";

const AddFriendsWrap = Styled.div`
  display:flex;
  flex-direction: row;
	justify-content:space-around;
`;

const AddFriends = () => {
  const [userInfo, setUserInfo] = useState({});
  const [friendsList, setFriendsList] = useState(null);
  //const [_wishList, setWishList] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/deli/api/addFriends")
      .then((res) => res.json())
      .then((res) => {
        //console.log("in Page component");
        console.log(res);
        setUserInfo(res[0]);
        const list = res.map((userInfo) => {
          return { id: userInfo.username, username: userInfo.username };
        });
        console.log(list);
        setFriendsList(list);
      });
  }, []);

  let _wishList = [
    {
      img: "https://image.idus.com/image/files/21a5979b3c144647a34c0cd87d5591d0_512.jpg",
      title: "애쉬 클래식 머니클립 지갑",
    },
    {
      img: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/158095569262478037.jpg?gif=1&w=850&h=850&c=c",
      title: "차렵 이불",
    },
    {
      img: "https://image.idus.com/image/files/7393778c214d4fd99fa60f53ec2ec64e_1440.jpg",
      title: "토리 에어팟 케이스",
    },
  ];

  return (
    <AddFriendsWrap>
      <Friends list={friendsList}></Friends>
      <div>
        <UserInfo userInfo={userInfo}></UserInfo>
        <WishList
          friendName={userInfo.username}
          wishList={_wishList}
        ></WishList>
      </div>
    </AddFriendsWrap>
  );
};

export default AddFriends;
