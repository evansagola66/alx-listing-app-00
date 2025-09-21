import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">MyApp</h1>
      <nav className="space-x-4">
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/posts" className="hover:text-gray-300">
          Posts
        </Link>
        <Link href="/users" className="hover:text-gray-300">
          Users
        </Link>
      </nav>
    </header>
  );
};

export default Header;
