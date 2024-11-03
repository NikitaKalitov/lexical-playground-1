/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { FlashMessageContext } from "./context/FlashMessageContext";
import { SettingsContext, useSettings } from "./context/SettingsContext";
import { SharedAutocompleteContext } from "./context/SharedAutocompleteContext";
import { SharedHistoryContext } from "./context/SharedHistoryContext";
import Editor from "./Editor";
import PlaygroundNodes from "./nodes/PlaygroundNodes";
import { TableContext } from "./plugins/TablePlugin";
import TypingPerfPlugin from "./plugins/TypingPerfPlugin";
import PlaygroundEditorTheme from "./themes/PlaygroundEditorTheme";

console.warn(
  "If you are profiling the playground app, please ensure you turn off the debug view. You can disable it by pressing on the settings control in the bottom-left of your screen and toggling the debug view setting."
);

function App(): JSX.Element {
  const {
    settings: { measureTypingPerf },
  } = useSettings();

  const initialConfig = {
    editorState: null,
    namespace: "Playground",
    nodes: [...PlaygroundNodes],
    onError: (error: Error) => {
      throw error;
    },
    theme: PlaygroundEditorTheme,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <SharedHistoryContext>
        <TableContext>
          <SharedAutocompleteContext>
            <div className="editor-shell">
              <Editor
              // initialState={`<p class="PlaygroundEditorTheme__paragraph" dir="ltr"><span style="white-space: pre-wrap;">fsffksldkvv</span></p><p class="PlaygroundEditorTheme__paragraph"><a href="https://" rel="noreferrer" class="PlaygroundEditorTheme__link"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/640px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg" alt="" width="272" height="181.4715966796875"></a></p><p class="PlaygroundEditorTheme__paragraph" dir="ltr"><span style="font-family: Georgia; white-space: pre-wrap;">I made the pictre smaller</span></p><p class="PlaygroundEditorTheme__paragraph" dir="ltr"><span style="font-family: Georgia; white-space: pre-wrap;">Georgia font</span></p>`}
              />
            </div>
            {measureTypingPerf ? <TypingPerfPlugin /> : null}
          </SharedAutocompleteContext>
        </TableContext>
      </SharedHistoryContext>
    </LexicalComposer>
  );
}

export default function PlaygroundApp(): JSX.Element {
  return (
    <SettingsContext>
      <FlashMessageContext>
        <App />
      </FlashMessageContext>
    </SettingsContext>
  );
}
