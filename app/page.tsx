import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex justify-center items-center align-middle h-fit">
      <input type="url" name="" id="" />
      <button>Download</button>
    </main>
  );
}
