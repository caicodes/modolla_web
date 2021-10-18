import Typography from "typography";
import grandViewTheme from "typography-theme-grand-view";
import injectFonts from "typography-inject-fonts";

const typography = new Typography(grandViewTheme);
typography.injectStyles();
injectFonts(typography);

export default typography;
