import { SerializedStyles, css } from "@emotion/react";

const kimDaegon = ["KimDaegeon", "serif"]
  .map((x) => (x === "serif" ? x : `'${x}'`))
  .join(", ");

const milkyway = ["Taebaek Milkyway", "sans-serif"]
  .map((x) => (x === "sans-serif" ? x : `'${x}'`))
  .join(", ");

const zenAntique = ["Zen Antique Soft", "sans-serif"];

const oxanium = ["Oxanium", "sans-serif"];

export const fonts = {
  kimDaegon,
  milkyway,
  zenAntique,
  oxanium,
};

export const fontFamilies = Object.fromEntries(
  Object.entries(fonts).map(
    ([k, v]) =>
      [
        k,
        css`
          font-family: ${v};
        `,
      ] as const
  )
) as {
  [k in keyof typeof fonts]: SerializedStyles;
};
