import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/tokens.css.ts";

export const listInfo = style({
  display: "flex",
  width: "37.5rem",
  height: "5.6rem",
  padding: "1.6rem 1.8rem",
  justifyContent: "space-between",
  alignItems: "center",
  flexShrink: 0,
  background: vars.color.white,
});

export const listInfoText = style({
  fontFamily: vars.font.family.pretendard,
  fontSize: vars.font.b_b_16.size,
  fontWeight: vars.font.b_b_16.weight as any,
  lineHeight: vars.font.b_b_16.lineHeight,
  letterSpacing: vars.font.b_b_16.letterSpacing,
  color: vars.color.gray80,
});

export const listInfoIcon = style({
  display: "flex",
  width: "2.4rem",
  height: "2.4rem",
  padding: "0.8rem 0.2rem 0.9rem 0.2rem",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: 0,
  aspectRatio: "1 / 1",
});
