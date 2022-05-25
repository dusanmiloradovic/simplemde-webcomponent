import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import css from "rollup-plugin-import-css";
import postcssurl from "postcss-url";
import postcss from "rollup-plugin-postcss";
export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "es",
    name: "easymde-webcomponents",
    sourcemap: true,
  },
  plugins: [
    css(),
    typescript(),
    resolve(),
    commonjs(),
    postcss({
      plugins: [
        postcssurl({
          url: "inline", // enable inline assets using base64 encoding
          maxSize: 100, // maximum file size to inline (in kilobytes)
          fallback: "copy", // fallback method to use if max size is exceeded
        }),
      ],
    }),
  ],
};
