import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/tokens.css.ts";
import { fontStyle } from "@/shared/styles/fontStyle";

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
  ...fontStyle("b2_b_16"),
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
