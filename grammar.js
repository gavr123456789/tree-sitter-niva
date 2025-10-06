/**
 * @file A parser for the Smalltalk-like programming language Niva
 * @author Nadelio <carefulsniffle@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "niva",

  rules: {
    source_file: $ => repeat($._expression),
    
    _expression: $ => choice(explicit_type, type, fn_call, operator, keyword, block, number, string),
    
    explicit_type: $ => seq($.identifier, '::'),
    type: $ => /[A-Z][a-zA-Z_\-]+/,
    fn_call: $ => seq($.identifier, ':'),
    
    operator: $ => choice(">", "<", "=", "~", "/", "+", "-", "_", "*", "?", "@", "==", "!=", ">=", "<=", "+=", "-=", "/=", "*=", "**=", "!", "%", "&", "^", ">>", "<<", ".", ",", ";", "|", "|=>", "=>", "|>", "^"),

    keyword: $ => choice(
      'false',
      'true',
      'union',
      'type',
      'enum',
      'this',
      'mut',
      'null',
      'new',
      'do',
      'Bind',
      'package',
      'constructor',
      'errordomain',
      'builder',
      'on'
    ),

    annotation: $ => seq('@', identifier)

    block: $ => choice(
      seq('[', repeat($._expression), ']'),
      seq('#{', repeat($._expression), '}'),
      seq('{', repeat($._expression), '}'),
      seq('(', repeat($._expression), ')'),
    )

    identifier: $ => /[a-zA-Z_][a-zA-Z_\-]/,
    number: $ => /\d+/,
    string: $ => /\".*\"/
    comment: $ => /\/\/.*/
  }
});
