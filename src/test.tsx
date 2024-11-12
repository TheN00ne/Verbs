import React from "react";
import ReactDOM from "react-dom";
import { Verb } from "./verbsArray";
import { IAnswer } from "./testPage";
import testPage from "./styles/testPage.module.css";

interface IProps {
  randomVerbsArr: Verb[];
  passedVerbsCount: number;
  setPassedVerbsCount: (passedVerbsCount: number) => void;
  sndVebrFormValue: string;
  setSndVebrFormValue: (sndVebrFormValue: string) => void;
  trdVebrFormValue: string;
  setTrdVebrFormValue: (trdVebrFormValue: string) => void;
  userAnswerArray: IAnswer[];
  setUserAnswerArray: (userAnswerArray: IAnswer[]) => void;
  verbsCount: number;
  grate: number;
  setGrate: (grate: number) => void;
  isFinished: boolean;
  setIsFinished: (isFinished: boolean) => void;
}

export let Test: React.FC<IProps> = (props) => {
  return (
    <div className={testPage.testZone}>
      <div className={testPage.verbsBlock}>
        <div className={testPage.verbBlock}>
          {props.randomVerbsArr[props.passedVerbsCount].fstVerbForm}
        </div>
        <input
          className={testPage.verbBlock}
          type="text"
          value={props.sndVebrFormValue}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            props.setSndVebrFormValue(e.target.value);
          }}
        ></input>
        <input
          className={testPage.verbBlock}
          type="text"
          value={props.trdVebrFormValue}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            props.setTrdVebrFormValue(e.target.value);
          }}
        ></input>
        <div className={testPage.verbBlock}>
          {props.randomVerbsArr?.[props.passedVerbsCount].translateVerb}
        </div>
      </div>
      <div className={testPage.btnsBlock}>
        <div
          style={{ backgroundColor: "red" }}
          className={testPage.btnBlock}
          onClick={() => {
            props.setUserAnswerArray([
              ...props.userAnswerArray,
              {
                id: Number(props.randomVerbsArr?.[props.passedVerbsCount].id),
                sndAnswerForm: "skip",
                trdAnswerForm: "skip",
              },
            ]);
            props.setPassedVerbsCount(props.passedVerbsCount + 1);
            props.setSndVebrFormValue("");
            props.setTrdVebrFormValue("");
            {
              props.passedVerbsCount == props.verbsCount - 1
                ? props.setIsFinished(true)
                : props.setIsFinished(false);
            }
          }}
        >
          Skip
        </div>
        <div
          style={{ backgroundColor: "lime" }}
          className={testPage.btnBlock}
          onClick={() => {
            props.setUserAnswerArray([
              ...props.userAnswerArray,
              {
                id: Number(props.randomVerbsArr?.[props.passedVerbsCount].id),
                sndAnswerForm: props.sndVebrFormValue.trim().toLowerCase(),
                trdAnswerForm: props.trdVebrFormValue.trim().toLowerCase(),
              },
            ]);
            props.setPassedVerbsCount(props.passedVerbsCount + 1);
            props.setSndVebrFormValue("");
            props.setTrdVebrFormValue("");
            if (
              props.sndVebrFormValue.trim().toLowerCase() ==
                props.randomVerbsArr?.[props.passedVerbsCount].sndVerbForm &&
              props.trdVebrFormValue.trim().toLowerCase() ==
                props.randomVerbsArr?.[props.passedVerbsCount].trdVerbForm
            ) {
              props.setGrate(props.grate + 1);
            } else if (
              props.sndVebrFormValue.trim().toLowerCase() ==
                props.randomVerbsArr?.[props.passedVerbsCount].sndVerbForm ||
              props.trdVebrFormValue.trim().toLowerCase() ==
                props.randomVerbsArr?.[props.passedVerbsCount].trdVerbForm
            ) {
              props.setGrate(props.grate + 0.5);
            }
            {
              props.passedVerbsCount == props.verbsCount - 1
                ? props.setIsFinished(true)
                : props.setIsFinished(false);
            }
          }}
        >
          {props.passedVerbsCount == props.verbsCount - 1 ? "Done" : "Next"}
        </div>
      </div>
    </div>
  );
};
