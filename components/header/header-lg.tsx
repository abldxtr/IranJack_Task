import { Icons } from "../Icons";

export default function HeaderLg() {
  return (
    <header className="h-[48px] w-full shrink-0 border-b border-black/5 bg-[#F0F0F0] md:fixed md:block top-0 z-20 hidden ">
      <div className="flex h-full w-full items-center justify-between">
        {/* <!-- 1 --> */}
        <div className="ml-[22px]">
          <Icons.Blogo />
        </div>

        {/* <!-- 2 --> */}
        <div className="flex items-center gap-x-[16px] ">
          {/* <!-- chev icone --> */}
          <div className="flex items-center">
            <div className=" p-[6px] ">
              <Icons.leftArrow />
            </div>
            <div className=" p-[6px] ">
              <Icons.rightArrow />
            </div>
          </div>
          {/* <!-- search input --> */}
          <div className="relative flex h-[32px] w-[466px] items-center rounded-[4px] border border-b border-[#D1D1D1] bg-white px-[10px] [box-shadow:_0px_1px_2px_0px_rgba(0,_0,_0,_0.14),_0px_0px_3px_0px_rgba(0,_0,_0,_0.12);]">
            <div className="mr-[8px]">
              <Icons.search />
            </div>

            {/* <!-- input --> */}
            <div className="w-full px-[2px] pb-[7px] pt-[5px]">
              <input
                type="text"
                placeholder="Search"
                className="h-[20px] w-full outline-none placeholder:text-[14px] placeholder:font-normal placeholder:leading-[20px] placeholder:text-[#707070]"
              />
            </div>
          </div>
        </div>

        {/* <!-- 3 --> */}
        <div className="flex items-center">
          {/* <!-- icon three dots --> */}
          <div>
            <Icons.threeDot />
          </div>
          {/* <!-- avatar --> */}
          <div className="mx-[8px] size-[32px] rounded-full relative   ">
            <div className=" size-[32px] rounded-full overflow-hidden ">
              <Icons.image />
            </div>
            <div className=" absolute top-4 -right-1 size-[10px] rounded-full  [&_svg]:shrink-0 ">
              <Icons.greenArrow />
            </div>
          </div>
          {/* <!-- other icons --> */}
          <div className="flex items-center">
            <div>
              <Icons.hLine />
            </div>
            <div>
              <Icons.cube />
            </div>
            <div>
              <Icons.close />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
