import { defineConfig } from "eslint/config";
import n from "eslint-plugin-n";
import ts from "typescript-eslint";

export default defineConfig(
  {
    ignores: ["lib/**", "node_modules/**"],
  },
  ts.configs.recommended,
  n.configs["flat/recommended"],
  {
    settings: {
      n: {
        convertPath: [
          {
            include: ["src/*.ts"],
            replace: ["^src/(.*)\\.ts$", "lib/$1.js"],
            exclude: ["src/*.test.ts"],
          },
        ],
      },
    },
  },
);
