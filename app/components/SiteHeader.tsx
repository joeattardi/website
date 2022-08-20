import { Link } from '@remix-run/react';

export default function SiteHeader() {
  return (
    <header className="bg-zinc-900 p-2">
      <div className="mx-auto flex max-w-7xl flex-row items-center gap-x-2 text-white">
        <Link to="/"><img className="h-12 w-12 transition-all hover:rotate-12 hover:scale-110 hover:hue-rotate-90 ease-in-out duration-500" src="/images/logo.png" alt="logo" /></Link>
        <Link to="/"><h1 className="text-xl">Joe Attardi</h1></Link>
      </div>
    </header>
  );
}
