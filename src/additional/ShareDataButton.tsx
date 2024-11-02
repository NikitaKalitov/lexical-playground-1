/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

export const ShareDataButton = ({ onClick }: { onClick: () => void }) => {
  const [data, setData] = React.useState<any>(undefined);

  const transferData = () => {
    const editor1 = document.getElementById(`editor_1`);
    const editor2 = document.getElementById(`editor_2`);
    const editorContent = editor1!.innerHTML;
    const parser = new DOMParser();
    const dom = parser.parseFromString(editorContent, "text/html");
    editor2!.innerHTML = editor1!.innerHTML;
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }} onClick={onClick}>
      Transfer data
    </div>
  );
};
