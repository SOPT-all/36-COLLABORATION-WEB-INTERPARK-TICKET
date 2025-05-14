// ListCheck.css.ts
import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/tokens.css.ts";

export const listCheck = style({
  display: "flex",
  width: "37.5rem",
  height: "5.6rem",
  padding: "1.6rem 1.8rem",
  justifyContent: "space-between",
  alignItems: "center",
  background: vars.color.white,
});

export const listCheckLeft = style({
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
});

export const listCheckCheckIcon = style({
  display: "flex",
  width: "1.8rem",
  height: "1.8rem",
  padding: "0.3rem 0 0.3rem 0.1rem",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: 0,
});

export const listCheckLabel = style({
  fontFamily: vars.font.family.pretendard,
  fontSize: vars.font.b2_b_16.size,
  fontWeight: vars.font.b2_b_16.weight as any,
  lineHeight: vars.font.b2_b_16.lineHeight,
  letterSpacing: vars.font.b2_b_16.letterSpacing,
  color: vars.color.gray80,
});

export const listCheckArrow = style({
  display: "flex",
  width: "2.4rem",
  height: "2.4rem",
  padding: "0.8rem 0.2rem 0.9rem 0.2rem",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: 0,
  aspectRatio: "1 / 1",
});
