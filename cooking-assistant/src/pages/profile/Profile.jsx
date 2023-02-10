import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../../baseUrl'
import UserInfo from '../../components/userInfo/UserInfo';

export default function Profile() {
  const [info, setInfo] = useState({
    userId: '123456',
    userName: 'lily',
    mobileNumber: 10010,
    location: '中国长沙'
  });
  useEffect(
    () => {
      fetch(`${BASE_URL}/test?userId=111&userName=lucy&mobileNumber=10086&location=中国`).then(
        (response) => {
          return response.json();
        }
      ).then(
        (res) => {
          setInfo(res)
        }
      )
    }, []);
  return (
    <UserInfo userInfo={info} />
  );

}
