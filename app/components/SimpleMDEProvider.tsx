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
           .editor-toolbar button:hover,
           .editor-toolbar button:focus,
           .editor-toolbar button:active {
             color: black; 
           }
           
           .editor-toolbar button.active {
            background: none
           }
           .editor-toolbar button.active:hover {
            background: white
           }
           
          .editor-toolbar.fullscreen button {
            color: black;
          }
          .EasyMDEContainer .CodeMirror {
            background-color: #222;
            color: #fff; 
            caret-color: #fff;
            border-bottom-left-radius: 0px; 
            border-bottom-right-radius: 0px;
            caret-color: #fff !important;
          }
          .editor-preview-full {
            color: black
          }
          .editor-preview-side {
            color: black
          }
        `}
      </style>
      <SimpleMDE placeholder="Description" {...field} ref={ref} />
    </div>
  );
});

SimpleMDEProvider.displayName = "SimpleMDEProvider";

export default SimpleMDEProvider;
