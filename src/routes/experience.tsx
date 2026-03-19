import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/experience")({
  component: Experience,
});

const EXPERIENCES = [
  {
    designation: "Senior Software Engineer III",
    employer: "Zemoso Technologies",
    location: "Hyderabad",
    timeframe: "Jan 2023 - Present",
    current: true,
  },
  {
    designation: "Senior Software Engineer",
    employer: "Globant",
    location: "Pune",
    timeframe: "Jul 2022 - Dec 2022",
  },
  {
    designation: "Software Engineer",
    employer: "Tech Prescient",
    location: "Pune",
    timeframe: "Oct 2021 - Jul 2022",
  },
  {
    designation: "Associate Software Engineer",
    employer: "Innoplexus Consultancy Services Pvt Ltd",
    location: "Pune",
    timeframe: "Sept 2019 - Oct 2021",
  },
];

function Experience() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Experience</h1>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {EXPERIENCES.map((item) => (
          <article
            key={`${item.designation}-${item.timeframe}`}
            className="experience-card"
          >
            <span className="timeline-dot" />
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-semibold">{item.designation}</h2>
                {item.current && (
                  <span className="experience-pill">Current</span>
                )}
              </div>
              <p className="text-[color:var(--color-text-muted)]">
                {item.employer} — {item.location}
              </p>
            </div>
            <div className="mt-4 text-sm tracking-wide text-[color:var(--color-accent)]">
              {item.timeframe}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Experience;
