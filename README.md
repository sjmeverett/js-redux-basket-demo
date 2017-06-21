# JS / React / Redux basket demo

Demonstrates basic shopping basket functionality in a [React](https://facebook.github.io/react/) application,
using [Redux](http://redux.js.org/) for state management.

## Quick start

Clone:

    $ git clone https://github.com/stewartml/js-redux-basket-demo

Install dependencies:

    $ npm install

Build:

    $ npm run build

Run tests:

    $ npm test

Launch app (in default browser, hope it&apos;s a recent one):

    $ open dist/public/index.html

The app is build using [Webpack](https://webpack.js.org/), with ES6 processing done by [Babel](https://babeljs.io/).  The
test framework used is [AVA](https://github.com/avajs/ava).

Folders:
 * [`src/lib/store`](src/lib/store) - contains the Redux store, the business logic (note that because it uses React and Redux, it has to be written in a slightly awkward immutable fashion)
 * [`src/lib/components`](src/lib/components) - contains the UI
 * [`src/test`](src/test) - contains the unit tests
