"use client";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export const App = () => {
  const [showCard, setShowCard] = useState(true);
  const [hw, setHw] = useState<{ width: number; height: number }>({
    width: 10000,
    height: 10000,
    // width: window.innerWidth,
    // height: window.innerHeight,
  });
  useEffect(() => {
    setHw({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  const FlippingCard = () => (
    <div className="relative bg-red-300 w-[500px] h-[500px] flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img width="500px" src="card.png" alt="Valentine card" />
        </div>
        <div className="flip-card-back">
          <div className="">
            <img
              width="500px"
              className="absolute z-0"
              src="card-backface.png"
              alt="Valentine card"
            />
            <div className="absolute top-1/2 w-full text-red-600 -translate-y-32">
              <div className="p-4">
                Дашенька,
                <br /> согласна ли ты
                <br /> быть моей Валентиной
                <br />
                😳
                <br />
                👉👈
              </div>
              <button
                className="px-3 text-2xl bg-pink-200"
                onClick={() => setShowCard(false)}
              >
                ДА
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <main className="flex justify-center items-center min-h-screen">
      {showCard ? <FlippingCard /> : (
        <>
          <div className="text-4xl text-pink-400 w-fullwhitespace-pre-wrap">
            УРААААААААААА!!!!!!! УРААААААААААА!!!!!!! УРААААААААААА!!!!!!!
            УРААААААААААА!!!!!!! УРААААААААААА!!!!!!! УРААААААААААА!!!!!!!
            УРААААААААААА!!!!!!! УРААААААААААА!!!!!!! УРААААААААААА!!!!!!!
            УРААААААААААА!!!!!!! УРААААААААААА!!!!!!! УРААААААААААА!!!!!!!
            УРААААААААААА!!!!!!! УРААААААААААА!!!!!!! УРААААААААААА!!!!!!!
            УРААААААААААА!!!!!!! УРААААААААААА!!!!!!! УРААААААААААА!!!!!!!
            УРААААААААААА!!!!!!! УРААААААААААА!!!!!!! УРААААААААААА!!!!!!!
            УРААААААААААА!!!!!!! УРААААААААААА!!!!!!! УРААААААААААА!!!!!!!
            УРААААААААААА!!!!!!! УРААААААААААА!!!!!!! УРААААААААААА!!!!!!!
            УРААААААААААА!!!!!!! УРААААААААААА!!!!!!! УРААААААААААА!!!!!!!
          </div>
          <Confetti width={hw.width} height={hw.height} />
        </>
      )}
    </main>
  );
};
