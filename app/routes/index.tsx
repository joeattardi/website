export default function Index() {
  return (
    <div className="bg-[url('/images/laptop-hero.jpg')] bg-cover bg-center p-8">
      <div className="mx-auto grid grid-cols-[1fr_auto_auto] items-center max-w-7xl gap-x-4">
        <img
          className="bg-blue-400 w-60 rounded-full border-8 shadow-lg shadow-black"
          src="/images/joe-profile.png"
          alt="Joe Attardi"
        />
        <img src="/images/logo-inverse.png" className="w-24 opacity-25" />
        <div className="flex flex-col items-center">
          <h2 className="text-6xl text-white font-bold">Joe Attardi</h2>
          <div className="text-white text-xl">Software Engineer and Author</div>
        </div>
      </div>
    </div>
  );
}
