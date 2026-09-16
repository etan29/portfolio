import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <h1 className="text-cyan-shadow text-ink font-serif text-5xl sm:text-6xl">
        404 page not found
      </h1>
      <Link
        href="/"
        className="text-muted hover:text-ink mt-6 font-sans underline decoration-black/20 underline-offset-4 transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
