import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-900 flex items-center justify-center p-10">
      <Horizontal_Scale className="absolute top-0" />
      <Horizontal_Scale className="absolute bottom-0" />
    </section>
  );
}

const Horizontal_Scale = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-10 w-full bg-[repeating-linear-gradient(315deg,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_50%)] bg-[size:10px_10px] border-y border-[var(--pattern)]",
        className,
      )}
    />
  );
};

const Vertical_Scale = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "w-14 h-full bg-[repeating-linear-gradient(315deg,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_50%)] bg-size-[10px_10px]",
        className,
      )}
    ></div>
  );
};
