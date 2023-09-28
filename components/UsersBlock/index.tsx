//@ts-nocheck
"use client";
import Image from "next/image";
import styles from "./UsersBlock.module.scss";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import "regenerator-runtime/runtime";

interface TextProps {}

export const UsersBlock: React.FC<TextProps> = ({}) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className={styles.user}>
      <div className={styles.user__block}>
        <div className={styles.user__avatar}>
          <Image src="/avatar.jpg" alt="User Avatar" height={120} width={100} />
        </div>

        <div className={styles.user__bottomPanel}>
          <div
            className={styles.user__nickname}
          >{`broke.oli: ${transcript}`}</div>
          <Image
            className={styles.user__micro}
            src="/microphone.svg"
            alt="Microphone"
            width={50}
            height={50}
          />
        </div>

        <div>
          <p>Microphone: {listening ? "on" : "off"}</p>
          <button onClick={SpeechRecognition.startListening}>Start</button>
          <button onClick={SpeechRecognition.stopListening}>Stop</button>
          <button onClick={resetTranscript}>Reset</button>
        </div>
      </div>
    </div>
  );
};
