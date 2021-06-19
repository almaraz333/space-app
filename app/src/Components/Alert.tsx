import { useState } from "react";
import { animated, useTransition } from "react-spring";

import "../sass/Alerts.scss";

export type AlertProps = {
  type: string;
  message: string;
};

export default function Alert({ type, message }: AlertProps) {
  //   const [items, setItems] = useState(["yo", "yoyo"]);

  //   const transform = (s: number) => `scale(${s})`;

  //   const transition = useTransition(items, null, {
  //     from: {
  //       opacity: 0,
  //       transform: transform(0.5),
  //       bottom: 0,
  //     },
  //     enter: () => ({
  //       opacity: 1,
  //       transform: transform(1),
  //       bottom: 75,
  //     }),
  //     leave: () => ({
  //       opacity: 0,
  //       bottom: 75,
  //     }),
  //     update: () => ({
  //       opacity: 1,
  //       transform: transform(1),
  //       bottom: 75,
  //     }),
  //   });

  return (
    <div className="alerts">
      {/* <div className="alerts-container">
        {transitions(({ opacity }, item) => (
          <animated.div
            style={{
              opacity: opacity.to(item.op),
              transform: opacity
                .to(item.trans)
                .to((y) => `translate3d(0,${y}px,0)`),
            }}
          >
            <div
              className={`alert px-3 py-2 alert-${type} d-flex align-items-center mb-3`}
            >
              <p className="mb-0 mr-auto">{message}</p>

              <button className="btn btn-outline-dark" onClick={() => {}}>
                Ok
              </button>
            </div>
          </animated.div>
        ))}
      </div> */}
    </div>
  );
}
