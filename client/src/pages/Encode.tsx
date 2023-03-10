import React, { useState, useEffect } from "react";
import { useJwt } from "react-jwt";
import jwt_decode from "jwt-decode";

import { JWTtoken } from "../interfaces/JWTtoken";

const Encode = () => {
  const [token, setToken] = useState<string>("");

  const [isValid, setIsValid] = useState<boolean>(false);
  const [decoded, setDecoded] = useState<JWTtoken | null>(null);
  const { decodedToken, isExpired } = useJwt(token);
  const [data, setData] = useState<JSX.Element>(<h1></h1>);

  useEffect(() => {
    if (token !== "") {
      try {
        const tempDecode = jwt_decode(token);
        //check if token is valid
        
        setDecoded(tempDecode as JWTtoken);
        setIsValid(true);
        console.log(decoded?.username);
        setData(<h1>{decoded?.username}</h1>);
      } catch (error) {
        setIsValid(false);
        console.log("invalid");
        setData(<h1>invalid</h1>);
      }
    }
  }, [token]);

  useEffect(() => {}, [data]);

  useEffect(() => {}, [decoded]);

  useEffect(() => {
    console.log(isValid);
  }, [isValid])

  const onChangeToken = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={onChangeToken} />
      <h1>{data}</h1>
    </div>
  );
};

export default Encode;
