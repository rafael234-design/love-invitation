"use client";

import { useState } from "react";

export default function DatePlanner({
  onFinish,
}: {
  onFinish: (data: {
    date: string;
    place: string;
    dress: string;
  }) => void;
}) {
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("Pantai 🏖️");
  const [dress, setDress] = useState("");

  return (
    <div className="bg-white p-10 rounded-3xl shadow-xl w-[500px]">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">
        📅 Atur Kencan Kita
      </h1>

      <label>Tanggal</label>

      <input
        type="date"
        className="border p-3 rounded-xl w-full mt-2"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label className="block mt-5">
        Mau Kemana?
      </label>

      <select
        className="border p-3 rounded-xl w-full mt-2"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
      >
        <option>Pantai 🏖️</option>
        <option>Kafe ☕</option>
        <option>Gunung 🏔️</option>
        <option>Nonton 🎬</option>
        <option>Kuliner 🍜</option>
      </select>

      <label className="block mt-5">
        Dresscode
      </label>

      <input
        className="border p-3 rounded-xl w-full mt-2"
        placeholder="Misal: Hitam Putih"
        value={dress}
        onChange={(e) => setDress(e.target.value)}
      />

      <button
        onClick={() =>
          onFinish({
            date,
            place,
            dress,
          })
        }
        className="bg-pink-500 text-white w-full mt-6 p-3 rounded-xl"
      >
        Lanjut ❤️
      </button>
    </div>
  );

}  