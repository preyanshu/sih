import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "./logsbox.css"

const LogBox = ({ logs }) => {
  return (
    <div  className="log-box mt-4" style={{ backgroundColor: 'black', padding: '20px', borderRadius: '5px', fontFamily: 'monospace', whiteSpace: 'pre-wrap', overflow: 'auto', height: '50vh' ,width:"50vw",border:"wpx solid",border:"1px solid white"}}>
      {logs.map((log, index) => {
        let style;
        switch (log.type) {
          case "error":
            style = { color: 'red' };
            break;
          case "success":
            style = { color: 'green' };
            break;
          case "info":
            style = { color: 'white' };
            break;
          default:
            style = {};
        }
        return (
          <SyntaxHighlighter key={index} language="plain" style={{ ...materialDark, ...style }}>
            {"> " + log.logs}
          </SyntaxHighlighter>
        );
      })}
    </div>
  );
};

export default LogBox;
