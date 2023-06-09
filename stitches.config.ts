import { createStitches } from "@stitches/react"

import {
  fadeIn,
  fadeInBloom,
  fadeOut,
  fadeOutBloom,
  scaleDown,
  scaleUp,
  slideInDown,
  slideInLeft,
  slideInRight,
  slideInUp,
  slideOutDown,
  slideOutLeft,
  slideOutRight,
  slideOutUp,
} from "@/styles/keyframes/stitches.keyframes"

export const { styled, css, getCssText, globalCss, theme } = createStitches({
  theme: {
    colors: {
      "primary-100": "#FEE7C5",
      "primary-400": "#FF7B39",
      "primary-500": "#F15A24",
      "primary-700": "#AD2512",
      "success-50": "#D3F6DF",
      "success-400": "#34D286",
      "success-500": "#06C167",
      "success-600": "#04A568",
      "success-700": "#038A64",
      "success-800": "#016F5B",
      "info-50": "#E8F0FE",
      "info-100": "#C6DAFF",
      "info-400": "#4D93E3",
      "info-500": "#1967D2",
      "info-600": "#124FB4",
      "neutral-50": "#E7E7E7",
      "neutral-75": "#D7D7D7",
      "neutral-100": "#c7c7c7",
      "neutral-200": "#AFAFAF",
      "neutral-300": "#979797",
      "neutral-400": "#737373",
      "neutral-500": "#666666",
      "neutral-700": "#434343",
      "neutral-800": "#262626",
      "neutral-900": "#141414",
      "warning-100": "#FFF2B6",
      "warning-400": "#F9C43F",
      "warning-500": "#F6A802",
      "warning-600": "#D38901",
      "warning-800": "#985900",
      "error-100": "#FFD9C5",
      "error-400": "#FF786A",
      "error-500": "#FF3B39",
      "error-600": "#DB2937",
      "error-800": "#931232",
      "promo-100": "#E5DEFF",
      "promo-500": "#403294",
      "promo-600": "#30247F",
      primaryOrange: "#F15A24",
      primaryOldOrange: "#FF8800",
      primaryOrangeHover: "#F69102",
      primaryDarkOrange: "#EB7F03",
      primaryOrange40: "rgba(255, 102, 0, 0.4)",
      primaryOrange60: "rgba(255, 102, 0, 0.6)",
      primaryOrange10: "rgba(255, 136, 0, 0.1)",
      primaryDarkBlue: "#2D3A41",
      primaryYellow: "#F6A802",
      primaryGreen: "#2C9008",
      primaryLightGreen: "#F2F6F1",
      primaryDarkGreen: "#045904",
      primaryDarkGreenTopBox: "#006644",
      primaryError: "#FF5252",
      primaryWhite: "#ffffff",
      primaryBlue: "#1098F7",
      primaryPurple: "#9046CF",
      paginationGradient:
        "linear-gradient(180deg, #FF8800 0.59%, #FF6600 100.59%)",
      primaryGradientOrange:
        "linear-gradient(83.47deg, #F15A24 9.02%, #FF6600 90.81%)",
      primaryGradientVerticalOrange:
        "linear-gradient(180deg, #F15A24 0.59%, #FF6600 100.59%)",
      primaryGradientGrey:
        "linear-gradient(83.47deg, rgba(45, 56, 62, 0.68) 9.02%, #2B373E 90.81%)",
      primaryGradientLightGrey:
        "linear-gradient(180deg, #E3E3E3 0.59%, #DCDCDC 99.12%)",
      primaryGradientOrangePig:
        "linear-gradient(180deg, #EEA821 0%, #F15A24 100%)",
      primaryGradientOrangePigInvert:
        "linear-gradient(176.58deg, #F15A24 6.86%, #EEA821 90.34%)",

      borderLightGrey: "#D9D9D9",
      borderSeconday: "#e5e5e5",
      borderMediumGrey: "#838383",
      borderBlack: "#000000",
      borderExtraLightGrey: "#ECEAEA",
      borderExtraLightGreyv2: "#DFE3E8",
      borderLightYellow: "#FFC669",
      borderLight: "#7f7f7f",
      deals: "#F8C550",

      defaultBorder: "0.01rem solid #D9D9D9",

      inStock: "#58960F",

      textBlack: "#000000",
      textPrimary: "#F15A24",
      textDarkGrey: "#414141",
      textLighterDarkGrey: "#515151",
      textMediumGrey: "#838383",
      textLinkDarkBlue: "#165485",
      textLinkBlue: "#0066C0",
      textLinkLightBlue: "#008DFD",
      textLinkPurple: "#1A0DAB",
      textWhite: "#ffffff",
      textHalfWhite: "rgba(255, 255, 255, 0.5);",
      text20White: "rgba(255, 255, 255, 0.2);",
      textUnavailable: "#CECDCD",
      textSantanderRed: "#BC0606",
      textFloaBlue: "#4D93E3",
      textLinkFooter: "#666666",

      iconLightPastelOrange: "#FFF4E3",
      iconMediumGrey: "#838383",
      iconBlack: "#000000",
      iconDarkGrey: "#5A5A5A",
      iconLightGrey: "#D9D8D8",
      iconBlue: "#1573C2",
      iconCancel: "#990000",
      iconWhite: "#FFFFFF",
      iconDarkBlue: "#2D3A41",
      iconOrange: "#FFAA20",
      iconSantanderRed: "#BC0606",
      iconFloaBlue: "#4D93E3",

      backgroundPrimary: "#E5E5E5",
      backgroundBlack: "#000000",

      backgroundDarkGray: "#2b383f",
      backgroundLightGrey: "#F6F6F6",
      backgroundDarkBlue: "#2D3A41",
      backgroundSmokeWhite: "#f0f0f0",
      backgroundProductPage: "#F4F5F9",
      backgroundSecondaryFooter: "#EFEFEF",
      backgroundSearchLinks: "#fff4e3",

      toggleTransparentPrimary: "rgba(255, 136, 0, 0.1)",
      toggleBackgroundWhite: "#FFFFFF",
      white: "#FFFFFF",
      finance: "#BC0606",
      overlay: "rgba(0, 0, 0, 0.5)",
      // BADGES
      isBestOffer: "#403294",
      isBestOfferBackground: "#E5DEFF",
      isFastDelivery: "#016F5B",
      isFastDeliveryBackground: "#D3F6DF",
      isFreeShipping: "#016F5B",
      isFreeShippingBackground: "#D3F6DF",
      isMarketplace: "",
      isMarketplaceBackground: "",
      isFinanceable: "#434343",
      isFinanceableBackground: "#E7E7E7",
      isFloaPayEligible: "#434343",
      isFloaPayEligibleBackground: "#E7E7E7",
      //  DR. FINANCE COLORS
      drPrimary: "#1AB0C7",
      drPrimaryHover: "#0E8E98",
      drValidation15: "rgba(46,174,139,0.15)",
      drValidation15Hover: "#2EAE8B",
      drValidation15TextHover: "#FFFFFF",
      drValidation15Negative: "rgba(255, 59, 57, 0.15)",
      drSecondary: "#228268",
      drLightGrey: "#B9B9B9",
      drGrey: "#9E9E9E",
      drNightGrey: "#F1F1F1",
      drTopbox: "#50C0D1",
    },
    space: {
      sp_0: "0",
      sp_0_5: "0.2rem",
      sp_1: "0.4rem",
      sp_1_5: "0.6rem",
      sp_1_8: "0.7rem",
      sp_2: "0.8rem",
      sp_2_5: "1.0rem",
      sp_3: "1.2rem",
      sp_3_5: "1.4rem",
      sp_4: "1.6rem",
      sp_4_8: "1.9rem",
      sp_5: "2.0rem",
      sp_5_5: "2.2rem",
      sp_6: "2.4rem",
      sp_7: "2.8rem",
      sp_8: "3.2rem",
      sp_9: "3.6rem",
      sp_10: "4.0rem",
      sp_11: "4.4rem",
      sp_12: "4.8rem",
      sp_13: "5.0rem",
      sp_14: "5.4rem",
      sp_15: "5.8rem",
      sp_18: "7.2rem",
    },
    fontSizes: {
      xxs: "0.8rem",
      xs: "1rem",
      s: "1.2rem",
      ssm: "1.3rem",
      sm: "1.4rem",
      m: "1.5rem",
      base: "1.6rem",
      lg: "1.8rem",
      xl: "2.0rem",
      "2xl": "2.4rem",
      "3xl": "3.0rem",
      "4xl": "3.6rem",
      "5xl": "4.8rem",
      "6xl": "6.0rem",
      "7xl": "7.2rem",
      "8xl": "9.6rem",
      "9xl": "12.8rem",
    },
    fonts: {},
    fontWeights: {
      font_thin: 100,
      font_extralight: 200,
      font_light: 300,
      font_normal: 400,
      font_medium: 500,
      font_semibold: 600,
      font_bold: 700,
      font_extrabold: 800,
      font_black: 900,
    },
    lineHeights: {
      xss: "1rem",
      xs: "1.2rem",
      s: "1.3rem",
      sm: "1.4rem",
      m: "1.6rem",
      ssm: "1.8rem",
      md: "2.0rem",
      base: "2.4rem",
      lg: "2.8rem",
      xl: "3.2rem",
      "2xl": "3.6rem",
      "3xl": "4.0rem",
      "3xlx": "4.4rem",
      "4xl": "1",
      x120: "120%",
      x125: "125%",
    },
    letterSpacings: {
      tracking_tighter: " -0.05em",
      tracking_tight: " -0.025em",
      tracking_normal: " 0em",
      tracking_wide: " 0.025em",
      tracking_wider: " 0.05em",
      tracking_widest: " 0.1em",
    },
    sizes: {
      1: "0px",
      2: " 0.2rem",
      3: " 0.4rem",
      4: " 0.6rem",
      5: " 0.8rem",
      6: " 1rem",
      7: " 1.2rem",
      8: " 1.6rem",
      9: " 2.4rem",
      10: " 3.2rem",
      11: " 3.6rem",
      12: " 4.0rem",
      13: " 5.0rem",
      100: "100%",
    },
    radii: {
      rounded_none: "0px",
      rounded_sm: " 0.2rem",
      rounded: " 0.4rem",
      rounded_md: " 0.6rem",
      rounded_lg: " 0.8rem",
      rounded_xl: " 1.2rem",
      rounded_2xl: " 1.6rem",
      rounded_3xl: " 2.4rem",
      rounded_full: " 9999px",
    },
    borderWidths: {
      border_0: "0px",
      border_1: "1px",
      border_2: "2px",
      border_4: "4px",
    },
    rings: {
      ring_2: "$space$sp_4 0 0 0 calc(2px + $space$sp_4) blue",
    },
    borderStyles: {
      solid: "solid",
    },
    filters: {
      elevation_1: "drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.2))",
      elevation_2: "drop-shadow(0px 3px 1px rgba(0, 0, 0, 0.2))",
      elevation_3: "drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.2))",
      elevation_4: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2))",
      elevation_5: "drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.2))",
      elevation_6: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2))",
      elevation_7: "drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.2))",
      elevation_8: "drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.2))",
      elevation_9: "drop-shadow(0px 5px 6px rgba(0, 0, 0, 0.2))",
      elevation_10: "drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.2))",
      elevation_11: "drop-shadow(0px 6px 7px rgba(0, 0, 0, 0.2))",
      elevation_12: "drop-shadow(0px 7px 8px rgba(0, 0, 0, 0.2))",
      elevation_13: "drop-shadow(0px 7px 8px rgba(0, 0, 0, 0.2))",
      elevation_14: "drop-shadow(0px 7px 9px rgba(0, 0, 0, 0.2))",
      elevation_15: "drop-shadow(0px 8px 9px rgba(0, 0, 0, 0.2))",
      elevation_16: "drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.2))",
      elevation_17: "drop-shadow(0px 8px 11px rgba(0, 0, 0, 0.2))",
      elevation_18: "drop-shadow(0px 9px 11px rgba(0, 0, 0, 0.2))",
      elevation_19: "drop-shadow(0px 9px 12px rgba(0, 0, 0, 0.2))",
      elevation_20: "drop-shadow(0px 10px 13px rgba(0, 0, 0, 0.2))",
      elevation_21: "drop-shadow(0px 10px 13px rgba(0, 0, 0, 0.2))",
      elevation_22: "drop-shadow(0px 10px 14px rgba(0, 0, 0, 0.2))",
      elevation_23: "drop-shadow(0px 11px 14px rgba(0, 0, 0, 0.2))",
      elevation_24: "drop-shadow(0px 11px 15px rgba(0, 0, 0, 0.2))",
      elevation_negative_3: "drop-shadow(0px -3px 5px rgba(0, 0, 0, 0.2))",
      filterShadowMKPButton: "drop-shadow(0px 2px 0px #DD7703)",
      filterShadowMKPButtonHover: "drop-shadow(0px 2px 0px #FFA200)",
      filterShadowCPCButton: "drop-shadow(0px 2px 0px #C27804)",
      filterShadowCPCButtonHover: "drop-shadow(0px 2px 0px #F69102)",
    },
    eases: {
      "--ease-1": " cubic-bezier(.25,0,.5,1)",
      "--ease-2": " cubic-bezier(.25,0,.4,1)",
      "--ease-3": " cubic-bezier(.25,0,.3,1)",
      "--ease-4": " cubic-bezier(.25,0,.2,1)",
      "--ease-5": " cubic-bezier(.25,0,.1,1)",
      "--ease-in-1": " cubic-bezier(.25,0,1,1)",
      "--ease-in-2": " cubic-bezier(.50,0,1,1)",
      "--ease-in-3": " cubic-bezier(.70,0,1,1)",
      "--ease-in-4": " cubic-bezier(.90,0,1,1)",
      "--ease-in-5": " cubic-bezier(1,0,1,1)",
      "--ease-out-1": " cubic-bezier(0,0,.75,1)",
      "--ease-out-2": " cubic-bezier(0,0,.50,1)",
      "--ease-out-3": " cubic-bezier(0,0,.3,1)",
      "--ease-out-4": " cubic-bezier(0,0,.1,1)",
      "--ease-out-5": " cubic-bezier(0,0,0,1)",
      "--ease-in-out-1": " cubic-bezier(.1,0,.9,1)",
      "--ease-in-out-2": " cubic-bezier(.3,0,.7,1)",
      "--ease-in-out-3": " cubic-bezier(.5,0,.5,1)",
      "--ease-in-out-4": " cubic-bezier(.7,0,.3,1)",
      "--ease-in-out-5": " cubic-bezier(.9,0,.1,1)",
      "--ease-squish-1": " cubic-bezier(.5,-.1,.1,1.5)",
      "--ease-squish-2": " cubic-bezier(.5,-.3,.1,1.5)",
      "--ease-squish-3": " cubic-bezier(.5,-.5,.1,1.5)",
      "--ease-squish-4": " cubic-bezier(.5,-.7,.1,1.5)",
      "--ease-squish-5": " cubic-bezier(.5,-.9,.1,1.5)",
    },
    animations: {
      "--animation-fade-in": `${fadeIn} .5s $eases$--ease-3`,
      "--animation-fade-in-bloom": `${fadeInBloom} 2s $eases$--ease-3`,
      "--animation-fade-out": `${fadeOut} .5s $eases$--ease-3`,
      "--animation-fade-out-bloom": `${fadeOutBloom} 2s $eases$--ease-3`,
      "--animation-scale-up": `${scaleUp} .5s $eases$--ease-3`,
      "--animation-scale-down": `${scaleDown} .5s $eases$--ease-3`,
      "--animation-slide-out-up": `${slideOutUp} .5s $eases$--ease-3`,
      "--animation-slide-out-down": `${slideOutDown} .5s $eases$--ease-3`,
      "--animation-slide-out-right": `${slideOutRight} .5s $eases$--ease-3`,
      "--animation-slide-out-left": `${slideOutLeft} .5s $eases$--ease-3`,
      "--animation-slide-in-up": `${slideInUp} .5s $eases$--ease-3`,
      "--animation-slide-in-down": `${slideInDown} .5s $eases$--ease-3`,
      "--animation-slide-in-right": `${slideInRight} .5s $eases$--ease-3`,
      "--animation-slide-in-left": `${slideInLeft} .5s $eases$--ease-3`,
    },
    shadows: {
      shadowDefault:
        "0px 6px 8px -6px rgba(24, 39, 75, 0.12), 0px 8px 16px -6px rgba(24, 39, 75, 0.08)",
      shadowCardHover:
        "0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1)",
      productsShadow:
        "0px 8px 16px -6px rgba(24, 39, 75, 0.08), 0px 6px 8px -6px rgba(24, 39, 75, 0.12)",
      productsTabs:
        "0px 8px 16px -6px rgba(24, 39, 75, 0.08), 0px 6px 8px -6px rgba(24, 39, 75, 0.12)",
      appsLinksShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
    },
    zIndices: {
      almostTop: "1000",
      onTop: "9999",
      dialogLevel: "99999",
    },
    transitions: {
      defaultRotation: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
    },
  },
  media: {
    xm: "(min-width:375px)",
    sm: "(min-width:480px)",
    md: "(min-width:768px)",
    lg: "(min-width:992px)",
    xl: "(min-width:1200px)",
    xxl: "(min-width:1400px)",
    xxxl: "(min-width:1500px)",
  },
  utils: {
    mx: (value: string) => ({ marginLeft: value, marginRight: value }),
    my: (value: string) => ({ marginTop: value, marginBottom: value }),
    px: (value: string) => ({ paddingLeft: value, paddingRight: value }),
    py: (value: string) => ({ paddingTop: value, paddingBottom: value }),
    br: (value: string) => ({
      borderRadius: value,
    }),
    brl: (value: string) => ({
      borderTopLeftRadius: value,
      borderBottomLeftRadius: value,
    }),
    brr: (value: string) => ({
      borderTopRightRadius: value,
      borderBottomRightRadius: value,
    }),
  },
})

export const globalStyles = globalCss({
  "@import": [
    "url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap')",
  ],
  "*": {
    boxSizing: "border-box",
    outline: 0,
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
  },
  "html,body": {
    padding: 0,
    margin: 0,
    fontFamily: "'Roboto',Helvetica,Arial,sans-serif",
    fontSize: "62.5%",
    backgroundColor: "$backgroundProductPage",
  },
  input: {
    fontFamily: "'Roboto',Helvetica,Arial,sans-serif",
    fontWeight: 400,
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
  button: {
    fontFamily: "'Roboto',Helvetica,Arial,sans-serif",
  },

  "input[type=range]::-moz-range-thumb": {
    pointerEvents: "auto",
  },
  "input[type=range]::-webkit-slider-thumb": {
    pointerEvents: "auto",
  },
})

export const srOnly = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: 0,
}
