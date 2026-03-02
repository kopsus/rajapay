import { Header } from "@/components/header";
import { Hero } from "@/components/user/home/hero";
import { Highlight } from "@/components/user/home/highlight";
import { Trust } from "@/components/user/home/trust";
import { Why } from "@/components/user/home/why";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Highlight />
      <Why />
      <Trust />
    </>
  );
}
