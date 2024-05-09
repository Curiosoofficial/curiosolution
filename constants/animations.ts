import { delay } from "framer-motion"

export const NavbarLogoFadeInAnimation = {
    initial: {
        opacity: 0,
        y: -100,
    },
    animate:{
        opacity: 1,
        y: 0,
    },
}

export const NavbarLinksFadeInAnimation = {
    initial: {
        opacity: 0,
        y: -100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        }
    }),
}

export const NavbarButtonFadeInAnimation = {
    initial: {
        opacity: 0,
        y: -100,
    },
    animate:{
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.3
        }
    },
}

export const FadeInFromLeft = {
    initial: {
        opacity: 0,
        x: -200,
    },
    animate:{
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.5
        }
    },
}

export const FadeInFromRight = {
    initial: {
        opacity: 0,
        x: 200,
    },
    animate:{
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.8
        }
    },
}