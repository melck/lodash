/**
 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var baseMatches = require('lodash._basematches'),
    find = require('lodash.find');

/**
 * Performs a deep comparison between each element in `collection` and the
 * source object, returning the first element that has equivalent property
 * values.
 *
 * @static
 * @memberOf _
 * @category Collection
 * @param {Array|Object|string} collection The collection to search.
 * @param {Object} source The object of property values to match.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'status': 'busy' },
 *   { 'user': 'fred',   'age': 40, 'status': 'busy' }
 * ];
 *
 * _.result(_.findWhere(users, { 'status': 'busy' }), 'user');
 * // => 'barney'
 *
 * _.result(_.findWhere(users, { 'age': 40 }), 'user');
 * // => 'fred'
 */
function findWhere(collection, source) {
  return find(collection, matches(source));
}

/**
 * Creates a function which performs a deep comparison between a given object
 * and `source`, returning `true` if the given object has equivalent property
 * values, else `false`.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 36 }
 * ];
 *
 * var matchesAge = _.matches({ 'age': 36 });
 *
 * _.filter(users, matchesAge);
 * // => [{ 'user': 'barney', 'age': 36 }]
 *
 * _.find(users, matchesAge);
 * // => { 'user': 'barney', 'age': 36 }
 */
function matches(source) {
  return baseMatches(source, true);
}

module.exports = findWhere;
