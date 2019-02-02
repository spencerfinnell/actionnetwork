# Action Network

Easily list a series of activist and quickly access and update information about an individual.

## About

### Accessibility

The directory is developed to be fully keyboard accessible, and screen reader compliant. Appropriate `aria-label` tags are added where necessary to ensure context is given to elements when being read by a screen reader.

### Components

The directory is comprised of a series of reusable `components`. These `components` are utitlized by `modules` which extend and alter the original `component` based on a specific use-case (such as implementing an Accordion to display a list of Activists).

[See all components](https://spencerfinnell.github.io/actionnetwork/components.html)

## Development

### Technology

Assets are managed using [Webpack](https://webpack.js.org/). [PostCSS](https://postcss.org/) helps transform CSS and allows modern CSS techniques such as variables, custom media queries, and more to be utilized.

Other libraries such as [Font Awesome](https://fontawesome.com/) and CSS shims are automatically compiled in to the directory's Javascript file on build.

### Install

Requires [Node](https://nodejs.org/en/).

```
$ npm install
```

### Watch for Changes

CSS and Javascript can be automatically rebuilt with the following command:

```
$ npm run dev
```

### Lint

CSS linting is available with the following command:

```
$ npm run lint-css
```

Automatic fixes can be applied with:

```
$ npm run lint-css:fix
```

### Build

Build an optimized version of the directory assets with the following command:

```
$ npm run build
```

## Future

Improvments that could be made in a future release:

- [ ] Add Javascript linting.
- [ ] Create a true Accordion component in Javascript.
- [ ] Minify CSS on production build.
- [ ] Implement more robust grid system.
- [ ] Implement a more robust button system.
- [ ] Add contextual help to icon-only buttons (tooltips).
