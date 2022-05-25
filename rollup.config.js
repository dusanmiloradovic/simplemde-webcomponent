import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import css from "rollup-plugin-import-css";
import postcssurl from "postcss-url";
import postcss from "rollup-plugin-postcss";
export default {
  input: "src/index.ts",
  output: {
    file: "dist/runtime/index.js",
    format: "es",
    name: "easymde-webcomponents",
    sourcemap: true,
  },
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
//    postcss({
//      inject: false,
//      extract: false,
//      plugins: [
//        postcssurl({
//          url: "inline", // enable inline assets using base64 encoding
//          maxSize: 1000, // maximum file size to inline (in kilobytes)
//          fallback: "copy",
//        }),
//      ],
//    }),
    css(),
  ],
};
