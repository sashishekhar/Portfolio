import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

const Darkmode = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      <div
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
        className={`h-[40px] relative w-[70px] rounded-full gap-3 px-2 pl-2.5 pr-2.5 flex flex-row items-center
          ${currentTheme === "light" ? "bg-neutral-400" : "bg-neutral-800"}`}
      >
        <Sun
          className={`z-10  ${currentTheme === "dark" ? "text-neutral-500" : "text-neutral-900"}`}
          width={20}
          height={20}
        />
        <motion.div
          className="h-[30px] w-[30px] bg-neutral-200 rounded-full absolute z-0"
          animate={{ left: currentTheme === "dark" ? "35px" : "6px" }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />
        <Moon
          className={`z-10 ${currentTheme === "light" ? "text-neutral-800" : "text-neutral-800"}`}
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default Darkmode;
