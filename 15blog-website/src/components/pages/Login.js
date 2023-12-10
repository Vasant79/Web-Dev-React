import authService from "../../appwrite/auth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../slice/authSlice";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      console.log(email + " " + password);

      const session = await authService.login({ email, password });
      console.log("session" + session);

      //update state
      if (session) {
        const userDate = await authService.getCurrentUser();
        console.log("userData" + userDate);

        if (userDate) {
          dispatch(login(userDate));
          navigate("/home");
        }
      }
    } catch (error) {
      console.log(`error at login page handleSubmit${error}`);
    }
  }

  console.log(authStatus);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Email</label>
        <input
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          reaquired
        />

        <label>Password</label>
        <input
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          required
        />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default Login;
