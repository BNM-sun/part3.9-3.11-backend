import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["build/", "node_modules/"],
  },
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      sourceType: "script",
    },
    rules: {
      // your rules here
    },
  },
  {
    files: ["**/*.mjs"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      sourceType: "module",
    },
  },
];
