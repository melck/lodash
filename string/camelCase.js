define(['../internal/createCompounder'], function(createCompounder) {

  /**
   * Converts `string` to camel case.
   * See [Wikipedia](http://en.wikipedia.org/wiki/CamelCase) for more details.
   *
   * @static
   * @memberOf _
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the camel cased string.
   * @example
   *
   * _.camelCase('Foo Bar');
   * // => 'fooBar'
   *
   * _.camelCase('--foo-bar');
   * // => 'fooBar'
   *
   * _.camelCase('__foo_bar__');
   * // => 'fooBar'
   */
  var camelCase = createCompounder(function(result, word, index) {
    word = word.toLowerCase();
    return index ? (result + word.charAt(0).toUpperCase() + word.slice(1)) : word;
  });

  return camelCase;
});
