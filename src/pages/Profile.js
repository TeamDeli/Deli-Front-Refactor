import React, { useEffect, useState } from 'react';
import Styled from "styled-components";
import UserInfo from '../components/profile/UserInfo';
import Friends from '../components/profile/Friends';
import WishList from '../components/profile/WishList';
import { getProfile } from '../lib/api';
import { withRouter } from 'react-router';

const ProfileWrap = Styled.div`
  display:flex;
  flex-direction: row;
	justify-content:space-around;
`;

const Profile = () => {

	const [userData, setUserData] = useState({});

	useEffect(() => {
		(async () => {
			const data = await getProfile();
			setUserData(data);
		})();
	},[]);

	let userInfo, userFriends, userWishList;
	if (userData) {
		userInfo  = {
			image: userData.userImage,
			name: userData.username,
			bio: userData.comment,
			age: userData.age,
			gender: userData.gender,
			birth: userData.birth,
		}
		userFriends = userData.friends;
		userWishList = userData.wishList;
	}
	console.log(userWishList);
	return(
		<div>
			<ProfileWrap>
				<UserInfo userInfo={userInfo}></UserInfo>
				<Friends list={userFriends}></Friends>
			</ProfileWrap>
			<WishList name={userInfo.name} wishList={userWishList}></WishList>
		</div>
	);
}

export default withRouter(Profile);