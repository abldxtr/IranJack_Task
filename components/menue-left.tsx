"use client";

import classNames from "classnames";
import { Icons } from "./Icons";
import { useState } from "react";

export default function MenueLeft() {
  const items = [
    {
      icon: <Icons.activity />,
      text: "Activity",
    },
    {
      icon: <Icons.chat />,
      text: "Chat",
    },
    {
      icon: <Icons.teams />,
      text: "Teams",
    },
    {
      icon: <Icons.calendar />,
      text: "Calendar",
    },
    {
      icon: <Icons.calls />,
      text: "Calls",
    },
    {
      icon: <Icons.files />,
      text: "Files",
    },
    {
      icon: <Icons.van />,
      text: "Van Arsdel",
    },
    {
      icon: <Icons.threeDLeft />,
      text: "",
    },
    {
      icon: <Icons.apps />,
      text: "Apps",
    },
  ];
  const [active, setActive] = useState(6);
  return (
    <nav className="md:flex h-dvh w-[68px] bg-[#F0F0F0] overflow-hidden md:fixed top-[48px] hidden ">
      <div className="relative w-[68px]  h-full ">
        <div className="absolute right-0 h-full w-[8px] bg-[linear-gradient(90deg,_rgba(204,_204,_204,_0)_0%,_rgba(190,_190,_190,_0.2)_100%,_rgba(173,_173,_173,_0.2)_100%,_rgba(173,_173,_173,_0.2)_100%)]"></div>

        <div className="flex h-full w-full flex-col items-center space-y-3  ">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className={classNames(
                  "flex flex-col items-center gap-y-[1px] cursor-pointer relative w-full    ",

                  index == 0 && "px-[17.5px] py-[8.5px]",
                  index == 1 && "px-[22px] py-[8.5px]",
                  index == 2 && "px-[20px] py-[8.5px]",
                  index == 3 && "px-[14px] py-[8.5px]",
                  index == 4 && "px-[22px] py-[8.5px]",
                  index == 5 && "px-[22px] py-[8.5px]",
                  index == 6 && "px-[10.5px] py-[4px]",
                  index == 7 && "px-[22px] py-[16px]",
                  index == 8 && "px-[22px] py-[16px]"
                )}
                onClick={() => setActive(index)}
              >
                {active === index && (
                  <div className="absolute left-[0px] top-0 h-[48px] w-[2px] rounded-[20px] bg-[#5B5FC7]" />
                )}
                {/* <!-- icone --> */}
                <div
                  className={classNames(
                    active === index
                      ? "[&_svg]:!fill-[#5B5FC7] [&_svg]:!text-[#5B5FC7] "
                      : "fill-[#616161] text-[#616161] "
                  )}
                >
                  {item.icon}
                </div>
                {/* <!-- text --> */}
                {item.text && (
                  <div
                    className={classNames(
                      " font-normal leading-[14px] ",
                      index === 6
                        ? "text-[10px] whitespace-nowrap "
                        : "text-[10px]",
                      active === index ? "text-[#5B5FC7]  " : "text-[#616161]"
                    )}
                  >
                    {item.text}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
