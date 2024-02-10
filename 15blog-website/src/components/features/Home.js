import { useState } from "react";
import Button from "../Button";
import PostForm from "../postForm/PostForm";

function Home() {
  const [visible, setVisible] = useState(false);
  function handleWrite() {
    setVisible(!visible);
  }

  function handleRead() {
    //make req to appwrite and display blogs -- first make sure i am able to take blog and store it in appwrite
  }

  return (
    <div>
      <span>Welcome !!</span>
      <div className="mx-auto">
        <Button
          className="h-20 w-60   border-2 border-black rounded-xl bg-slate-500 text-xl font-semibold"
          onClick={handleWrite}
        >
          Write Blog
        </Button>
        <Button
          className="h-20 w-60   border-2 border-black rounded-xl bg-slate-500 text-xl font-semibold"
          onClick={handleRead}
        >
          Read Blog
        </Button>
      </div>
      <div>{visible && <PostForm />}</div>
    </div>
  );
}

export default Home;
