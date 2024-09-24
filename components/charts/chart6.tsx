import { Icons } from "../Icons";
import { Shape2 } from "./shape2";
import { Shape6 } from "./shape6";

export default function Chart6() {
  return (
    <div className="h-[368px] shrink-0 grow rounded-[8px] lg:max-w-[450px] basis-full lg:col-span-1 sm:col-span-full bg-white p-[16px] [box-shadow:_0px_2px_4px_0px_rgba(0,_0,_0,_0.14),_0px_0px_2px_0px_rgba(0,_0,_0,_0.12);]">
      <div className="flex h-full w-full flex-col">
        {/* <!-- title --> */}
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <div className="text-[14px] font-bold leading-[20px] text-[#242424]">
              Chart 6
            </div>
            <div className="text-[12px] font-normal leading-[16px] text-[#616161]">
              Description
            </div>
          </div>
          {/* <!-- icon --> */}
          <div>
            <Icons.threeDotChart />
          </div>
        </div>
        {/* <!-- days items with chart --> */}
        <div className="h-full w-full">
          <div className="flex h-full w-full shrink-0 flex-col gap-y-[16px] pt-[12px]">
            {/* <!-- days --> */}
            <div className="flex items-center gap-x-2">
              <div className="relative text-[14px] font-semibold leading-[20px] text-[#242424]">
                <div className="absolute -bottom-1 h-[2px] w-full bg-[#5B5FC7]"></div>
                First tab
              </div>
              <div className="text-[14px] font-normal leading-[20px] text-[#424242]">
                Second tab
              </div>
              <div className="text-[14px] font-normal leading-[20px] text-[#424242]">
                Third tab
              </div>
            </div>
            {/* <!-- chart --> */}
            <div className="h-full ">
              <Shape6 />
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
