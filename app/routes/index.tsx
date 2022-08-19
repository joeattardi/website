export default function Index() {
  return (
    <div className="bg-[url('/images/laptop-hero.jpg')] bg-cover bg-center p-8">
      <div className="mx-auto items-center flex flex-col md:flex-row md:justify-between max-w-7xl gap-x-4">
        <img
          className="bg-blue-400 max-w-sm w-1/5 rounded-full border-8 shadow-lg shadow-black"
          src="/images/joe-profile.png"
          alt="Joe Attardi"
        />
        <div className="flex items-center gap-x-4">
          <img src="/images/logo-inverse.png" alt="" className="w-24 hidden md:block h-24 opacity-25" />
          <div className="flex flex-col items-center">
            <h2 className="text-6xl text-white font-bold">Joe Attardi</h2>
            <div className="text-white text-xl">Software Engineer and Author</div>
          </div>
        </div>
      </div>
    </div>
  );
}
