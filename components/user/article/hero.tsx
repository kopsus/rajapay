export const HeroArticle = () => {
  return (
    <div className="relative h-60 lg:h-94.5 w-full">
      <div className="absolute top-0 left-0 w-full h-full bg-[url(/img/bg-abstrack.png)] bg-cover bg-center bg-no-repeat opacity-40" />
      <div className="pointer-events-none absolute -left-20 md:-left-40 top-0 w-64 h-64 md:w-96 md:h-96 bg-linear-to-r from-[#053771]/40 to-[#0A69D7]/40 rounded-full blur-3xl opacity-20 md:opacity-30 z-0" />
      <div className="pointer-events-none absolute right-0 bottom-0 w-64 h-64 md:w-96 md:h-96 bg-linear-to-r from-[#EF8659]/40 to-[#894D33]/40 rounded-full blur-3xl opacity-20 md:opacity-30 z-0" />
      <div className="relative flex flex-col justify-center gap-4 items-center text-center z-10 h-full">
        <p className="font-semibold text-primary text-5xl">Artikel</p>
        <p className="text-[#4D5461]">Temukan tips & informasi terupdate</p>
      </div>
    </div>
  );
};
