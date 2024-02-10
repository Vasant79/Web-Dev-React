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
 * task - make button read blog write blog and give them functionality -- * read left
 * task - make the written blog go to appwrite
 *
 * note -- issues to fix -- centering of buttons read/write
 * fix -- fotter bottom issue , when submiting blog to appwrite error AppwriteException: The
 * current user is not authorized to perform the requested action.
 *
 * revamp your application -- signup and login using react-hook form -- done
 *
 */
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { login } from "../slice/authSlice";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import Button from "../Button";

function SignUp() {
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function submit(data) {
    try {
      //mistake was not passing as object passing
      const userData = await authService.createAccount(data);
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
  }

  return (
    <div className="h-80 w-1/4 m-auto my-20 px-10 p-10 border-2 rounded-md border-cyan-500  shadow-xl hover:border-cyan-900">
      <form onSubmit={handleSubmit(submit)}>
        <div className="mb-5">
          <label className="font-bold">Name</label>
          <br />
          <input
            className="border-2 rounded border-indigo-200 hover:border-indigo-700"
            type="text"
            {...register("name", { require: true })}
          ></input>
        </div>

        <div className="mb-5">
          <label className="font-bold">Email</label>
          <br />
          <input
            className="border-2 rounded border-indigo-200 hover:border-indigo-700"
            type="email"
            {...register("email", { require: true })}
          ></input>
        </div>

        <div className="mb-5">
          <label className="font-bold">Password</label>
          <br />
          <input
            className="border-2 rounded border-indigo-200 hover:border-indigo-700"
            type="password"
            {...register("password", { require: true })}
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
