"use client";

import classNames from "classnames";
import { useState } from "react";

export default function TabSm() {
  const [active, setActive] = useState(0);
  const items = ["Tab 1", "Tab 2", "Tab 3"];

  return (
    <div className="flex h-[44px]  items-center justify-evenly border-b-[0.5px] border-[#E0E0E0]  ">
      {items.map((item, index) => {
        return (
          <div
            key={index}
            onClick={()=>setActive(index)}
            className={classNames(
              "flex w-full items-center justify-center text-[15px]  leading-[20px] tracking-[-0.23px] h-full ",
              active === index
                ? "border-b border-[#5B5FC7] font-semibold"
                : "text-[#242424] font-normal"
            )}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}
