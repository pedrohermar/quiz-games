import { checkSlotStatus } from "../../utils/checkSlotStatus";
import "./ProgressBar.scss";
import { Fragment } from "react";

export const ProgressBar = ({ progress, turn }) => {
  return (
    <div className="progress-bar">
      {progress.map((slot, index) => {
        return (
          <Fragment key={index}>
            {index > 0 && <hr />}
            <div
              className={`progress-slot ${checkSlotStatus(slot, index, turn)}`}
            ></div>
          </Fragment>
        );
      })}
    </div>
  );
};
