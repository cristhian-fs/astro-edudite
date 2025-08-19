// converter-to-webp.ts
import fs from "fs";
import path from "path";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

/**
 * Converte uma imagem para WebP usando ffmpeg
 */
async function convertToWebp(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const outputPath = filePath.replace(ext, ".webp");

  try {
    await execAsync(
      `ffmpeg -y -i "${filePath}" -c:v libwebp -q:v 80 "${outputPath}"`
    );
    console.log(`✅ Convertido: ${filePath} -> ${outputPath}`);
  } catch (err) {
    console.error(`❌ Erro ao converter ${filePath}`, err);
  }
}

/**
 * Percorre recursivamente uma pasta e converte imagens para WebP
 */
async function processFolder(folderPath) {
  const entries = await fs.promises.readdir(folderPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(folderPath, entry.name);

    if (entry.isDirectory()) {
      await processFolder(fullPath); // recursão
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if ([".png", ".jpg", ".jpeg"].includes(ext)) {
        await convertToWebp(fullPath);
      }
    }
  }
}

// Exemplo de uso: node converter-to-webp.js ./pasta
const targetFolder = process.argv[2];
if (!targetFolder) {
  console.error("❌ Passe a pasta como argumento: node converter-to-webp.js ./imagens");
  process.exit(1);
}

processFolder(path.resolve(targetFolder));
