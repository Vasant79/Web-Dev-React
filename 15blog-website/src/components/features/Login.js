import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { login } from "../slice/authSlice";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../Button";

/**
 *  React Hook form used
 */

function Login() {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //data recived from login form
  async function submit(data) {
    try {
      const session = await authService.login(data);

      //update state
      if (session) {
        const userDate = await authService.getCurrentUser();

        if (userDate) {
          dispatch(login(userDate));
          navigate("/home");
        }
      }
    } catch (error) {
      console.log(`error at login page handleSubmit ${error}`);
    }
  }

  return (
    <div className=" h-70  w-1/5  m-auto my-20 px-10 p-10 border-2 rounded-md border-cyan-500  shadow-xl  hover:border-cyan-900">
      <form onSubmit={handleSubmit(submit)}>
        <div className=" mb-5">
          <label className="font-bold"> Email</label>
          <br />
          <input
            className="border-2 rounded  border-indigo-200 hover:border-2-700"
            type="email"
            {...register("email", { require: true })}
          />
        </div>

        <div className="mb-5">
          <label className="font-bold">Password</label>
          <br />
          <input
            className="border-2 rounded border-indigo-200 hover:border-2-700"
            type="password"
            {...register("password", { require: true })}
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
