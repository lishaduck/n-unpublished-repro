import { defineConfig } from "eslint/config";
import n from "eslint-plugin-n";

export default defineConfig(
  {
    ignores: ["lib/**", "node_modules/**"],
  },
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
