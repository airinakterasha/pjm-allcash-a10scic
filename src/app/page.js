import Image from "next/image";
import Heading from "@/components/Heading";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <h1 className="text-5xl">Hello</h1>
        <Heading></Heading>
      </div>
    </main>
  );
}
