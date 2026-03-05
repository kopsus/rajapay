import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Article } from "@/components/user/home/article";
import { Faq } from "@/components/user/home/faq";
import { Fitur } from "@/components/user/home/fitur";
import { Hero } from "@/components/user/home/hero";
import { Highlight } from "@/components/user/home/highlight";
import { HowUse } from "@/components/user/home/how-use";
import { Join } from "@/components/user/home/join";
import { Testimoni } from "@/components/user/home/testimoni";
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
      <Fitur />
      <Testimoni />
      <HowUse />
      <Join />
      <Article />
      <Faq />
      <Footer />
    </>
  );
}
