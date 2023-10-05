//@ts-nocheck
"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./UsersBlock.module.scss";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import clsx from "clsx";

import "core-js/stable";
import "regenerator-runtime/runtime";

interface TextProps {}

const UsersBlock: React.FC<TextProps> = ({}) => {
  const [micState, setMicState] = useState(false); // false - off; true - on
  console.log(micState);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const onStartListen = () => {
    if (micState) {
      if (browserSupportsContinuousListening) {
        SpeechRecognition.startListening({ continuous: true });
      } else {
        SpeechRecognition.startListening();
      }
    } else {
      console.log("Ваш микрофон выключен");
    }
  };

  return (
    <div className={styles.user}>
      <div className={styles.user__block}>
        <div className={styles.user__avatar}>
          <Image
            src="/avatar.jpg"
            alt="User Avatar"
            height={120}
            width={100}
            priority={true}
          />
        </div>

        <div className={styles.user__bottomPanel}>
          <div
            className={styles.user__nickname}
          >{`broke.oli: ${transcript}`}</div>
          <div
            className={clsx(styles.user__micImageBlock, {
              [styles.micoff]: !micState,
            })}
          >
            <Image
              className={styles.user__micro}
              onClick={() => setMicState((mic) => !mic)}
              src="/microphone.svg"
              alt="Microphone"
              width={50}
              height={50}
            />
          </div>
        </div>

        <div>
          <p>Microphone: {listening ? "on" : "off"}</p>
          <button onClick={() => onStartListen()}>Start</button>
          <button onClick={SpeechRecognition.stopListening}>Stop</button>
          <button onClick={resetTranscript}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default UsersBlock;
