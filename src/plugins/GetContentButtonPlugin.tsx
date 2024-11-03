/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $generateHtmlFromNodes } from "@lexical/html";

export const GetContentButtonPlugin = () => {
  const [editor] = useLexicalComposerContext();

  const onClick = () => {
    editor.update(() => {
      const htmlString = $generateHtmlFromNodes(editor, null);
      console.log(htmlString);
    });
  };
  return <div onClick={onClick}>Export editor content</div>;
};
