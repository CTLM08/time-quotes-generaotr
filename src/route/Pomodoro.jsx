import React,{useState,useEffect} from "react";
import copy from "copy-to-clipboard";
import moment from "moment";
import "animate.css";

const Pomodoro = () => {
    const [min, setmin] = useState(0);
  const [realmin, setrmin] = useState(25);
  const [count, countdown] = useState(0);
  const [run, isrun] = useState(false);
  const [pomodoro, setpomodoro] = useState(0);
  useEffect(() => {
    if (run) {
      if (min > 0) {
        setTimeout(() => {
          setmin(min - 1);
        }, 1000);
      } else if (min == 0 && realmin > 0) {
        setmin(59);
        setrmin(realmin - 1);
      } else if (min == 0 && realmin == 0) {
        isrun(false);
        countdown(0);
      }
      console.log(min, run);
    }
  }, [min, run]);
  return (
    <div className="h-screen w-full flex items-center justify-center bg-slate-400">
      <div>
        <div>
          <div className={`flex flex-row gap-1 md:gap-3 mb-3 `} >
            <button
            disabled={run}
              className={`${
                pomodoro == 0 ? `bg-slate-500` : ``
              } rounded-sm w-20`}
              onClick={() => {
                setpomodoro(0);
                isrun(false)
                setrmin(25);
                setmin(0);
              }}
            >
              POMODORO
            </button>
            <button
            disabled={run}
              className={`${
                pomodoro == 1 ? `bg-slate-500` : ``
              } rounded-sm w-28`}
              onClick={() => {
                setpomodoro(1);
                setrmin(5);
                setmin(0);
              }}
            >
              SHORT BREAK
            </button>
            <button
            disabled={run}
              className={`${
                pomodoro == 2 ? `bg-slate-500` : ``
              } rounded-sm w-28`}
              onClick={() => {
                setpomodoro(2);
                setrmin(15);
                setmin(0);
              }}
            >
              LONG BREAK
            </button>
          </div>
        </div>
        <div className="text-6xl md:text-8xl hover:text-8xl md:hover:text-9xl transition-all">
          {
             min == 0
            ? `${realmin}:00`
            : min < 10 && min != 0
            ? `${realmin}:0${min}`
            : `${realmin}:${min}`}
        </div>
        <div className="flex flex-row gap-3">
          <div>
            <button
              onClick={() => {
                if (count == 0) {
                  isrun(true);
                  console.log(run);
                  countdown(1);
                  if (realmin == 0 && min == 0) {
                    if (pomodoro == 0) {
                      setrmin(25);
                      setmin(0);
                    } else if (pomodoro == 1) {
                      setrmin(5);
                      setmin(0);
                    } else if (pomodoro == 2) {
                      setrmin(15);
                      setmin(0);
                    }
                  }
                } else if (count == 1) {
                  isrun(false);
                  countdown(0);
                }
              }}
            >
              {count == 0 ? `start` : `pause`}
            </button>
          </div>
          <div>
          </div>
        </div>
        <div className="bg-black w-56 md:w-72 h-1"></div>
        <div>#involution yyds</div>
      </div>
    </div>
  )
}

export default Pomodoro