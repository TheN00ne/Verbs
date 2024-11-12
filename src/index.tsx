import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./mainPage";
import { TestPage } from "./testPage";
import { Verb } from "./verbsArray";
import { verbsArray } from "./verbsArray";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export interface IProps {
  verbsCount: number;
  setVerbsCount?: (verbsCount: number) => void;
  verbsArray?: Verb[];
  alpha: boolean;
  setAlpha: (alpha: boolean) => void;
}

let App: React.FC = () => {
  let [verbsCount, setVerbsCount] = useState(5);
  let [alpha, setAlpha] = useState(false);

  return (
    <>
      <h1
        style={{
          position: "absolute",
          width: "100%",
          top: "80px",
          fontSize: "60px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Verbs
      </h1>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                verbsCount={verbsCount}
                setVerbsCount={setVerbsCount}
                alpha={alpha}
                setAlpha={setAlpha}
              />
            }
          />
          <Route
            path="/test"
            element={
              <TestPage
                verbsCount={verbsCount}
                verbsArray={verbsArray}
                alpha={alpha}
                setAlpha={setAlpha}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

root.render(<App />);
