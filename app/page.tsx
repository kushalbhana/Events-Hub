import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Title } from "@/components/ui/title";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col gap-2 items-center justify-center select-none py-2 px-4">
      <Title className="tracking-tighter leading-tight text-3xl font-bold">
        getid
      </Title>
      <Link
        href="/dashboard"
        className="items-center flex bg-white border-2 border-lime-400 duration-200 ease-in-out focus:outline-none hover:bg-lime-400 hover:shadow-none hover:text-primary-foreground justify-center rounded-xl shadow-[5px_5px] shadow-lime-400 transform transition w-full lg:w-auto px-6 py-3 font-semibold"
      >
        Go To Dashboard <ChevronRight className="w-4" />
      </Link>
    </main>
  );
}
