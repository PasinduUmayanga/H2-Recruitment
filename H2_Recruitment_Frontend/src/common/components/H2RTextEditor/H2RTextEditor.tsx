import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { H2RTextEditorProps } from "./H2RTextEditor.types";

function TextEditor(props: H2RTextEditorProps) {
  const handleTextEditor = (event: any, editor: any) => {
    const data = editor.getData();
    if (props.onTextEditorChange) {
      props.onTextEditorChange(data);
    }

    // console.log({ data });
  };

  return (
    <div className="App">
      <CKEditor
        editor={ClassicEditor}
        data={props.Data}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          // console.log("Editor is ready to use!", editor);
        }}
        onChange={handleTextEditor}
      />
    </div>
  );
}

export default TextEditor;
