import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  // Next-recommended rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Folder-level ignores (glob patterns)
  {
    ignores: [
      "src/Backgrounds/**",
      "src/Animations/**",
      "src/TextAnimations/**",
    ],
  },
];

export default eslintConfig;