import Image from "next/image";


export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-blue-100">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Image
            src="/sophie.png"
            alt="Sophie"
            width={400}
            height={400}
            className="object-contain"
          />
          <Image
            src="/clemens.png"
            alt="Clemens"
            width={450}
            height={450}
            className="object-contain"
          />
        </div>
        <p className="mt-6 text-lg text-gray-700">Hire me, please 😁</p>
      </main>
    );
  }
