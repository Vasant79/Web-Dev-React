import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "../Input.js";
import RTE from "../RTE.js";
import Select from "../Select.js";
import Button from "../Button.js";
/**
 * react hook form
 */

function PostForm({ post }) {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  console.log(userData);

  const { register, handleSubmit, getValues, setValue, control, watch } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  async function submit(data) {
    //2 case if post exist -- we edit / if not we create new
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <Input label="Title" {...register("title", { require: true })} />

          <Input label="Slug" {...register("slug", { require: true })} />
        </div>
        {/* content from rte */}

        <div>
          <RTE
            label="Content :"
            name="content"
            control={control}
            defaultValue={getValues("content")}
          />
        </div>
        <div>
          <Input
            label="featuredImage"
            type="file"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { require: !post })}
          />

          <Select
            label="status"
            options={["active", "inactive"]}
            {...register("status", { require: true })}
          />
        </div>
        <Button>{post ? "Update" : "Create"}</Button>
      </form>
    </div>
  );
}

export default PostForm;
