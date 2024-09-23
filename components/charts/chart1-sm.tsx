import { Shape1 } from "./shape1";

export default function Chart1Sm() {
  return (
    <div className="h-[368px] shrink-0 basis-[281.75px] rounded-[8px] p-[16px] [box-shadow:_0px_2px_4px_0px_rgba(0,_0,_0,_0.14),_0px_0px_2px_0px_rgba(0,_0,_0,_0.12);]">
      <div className="flex h-full w-full flex-col">
        {/* <!-- title --> */}
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <div className="text-[14px] font-bold leading-[20px] text-[#242424]">
              Chart 1
            </div>
            {/* <!-- <div className="text-[12px] font-normal leading-[16px] text-[#616161]">Description</div> --> */}
          </div>
          {/* <!-- icon --> */}
          <div>
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 16C13 16.6904 12.4404 17.25 11.75 17.25C11.0596 17.25 10.5 16.6904 10.5 16C10.5 15.3096 11.0596 14.75 11.75 14.75C12.4404 14.75 13 15.3096 13 16ZM18 16C18 16.6904 17.4404 17.25 16.75 17.25C16.0596 17.25 15.5 16.6904 15.5 16C15.5 15.3096 16.0596 14.75 16.75 14.75C17.4404 14.75 18 15.3096 18 16ZM21.75 17.25C22.4404 17.25 23 16.6904 23 16C23 15.3096 22.4404 14.75 21.75 14.75C21.0596 14.75 20.5 15.3096 20.5 16C20.5 16.6904 21.0596 17.25 21.75 17.25Z"
                fill="#424242"
              />
            </svg>
          </div>
        </div>
        {/* <!-- days items with chart --> */}
        <div className="h-full w-full">
          <div className="flex h-full w-full shrink-0 flex-col gap-y-[20px] pt-[20px]">
            {/* <!-- days --> */}
            <div className="flex items-center justify-center gap-x-2">
              <div className="relative text-[14px] font-semibold leading-[20px] text-[#242424]">
                <div className="absolute -bottom-1 h-[2px] w-full bg-[#5B5FC7]"></div>
                7 days
              </div>
              <div className="text-[14px] font-normal leading-[20px] text-[#424242]">
                30 days
              </div>
              <div className="text-[14px] font-normal leading-[20px] text-[#424242]">
                60 days
              </div>
            </div>
            {/* <!-- chart --> */}
            <div className="h-full mx-auto w-full ">
              <Shape1 />
            </div>

            {/* <!-- view details --> */}
            <div className="ml-auto mt-auto text-[14px] font-normal leading-[20px] text-[#5B5FC7]">
              View details
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
