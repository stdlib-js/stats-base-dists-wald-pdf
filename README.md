<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Probability Density Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Wald][wald-distribution] distribution probability density function (PDF).

<section class="intro">

The [probability density function][pdf] (PDF) for a [Wald][wald-distribution] random variable is

<!-- <equation class="equation" label="eq:wald_pdf" align="center" raw="f(x;\mu,\lambda) = \sqrt{\frac{\lambda}{2\pi x^3}}\, e^{-\frac{\lambda(x-\mu)^2}{2\mu^2 x}}" alt="Probability density function (PDF) for a Wald distribution."> -->

```math
f(x;\mu,\lambda) = \sqrt{\frac{\lambda}{2\pi x^3}}\, e^{-\frac{\lambda(x-\mu)^2}{2\mu^2 x}}
```

<!-- <div class="equation" align="center" data-raw-text="f(x;\mu,\lambda) = \sqrt{\frac{\lambda}{2\pi x^3}}\, e^{-\frac{\lambda(x-\mu)^2}{2\mu^2 x}}" data-equation="eq:wald_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@2cee50a75da1437551b91682b8785dbae8ab897f/lib/node_modules/@stdlib/stats/base/dists/wald/pdf/docs/img/equation_wald_pdf.svg" alt="Probability density function (PDF) for a Wald distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `μ > 0` is the mean and `λ > 0` is the shape parameter.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
pdf = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-wald-pdf@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var pdf = require( 'path/to/vendor/umd/stats-base-dists-wald-pdf/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-wald-pdf@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.pdf;
})();
</script>
```

#### pdf( x, mu, lambda )

Evaluates the [probability density function][pdf] (PDF) for a [Wald][wald-distribution] distribution with parameters `mu` (mean) and `lambda` (shape parameter).

```javascript
var y = pdf( 2.0, 1.0, 1.0 );
// returns ~0.110

y = pdf( 0.5, 2.0, 3.0 );
// returns ~0.362
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pdf( NaN, 1.0, 1.0 );
// returns NaN

y = pdf( 1.0, NaN, 1.0 );
// returns NaN

y = pdf( 1.0, 1.0, NaN );
// returns NaN
```

If provided `mu <= 0`, the function returns `NaN`.

```javascript
var y = pdf( 2.0, 0.0, 1.0 );
// returns NaN

y = pdf( 2.0, -1.0, 1.0 );
// returns NaN
```

If provided `lambda < 0`, the function returns `NaN`.

```javascript
var y = pdf( 2.0, 1.0, -1.0 );
// returns NaN
```

If provided `lambda = 0`, the function evaluates the [PDF][pdf] of a [degenerate distribution][degenerate-distribution] centered at `mu`.

```javascript
var y = pdf( 2.0, 1.0, 0.0 );
// returns 0.0

y = pdf( 1.0, 1.0, 0.0 );
// returns Infinity
```

If provided `x <= 0`, the function returns `0.0`.

```javascript
var y = pdf( 0.0, 1.0, 1.0 );
// returns 0.0

y = pdf( -1.0, 1.0, 1.0 );
// returns 0.0
```

#### pdf.factory( mu, lambda )

Partially applies `mu` and `lambda` to create a reusable function for evaluating the PDF.

```javascript
var mypdf = pdf.factory( 1.0, 1.0 );

var y = mypdf( 2.0 );
// returns ~0.110

y = mypdf( 0.5 );
// returns ~0.879
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each-map@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-wald-pdf@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var opts = {
    'dtype': 'float64'
};
var x = uniform( 10, EPS, 10.0, opts );
var mu = uniform( 10, EPS, 10.0, opts );
var lambda = uniform( 10, EPS, 20.0, opts );

logEachMap( 'x: %0.4f, μ: %0.4f, λ: %0.4f, f(x;μ,λ): %0.4f', x, mu, lambda, pdf );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-wald-pdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-wald-pdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-wald-pdf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-wald-pdf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-wald-pdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-wald-pdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-wald-pdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-wald-pdf/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-wald-pdf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-wald-pdf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-wald-pdf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-wald-pdf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-wald-pdf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-wald-pdf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-wald-pdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-wald-pdf/main/LICENSE

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[wald-distribution]: https://en.wikipedia.org/wiki/Inverse_Gaussian_distribution

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

</section>

<!-- /.links -->
