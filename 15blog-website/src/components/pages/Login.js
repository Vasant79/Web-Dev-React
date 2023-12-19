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
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const session = await authService.login({ email, password });

      //update state
      if (session) {
        const userDate = await authService.getCurrentUser();

        if (userDate) {
          dispatch(login(userDate));
          navigate("/home");
        }
      }
    } catch (error) {
      console.log(`error at login page handleSubmit${error}`);
    }
  }

  return (
    <div className=" h-50  w-1/4  m-auto my-20 px-10 p-10 border-2 rounded-md border-cyan-500  shadow-xl  hover:border-cyan-900">
      <form className=" " onSubmit={handleSubmit}>
        <div className=" mb-5">
          <label className="font-bold"> Email</label>
          <br />
          <input
            className="border-2 rounded  border-indigo-200 hover:border-2-700"
            type="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            reaquired
          />
        </div>

        <div className="mb-5">
          <label className="font-bold">Password</label>
          <br />
          <input
            className="border-2 rounded border-indigo-200 hover:border-2-700"
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            required
          />
        </div>
        <Button className="p-1 border-2 rounded-md " type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
