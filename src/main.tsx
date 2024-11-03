/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// setupEnv must load before App because lexical computes CAN_USE_BEFORE_INPUT
// at import time (disableBeforeInput is used to test legacy events)

import setupEnv from "./setupEnv";
import "./index.css";

import { createRoot } from "react-dom/client";

import App from "./App";

if (setupEnv.disableBeforeInput) {
  // vite is really aggressive about tree-shaking, this
  // ensures that the side-effects of importing setupEnv happens
}

// Handle runtime errors
const showErrorOverlay = (err: Event) => {
  const ErrorOverlay = customElements.get("vite-error-overlay");
  if (!ErrorOverlay) {
    return;
  }
  const overlay = new ErrorOverlay(err);
  const body = document.body;
  if (body !== null) {
    body.appendChild(overlay);
  }
};

window.addEventListener("error", showErrorOverlay);
window.addEventListener("unhandledrejection", ({ reason }) =>
  showErrorOverlay(reason)
);

createRoot(document.getElementById("root") as HTMLElement).render(
  <div style={{ display: "flex", flexDirection: "column" }}>
    <App />
    <div>
      <div
        dangerouslySetInnerHTML={{
          // __html: `<p class="PlaygroundEditorTheme__paragraph" dir="ltr"><span style="white-space: pre-wrap;">fsffksldkvv</span></p><p class="PlaygroundEditorTheme__paragraph" dir="ltr"><span style="white-space: pre-wrap;">I made the pictre smaller</span></p><p class="PlaygroundEditorTheme__paragraph" dir="ltr"><span style="white-space: pre-wrap;">Georgia font</span></p><p class="PlaygroundEditorTheme__paragraph"><br></p><div data-lexical-layout-container="true" style="grid-template-columns: 1fr 2fr 1fr;"><div class="PlaygroundEditorTheme__layoutItem"><p class="PlaygroundEditorTheme__paragraph"><br></p><p class="PlaygroundEditorTheme__paragraph" dir="ltr"><span style="white-space: pre-wrap;">sfasf</span></p><p class="PlaygroundEditorTheme__paragraph" dir="ltr"><br></p></div><div class="PlaygroundEditorTheme__layoutItem"><p class="PlaygroundEditorTheme__paragraph"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/640px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg" alt="" width="201" height="134.10217254638673"></p></div><div class="PlaygroundEditorTheme__layoutItem"><p class="PlaygroundEditorTheme__paragraph"><br></p></div></div><p class="PlaygroundEditorTheme__paragraph"><a href="https://" rel="noreferrer" class="PlaygroundEditorTheme__link"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/640px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg" alt="" width="272" height="181"></a></p><p class="PlaygroundEditorTheme__paragraph" dir="ltr"><br></p><p class="PlaygroundEditorTheme__paragraph"><br></p><div style="display: contents;"></div>`,
          __html: `<p class="PlaygroundEditorTheme__paragraph" dir="ltr"><span style="white-space: pre-wrap;">Content above</span></p><table class="PlaygroundEditorTheme__table"><colgroup><col style="width: 92px;"><col style="width: 92px;"><col style="width: 92px;"></colgroup><tbody><tr><th class="PlaygroundEditorTheme__tableCell PlaygroundEditorTheme__tableCellHeader" style="border: 1px solid black; width: 75px; vertical-align: top; text-align: start; background-color: rgb(242, 243, 245);"><p class="PlaygroundEditorTheme__paragraph"><br></p></th><th class="PlaygroundEditorTheme__tableCell PlaygroundEditorTheme__tableCellHeader" style="border: 1px solid black; width: 75px; vertical-align: top; text-align: start; background-color: rgb(242, 243, 245);"><p class="PlaygroundEditorTheme__paragraph"><br></p></th><th class="PlaygroundEditorTheme__tableCell PlaygroundEditorTheme__tableCellHeader" style="border: 1px solid black; width: 75px; vertical-align: top; text-align: start; background-color: rgb(242, 243, 245);"><p class="PlaygroundEditorTheme__paragraph"><br></p></th></tr><tr><th class="PlaygroundEditorTheme__tableCell PlaygroundEditorTheme__tableCellHeader" style="border: 1px solid black; width: 75px; vertical-align: top; text-align: start; background-color: rgb(242, 243, 245);"><p class="PlaygroundEditorTheme__paragraph"><br></p></th><td class="PlaygroundEditorTheme__tableCell" style="border: 1px solid black; width: 75px; vertical-align: top; text-align: start;"><p class="PlaygroundEditorTheme__paragraph"><br></p></td><td class="PlaygroundEditorTheme__tableCell" style="border: 1px solid black; width: 75px; vertical-align: top; text-align: start;"><p class="PlaygroundEditorTheme__paragraph"><br></p></td></tr><tr><th class="PlaygroundEditorTheme__tableCell PlaygroundEditorTheme__tableCellHeader" style="border: 1px solid black; width: 75px; vertical-align: top; text-align: start; background-color: rgb(242, 243, 245);"><p class="PlaygroundEditorTheme__paragraph"><br></p></th><td class="PlaygroundEditorTheme__tableCell" style="border: 1px solid black; width: 75px; vertical-align: top; text-align: start;"><p class="PlaygroundEditorTheme__paragraph"><br></p></td><td class="PlaygroundEditorTheme__tableCell" style="border: 1px solid black; width: 75px; vertical-align: top; text-align: start;"><p class="PlaygroundEditorTheme__paragraph"><br></p></td></tr></tbody></table><p class="PlaygroundEditorTheme__paragraph" dir="ltr"><span style="white-space: pre-wrap;">Content below</span></p><p class="PlaygroundEditorTheme__paragraph"><br></p>`,
        }}
      ></div>
    </div>
  </div>
);
