import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import css from "rollup-plugin-import-css";
export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "esm",
    name: "easymde-webcomponents",
    sourcemap: true,
  },
  plugins: [resolve({ browser: true }), commonjs(), typescript(), css()],
};
