import { styled } from "@stitchesConfig"

// TODO Delete everything above after complete Button.tsx migration

export const ButtonWrapper = styled("button", {
  backgroundColor: "$white",
  cursor: "pointer",
  px: "$sp_4",
  fontSize: "$m",
  fontWeight: "$font_medium",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "$sp_1_5",
  letterSpacing: "$tracking_wide",
  lineHeight: "$base",
  transition: "all $eases$--ease-out-1 100ms",
  "& .buttonLabel": {
    cursor: "inherit",
    display: "flex",
    justifyContent: "center",
  },
  variants: {
    active: {
      true: {
        borderColor: "$primaryOrange",
      },
    },
    color: {
      primary: {
        color: "$white",
        background: "$primary-500",
        fontWeight: "$font_medium",
        "&:enabled:hover": {
          background: "$primary-400",
        },
        "&:enabled:active": {
          background: "$primary-700",
        },
        "&:disabled": {
          color: "$white",
        },
      },
      secondary: {
        color: "$white",
        background: "$info-500",
        fontWeight: "$font_medium",
        "&:enabled:hover": {
          background: "$info-400",
        },
        "&:enabled:active": {
          background: "$info-600",
        },
      },
      marketplace: {
        color: "$white",
        background: "$success-500",
        fontWeight: "$font_medium",
        "&:enabled:hover": {
          background: "$success-400",
        },
        "&:enabled:active": {
          background: "$success-700",
        },
      },
      duo: {
        color: "$info-500",
        background: "$info-50",
        fontWeight: "$font_medium",
        "&:enabled:hover": {
          color: "$white",
          background: "$info-500",
        },
        "&:enabled:active": {
          color: "$white",
          background: "$info-600",
        },
      },
      default: {
        color: "$textDarkGrey",
      },
      error: {
        color: "$white",
        background: "$error-500",
        "&:enabled:hover": {
          color: "$white",
          background: "$error-400",
        },
      },
    },
    border: {
      none: {
        border: "1px solid transparent", // In order to have same dimensions as a regular button with border
      },
      default: {
        border: "1px solid $neutral-200",
        "&:enabled:hover": {
          borderColor: "$info-400",
        },
      },
      primary: {
        border: "1px solid $primary-500",
        color: "$primary-500",
        "&:enabled:hover": {
          borderColor: "$primary-700",
          color: "$primary-700",
        },
      },
      info: {
        border: "1px solid $info-500",
        "&:enabled:hover": {
          borderColor: "$info-500",
        },
      },
      error: {
        border: "1px solid $neutral-75",
        "&:enabled:hover": {
          borderColor: "$error-600",
        },
      },
      filter: {
        border: "1px solid $neutral-75",
        "&:enabled:hover": {
          "@md": {
            borderColor: "$info-400",
          },
        },
      },
    },
    lineHeight: {
      xxSmall: {
        lineHeight: "$xss",
      },
      xSmall: {
        lineHeight: "$xs",
      },
      small: {
        lineHeight: "$sm",
      },
      xsMedium: {
        lineHeight: "$m",
      },
      medium: {
        lineHeight: "$ssm",
      },
      xlMedium: {
        lineHeight: "$md",
      },
      default: {
        lineHeight: "$base",
      },
      large: {
        lineHeight: "$lg",
      },
      xLarge: {
        lineHeight: "$xl",
      },
    },
    dimension: {
      fitContent: {
        py: "0",
      },
      xSmall: {
        py: "$sp_0_5",
      },
      small: {
        py: "$sp_1",
      },
      medium: {
        py: "$sp_1_5",
      },
      mlarge: {
        py: "$sp_3",
      },
      large: {
        py: "$sp_4",
      },
      default: {
        py: "$sp_2",
      },
    },
    dimensionX: {
      fitContent: {
        px: "0",
      },
      xSmall: {
        px: "0",
      },
      small: {
        px: "$sp_1",
      },
      medium: {
        px: "$sp_1_5",
      },
      xMedium: {
        px: "$sp_2",
      },
      large: {
        px: "$sp_6",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        "@md": {
          width: "auto",
        },
      },
      fluid: {
        width: "$100",
        display: "flex",
        justifyContent: "center",
      },
      default: {
        px: "$sp_4",
      },
    },
    shape: {
      pill: {
        br: "$rounded_full",
      },
      tile: {
        br: "0",
      },
      default: {
        br: "$rounded_lg",
      },
    },
    notAllowed: {
      true: {
        cursor: "not-allowed",
        color: "$textMediumGrey",
        opacity: "0.5",
      },
    },
    shadow: {
      true: {
        boxShadow: "$shadows$shadowDefault",
      },
    },
    collapseOnMobile: {
      true: {
        px: "$sp_1_5",
        "& .buttonLabel": {
          display: "none",
        },
        "@md": {
          px: "$sp_4",
          "& .buttonLabel": {
            display: "flex",
          },
        },
      },
    },
  },
  compoundVariants: [
    {
      active: true,
      border: "filter",
      css: {
        borderColor: "$info-500",
        "> span": {
          color: "$info-500",
        },
      },
    },
  ],
})
