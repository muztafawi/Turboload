import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex justify-center gap-3 items-center align-middle h-fit">
      <input
        type="url"
        placeholder="Past url link"
        className="outline-none bg-orange-500/25 text-sm py-3 px-4 rounded-xl"
      />
      <button className="bg-orange-500 py-2 px-4 rounded-md">Download</button>
    </main>
  );
}
