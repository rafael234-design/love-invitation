export default function Envelope({
  onOpen,
}: {
  onOpen: () => void;
}) {
  return (
    <div className="bg-white p-10 rounded-3xl shadow-xl text-center">
      <h1 className="text-5xl mb-5">💌</h1>

      <h1 className="text-3xl font-bold text-pink-600">
        Jadwal Buat Kita ❤️
      </h1>

      <p className="mt-4 text-gray-600">
        ini untuk jadwal kita kalau mau keluar keluar, 
      </p>
      <p className="text-gray-600">
        aku gabut seh bikin ginian,biar seruu ajaa haha
      </p>

      <button
        onClick={() => { 
      
          const audio = document.getElementById("bgm") as HTMLAudioElement | null;

               console.log(audio);
          if (audio) {
              audio.play();
          }

          onOpen();
        


        }}
            
        className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-xl"
      >
        Buka Surat
      </button>
    </div>
  );
}