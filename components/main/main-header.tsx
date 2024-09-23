import { Icons } from "../Icons";

export default function MainHeader() {
  return (
    <div className="h-[60px] w-full shrink-0 border-b border-[#E0E0E0] bg-white px-[20px]">
      <div className="flex h-full w-full items-center justify-between">
        {/* <!-- left --> */}

        <div className="flex items-center gap-x-[14px]">
          <div className="flex items-center gap-x-2">
            {/* <!-- logo --> */}
            <div className=" size-[32px] ">
              <Icons.logoVan />
            </div>
            {/* <!-- text --> */}
            <div className="text-[18px] font-bold leading-[24px]">
              Van Arsdel
            </div>
          </div>
          {/* <!-- menues item --> */}
          <div className="flex items-center gap-x-[12px]">
            <div className="relative text-[14px] font-semibold leading-[20px] text-[#242424]">
              Home
              <div className="absolute -bottom-5 h-1 w-full rounded-t-md bg-[#5B5FC7]"></div>
            </div>
            <div className="text-[14px] font-normal leading-[20px] text-[#424242]">
              Timeline
            </div>
            <div className="text-[14px] font-normal leading-[20px] text-[#424242]">
              Chat
            </div>
            <div className="text-[14px] font-normal leading-[20px] text-[#424242]">
              Assigned to you
            </div>
          </div>
        </div>
        {/* <!-- right --> */}
        <div className="flex items-center">
          {/* <!-- icon --> */}
          <div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5156 12C15.2395 12 15.0156 12.2239 15.0156 12.5C15.0156 12.7761 15.2395 13 15.5156 13H18.2929L14.1464 17.1464C13.9512 17.3417 13.9512 17.6583 14.1464 17.8536C14.3417 18.0488 14.6583 18.0488 14.8536 17.8536L19 13.7071V16.4844C19 16.7605 19.2239 16.9844 19.5 16.9844C19.7761 16.9844 20 16.7605 20 16.4844V12.5C20 12.2239 19.7761 12 19.5 12H15.5156ZM18.7656 23C20.0136 23 21.0481 22.0855 21.2354 20.8901C22.2572 20.5761 23 19.6248 23 18.5V11.5C23 10.1193 21.8807 9 20.5 9H13.5C12.3632 9 11.4036 9.75875 11.1001 10.7974C9.90947 10.9889 9 12.021 9 13.2656V19.5C9 21.433 10.567 23 12.5 23H18.7656ZM10 13.2656C10 12.6125 10.4174 12.0569 11 11.851V18.5C11 19.8807 12.1193 21 13.5 21H20.1803C19.9744 21.5826 19.4187 22 18.7656 22H12.5C11.1193 22 10 20.8807 10 19.5V13.2656ZM13.5 10H20.5C21.3284 10 22 10.6716 22 11.5V18.5C22 19.3284 21.3284 20 20.5 20H13.5C12.6716 20 12 19.3284 12 18.5V11.5C12 10.6716 12.6716 10 13.5 10Z"
                fill="#424242"
              />
            </svg>
          </div>
          {/* <!-- icone three dots --> */}
          <div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.25 16C12.25 16.6904 11.6904 17.25 11 17.25C10.3096 17.25 9.75 16.6904 9.75 16C9.75 15.3096 10.3096 14.75 11 14.75C11.6904 14.75 12.25 15.3096 12.25 16ZM17.25 16C17.25 16.6904 16.6904 17.25 16 17.25C15.3096 17.25 14.75 16.6904 14.75 16C14.75 15.3096 15.3096 14.75 16 14.75C16.6904 14.75 17.25 15.3096 17.25 16ZM21 17.25C21.6904 17.25 22.25 16.6904 22.25 16C22.25 15.3096 21.6904 14.75 21 14.75C20.3096 14.75 19.75 15.3096 19.75 16C19.75 16.6904 20.3096 17.25 21 17.25Z"
                fill="#424242"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
