Rating Input
=========================

[![Build Status](https://travis-ci.org/sw4/pk-rating.svg?branch=master)](https://travis-ci.org/sw4/pk-rating)

Rating input field written in vanilla HTML &amp; CSS

**Licensed under [cc by-sa 3.0](http://creativecommons.org/licenses/by-sa/3.0/) with attribution required**

[Demo](http://sw4.github.io/rating-input/)

###Features

- HTML form compliant (input value can be submitted like with any other `input` element
- Mousewheel support

###Requires

- `pk-base.js`
- `pk-base.css`


###Usage

`pk.rating(opt);`

Returns a new slider object.

`opt` is an object consisting of:

```
element: \\ DOM element to replace with a slider - the elements attributes are carried over
name: \\ the name to use for the input form element (can also be set as attribute on original element)
value: \\ the starting value (defaults to 0)
tabindex: \\ tabindex value (can also be set as attribute on original element) - defaults to 0
listeners: \\ object consisting of regular event functions
```

###Methods

`rating.val(value)`

Where `rating` is a rating object and value is either blank/null to get the current value, or a numeric value to set it (0-5)
