import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { IProps } from "./index";
import { Test } from "./test";
import { Result } from "./result";
import { Verb } from "./verbsArray";
import { verbsArray } from "./verbsArray";
import testPage from "./styles/testPage.module.css";
import { useNavigate } from "react-router-dom";

export interface IAnswer {
  id: number;
  sndAnswerForm: string;
  trdAnswerForm: string;
}

export let TestPage: React.FC<IProps> = (props) => {
  let [passedVerbsCount, setPassedVerbsCount] = useState(0);
  let [sndVebrFormValue, setSndVebrFormValue] = useState("");
  let [trdVebrFormValue, setTrdVebrFormValue] = useState("");
  let [userAnswerArray, setUserAnswerArray] = useState<IAnswer[]>([]);
  let [grate, setGrate] = useState(0);
  let [isFinished, setIsFinished] = useState(false);
  let [randomVerbArray, setRandomVerbArray] = useState<Verb[]>([
    {
      id: 0,
      fstVerbForm: "bet",
      sndVerbForm: "bet",
      trdVerbForm: "bet",
      translateVerb: "делать ставку",
    },
  ]);

  let nav = useNavigate();

  useEffect(() => {
    let restArray: Verb[] = verbsArray;
    let array: Verb[] = [];
    while (array.length < props.verbsCount) {
      let randId = Math.round(Math.random() * (restArray.length - 1));
      array = [...array, restArray[randId]];
      restArray = restArray.filter((el: Verb) => el !== restArray[randId]);
    }
    setRandomVerbArray(array);
  }, []);

  useEffect(() => {
    if (props.alpha == false) {
      nav("/");
    }
  }, []);

  return (
    <div className={testPage.testBlock}>
      <div className={testPage.passedVerbs}>
        {passedVerbsCount}/{props.verbsCount}
      </div>
      <div className={testPage.block}>
        {!isFinished ? (
          <Test
            randomVerbsArr={randomVerbArray}
            passedVerbsCount={passedVerbsCount}
            setPassedVerbsCount={setPassedVerbsCount}
            sndVebrFormValue={sndVebrFormValue}
            setSndVebrFormValue={setSndVebrFormValue}
            trdVebrFormValue={trdVebrFormValue}
            setTrdVebrFormValue={setTrdVebrFormValue}
            userAnswerArray={userAnswerArray}
            setUserAnswerArray={setUserAnswerArray}
            verbsCount={props.verbsCount}
            grate={grate}
            setGrate={setGrate}
            isFinished={isFinished}
            setIsFinished={setIsFinished}
          />
        ) : (
          <Result
            verbsCount={props.verbsCount}
            grate={grate}
            userAnswerArray={userAnswerArray}
            verbsArray={props.verbsArray}
          />
        )}
      </div>
    </div>
  );
};
