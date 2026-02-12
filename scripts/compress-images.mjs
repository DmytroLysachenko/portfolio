import { readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

import sharp from "sharp";

const projectsDir = join(process.cwd(), "src", "assets", "projects");
const quality = 72;

const files = (await readdir(projectsDir)).filter((file) =>
  file.toLowerCase().endsWith(".webp"),
);

for (const file of files) {
  const fullPath = join(projectsDir, file);
  try {
    const buffer = await sharp(fullPath)
      .webp({ quality, effort: 5 })
      .toBuffer();

    await writeFile(fullPath, buffer);
    console.log(`Compressed ${file}`);
  } catch (error) {
    console.warn(`Skipped ${file}: ${error?.code ?? "error"}`);
  }
}
