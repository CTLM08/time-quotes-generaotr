import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import copy from "copy-to-clipboard";
import moment from "moment";
import "animate.css";
import Main from "./route/Main";
import Pomodoro from "./route/Pomodoro";
import { Icon } from "@iconify/react";
const App = () => {
  const [time, setTime] = useState(Date.now());
  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <BrowserRouter>
      <div className="flex flex-row items-center bg-slate-400   justify-between">
        <div className="ml-3 text-2xl hover:text-3xl transition-all flex flex-row  ">
          <NavLink to="/" key="time" className={`flex flex-row`}>
            <div className=" flex flex-row items-center">
              <Icon
                icon="fluent:timer-20-regular"
                className="h-8 w-8 hover:w-10 hover:h-10 transition-all"
              />
              TIME
            </div>
          </NavLink>{" "}
        </div>
        <div className="flex flex-row mr-3 items-center text-xl" >
          
          <div className="mr-3 flex items-center ">
            <NavLink
              to="pomodoro"
              key="pomodoro"
              className={`text-xl hover:text-2xl transition-all`}
            >
              pomodoro
            </NavLink>
            <button>
              <a href="https://github.com/CTLM08">
                <Icon
                  icon="ant-design:github-filled"
                  className="h-8 w-8 hover:h-10 hover:w-10 transition-all"
                />
              </a>
            </button>
          </div>
          <div>
            <div className="mt-1  hover:text-2xl transition-all">
              {moment(time).format("hh:mm")}
            </div>
          </div>
        </div>
      </div>{" "}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="pomodoro" element={<Pomodoro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
