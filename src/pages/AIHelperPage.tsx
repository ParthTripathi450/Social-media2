import React from "react";

export const AiHelperPage = () => {
  return (
    <div className="pt-20">
      <h2 className="text-6xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
        AI Helper
      </h2>
      <div className="max-w-2xl mx-auto px-4">
        <iframe
          src="/ai-helper.html"
          title="AI Helper"
          width="100%"
          height="600px"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};
