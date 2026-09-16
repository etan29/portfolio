import Image from "next/image";
import { ACTIVITIES } from "@/data/activities";

const Activities = () => {
  return (
    <section
      id="activities"
      className="scroll-mt-14 px-5 py-16 pb-28 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-cyan-shadow text-ink mb-4 text-center font-serif text-3xl sm:text-4xl">
          Activities
        </h2>

        <div className="flex flex-col gap-14">
          {ACTIVITIES.map((group, index) => (
            <article
              key={group.organization}
              className="grid grid-cols-1 gap-5 md:grid-cols-[9rem_6rem_minmax(0,1fr)] md:gap-x-3 lg:grid-cols-[9.5rem_6rem_minmax(0,1fr)] lg:gap-x-4"
            >
              <h3 className="text-cyan-shadow text-ink pt-1 font-sans text-lg leading-snug font-semibold md:text-right">
                {group.organization}
              </h3>

              <div className="relative md:mt-0.5">
                <div className="shadow-cyan h-24 w-24 rounded-lg">
                  <div
                    className={`relative h-full w-full overflow-hidden rounded-lg ${group.logoClassName ?? "bg-white"}`}
                  >
                    {group.logo ? (
                      <Image
                        src={group.logo}
                        alt={group.logoAlt ?? `${group.organization} logo`}
                        fill
                        className="object-contain p-1"
                        sizes="96px"
                      />
                    ) : (
                      <span className="sr-only">{group.organization} logo</span>
                    )}
                  </div>
                </div>
                {index < ACTIVITIES.length - 1 ? (
                  <div
                    className="bg-mint absolute top-24 bottom-0 left-12 hidden w-1 -translate-x-1/2 md:block"
                    aria-hidden
                  />
                ) : null}
              </div>

              <div className="flex flex-col gap-8">
                {group.roles.map((role) => (
                  <div
                    key={`${role.title}-${role.date}`}
                    className="grid grid-cols-1 gap-x-8 sm:grid-cols-[minmax(0,1fr)_max-content] sm:items-baseline"
                  >
                    <h4 className="text-ink font-sans text-2xl">
                      {role.title}
                    </h4>
                    <time className="text-muted shrink-0 font-sans text-lg">
                      {role.date}
                    </time>
                    <ul className="text-muted mt-0 list-disc space-y-1 pl-5 font-sans text-lg leading-relaxed sm:col-start-1">
                      {role.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
