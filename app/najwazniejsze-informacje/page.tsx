import React from "react";
import Image from "next/image";

const NajważniejszeInfo = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center text-4xl text-center mt-12">
      <h1 className="text-3xl font-bold border-b border-black pb-2 px-8 mb-12">
        Najważniejsze Informacje
      </h1>

      {/* Wedding Ceremony */}
      <div className="text-2xl">
        <h2 className="text-4xl font-bold mb-4">Ślub</h2>
        <p>Data: 31 lipca 2025, godzina: 16:00</p>
        <p>Brzezna 146, 33-386 Chochorowice</p>
      </div>

      <Image
        src={"/kosciol.jpg"}
        alt="KARINA & OSKAR"
        width={400}
        height={400}
      />

      <div className="w-full border-black border-t pt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d332.2431494903319!2d20.606270649385785!3d49.61163569921322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473dfbac5dc7888b%3A0xe0bd9ad20a296a79!2zS2_Fm2Npw7PFgiBQb2R3ecW8c3plbmlhIEtyennFvGEgxZp3acSZdGVnbyB3IEJyemV6bmVq!5e0!3m2!1spl!2spl!4v1736284689878!5m2!1spl!2spl"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="w-full flex justify-center items-center mb-20"
        />
      </div>

      {/* Wedding Party*/}
      <div className="text-2xl">
        <h2 className="text-4xl font-bold mb-4">Wesele</h2>
        <p>Data: 31 lipca 2025</p>
        <p>Miejsce: Brzezna 1, 33-386 Brzezna</p>
      </div>

      <Image
        src={"/dworek.jpg"}
        alt="KARINA & OSKAR"
        width={400}
        height={400}
      />

      <div className="w-full border-black border-t pt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6652.914932962674!2d20.600234859177203!3d49.600088859057294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473dfb08fa8e34b7%3A0xdb738b2406339200!2sDw%C3%B3r%20w%20Brzeznej%20wesela%20konferencje%20imprezy%20okoliczno%C5%9Bciowe!5e0!3m2!1spl!2spl!4v1736284768128!5m2!1spl!2spl"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="w-full flex justify-center items-center mb-20"
        />
      </div>
    </div>
  );
};
export default NajważniejszeInfo;
