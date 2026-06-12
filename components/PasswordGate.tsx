"use client";

import { useState } from "react";

export default function PasswordGate({
  onSuccess,
}: {
  onSuccess: () => void;
}) {
  const [code, setCode] = useState("");

  const checkCode = () => {
    if (code === "01-06-2026") {
      onSuccess();
    } else {
      alert("Yakin ini pacarnya Rafael? 😜");
    }
  };

  return (
    <div className="bg-white p-10 rounded-3xl shadow-xl w-[400px] text-center">
      <h1 className="text-3xl mb-4">🔐</h1>
      <h1 className="text-3xl font-bold">
  Enter Password
</h1>

<p className="text-pink-700 mt-2 text-center">
  🌸 Masukin tanggal jadian kita sayang ❤️
</p>

      <input
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Tanggal-Bulan-Tahun"
        className="border p-3 rounded-xl w-full"
      />

      <button
        onClick={checkCode}
        className="mt-4 px-6 py-3 bg-pink-500 text-white rounded-xl"
      >
        Masuk ❤️
      </button>
    </div>
  );
}