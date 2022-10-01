// would prefer to use a var here, but it doesn't work
// vars: {
//   '--button-base-saturation': vars.colorMod.saturation.normal,
//   '--button-base-lightness': vars.colorMod.lightness.normal,
// },


import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../styles/theme/index.css";

export const buttonStyle = recipe({

  base: {
    fontSize: vars.fonts.sizes.Subheadline,
    fontWeight: "bold",
    color: vars.colors.text.normal,
    padding: vars.spacing.small,
    border: "0",
    borderRadius: vars.trim.smallBorderRadius,
  },

  variants: {
    color: {
      primary: {
        // @ts-expect-error
        '--button-hue': vars.brandHue,
        '--button-base-saturation': vars.colorMod.saturation.normal,
        '--button-base-lightness': vars.colorMod.lightness.normal,
      },
      secondary: {
        // @ts-expect-error
        '--button-hue': vars.secondaryHue,
        '--button-base-saturation': vars.colorMod.saturation.normal,
        '--button-base-lightness': vars.colorMod.lightness.normal,
      },
      tertiary: {
        // @ts-expect-error
        '--button-hue': vars.tertiaryHue,
        '--button-base-saturation': vars.colorMod.saturation.normal,
        '--button-base-lightness': vars.colorMod.lightness.normal,
      },
      cancel: {
        // @ts-expect-error
        '--button-hue': vars.errorHue,
        '--button-base-saturation': vars.colorMod.saturation.normal,
        '--button-base-lightness': vars.colorMod.lightness.normal,
      },
      accent: {
        // @ts-expect-error
        '--button-hue': vars.backgroundAccentMain,
        '--button-base-saturation': vars.colorMod.saturation.normal,
        '--button-base-lightness': vars.colorMod.lightness.normal,
      },
      clear: {
        backgroundColor: "transparent",
      },
    },

    type: {
      fill: {
        backgroundColor: `hsl(var(--button-hue),${vars.colorMod.saturation.normal},${vars.colorMod.lightness.normal})`,
        border: `1px solid hsl(var(--button-hue),${vars.colorMod.saturation.normal},${vars.colorMod.lightness.normal})`,
        ":hover": {
          backgroundColor: `hsl(var(--button-hue),${vars.colorMod.saturation.bright},${vars.colorMod.lightness.normal})`,
          border: `1px solid hsl(var(--button-hue),${vars.colorMod.saturation.bright},${vars.colorMod.lightness.normal})`,
        },
        ":active": {
          backgroundColor: `hsl(var(--button-hue),${vars.colorMod.saturation.bright},${vars.colorMod.lightness.dim})`,
          border: `1px solid hsl(var(--button-hue),${vars.colorMod.saturation.bright},${vars.colorMod.lightness.dim})`,
        },

        ":focus": {
          backgroundColor: `hsl(var(--button-hue),${vars.colorMod.saturation.bright},${vars.colorMod.lightness.dim})`,
          border: `1px solid hsl(var(--button-hue),${vars.colorMod.saturation.bright},${vars.colorMod.lightness.dim})`,
        },

        ":disabled": {
          backgroundColor: `hsl(var(--button-hue),${vars.colorMod.saturation.dim},${vars.colorMod.lightness.dim})`,
          border: `1px solid hsl(var(--button-hue),${vars.colorMod.saturation.dim},${vars.colorMod.lightness.dim})`,
        },
      },
      outline: {
        backgroundColor: "transparent",
        border: `1px solid hsl(var(--button-hue),${vars.colorMod.saturation.normal},${vars.colorMod.lightness.normal})`,
        ":hover": {
          borderColor: `hsl(var(--button-hue),${vars.colorMod.saturation.bright},${vars.colorMod.lightness.normal})`,
        },

        ":active": {
          borderColor: `hsl(var(--button-hue),${vars.colorMod.saturation.bright},${vars.colorMod.lightness.dim})`,
        },

        ":focus": {
          borderColor: `hsl(var(--button-hue),${vars.colorMod.saturation.bright},${vars.colorMod.lightness.dim})`,
        },

        ":disabled": {
          borderColor: `hsl(var(--button-hue),${vars.colorMod.saturation.dim},${vars.colorMod.lightness.dim})`,
        },
      },
      action: {
        backgroundColor: "transparent",
        color: `hsl(var(--button-hue),${vars.colorMod.saturation.normal},${vars.colorMod.lightness.normal})`,
        textDecoration: "underline",
        ":hover": {
          color: `hsl(var(--button-hue),${vars.colorMod.saturation.bright},${vars.colorMod.lightness.normal})`,
        },

        ":active": {
          color: `hsl(var(--button-hue),${vars.colorMod.saturation.bright},${vars.colorMod.lightness.dim})`,
        },

        ":focus": {
          color: `hsl(var(--button-hue),${vars.colorMod.saturation.bright},${vars.colorMod.lightness.dim})`,
        },

        ":disabled": {
          color: `hsl(var(--button-hue),${vars.colorMod.saturation.dim},${vars.colorMod.lightness.dim})`,
        },
      }
    },

    size: {
      large: {
        width: "100%",
        fontSize: vars.fonts.sizes.Headline,
      }
    }
  },

  defaultVariants: {
    color: "primary",
    type: "fill",
  },

});