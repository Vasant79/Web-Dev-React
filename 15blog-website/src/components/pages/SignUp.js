/**
 *
 * Make a form here
 * task - take email & password from form and pass to createAcc function --done
 * task - solve the error in handleSubmit form, done constructor and data not given as obj --done
 * task - TypeError: Failed to construct 'URL': Invalid UR --done .env was not asscessable
 * task - as user sign up data get loaded on appwrite update the state of auth in store --done
 * -- was writing reducer in createSlice
 * task -- create a logout button visible on when logged in --done
 * task make login work --done -- did not pass userdate to dispatch login, prevent default bhaviour
 * task - when logging out make navigate to login page --done simply apply useNavigate hook
 * task - user should be able to write blog --services that will make user write its blog
 * task - user should be able to upload file --storage service creted - upload & downloade file
 * task - figure out rte -- done internet issue npm installing package
 */
import { useState } from "react";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { login } from "../slice/authSlice";
import { useNavigate } from "react-router-dom";

import Button from "../Button";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    //did not prevent default submit bhaviour
    event.preventDefault();
    try {
      //mistake was not passing as object passing
      const userData = await authService.createAccount({
        name,
        email,
        password,
      });
      //update dispatcher
      if (userData) {
        //mistake authService was not returing anything
        const userData = await authService.getCurrentUser();

        if (userData) {
          // did not pass userData with login
          dispatch(login(userData));
          navigate("/home");
        }
      }
    } catch (error) {
      console.log("form error in signup " + error);
    }

    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className="h-80 w-1/4 m-auto my-20 px-10 p-10 border-2 rounded-md border-cyan-500  shadow-xl hover:border-cyan-900">
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="font-bold">Name</label>
          <br />
          <input
            className="border-2 rounded border-indigo-200 hover:border-indigo-700"
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            required
          ></input>
        </div>

        <div className="mb-5">
          <label className="font-bold">Email</label>
          <br />
          <input
            className="border-2 rounded border-indigo-200 hover:border-indigo-700"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            required
          ></input>
        </div>

        <div className="mb-5">
          <label className="font-bold">Password</label>
          <br />
          <input
            className="border-2 rounded border-indigo-200 hover:border-indigo-700"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            required
          ></input>
        </div>

        <Button className="p-1 border-2 rounded-md" type="submit">
          Sign up
        </Button>
      </form>
    </div>
  );
}

export default SignUp;
