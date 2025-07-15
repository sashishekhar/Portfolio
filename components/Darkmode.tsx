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
        className={`h-[40px] relative w-[70px] rounded-full gap-2 px-2 pl-[11px] pr-[11px] flex flex-row items-center
         bg-neutral-400 dark:bg-neutral-800 shadow-[1px_1px_1px_0px_rgba(0,0,0,0.5)] dark:shadow-[1px_1px_1px_0px_rgba(255,255,255,0.2)] cursor-pointer`}
      >
        <Sun
          className={`z-10 text-orange-300  dark:text-neutral-500 `}
          width={20}
          height={20}
        />
        <motion.div
          className="h-[30px] w-[30px] bg-neutral-600 dark:bg-neutral-500 rounded-full absolute z-0"
          animate={{ left: currentTheme === "dark" ? "35px" : "6px" }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />
        <motion.div
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.8 }}
          className="z-10"
        >
          <Moon
            className={`z-10 text-neutral-500 pl-[1px] dark:text-cyan-300`}
            width={20}
            height={20}
          />
        </motion.div>
        
      </div>
    </div>
  );
};

export default Darkmode;
