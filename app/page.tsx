import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <section className="relative h-screen w-full font-inter overflow-hidden bg-gray-800 flex items-center justify-center px-10">
      <div className="max-w-7xl mx-auto w-full h-full flex items-center justify-center relative">
        <Horizontal_Scale className="absolute top-0 w-screen mx-auto" />
        <Horizontal_Scale className="absolute bottom-0 w-screen mx-auto" />

        <Vertical_Scale className="absolute left-0 h-screen mx-auto" />
        <Vertical_Scale className="absolute right-0 h-screen mx-auto" />

        <div className="p-10 size-full">
          <div className="p-10 size-full relative flex flex-col justify-between shadow-2xl">
            <img
              src="https://thumbs.dreamstime.com/b/kedarnath-india-temple-sunrise-hindu-temple-dedicated-to-shiva-68148232.jpg?w=992"
              className="absolute inset-0 w-full h-full object-cover mask-radial-from-50% mask-b-from-10% mask-t-from-90% select-none pointer-events-none"
            ></img>
            <nav className="flex items-center justify-between z-20">
              <div className="flex items-center gap-6">
                <h2 className="tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-blue-400 to-blue-800 text-shadow-lg text-shadow-blue-500/10 text-2xl font-bold">
                  diego
                </h2>
                <a href="#" className="text-neutral-200 text-sm">
                  Features
                </a>
                <a href="#" className="text-neutral-200 text-sm">
                  Pricing
                </a>
                <a href="#" className="text-neutral-200 text-sm">
                  ChangeLog
                </a>
              </div>
              <div className="flex items-center gap-2">
                <a href="#" className="text-neutral-100 text-sm">
                  Read Documentation
                </a>
                <button className="px-2 py-2 rounded-md bg-linear-to-t from-blue-700 to-blue-500 text-shadow-lg text-white text-shadow-black/2">
                  Try for Free{" "}
                </button>
              </div>
            </nav>
            <Line className="mask-b-from-10% absolute inset-x-0 top-0"></Line>

            <Line className="mask-t-from-10% absolute inset-x-0 bottom-0"></Line>
            <div className="flex flex-col pb-6 relative z-20">
              <h1 className="tracking-tight text-5xl leading-snug text-neutral-100 font-medium max-w-4xl">
                {" "}
                Book with our travel company to go Kedarnath & MadhMaheshwar.
              </h1>
              <p className="tracking-tight text-2xl font-[family-name:var(--font-eb-garamond)] italic text-neutral-400 font-medium max-w-2xl mt-6">
                {" "}
                Welcome to Kedarnath, hosla of millions, pray and stay safe!
              </p>
              <div className="flex items-center gap-2 mt-6">
                <button className="px-2 py-2 rounded-md bg-linear-to-t from-blue-700 to-blue-500 text-shadow-lg text-white text-shadow-black/2 cursor-pointer active:scale-98 transition duration-200">
                  Try for Free{" "}
                </button>
                <a href="#" className="text-neutral-200 ">
                  Read Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Line = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-10 w-full bg-[repeating-linear-gradient(to_bottom,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_0.45rem)]",
        className,
      )}
    ></div>
  );
};

const Horizontal_Scale = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-10 w-full bg-[repeating-linear-gradient(315deg,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_50%)] bg-size-[10px_10px] border-y border-[var(--pattern)]",
        className,
      )}
    />
  );
};

const Vertical_Scale = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "w-10 h-full bg-[repeating-linear-gradient(315deg,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_50%)] bg-size-[10px_10px] border-x border-[var(--pattern)]",
        className,
      )}
    ></div>
  );
};
