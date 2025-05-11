import { vars } from "./tokens.css";

type FontKeys = Exclude<keyof typeof vars.font, "family">;

export const fontStyle = (key: FontKeys) => {
  const style = vars.font[key];
  if (!style) throw new Error(`Invalid font key: ${key}`);

  return {
    fontFamily: vars.font.family.pretendard,
    fontSize: style.size,
    fontWeight: style.weight,
    lineHeight: style.lineHeight,
    letterSpacing: style.letterSpacing,
  };
};
