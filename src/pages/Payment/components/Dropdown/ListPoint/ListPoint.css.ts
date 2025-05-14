import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/tokens.css.ts";

export const listPoint = style({
  display: "flex",
  width: "37.5rem",
  height: "3.4rem",
  padding: "0.8rem 1.9rem",
  justifyContent: "space-between",
  alignItems: "center",
  flexShrink: 0,
});

export const listPointLeft = style({
  fontFamily: vars.font.family.pretendard,
  fontSize: vars.font.b_sb_14_mid.size,
  fontWeight: vars.font.b_sb_14_mid.weight as any,
  lineHeight: vars.font.b_sb_14_mid.lineHeight,
  letterSpacing: vars.font.b_sb_14_mid.letterSpacing,
  color: vars.color.gray60,
});

export const listPointRight = style({
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
});

export const listPointRightText = style({
  fontFamily: vars.font.family.pretendard,
  fontSize: vars.font.b_sb_14_mid.size,
  fontWeight: vars.font.b_sb_14_mid.weight as any,
  lineHeight: vars.font.b_sb_14_mid.lineHeight,
  letterSpacing: vars.font.b_sb_14_mid.letterSpacing,
  color: vars.color.blue60,
});

export const listPointIcon = style({
  width: "1.8rem",
  height: "1.8rem",
  aspectRatio: "1 / 1",
});
