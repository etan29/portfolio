import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

type InfoCardProps = {
  position: string;
  date: string;
  image?: StaticImageData | string;
  imageAlt?: string;
  title?: string;
  children?: ReactNode;
  className?: string;
};

const InfoCard = ({
  position,
  date,
  image,
  imageAlt = "",
  title,
  children,
  className = "",
}: InfoCardProps) => {
  return (
    <article
      className={`flex gap-4 rounded-[16px] border-2 border-[#C059DF] bg-white/90 p-4 shadow-[0_2px_12px_rgba(192,89,223,0.1)] sm:gap-5 sm:p-5 ${className}`}
    >
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md border border-[#C059DF]/30 bg-[#f2f2f2] sm:h-24 sm:w-24">
        {image ? (
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 80px, 96px"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center text-[#C059DF]/40"
            aria-hidden
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8 sm:h-10 sm:w-10"
            >
              <path
                fillRule="evenodd"
                d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        {title ? (
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-base font-medium tracking-wide text-[#5c5c63] sm:text-lg">
              {title}
            </h3>
            {date ? (
              <time className="shrink-0 text-sm font-normal whitespace-nowrap text-[#a677b1] sm:text-[0.95rem]">
                {date}
              </time>
            ) : null}
          </div>
        ) : date ? (
          <time className="block text-sm font-normal text-[#a677b1] sm:text-[0.95rem]">
            {date}
          </time>
        ) : null}

        <p className="mt-1 text-base font-medium tracking-wide text-[#C059DF] sm:text-lg">
          {position}
        </p>

        {children ? (
          <div className="mt-2 text-sm leading-relaxed text-[#5c5c63] sm:text-base">
            {children}
          </div>
        ) : null}
      </div>
    </article>
  );
};

export default InfoCard;
