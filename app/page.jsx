import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="w-full flex gap-20 justify-center mt-20">
        <Link href={"/"}>
          <button className="px-6 py-2 active:scale-95 transition bg-gray-500/15 border border-blue-500 rounded text-blue-500 text-sm font-medium cursor-pointer">
            Admin
          </button>
        </Link>
        <Link href={"/"}>
          <button className="px-6 py-2 active:scale-95 transition bg-gray-500/15 border border-blue-500 rounded text-blue-500 text-sm font-medium cursor-pointer">
            User
          </button>
        </Link>
        <Link href={"/"}>
          <button className="px-6 py-2 active:scale-95 transition bg-gray-500/15 border border-blue-500 rounded text-blue-500 text-sm font-medium cursor-pointer">
            Super Admin
          </button>
        </Link>
      </div>
    </div>
  );
}
