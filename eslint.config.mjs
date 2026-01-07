import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const ignores = [
  "**/node_modules/**",
  "**/.next/**",
  "**/out/**",
  "**/build/**",
  "**/dist/**",
  "**/coverage/**",
  "**/*.d.ts",
  "next-env.d.ts",
];

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ✅ Global ignores (Flat config best practice)
  { ignores },

  {
    rules: {
      // keep your preference
      "react/no-unescaped-entities": "off",

      // ✅ avoid deploy blockers
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off",

      // warnings only
      "@typescript-eslint/no-unused-vars": "warn",
      "@next/next/no-img-element": "off",

      // your log showed this warning
      "import/no-anonymous-default-export": "off",
    },
  },
];
