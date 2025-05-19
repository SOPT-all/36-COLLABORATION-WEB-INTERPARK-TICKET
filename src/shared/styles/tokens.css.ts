import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    // Gray
    white10: '#DCEAFB',
    white: '#FFFFFF',
    gray10: '#F8F8F8',
    gray20: '#E8E8E8',
    gray30: '#CBCBCB',
    gray40: '#B7C1C9',
    gray50: '#999999',
    gray60: '#7E7E7E',
    gray70: '#575757',
    gray80: '#3B3D44',
    gray90: '#29292D',
    black: '#0E0E0E',

    // Blue
    blue10: '#F0F1FF',
    blue20: '#E9F4FF',
    blue30: '#48C6D9',
    blue40: '#229ACE',
    blue50: '#009FAE',
    blue60: '#5F8FA2',
    blue80: '#2996FF',
    blue90: '#4154FF',
    blue100: '#3549FF',
    blue110: '#002259',
    blue120: '#363B46',

    // Red
    red10: '#FFEAEA',
    red20: '#FF7262',
    red30: '#FF322E',
    red40: '#F73041',
    red50: '#EE0402',
    red60: '#DF2B3B',
    red70: '#C64549',

    // Purple
    purple20: '#142539',
    purple30: '#B070F0',
    purple40: '#993DF0',
    purple50: '#8E43E6',
    purple60: '#8066F6',

    // Orange
    orange20: '#FFF8D6',
    orange30: '#FFD235',
    orange40: '#E5AB52',
    orange50: '#FFA33F',

    // Green
    green: '#61A27E',
  },
  font: {
    family: {
      pretendard: 'Pretendard',
    },

    // Head
    h1_sb_38: {
      size: '38px',
      weight: '600',
      lineHeight: '45px',
      letterSpacing: '-1.52px',
    },
    h2_sb_30: {
      size: '30px',
      weight: '600',
      lineHeight: '30px',
      letterSpacing: '-1.2px',
    },
    h3_sb_28: {
      size: '28px',
      weight: '600',
      lineHeight: '33px',
      letterSpacing: '-1.12px',
    },
    h4_re_24: {
      size: '24px',
      weight: '400',
      lineHeight: '24px',
      letterSpacing: '0px',
    },
    h5_sb_20: {
      size: '20px',
      weight: '600',
      lineHeight: '24px',
      letterSpacing: '-0.8px',
    },
    h6_re_20: {
      size: '20px',
      weight: '400',
      lineHeight: '23px',
      letterSpacing: '-0.4px',
    },

    // Body
    b1_b_20: {
      size: '20px',
      weight: '700',
      lineHeight: '28px',
      letterSpacing: '-0.4px',
    },
    b2_b_16: {
      size: '16px',
      weight: '700',
      lineHeight: '22.4px',
      letterSpacing: '-0.32px',
    },
    b3_re_16: {
      size: '16px',
      weight: '400',
      lineHeight: '16px',
      letterSpacing: '0px',
    },
    // TODO: 폰트 확인 필요
    b4_m_16: {
      size: '12px',
      weight: '400',
      lineHeight: '14px',
      letterSpacing: '-0.24px',
    },
    b5_b_14_4: {
      size: '14px',
      weight: '700',
      lineHeight: '21px',
      letterSpacing: '0.56px',
    },
    b6_b_14_1: {
      size: '14px',
      weight: '700',
      lineHeight: '16px',
      letterSpacing: '16.8px',
    },
    b7_b_14_1: {
      size: '14px',
      weight: '700',
      lineHeight: '19.6px',
      letterSpacing: '-0.14px',
    },
    b8_sb_14: {
      size: '14px',
      weight: '600',
      lineHeight: '14px',
      letterSpacing: '-0.56px',
    },
    b9_sb_14: {
      size: '14px',
      weight: '500',
      lineHeight: '14px',
      letterSpacing: '0.28px',
    },
    b10_re_14: {
      size: '14px',
      weight: '400',
      lineHeight: '14px',
      letterSpacing: '-0.28px',
    },
    b11_b_12: {
      size: '12px',
      weight: '700',
      lineHeight: '12px',
      letterSpacing: '0.24px',
    },
    b12_sb_12: {
      size: '12px',
      weight: '600',
      lineHeight: '19.2px',
      letterSpacing: '-0.24px',
    },
    b13_me_12_narrow: {
      size: '12px',
      weight: '500',
      lineHeight: '19px',
      letterSpacing: '-0.24px',
    },
    b14_me_12: {
      size: '12px',
      weight: '500',
      lineHeight: '14px',
      letterSpacing: '-0.24px',
    },
    b15_re_12: {
      size: '12px',
      weight: '400',
      lineHeight: '12px',
      letterSpacing: '0.38px',
    },
    b16_re_12: {
      size: '12px',
      weight: '400',
      lineHeight: '12px',
      letterSpacing: '16.8px',
    },
    b17_b_10: {
      size: '10px',
      weight: '700',
      lineHeight: '11px',
      letterSpacing: '0px',
    },

    // Caption
    c1_b_10: {
      size: '10px',
      weight: '700',
      lineHeight: '11px',
      letterSpacing: '0px',
    },
    c2_me_10: {
      size: '10px',
      weight: '500',
      lineHeight: '11px',
      letterSpacing: '0px',
    },
    c3_re_8: {
      size: '8px',
      weight: '400',
      lineHeight: '9px',
      letterSpacing: '0px',
    },
    c4_re_6: {
      size: '6px',
      weight: '400',
      lineHeight: '7px',
      letterSpacing: '0px',
    },
    //달력
    cale_12: {
      size: '12px',
      weight: '400',
      letterSpacing: '-0.24px',
      lineHeight: 'normal',
    },
  },
});
