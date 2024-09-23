import { Icons } from "../Icons";

export default function RadioText() {
  return (
    <div className="flex items-center gap-x-[4px] px-[12px] py-[5px] ">
      <input
        type="radio"
        name="text"
        id="text"
        className="size-[20px] border-white accent-[#5B5FC7]"
        // ="true"
      />
      <div className="text-[14px] font-semibold leading-[20px] text-[#424242]">
        Text
      </div>
    </div>
  );
}

export function RadioButton() {
  return (
    <div className="flex items-center gap-[4px] rounded-[4px] bg-[#5B5FC7] px-[12px] py-[5px]">
      <input
        type="radio"
        name="text"
        id="text"
        className="size-4 border-white accent-[#5B5FC7]"
        defaultChecked
      />
      <div className="text-[14px] font-semibold leading-[20px] text-white">
        Text
      </div>
      <div>
        <Icons.ChevronWhite />
      </div>
    </div>
  );
}
