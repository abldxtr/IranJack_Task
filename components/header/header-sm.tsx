import { Icons } from "../Icons";
import TabSm from "./tab-sm";

export default function HeaderSm() {
  return (
    <header className="fixed md:hidden top-0 z-20  bg-white w-full  ">
      {/* <!-- 1 --> */}
      <div className="flex h-[44px] w-full items-center justify-between px-[16px]">
        {/* <!-- avatar and name --> */}
        <div className="flex items-center gap-x-[10px]">
          <div className="size-[32px] rounded-full overflow-hidden ">
            <Icons.imageSm />
          </div>
          <div className="text-[26px] font-bold leading-[26px] tracking-[0.33px] text-[#242424]">
            Van Arsdel
          </div>
        </div>

        {/* <!-- right option --> */}

        <div className="flex items-center gap-x-[20px]">
          {/* <!-- blue icon --> */}
          <div>
            <Icons.blueIcon />
          </div>

          {/* <!-- three dot --> */}
          <div>
            <Icons.threeDotS />
          </div>
        </div>
      </div>
      {/* <!-- 2 --> */}
      <TabSm />
    </header>
  );
}
