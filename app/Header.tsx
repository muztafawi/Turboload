import { BeakerIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <header className="flex justify-between items-center mx-auto py-4 px-8 mt-8 max-w-5xl">
      {/* Brand  */}
      <div>
        <h2 className="font-bold underline">
          Turbo<span className="text-orange-400">load</span>
        </h2>
      </div>

      {/* Dark & Light Mode Icons  */}
      <div>
        <SunIcon className="w-8 h-8 cursor-pointer text-orange-400" />
        {/* <MoonIcon className="w-8 h-8 cursor-pointer text-gray-400" /> */}
      </div>
    </header>
  );
}
