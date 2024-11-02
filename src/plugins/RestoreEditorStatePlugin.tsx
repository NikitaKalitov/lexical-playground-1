/* eslint-disable @typescript-eslint/no-unused-vars */
import { $generateNodesFromDOM } from "@lexical/html";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getRoot, CLEAR_HISTORY_COMMAND } from "lexical";
import { useEffect, useRef, useState } from "react";

interface Props {
  state?: string;
}

export function RestoreEditorStatePlugin({ state }: Props) {
  const [editor] = useLexicalComposerContext();
  const firstRender = useRef(true);
  const [shouldPopulate, setShouldPopulate] = useState(firstRender.current);

  useEffect(() => {
    if (shouldPopulate) {
      editor.update(() => {
        const parser = new DOMParser();
        const dom = parser.parseFromString(state!, "text/html");
        const nodes = $generateNodesFromDOM(editor, dom);

        const selection = $getRoot().select();
        selection.insertNodes(nodes);

        editor.dispatchCommand(CLEAR_HISTORY_COMMAND, undefined);
        setShouldPopulate(false);
        firstRender.current = false;
      });
    }
  }, []);

  return null;
}
