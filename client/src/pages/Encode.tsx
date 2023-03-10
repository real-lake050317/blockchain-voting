import React, { useState, useEffect } from "react";
import { useJwt } from "react-jwt";

const Encode = () => {
  const [token, setToken] = useState<string>("");
  const { decodedToken, isExpired } = useJwt(token);

  useEffect(() => {
    console.log(token);
  }, [token]);

  const onChangeToken = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={onChangeToken} />
      <h1>Encode</h1>
    </div>
  );
};

export default Encode;
