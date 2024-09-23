// import MainHeader from "./main/main-header";

import MainChart from "./main/main-charts";
import MainHeader from "./main/main-header";
import MainSecHeader from "./main/main-second-header";

export default function Main() {
  return (
    <main className=" pt-[48px] pl-[68px] w-full h-full overflow-y-auto z-10 hidden md:block ">
      <MainHeader />
      <MainSecHeader />
      <MainChart />
    </main>
  );
}
