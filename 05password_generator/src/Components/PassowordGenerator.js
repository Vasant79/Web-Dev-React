import { useState } from "react";

function PasswordGenerator() {
  //state which will store randomly generated psw
  const [password, setPassword] = useState("0");
  const [pwdLen, setPwdLen] = useState(6);
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
      let random = generatePassword(pwdLen) + generateChar(2) + generateNo(2);
      setPassword(random);
      setPwdLen(random.length);
    } else if (numberCheck) {
      let random = generatePassword(pwdLen) + generateNo(2);
      setPassword(random);
      setPwdLen(random.length);
    } else if (charCheck) {
      let random = generatePassword(pwdLen) + generateChar(2);
      setPassword(random);
      setPwdLen(random.length);
    } else {
      let random = generatePassword(pwdLen);
      setPassword(random);
      setPwdLen(random.length);
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
      //alert("Copied");
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
  function handleChangeLength(event) {
    setPwdLen(event.target.value);
  }

  return (
    <div className=" grid grid-rows-3 grid-cols-3 p-5 w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className=" flex items-center justify-center">
        <input className="col-span-2" type="text" value={password} />
        <div className="col-span-1">
          <button onClick={handleCopy}>Copy</button>
        </div>
      </div>
      <div>
        <label>Length</label>
        <input
          type="range"
          min="1"
          max="20"
          value={pwdLen}
          onChange={handleChangeLength}
        />

        <label>Numbers</label>
        <input onClick={handleClickNumberCheck} type="checkBox" />

        <label>Characters</label>
        <input onClick={handleCharCheck} type="checkBox" />
      </div>
      <div>
        <button onClick={handleClick}>Generate</button>
      </div>
    </div>
  );
}

export default PasswordGenerator;
