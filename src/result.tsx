import React, { useState } from "react";
import ReactDOM from "react-dom";
import { IAnswer } from "./testPage";
import { Verb } from "./verbsArray";
import testPage from "./styles/testPage.module.css";

interface IProps {
  verbsCount: number;
  grate: number;
  userAnswerArray: IAnswer[];
  verbsArray: Verb[] | undefined;
}

export let Result: React.FC<IProps> = (props) => {
  return (
    <div className={testPage.resultsBlock}>
      <div className={testPage.grate}>
        Grate: {props.grate} / {props.verbsCount}{" "}
        {`( ${Math.round((props.grate / props.verbsCount) * 10000) / 100}%)`}
      </div>
      <div className={testPage.verbs}>
        {props.userAnswerArray.map((el) => (
          <div
            className={testPage.resultBlock}
            key={el.id}
            style={{
              border: `2px solid ${
                el.sndAnswerForm !== props.verbsArray?.[el.id].sndVerbForm ||
                el.trdAnswerForm !== props.verbsArray?.[el.id].trdVerbForm
                  ? "red"
                  : "green"
              }`,
            }}
          >
            <span className={testPage.resultBlockProp}>
              {props.verbsArray?.[el.id].fstVerbForm}
            </span>
            <span
              className={testPage.resultBlockProp}
              style={{
                margin: "10px",
                border: `2px solid ${
                  el.sndAnswerForm == props.verbsArray?.[el.id].sndVerbForm
                    ? "green"
                    : "red"
                }`,
                color: `${
                  el.sndAnswerForm == props.verbsArray?.[el.id].sndVerbForm
                    ? "green"
                    : "red"
                }`,
              }}
            >
              {`${el.sndAnswerForm}${
                el.sndAnswerForm !== props.verbsArray?.[el.id].sndVerbForm
                  ? ` (${props.verbsArray?.[el.id].sndVerbForm})`
                  : ""
              }`}
            </span>
            <span
              className={testPage.resultBlockProp}
              style={{
                margin: "10px",
                border: `2px solid ${
                  el.trdAnswerForm == props.verbsArray?.[el.id].trdVerbForm
                    ? "green"
                    : "red"
                }`,
                color: `${
                  el.trdAnswerForm == props.verbsArray?.[el.id].trdVerbForm
                    ? "green"
                    : "red"
                }`,
              }}
            >
              {`${el.trdAnswerForm}${
                el.trdAnswerForm !== props.verbsArray?.[el.id].trdVerbForm
                  ? ` (${props.verbsArray?.[el.id].trdVerbForm})`
                  : ""
              }`}
            </span>
            <span className={testPage.resultBlockProp}>
              {props.verbsArray?.[el.id].translateVerb}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
