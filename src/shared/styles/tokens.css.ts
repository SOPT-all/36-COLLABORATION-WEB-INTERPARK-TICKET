import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    // GrayScale
    white10: "#DCEAFB",
    white: "#FFFFFF",
    gray10: "#F8F8F8",
    gray20: "#E8E8E8",
    gray30: "#CBCBCB",
    gray40: "#B7C1C9",
    gray50: "#999999",
    gray60: "#7E7E7E",
    gray70: "#575757",
    gray80: "#3B3D44",
    gray90: "#29292D",
    black: "#0E0E0E",

    // Blue
    blue10: "#F0F1FF",
    blue20: "#E9F4FF",
    blue30: "#48C6D9",
    blue40: "#229ACE",
    blue50: "#009FAE",
    blue60: "#5F8FA2",
    blue80: "#2996FF",
    blue90: "#4154FF",
    blue100: "#3549FF",
    blue110: "#002259",
    blue120: "#363B46",

    // Red
    red10: "#FFEAEA",
    red20: "#FF7262",
    red30: "#FF322E",
    red40: "#F73041",
    red50: "#EE0402",
    red60: "#DF2B3B",
    red70: "#C64549",

    // Purple
    purple20: "#142539",
    purple30: "#B070F0",
    purple40: "#993DF0",
    purple50: "#8E43E6",
    purple60: "#8066F6",

    // Orange
    orange20: "#FFF8D6",
    orange30: "#FFD235",
    orange40: "#E5AB52",
    orange50: "#FFA33F",

    // Green
    green: "#61A27E",
  },
  font: {
    family: {
      pretendard: "Pretendard",
    },

    // Head
    h_sb_38: {
      size: "38px",
      weight: "600",
      lineHeight: "45px",
      letterSpacing: "-1.52px",
    },
    h_sb_30: {
      size: "30px",
      weight: "600",
      lineHeight: "30px",
      letterSpacing: "-1.2px",
    },
    h_sb_28: {
      size: "28px",
      weight: "600",
      lineHeight: "33px",
      letterSpacing: "-1.12px",
    },
    h_re_24: {
      size: "24px",
      weight: "400",
      lineHeight: "24px",
      letterSpacing: "0px",
    },
    h_sb_20: {
      size: "20px",
      weight: "600",
      lineHeight: "24px",
      letterSpacing: "-0.8px",
    },
    h_re_20: {
      size: "20px",
      weight: "400",
      lineHeight: "23px",
      letterSpacing: "-0.4px",
    },

    // Body
    b_b_20: {
      size: "20px",
      weight: "700",
      lineHeight: "28px",
      letterSpacing: "-0.4px",
    },
    b_b_16: {
      size: "16px",
      weight: "700",
      lineHeight: "22.4px",
      letterSpacing: "-0.32px",
    },
    b_re_16: {
      size: "16px",
      weight: "400",
      lineHeight: "16px",
      letterSpacing: "0px",
    },
    b_m_16: {
      size: "16px",
      weight: "400",
      lineHeight: "14px",
      letterSpacing: "0.24px",
    },
    b_b_14_4: {
      size: "14px",
      weight: "700",
      lineHeight: "21px",
      letterSpacing: "0.56px",
    },
    b_b_14_1: {
      size: "14px",
      weight: "700",
      lineHeight: "16px",
      letterSpacing: "0.16px",
    },
    b_b_14__1: {
      size: "14px",
      weight: "700",
      lineHeight: "19.6px",
      letterSpacing: "-0.14px",
    },
    b_sb_14: {
      size: "14px",
      weight: "600",
      lineHeight: "14px",
      letterSpacing: "-0.56px",
    },
    b_sb_14_plus: {
      size: "14px",
      weight: "600",
      lineHeight: "14px",
      letterSpacing: "0.52px",
    },
    b_sb_14_mid: {
      size: "14px",
      weight: "500",
      lineHeight: "14px",
      letterSpacing: "0.28px",
    },
    b_m_14: {
      size: "14px",
      weight: "500",
      lineHeight: "14px",
      letterSpacing: "0.78px",
    },
    b_re_14: {
      size: "14px",
      weight: "400",
      lineHeight: "14px",
      letterSpacing: "-0.28px",
    },
    b_b_12: {
      size: "12px",
      weight: "700",
      lineHeight: "12px",
      letterSpacing: "0.24px",
    },
    b_sb_12: {
      size: "12px",
      weight: "600",
      lineHeight: "19.2px",
      letterSpacing: "-0.24px",
    },
    b_me_12_narrow: {
      size: "12px",
      weight: "500",
      lineHeight: "19px",
      letterSpacing: "-0.24px",
    },
    b_me_12: {
      size: "12px",
      weight: "500",
      lineHeight: "14px",
      letterSpacing: "-0.24px",
    },
    b_re_12: {
      size: "12px",
      weight: "400",
      lineHeight: "12px",
      letterSpacing: "0.38px",
    },
    b_re_12_plus: {
      size: "12px",
      weight: "400",
      lineHeight: "12px",
      letterSpacing: "0.16px",
    },
    b_b_10: {
      size: "10px",
      weight: "700",
      lineHeight: "11px",
      letterSpacing: "0px",
    },

    // Caption
    caption_b_10: {
      size: "10px",
      weight: "700",
      lineHeight: "11px",
      letterSpacing: "0px",
    },
    caption_me_10: {
      size: "10px",
      weight: "500",
      lineHeight: "11px",
      letterSpacing: "0px",
    },
    caption_re_8: {
      size: "8px",
      weight: "400",
      lineHeight: "9px",
      letterSpacing: "0px",
    },
  },
});
