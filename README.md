# react-styled

This is a basic, stripped down project started with Create React App, Smooth Scroll and Styled Components.

- react
- react-icons
- react-scroll
- react-scroll
- styled-components
- env-cmd added
- firebase g4 integration
- typography
- typography-inject-fonts
- typography-theme-grand-view

### Todo's

- [x] Add Footer
- [ ] Add Footer content
- [x] Add smooth scrolling
- [ ] Activate aside menu
- [ ] Revise content
- [x] Add signin page
- [ ] Create page transition
- [ ] Activate signin (firebase)
- [ ] Add signup form
- [ ] Clean and create Starter site from this setup
- [ ] Add modal for signup/signin (then fix nav)
- [ ] Add legal/credits
- [ ] Add a dismissable cookie notice

## Typography.js w/CRA

```js
import Typography from "typography";
import grandViewTheme from "typography-theme-grand-view";
import injectFonts from "typography-inject-fonts";

const typography = new Typography(grandViewTheme);
typography.injectStyles();
injectFonts(typography);
```

Having some issues with typography here, working in g4 gatsby...
