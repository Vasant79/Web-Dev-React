import { useForm } from "react-hook-form";

/**
 * traditinall form -- we make state for evry input and manage them
 *
 * React Form hook --
 *
 * {...register("First Name "),{}} -- manages states for us and in the end gives data obj
 * handleSubmit() here is an higher order function
 * validation -- supports html validation (pattern , min , max , required)
 */

function ReactFormHook() {
  const { register, handleSubmit } = useForm();

  function submit(data) {
    console.log(data);
    return;
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <label>First Name : </label>
      <input {...register("first Name")} />

      <label>Password :</label>
      <input {...register("password", { required: true })} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default ReactFormHook;
