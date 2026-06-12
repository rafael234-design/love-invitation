"use client";

export default function LoveLetter({ data }: any) {
  const text = `💌 untuk pacarkuu ❤️

Tanggal: ${data?.date}

Tempat: ${data?.place}

Dresscode: ${data?.dress}

Aku tidak sabar bertemu kamu ❤️`;

  const share = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div className="bg-white p-10 rounded-3xl shadow-xl max-w-lg">
      <h1 className="text-3xl font-bold text-pink-600 mb-4">
        💌 Surat Dari Rafael
      </h1>

      <pre className="whitespace-pre-wrap text-lg">
        {text}
      </pre>

      <button
        onClick={share}
        className="mt-5 bg-green-500 text-white px-5 py-3 rounded-xl"
      >
        📲 Kirim ke WhatsApp
      </button>
    </div>
  );
}