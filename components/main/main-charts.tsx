import classNames from "classnames";
import Chart1 from "../charts/chart1";
import Chart2 from "../charts/chart2";
import Chart3 from "../charts/chart3";
import Chart4 from "../charts/chart4";
import Chart5 from "../charts/chart5";
import Chart6 from "../charts/chart6";
import MainLeftMenue from "./main-left-menue";

export default function MainChart() {
  return (
    <div className="flex h-full w-full">
      {/* <!-- left menue --> */}
      <MainLeftMenue />

      {/* <!-- charts --> */}
      <div className="w-full p-[20px]">
        {/* <!-- core --> */}
        <div className="w-full">
          <div
            className={classNames(
              // "flex w-full gap-[12px] flex-wrap ",
              "grid lg:grid-cols-[281.75px_281.75px_1fr] gap-[12px] md:grid-cols-2 grid-cols-1  "
              // "grid-cols-[281.75px_281.75px_1fr]"
            )}
          >
            {/* <!-- 1 --> */}
            <Chart1 />
            {/* <!-- 2 --> */}
            <Chart2 />

            {/* <!-- 3 --> */}
            <Chart3 />
          </div>
        </div>
        {/* <!-- second row of charts --> */}
        <div
          className={classNames(
            "h-[400px] w-full pt-[12px]"
            // " h-[400px] grid lg:grid-cols-[266px_281.75px_1fr] gap-[12px] md:grid-cols-2 grid-cols-1  pt-[12px]"
          )}
        >
          {/* <!-- container --> */}
          <div
            className={classNames(
              // "flex items-center gap-[12px] flex-wrap ",
              " h-[400px] grid lg:grid-cols-[266px_281.75px_1fr] gap-[12px] md:grid-cols-2 grid-cols-1 "
            )}
          >
            {/* <!-- 1 --> */}
            <Chart4 />

            {/* <!-- 2 --> */}
            <Chart5 />

            {/* <!-- 3 --> */}

            <Chart6 />
          </div>
        </div>
      </div>
    </div>
  );
}
