import { checkSlotStatus } from "../../utils/checkSlotStatus";
import "./ProgressBar.scss";

export const ProgressBar = ({ progress, turn }) => {
  return (
    <div className="progress-bar">
      {progress.map((slot, index) => {
        return (
          <>
            {index > 0 && <hr />}
            <div
              key={index}
              className={`progress-slot ${checkSlotStatus(slot, index, turn)}`}
            ></div>
          </>
        );
      })}
    </div>
  );
};
