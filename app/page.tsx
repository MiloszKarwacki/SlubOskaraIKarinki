import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 my-12 mt-4 items-center px-4 sm:px-6 md:px-8">
      {/* Hero Image */}
      <div className="w-full max-w-screen-lg">
        <Image
          src={"/hero1.jpg"}
          alt="KARINA & OSKAR"
          width={1200}
          height={800}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Date and Address */}
      <div className="text-xl sm:text-2xl md:text-3xl flex flex-col sm:flex-row w-full max-w-screen-lg">
        <div className="flex text-center justify-center items-center sm:w-1/2 border-b sm:border-b-0 sm:border-r border-black py-4 sm:py-0">
          <div>
            <span className="font-semibold">31 LIPCA,</span>
            <br />
            <span className="font-semibold">2025</span>
          </div>
        </div>
        <div className="flex text-center justify-center items-center sm:w-1/2 py-4">
          <div>
            <span className="font-semibold">Dwór</span>
            <br />
            <span className="font-semibold">W Brzeznej</span>
          </div>
        </div>
      </div>

      {/* Church Information */}
      <div className="text-3xl sm:text-4xl md:text-5xl text-center pb-4 max-w-screen-lg px-2">
        <span className="font-bold">
          Kościół Podwyższenia Krzyża Świętego na Strzygańcu
        </span>
        <br />
        <div className="flex justify-center items-center mt-4">
          <span>16:00</span>
        </div>
      </div>
    </div>
  );
}
