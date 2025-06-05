"use client";
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'; // หรือ theme อื่นๆ เช่น `atom-one-dark`, `github`, `vs2015`

interface CodeBlockProps {
  code: string;
  language?: string; // ประเภทภาษาของโค้ด เช่น 'typescript', 'javascript', 'html'
  showLineNumbers?: boolean; // จะแสดงเลขบรรทัดหรือไม่
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'typescript', // default เป็น typescript
  showLineNumbers = true,
}) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden my-6">
      <div className="bg-gray-800 text-gray-400 text-sm px-4 py-2 flex justify-between items-center">
        <span>{language.toUpperCase()}</span>
        {/* คุณสามารถเพิ่มปุ่ม Copy โค้ดตรงนี้ได้ */}
        <button
          onClick={() => navigator.clipboard.writeText(code)}
          className="text-gray-400 hover:text-white transition-colors duration-200"
        >
          Copy Code
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={dracula} // ใช้ theme ที่เลือก
        showLineNumbers={showLineNumbers}
        wrapLines={true} // ให้โค้ดขึ้นบรรทัดใหม่ถ้ามันยาวเกินหน้าจอ
        customStyle={{
          padding: '20px',
          margin: '0',
          // สามารถปรับแต่งเพิ่มเติมได้ที่นี่ เช่น font size, line height
          fontSize: '0.9rem',
          lineHeight: '1.5',
        }}
        lineProps={{
          style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' },
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;