# [What is my prefers-color-scheme?](https://henriquetf.github.io/what-is-my-prefers-color-scheme/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE)

Quickly find out what color scheme your browser is currently using.

JavaScript is not needed for it to work.

[According to MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme), the `prefers-color-scheme` media can be set to the following values:

- **no-preference:** Indicates that the user has made no preference known to the system.

  - Defaults to `light` in most cases.

  - Web applications that run `matchMedia('(prefers-color-scheme: dark)')` to check if `dark` is the preferred color scheme will default to `light`.

- **light:** Indicates that user has notified the system that they prefer an interface that has a light theme.
- **dark:** Indicates that user has notified the system that they prefer an interface that has a dark theme.

### Preview

![Dark](./.github/preview/prefers-color-scheme-dark.png)
![Light](./.github/preview/prefers-color-scheme-light.png)
![No preference](./.github/preview/prefers-color-scheme-no-preference.png)
![Not supported](./.github/preview/prefers-color-scheme-not-supported.png)

### License

[MIT](./LICENSE).
