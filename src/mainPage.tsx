import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { IProps } from "./index";
import mainPage from "./styles/mainPage.module.css";

export let MainPage: React.FC<IProps> = (props) => {
  let nav = useNavigate();

  let startTest = () => {
    props.setAlpha(true);
    nav("/test");
  };

  let setVerbsCount = (value: number): void => {
    props.setVerbsCount?.(value);
  };

  return (
    <div className={mainPage.mainBlock}>
      <div className={mainPage.block}>
        <input
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setVerbsCount(Number(e.currentTarget.value))
          }
          type="number"
          value={props.verbsCount}
          min={5}
          max={124}
        />
        {props.verbsCount >= 5 && props.verbsCount <= 124 ? (
          <button onClick={startTest}>Start</button>
        ) : (
          <button>-----</button>
        )}
      </div>
    </div>
  );
};
