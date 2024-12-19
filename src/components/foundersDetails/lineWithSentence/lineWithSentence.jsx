import React from "react";

function LineWithSentence({ words, lineFirst, fontSize = "text-xxl" }) {
  return (
    <>
      <div className={`flex  justify-end text-gold ${fontSize}  font-bold items-center gap-5`}>
        {lineFirst ? (
          <>
            <div className="w-24 h-4 bg-gold"></div>
            <div className="leading-9">
              {words.map((word, index) => (
                <React.Fragment key={index}>
                  <p>{word} </p>
                </React.Fragment>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="leading-9">
              {words.map((word, index) => (
                <React.Fragment key={index}>
                  <p>{word} </p>
                </React.Fragment>
              ))}
            </div>
            <div className="w-24 h-4  bg-gold"></div>
          </>
        )}
      </div>
    </>
  );
}

export default LineWithSentence;
