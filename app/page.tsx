import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flexLayout">
      <div>
        <input type="url" placeholder="Past url link" className="inputDesign" />
        <button className="bg-orange-500 py-2 px-4 rounded-md">Download</button>
      </div>
    </main>
  );
}
