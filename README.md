# Define Method

[![Version][version-badge]][npm]
[![License][license-badge]][license]
[![Build][build-badge]][travis]
[![Coverage][coverage-badge]][coveralls]
[![Dependencies][dependencies-badge]][gemnasium]

**Define Method** is a simple utility for defining an instance method in ES5
with the same [property descriptor][descriptor] as an [ES2015 class][class]
method.

## Install

Install with [npm][npm]:

```sh
npm install --save define-method
```

## Usage

In ES2015, we might do this:

```js
class Fish {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, my name is ${this.name} the fish.`);
  }
}
```

In ES5, we can do this:

```js
var defineMethod = require('define-method');

function Fish(name) {
  this.name = name;
}

defineMethod(Fish, 'greet', function() {
  console.log('Hello, my name is ' + this.name + ' the fish.');
});
```

And here is Vladimir:

```js
new Fish('Vladimir').greet(); // 'Hello, my name is Vladimir the fish.'
```

## API

#### `defineMethod(constructor, prop, method)`

| Param | Type | Description |
| :---- | :--- | :---------- |
| constructor | `function` | The constructor function whose prototype the method will be added to |
| prop | `string` | The property name of the method |
| method | `function` | The method to add |

## License

Copyright &copy; 2016 Akim McMath. Licensed under the [MIT License][license].

[version-badge]: https://img.shields.io/npm/v/define-method.svg?style=flat-square
[license-badge]: https://img.shields.io/npm/l/define-method.svg?style=flat-square
[build-badge]: https://img.shields.io/travis/akim-mcmath/define-method/master.svg?style=flat-square
[coverage-badge]: https://img.shields.io/coveralls/akim-mcmath/define-method/master.svg?style=flat-square&service=github
[dependencies-badge]: https://img.shields.io/gemnasium/akim-mcmath/define-method.svg?style=flat-square
[npm]: https://www.npmjs.com/package/define-method
[license]: LICENSE
[travis]: https://travis-ci.org/akim-mcmath/define-method
[coveralls]: https://coveralls.io/github/akim-mcmath/define-method?branch=master
[gemnasium]: https://gemnasium.com/akim-mcmath/define-method
[descriptor]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
[class]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes
