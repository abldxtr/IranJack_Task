import Chart1Sm from "./charts/chart1-sm";
import Chart2 from "./charts/chart2";
import Chart3 from "./charts/chart3";
import Chart4 from "./charts/chart4";
import Chart5 from "./charts/chart5";
import Chart6 from "./charts/chart6";

export default function MainSm() {
  return (
    <main className="z-10 mb-[86px] h-full w-full pt-[88px] md:hidden block ">
      <div className="flex h-full w-full flex-col gap-y-[16px] p-[16px]">
        {/* <!-- 1 --> */}

        <Chart1Sm />
        {/* <!-- 2 --> */}
        {/* <Chart1Sm /> */}
        <Chart2 />
        {/* 3 */}
        {/* <Chart1Sm /> */}
        <Chart3 />
        {/* 4 */}
        <Chart4 />

        {/* 5 */}
        <Chart5 />

        {/* 6 */}
        <Chart6 />
      </div>
    </main>
  );
}
