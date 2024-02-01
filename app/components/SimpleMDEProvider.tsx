"use client";

import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";

const SimpleMDEProvider = () => {

  
  return (
    <div>
      <style>
        {`
          /* Override hover color for SimpleMDE buttons */
          .editor-toolbar button:hover {
            color: black; /* Change to your desired hover color */
          }
          .editor-toolbar.fullscreen button {
            color: black; /* Change to your desired color for buttons in full-screen mode */
          }
          // .EasyMDEContainer .CodeMirror {
          //   background-color: #222;
          //   color: #fff; /* Change to your desired background color */
          //   caret-color: #fff
          //   border: 1px solid #222
          // }
        `}
      </style>
      <SimpleMDE className="" placeholder="Description" />
    </div>
  );
};

export default SimpleMDEProvider;
