"use client";

import "easymde/dist/easymde.min.css";
import { ControllerRenderProps } from "react-hook-form";
import dynamic from "next/dynamic";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

interface Props {
  field: ControllerRenderProps;
}

const SimpleMDEProvider = ({ field }: Props) => {
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
      <SimpleMDE placeholder="Description" {...field} />
    </div>
  );
};

export default SimpleMDEProvider;
