import { Icons } from "../Icons";
import RadioText, { RadioButton } from "./radio-input";

export default function MainSecHeader() {
  return (
    <div className="h-[48px] w-full shrink-0 border-b border-[#E0E0E0] bg-white px-[20px]">
      <div className="flex h-full w-full items-center justify-between">
        {/* <!-- left --> */}
        <div className="flex h-full items-center gap-x-[12px]">
          {/* <!-- left hamberger and buttom --> */}
          <div className="flex h-full w-full items-center gap-x-[8px]">
            {/* <!-- icon --> */}
            <div>
              <Icons.hamberger />
            </div>
            {/* <!-- button --> */}
            <RadioButton />
          </div>
          {/* <!-- checkbox items --> */}
          <div className="flex items-center space-x-4 divide-x-2">
            {/* <!-- first --> */}
            <div className="flex items-center gap-x-5">
              {/* <!-- 1 --> */}
              <RadioText />
              {/* <!-- 2 --> */}
              <RadioText />
            </div>
            {/* <!-- second --> */}
            <div className=" items-center gap-x-5 pl-[12px] hidden  xl:flex">
              {/* <!-- 1 --> */}
              <RadioText />

              {/* <!-- 2 --> */}
              <RadioText />

              {/* <!-- 3 --> */}
              <RadioText />
            </div>

            {/* <!-- third --> */}
            <div className="md:flex items-center gap-x-5 pl-[12px] hidden  ">
              {/* <!-- 1 --> */}
              <RadioText />

              {/* <!-- 2 --> */}
              <RadioText />
            </div>
          </div>
        </div>
        {/* <!-- right --> */}
        <div className=" hidden lg:block ">
          <div className="flex items-center gap-x-[20px]">
            <div className="text-[14px] font-semibold leading-[20px] text-[#424242]">
              Filter
            </div>
            {/* <!-- searchBar --> */}
            <div className="relative flex h-[32px] w-[200px] items-center rounded-[4px] border border-b border-[#D1D1D1] border-b-[#616161] px-[10px] [box-shadow:_0px_1px_2px_0px_rgba(0,_0,_0,_0.14),_0px_0px_3px_0px_rgba(0,_0,_0,_0.12);]">
              {/* <!-- icon --> */}
              <div className="mr-[2px]">
                <Icons.search />
              </div>

              {/* <!-- input --> */}
              <div className="px-[2px] pb-[7px] pt-[5px]">
                <input
                  type="text"
                  placeholder="Find"
                  className="h-[20px] w-full outline-none placeholder:text-[14px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-[#707070]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
