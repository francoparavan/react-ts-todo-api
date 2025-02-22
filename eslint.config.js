import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "react/react-in-jsx-scope": "off", // Desactiva el error de React en JSX (React 17+)
      "react/jsx-no-target-blank": "warn", // Muestra advertencia en vez de error para target="_blank"
      "no-console": "warn", // Advertencia en lugar de error por console.log
    }
  }
];
