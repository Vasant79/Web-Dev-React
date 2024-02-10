import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

/**
 * integrate tiny mce with hook form -- understand the flow
 *
 *
 */

function RTE({ name, control, label, defaultValue = "write your own blog" }) {
  return (
    <div className="h-80 w-1/3 m-5">
      {label && <label>{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey="j5jfhh1ykhkylcj50mjpbpum1gn5bdk6jawf0br4c6xox14l"
            initialValue={defaultValue}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}

export default RTE;
