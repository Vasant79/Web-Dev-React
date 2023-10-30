import { useState } from "react";

function PasswordGenerator() {
  //state which will store randomly generated psw
  const [password, setPassword] = useState("0");
  const [pwdLen, setPwdLen] = useState(0);
  const [numberCheck, setNumberCheck] = useState(false);
  const [charCheck, setCharCheck] = useState(false);

  //fn to get random pass
  function generatePassword(len) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    let password = "";

    for (let i = 0; i < len; i++) {
      let randomIndex = Math.floor(Math.random() * charset.length);
      password = password + charset[randomIndex];
    }
    return password;
  }

  //fn to get random no
  function generateNo(len) {
    const no = "0123456789";
    let number = "";

    for (let i = 0; i < len; i++) {
      let randomIndex = Math.floor(Math.random() * no.length);
      number = number + no[randomIndex];
    }
    return number;
  }

  //fn to get random special char
  function generateChar(len) {
    const specialChar = "!@#$%^&*";
    let character = "";

    for (let i = 0; i < len; i++) {
      let randomIndex = Math.floor(Math.random() * specialChar.length);
      character = character + specialChar[randomIndex];
    }
    return character;
  }

  //generate random password -- modify this fn to generate word password
  function handleClick() {
    if (numberCheck && charCheck) {
      //these fn takes len argument to genrate the following
      let random = generatePassword(4) + generateChar(2) + generateNo(2);
      setPassword(random);
      setPwdLen(random.length);
    } else if (numberCheck) {
      let random = generatePassword(4) + generateNo(2);
      setPassword(random);
      setPwdLen(random.length);
    } else if (charCheck) {
      let random = generatePassword(4) + generateChar(2);
      setPassword(random);
      setPwdLen(random.length);
    } else {
      let random = generatePassword(6);
      setPassword(random);
      setPwdLen(random.length);
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
      alert("Copied");
    } catch (error) {
      alert("Copy Failed");
    }
  };
  function handleClickNumberCheck() {
    //add some no to existing passsword
    setNumberCheck(!numberCheck);
  }
  function handleCharCheck() {
    setCharCheck(!charCheck);
  }

  return (
    <div>
      <input type="text" value={password} />
      <button onClick={handleClick}>Generate</button>
      <button onClick={handleCopy}>Copy</button>

      <label>Length</label>
      <input type="range" min="1" max="20" value={pwdLen} />

      <label>Numbers</label>
      <input onClick={handleClickNumberCheck} type="checkBox" />

      <label>Characters</label>
      <input onClick={handleCharCheck} type="checkBox" />
    </div>
  );
}

export default PasswordGenerator;
