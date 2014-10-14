Rating Input
=========================

[![Build Status](https://travis-ci.org/sw4/pk-rating.svg?branch=master)](https://travis-ci.org/sw4/pk-rating)

Rating input field written in vanilla HTML &amp; CSS

**Licensed under [cc by-sa 3.0](http://creativecommons.org/licenses/by-sa/3.0/) with attribution required**

[Demo](http://sw4.github.io/rating-input/)


###Requires

`pk-base.js` and `pk-base.css`


###Usage


#####Plain Javascript

`pk.rating({element:document.getElementById('yourEl')});`*

*<sup>You can use any means to retrieve a DOM node to pass to `pk.toggleswitch()`</sup>

#####jQuery

Initiate with `$('yourEl').rating();`

#####Angular

Simply include `pk-rating` as an application dependancy, add the attribute `pk-rating` and the `pkRating` directive will automatically apply.


###Notes

To assign the underlying input element a specific name, either pass the javascript object constructor `name:...` or add a name attribute to the passed element.
