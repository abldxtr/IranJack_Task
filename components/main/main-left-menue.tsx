// import { FilesystemItem } from "./FilesystemItem";

import { Icons } from "../Icons";

export default function MainLeftMenue() {
  return (
    <ul className="h-full w-[183px] border-r border-[#E0E0E0] shrink-0 hidden xl:block">
      <div className="pt-[20px] px-[4px]  ">
        <div className="flex h-full w-full flex-col gap-[2px]  ">
          {/* <!-- 1 --> */}
          <div className="flex items-center ">
            <div>
              <Icons.ChevronBlack />
            </div>
            <div className="text-[14px] px-[6px] py-[10px]  font-normal leading-[20px] text-[#424242]">
              Group title
            </div>
          </div>
          {/* <!-- 2 --> */}
          <div className="flex items-center  pl-[24px]">
            <div>
              <Icons.ChevronBlack />
            </div>
            <div className="text-[14px] font-normal px-[6px] py-[10px]  leading-[20px] text-[#424242]">
              Option
            </div>
          </div>
          {/* <!-- 3 --> */}
          <div className="flex h-[32px] w-[175px] items-center  rounded-[4px] bg-[#EBEBEB] pl-[24px]">
            <div>
              <Icons.ChevronBlack />
            </div>
            <div className="text-[14px] font-normal px-[6px] py-[10px]  leading-[20px] text-[#424242]">
              Option
            </div>
          </div>
          {/* <!-- items --> */}
          <div className="flex w-full flex-col gap-[2px] pl-[24px]">
            {/* <!-- 1 --> */}
            <div className="flex items-center  pl-[24px]">
              <div>
                <Icons.ChevronBlack />
              </div>
              <div className="text-[14px] font-normal px-[6px] py-[10px]  leading-[20px] text-[#424242]">
                Item
              </div>
            </div>
            {/* <!-- 2 --> */}
            <div className="flex items-center  pl-[24px]">
              <div>
                <Icons.ChevronBlack />
              </div>
              <div className="text-[14px] font-normal px-[6px] py-[10px]  leading-[20px] text-[#424242]">
                Item
              </div>
            </div>
            {/* <!-- 3 --> */}
            <div className="flex items-center  pl-[24px]">
              <div>
                <Icons.ChevronBlack />
              </div>
              <div className="text-[14px] font-normal px-[6px] py-[10px]  leading-[20px] text-[#424242]">
                Item
              </div>
            </div>
            {/* <!-- 4 --> */}
            <div className="flex items-center  pl-[24px]">
              <div>
                <Icons.ChevronBlack />
              </div>
              <div className="text-[14px] font-normal px-[6px] py-[10px]  leading-[20px] text-[#424242]">
                Item
              </div>
            </div>
            {/* <!-- 5 --> */}
            <div className="flex items-center  pl-[24px]">
              <div>
                <Icons.ChevronBlack />
              </div>
              <div className="text-[14px] font-normal px-[6px] py-[10px]  leading-[20px] text-[#424242]">
                Item
              </div>
            </div>
          </div>
        </div>
      </div>
    </ul>
  );
}
