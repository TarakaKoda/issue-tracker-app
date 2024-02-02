"use client";

import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import React from "react";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

interface Props {
  field: any;
}

const SimpleMDEProvider = React.forwardRef(({ field }: Props, ref) => {
  return (
    <div className="min-h-[22rem]">
      <style>
        {`
          /* Override hover color for SimpleMDE buttons */
          .editor-toolbar button:hover {
            color: black; /* Change to your desired hover color */
          }
          .editor-toolbar.fullscreen button {
            color: black; /* Change to your desired color for buttons in full-screen mode */
          }
          .EasyMDEContainer .CodeMirror {
            background-color: #222;
            color: #fff; /* Change to your desired background color */
            caret-color: #fff;
            border-bottom-left-radius: 0px; 
            border-bottom-right-radius: 0px;
            caret-color: #fff !important;
          }
        `}
      </style>
      <SimpleMDE placeholder="Description" {...field} ref={ref} />
    </div>
  );
});

SimpleMDEProvider.displayName = 'SimpleMDEProvider';

export default SimpleMDEProvider;
