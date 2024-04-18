import { FC,  useRef } from "react";

import { Editor } from '@tinymce/tinymce-react';

import { EditorOptions } from "./options";
import './index.scss';

interface IEditor {
  onChange?: (content?:string) => void;
  height?: number | string;
  style?: any;
}

const RichEditor: FC<IEditor> = (props) => {
  const {onChange, height = '100%'} = props;
  const editorRef = useRef<any>();

  const onEditorChange = (content:string) => {
    onChange?.(content);
  }

  return (
    <div style={{height}} className="rich-editor h-auto">
      <Editor
        apiKey="9b8uf8oktsj9njxbmajonf01wihm7vp9asqz6bm3dqsbnf0v"
        tinymceScriptSrc={'/tinymce/js/tinymce/tinymce.min.js'}
        onInit={(_, editor) => editorRef.current = editor}
        init={{...EditorOptions}}
        onEditorChange={onEditorChange}
      />
    </div>
  )
};

export default RichEditor;
