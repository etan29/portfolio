import { existsSync, rmSync } from "node:fs";
import { join } from "node:path";

const nextDir = ".next";
const productionMarkers = [
  "export-marker.json",
  "BUILD_ID",
  "required-server-files.json",
];

const hasProductionCache = productionMarkers.some((marker) =>
  existsSync(join(nextDir, marker)),
);

if (hasProductionCache) {
  rmSync(nextDir, { recursive: true, force: true });
  console.log(
    "Removed stale production build cache before starting dev server.",
  );
}
