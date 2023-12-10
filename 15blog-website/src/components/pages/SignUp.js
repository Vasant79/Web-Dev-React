/**
 *
 * Make a form here
 * task - take email & password from form and pass to createAcc function --done
 * task - solve the error in handleSubmit form, done constructor and data not given as obj --done
 * task - TypeError: Failed to construct 'URL': Invalid UR --done .env was not asscessable
 * task - as user sign up data get loaded on appwrite update the state of auth in store --done
 * -- was writing reducer in createSlice
 * task -- create a logout button visible on when logged in --done
 * task make login work
 */
import { useState } from "react";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { login } from "../slice/authSlice";
import { useNavigate } from "react-router-dom";

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
    <form
      onSubmit={handleSubmit}
      className="my-auto mx-auto justify-center block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
    >
      <div>
        <label>Name</label>
        <input
          className=" border-2 border-indigo-400 rounded  hover:border-indigo-700 "
          type="text"
          placeholder="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          required
        ></input>
      </div>

      <div>
        <label>Email</label>
        <input
          className="border-2 border-indigo-400 rounded  hover:border-indigo-700 "
          type="email"
          placeholder="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          required
        ></input>
      </div>

      <div>
        <label>Password</label>
        <input
          className=" border-2 rounded border-indigo-400 hover:border-indigo-700"
          type="password"
          placeholder="password "
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          required
        ></input>
      </div>

      <div>
        <button
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="submit"
        >
          Sign up
        </button>
      </div>
    </form>
  );
}

export default SignUp;
