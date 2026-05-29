import Image from "next/image";
import Link from "next/link";
import sleepingRacoon from "@/public/sleeping_racoon.png";

const NotFound = () => {
  return (
    <div className="flex h-screen w-screen flex-col">
      <main className="relative flex flex-1 items-center justify-center bg-[#B5C7D7] px-6">
        <div className="page-load-reveal text-center">
          <h1 className="font-serif text-4xl leading-tight tracking-wide text-[#C059DF] sm:text-5xl">
            404 page not
            <br />
            found :(
          </h1>
          <Link
            href="/"
            className="mt-8 inline-block font-medium tracking-wide text-[#C059DF] underline decoration-[#C059DF]/40 underline-offset-4 transition-colors hover:text-[#a677b1] hover:decoration-[#a677b1]/60 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C059DF]"
          >
            back to home
          </Link>
        </div>
      </main>
      <div className="h-1 w-full shrink-0 bg-[#C059DF]" aria-hidden />
      <footer className="relative flex h-[22vh] w-full shrink-0 items-end justify-center bg-[#F5CFDF]">
        <Image
          src={sleepingRacoon}
          alt=""
          className="page-load-reveal page-load-reveal--delay-1 h-auto max-h-[95%] w-[24rem] object-contain object-bottom sm:w-[29rem]"
          aria-hidden
        />
      </footer>
    </div>
  );
};

export default NotFound;
