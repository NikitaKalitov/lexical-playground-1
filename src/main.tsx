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

import * as React from "react";
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
          __html: `<p class="PlaygroundEditorTheme__paragraph" dir="ltr"><span style="white-space: pre-wrap;">fsffksldkvv</span></p><p class="PlaygroundEditorTheme__paragraph" dir="ltr"><span style="white-space: pre-wrap;">I made the pictre smaller</span></p><p class="PlaygroundEditorTheme__paragraph" dir="ltr"><span style="white-space: pre-wrap;">Georgia font</span></p><p class="PlaygroundEditorTheme__paragraph"><br></p><div data-lexical-layout-container="true" style="grid-template-columns: 1fr 2fr 1fr;"><div class="PlaygroundEditorTheme__layoutItem"><p class="PlaygroundEditorTheme__paragraph"><br></p><p class="PlaygroundEditorTheme__paragraph" dir="ltr"><span style="white-space: pre-wrap;">sfasf</span></p><p class="PlaygroundEditorTheme__paragraph" dir="ltr"><br></p></div><div class="PlaygroundEditorTheme__layoutItem"><p class="PlaygroundEditorTheme__paragraph"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/640px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg" alt="" width="201" height="134.10217254638673"></p></div><div class="PlaygroundEditorTheme__layoutItem"><p class="PlaygroundEditorTheme__paragraph"><br></p></div></div><p class="PlaygroundEditorTheme__paragraph"><a href="https://" rel="noreferrer" class="PlaygroundEditorTheme__link"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/640px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg" alt="" width="272" height="181"></a></p><p class="PlaygroundEditorTheme__paragraph" dir="ltr"><br></p><p class="PlaygroundEditorTheme__paragraph"><br></p><div style="display: contents;"></div>`,
        }}
      ></div>
    </div>
  </div>
);
