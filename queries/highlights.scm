; Basic literals
(string) @string
(multi_string) @string
(char) @character
(number) @number
(float) @number
(double) @number

; Keywords and boolean values
(keywords) @keyword
((keywords) @boolean (#any-of? @boolean "true" "false"))

; Comments
(comment) @comment
(doc_comment) @comment.documentation

; Operators and control flow constructs
(operator) @operator
(control_flow) @keyword

; If "word:" is followed by "Type", then "word" is a variable (argument/field)
(
  (keyword_send (identifier) @variable)
  .
  (type_name)
)

; Default highlighting for keyword_send (for cases like "name: 123")
(keyword_send
  (identifier) @namespace
  ":" @punctuation.delimiter)

; Highlighting for ":Type" or ":name"
(keyword_send
  ":" @punctuation.delimiter
  [(identifier) @variable (type_name) @type])

; Identifiers and types
(identifier) @variable
(type_name) @type
(annotation) @attribute

; Special constructs
; sas:
(keyword_send
  (identifier) @namespace
  ":" @punctuation.delimiter)

; :sas
(keyword_send
  ":" @punctuation.delimiter
  (identifier) @namespace)

(explicit_type
  (identifier) @variable ; Highlighting of module/namespace name
  "::" @punctuation.delimiter)

; Punctuation inside blocks
(block
  "[" @punctuation.bracket
  "]" @punctuation.bracket)

(block
  "{" @punctuation.bracket
  "}" @punctuation.bracket)

(block
  "(" @punctuation.bracket
  ")" @punctuation.bracket)

(block
  "#{" @punctuation.bracket
  "}" @punctuation.bracket)

(block
  "#(" @punctuation.bracket
  ")" @punctuation.bracket)
