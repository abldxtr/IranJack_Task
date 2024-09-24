import { Icons } from "../Icons";
import { Shape4 } from "./shape4";

export default function Chart4() {
  return (
    <div className="h-[368px] shrink-0 grow lg:basis-[266px] basis-full rounded-[8px] bg-white p-[16px] [box-shadow:_0px_2px_4px_0px_rgba(0,_0,_0,_0.14),_0px_0px_2px_0px_rgba(0,_0,_0,_0.12);]">
      <div className="flex h-full w-full flex-col">
        {/* <!-- title --> */}
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <div className="text-[14px] font-bold leading-[20px] text-[#242424]">
              Chart 4
            </div>
            <div className="text-[12px] font-normal leading-[16px] text-[#616161]">
              Description
            </div>
          </div>
          {/* <!-- icon --> */}
          <div className="flex items-center">
            {/* <!-- 1 --> */}
            <div></div>
            {/* <!-- 2 --> */}
            {/* <!-- 3 --> */}
            {/* <!-- 4 --> */}
            <div>
              <Icons.threeDotChart />
            </div>
          </div>
        </div>
        {/* <!-- days items with chart --> */}
        <div className="h-full w-full">
          <div className="flex h-full w-full shrink-0 flex-col gap-y-[16px] pt-[12px]">
            {/* <!-- chart --> */}
            <div className="sm:h-full w-full h-[calc(100%_-_20px)]  ">
              <Shape4 />
            </div>

            {/* <!-- view details --> */}
            <div className="ml-auto md:ml-[0px] mt-auto text-[14px] font-normal leading-[20px] text-[#5B5FC7]">
              View details
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
