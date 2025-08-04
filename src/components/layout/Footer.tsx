"use client";

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-slate-700/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Michele. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
