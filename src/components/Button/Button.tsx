import React, { forwardRef, ReactComponentElement } from "react"

import { ButtonWrapper } from "../Button/styles"

interface ButtonWrapperType
  extends React.ComponentProps<typeof ButtonWrapper> {}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "duo" | "marketplace" | "default" | "error"
  dimension?:
    | "small"
    | "xSmall"
    | "medium"
    | "large"
    | "default"
    | "fitContent"
    | "mlarge"
  dimensionX?:
    | "small"
    | "xSmall"
    | "medium"
    | "xMedium"
    | "large"
    | "default"
    | "fitContent"
    | "fluid"
  shape?: "tile" | "pill" | "default"
  shadow?: boolean
  label: string | ReactComponentElement<any>
  childPosition?: "left" | "right"
  backgroundColor?: string
  textColor?: string
  textHoverColor?: string
  borderHoverColor?: string
  hoverColor?: string
  border?: "default" | "info" | "filter" | "none" | "error" | "primary"
  collapseOnMobile?: boolean
  active?: boolean
  lineHeight?:
    | "xxSmall"
    | "xSmall"
    | "small"
    | "xsMedium"
    | "medium"
    | "xlMedium"
    | "default"
    | "large"
    | "xLarge"
}

const colors: ButtonWrapperType["color"] = {
  primary: "primary",
  secondary: "secondary",
  duo: "duo",
  default: "default",
  error: "error",
  marketplace: "marketplace",
}

const borders: ButtonWrapperType["border"] = {
  none: "none",
  default: "default",
  info: "info",
  filter: "filter",
  error: "error",
  primary: "primary",
}

const dimensions: ButtonWrapperType["dimension"] = {
  fitContent: "fitContent",
  xSmall: "xSmall",
  small: "small",
  default: "default",
  large: "large",
  medium: "medium",
  mlarge: "mlarge",
}
const dimensionsX: ButtonWrapperType["dimensionX"] = {
  fitContent: "fitContent",
  xSmall: "xSmall",
  small: "small",
  default: "default",
  large: "large",
  medium: "medium",
  xMedium: "xMedium",
  fluid: "fluid",
}

const shapes: ButtonWrapperType["shape"] = {
  default: "default",
  pill: "pill",
  tile: "tile",
}

const lineHeights: ButtonWrapperType["lineHeight"] = {
  xxSmall: "xxSmall",
  xSmall: "xSmall",
  small: "small",
  xsMedium: "xsMedium",
  medium: "medium",
  xlMedium: "xlMedium",
  default: "default",
  large: "large",
  xLarge: "xLarge",
}

const Button = (
  {
    color = "default",
    dimension = "default",
    dimensionX = "default",
    shape = "default",
    shadow,
    label,
    childPosition = "left",
    backgroundColor,
    textColor,
    border = "default",
    borderHoverColor,
    textHoverColor,
    hoverColor,
    collapseOnMobile,
    lineHeight = "default",
    active,
    ...props
  }: ButtonProps,
  ref: any
) => {
  return (
    <ButtonWrapper
      lineHeight={lineHeights[lineHeight]}
      ref={ref}
      color={colors[color]}
      border={borders[border]}
      dimension={dimensions[dimension]}
      dimensionX={dimensionsX[dimensionX]}
      shape={shapes[shape]}
      notAllowed={props.disabled}
      collapseOnMobile={collapseOnMobile}
      {...props}
      shadow={shadow}
      active={active}
      css={{
        backgroundColor,
        color: textColor,
        "&:hover:enabled": {
          borderColor: borderHoverColor,
          backgroundColor: hoverColor,
          color: textHoverColor,
        },

        ...props.style,
      }}
    >
      {props.children && childPosition === "left" ? props.children : null}
      {label !== "" ? <span className="buttonLabel">{label}</span> : null}
      {props.children && childPosition === "right" ? props.children : null}
    </ButtonWrapper>
  )
}

export default forwardRef(Button)
