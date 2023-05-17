import { keyframes } from "@stitches/react"

export const fadeIn = keyframes({
  to: {
    opacity: 1,
  },
})

export const fadeInBloom = keyframes({
  "0%": {
    opacity: 0,
    filter: "brightness(1) blur(20px)",
  },

  "10%": {
    opacity: 1,
    filter: "brightness(2) blur(10px)",
  },

  to: {
    opacity: 1,
    filter: "brightness(1) blur(0)",
  },
})

export const fadeOut = keyframes({
  to: {
    opacity: 0,
  },
})

export const fadeOutBloom = keyframes({
  to: {
    opacity: 0,
    filter: "brightness(1) blur(20px)",
  },

  "10%": {
    opacity: 1,
    filter: "brightness(2) blur(10px)",
  },

  "0%": {
    opacity: 1,
    filter: "brightness(1) blur(0)",
  },
})

export const scaleUp = keyframes({
  to: {
    transform: "scale(1.25)",
  },
})

export const scaleDown = keyframes({
  to: {
    transform: "scale(0.75)",
  },
})

export const slideOutUp = keyframes({
  to: {
    transform: "translateY(-100%)",
  },
})

export const slideOutDown = keyframes({
  to: {
    transform: "translateY(100%)",
  },
})
export const slideOutRight = keyframes({
  to: {
    transform: "translate(100%)",
  },
})

export const slideOutLeft = keyframes({
  to: {
    transform: "translate(-100%)",
  },
})

export const slideInUp = keyframes({
  "0%": {
    transform: "translateY(100%)",
  },
})

export const slideInDown = keyframes({
  "0%": {
    transform: "translateY(-100%)",
  },
})
export const slideInRight = keyframes({
  "0%": {
    transform: "translate(-100%)",
  },
})

export const slideInLeft = keyframes({
  "0%": {
    transform: "translate(100%)",
  },
})
