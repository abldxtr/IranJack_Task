"use client";

import classNames from "classnames";
import { Icons } from "../Icons";
import { useState } from "react";

export default function FooterSm() {
  const [active, setActive] = useState(4);

  const items = [
    {
      icon: <Icons.activityM />,
      text: "Activity",
    },
    {
      icon: <Icons.chatM />,
      text: "Chat",
    },
    {
      icon: <Icons.teamsM />,
      text: "Teams",
    },
    {
      icon: <Icons.calendarM />,
      text: "Calendar",
    },
    {
      icon: <Icons.more />,
      text: "More",
    },
  ];

  return (
    <footer className="fixed bottom-0 z-20 h-[60px] w-full border-t border-[#E0E0E0] bg-white md:hidden ">
      <div className="flex h-full w-full items-center justify-around">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-y-1 cursor-pointer "
              onClick={() => setActive(index)}
            >
              {/* <!-- icon --> */}
              <div
                className={classNames(
                  active === index
                    ? "[&_svg]:!fill-[#5B5FC7] [&_svg]:!text-[#5B5FC7] "
                    : "[&_svg]:!fill-[#242424] [&_svg]:!text-[#242424] "
                )}
              >
                {item.icon}
              </div>
              {/* <!-- text --> */}
              <div
                className={classNames(
                  "text-[10px] font-medium leading-[12px] tracking-[0.12px] ",
                  active === index ? "text-[#5B5FC7]  " : "text-[#242424]"
                )}
              >
                {item.text}
              </div>
            </div>
          );
        })}
      </div>
    </footer>
  );
}
