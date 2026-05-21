import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-200 flex items-center justify-center px-10 ">
      <div className="max-w-7xl mx-auto w-full h-full flex items-center justify-center relative">
        <Horizontal_Scale className="absolute top-0 w-screen mx-auto" />
        <Horizontal_Scale className="absolute bottom-0 w-screen mx-auto" />

        <Vertical_Scale className="absolute left-0 h-screen mx-auto" />
        <Vertical_Scale className="absolute right-0 h-screen mx-auto" />

        <div className="p-10 size-full">
          <div className="p-10 size-full relative">
            <Line className="mask-b-from-10% absolute inset-x-0 top-0"></Line>
            <Line className="mask-t-from-10% absolute inset-x-0 bottom-0"></Line>
            Hero Section
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
