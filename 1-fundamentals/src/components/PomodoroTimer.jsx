import { useState, useEffect, useRef } from "react";

const POMODORO_TIME = 25 * 60;
const BREAK_TIME = 5 * 60;

export default function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState(POMODORO_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("pomodoro");
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            switchMode();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const switchMode = () => {
    const nextMode = mode === "pomodoro" ? "break" : "pomodoro";
    const nextTime = nextMode === "pomodoro" ? POMODORO_TIME : BREAK_TIME;
    setMode(nextMode);
    setTimeLeft(nextTime);
    setIsRunning(false);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleStart = () => setIsRunning(true);
  const handlePause = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };
  const handleReset = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTimeLeft(mode === "pomodoro" ? POMODORO_TIME : BREAK_TIME);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-4xl font-bold mb-4">
        {mode === "pomodoro" ? "Pomodoro" : "Break"} Mode
      </h1>
      <div className="text-6xl font-mono mb-6">{formatTime(timeLeft)}</div>
      <div className="flex gap-4">
        {!isRunning && (
          <button onClick={handleStart} className="bg-green-500 px-4 py-2 rounded-xl text-xl hover:bg-green-600">Start</button>
        )}
        {isRunning && (
          <button onClick={handlePause} className="bg-yellow-500 px-4 py-2 rounded-xl text-xl hover:bg-yellow-600">Pause</button>
        )}
        <button onClick={handleReset} className="bg-red-500 px-4 py-2 rounded-xl text-xl hover:bg-red-600">Reset</button>
      </div>
    </div>
  );
}
