export const SITE = {
  name: "Emily Tan",
  email: "emilytan2992@gmail.com",
  github: "https://github.com/etan29",
  linkedin: "https://www.linkedin.com/in/emilytan29/",
  resumePath: "/resume.pdf?v=20260915-11",
  intro:
    "Hello! My name is Emily and I am a second year Computer Science student at UCR.",
} as const;

export const getBasePath = () =>
  process.env.GITHUB_ACTIONS === "true" ? "/portfolio" : "";

export const withBasePath = (path: string) => {
  if (/^https?:\/\//.test(path) || path.startsWith("mailto:")) {
    return path;
  }

  const base = getBasePath();
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
};
