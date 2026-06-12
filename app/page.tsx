"use client";
import { useEffect } from "react";
import { useState } from "react";

import Envelope from "../components/Envelope";
import PasswordGate from "../components/PasswordGate";
import DatePlanner from "../components/DatePlanner";
import LoveLetter from "../components/LoveLetter";
export default function Home() {
  const [step, setStep] = useState(1);
  const [dateData, setDateData] = useState<any>(null);
  useEffect(() => {
  const interval = setInterval(() => {
    const flower = document.createElement("div");
    flower.className = "flower";

    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = 3 + Math.random() * 3 + "s";

    document.body.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, 6000);
  }, 300);

  return () => clearInterval(interval);
}, []);
  return (
  <main
    className="min-h-screen flex items-center justify-center bg-cover bg-center"
    style={{
      backgroundImage: "url('/fotoku.jpg')",
    }}
  >
      {step === 1 && (
        <Envelope onOpen={() => setStep(2)} />
      )}

      {step === 2 && (
        <PasswordGate
          onSuccess={() => setStep(3)}
        />
      )}

      {step === 3 && (
  <DatePlanner
    onFinish={(data: any) => {
      setDateData(data);
      setStep(4);
    }}
  />
      )}

      {step === 4 && dateData && (
        <LoveLetter data={dateData} />
      )}

      <audio id="bgm" loop hidden>
        <source src="/lagu.mp3" type="audio/mpeg" />
      </audio>
    </main>
  );
}