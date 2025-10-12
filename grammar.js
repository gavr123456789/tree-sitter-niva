/**
 * @file niva grammar for tree-sitter
 * @author gavr <qwf>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "niva",

  rules: {
    source_file: ($) => repeat($._expression),

    _expression: ($) =>
      choice(
        $.keywords,
        $._identifier_like,
        $.control_flow,
        $.operator,
        $._comment_like,
        $._number_like,
        $._string_like,
        $.block,
      ),

    _string_like: ($) => choice($.string, $.char, $.multi_string),
    _number_like: ($) => choice($.number, $.float, $.double),

    _comment_like: ($) => choice($.comment, $.doc_comment),

    _identifier_like: ($) =>
      choice(
        $.type_name,
        $.identifier,
        $.explicit_type,
        $.keyword_send,
        $.annotation,
      ),

    type_name: ($) => /[A-Z][a-zA-Z0-9_\-]*/,
    identifier: ($) => /[a-z_][a-zA-Z0-9_\-]*/,
    explicit_type: ($) => seq($.identifier, "::"),
    keyword_send: ($) => seq($.identifier, ":"),
    annotation: ($) => seq("@", $.identifier),

    operator: ($) =>
      choice(
        ">",
        "<",
        ">=",
        "<=",
        "=",
        "+",
        "-",
        "*",
        "/",
        "==",
        "!=",
        "%",
        ".",
      ),
    control_flow: ($) =>
      choice("|", "|=>", "=>", "|>", ",", ";", "?", "!", "^", "&&", "||"),

    keywords: ($) =>
      choice(
        "false",
        "true",
        "union",
        "type",
        "enum",
        "this",
        "mut",
        "null",
        "new",
        "do",
        "Bind",
        "package",
        "constructor",
        "errordomain",
        "builder",
        "on",
        "extend",
      ),

    block: ($) =>
      choice(
        seq("[", repeat($._expression), "]"), // code block
        seq("#{", repeat($._expression), "}"), // hash map
        seq("{", repeat($._expression), "}"),
        seq("(", repeat($._expression), ")"),
        seq("#(", repeat($._expression), ")"), // hash set
      ),

    number: ($) => /\d+/,
    double: ($) => /\d+\.\d+/,
    float: ($) => /\d+\.\d+f/,

    string: ($) => /"[^"]*"/,
    char: ($) => /'[^']*'/,
    multi_string: ($) => /""".*?"""/,

    comment: ($) => /\/\/.*/,
    doc_comment: ($) => /\/\/\/.*/,
  },
});
