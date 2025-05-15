import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/tokens.css.ts";
import { fontStyle } from "@/shared/styles/fontStyle";

export const btnBase = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.3rem",
  width: "8.2rem",
  height: "6.1rem",
  padding: "0.8rem 1rem",
  flexShrink: 0,
  borderRadius: "0.5rem",
  background: vars.color.white,
  border: `1px solid ${vars.color.gray30}`,
  color: vars.color.gray80,
  cursor: "pointer",
  transition: "border 0.2s",
});

export const btnSelected = style({
  border: `1px solid ${vars.color.blue100}`,
});

export const btnLabel = style({
  ...fontStyle("b9_sb_14"),
  color: vars.color.gray80,
});

export const btnIcon = style({
  width: "2.8rem",
  height: "2.8rem",
});
