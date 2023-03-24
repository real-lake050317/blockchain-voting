import React from "react";
import axios from 'axios';

const Login = () => {
  const [password, setPassword] = React.useState<string>("");
  const [isLogin, setIsLogin] = React.useState<boolean>(false);
  var cardNumber: string | null = sessionStorage.getItem("cardNumber");
  // show 7 digits from the starts, mask 6 digits from the back of the cardnumber with asterisks

  if (cardNumber) {
    cardNumber = cardNumber.slice(0, 8) + "******";
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h1>Login</h1>
      <p>카드 번호: {cardNumber}</p>
      <input type="password" onChange={handlePasswordChange}></input>
      <button
        onClick={() => {

        }}
      >로그인</button>
    </div>
  );
};

export default Login;
