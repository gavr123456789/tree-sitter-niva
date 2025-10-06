; Основные литералы
(string) @string
(multi_string) @string
(char) @character
(number) @number
(float) @number
(double) @number

; Ключевые слова и булевы значения
(keywords) @keyword
((keywords) @boolean (#any-of? @boolean "true" "false"))

; Комментарии
(comment) @comment
(doc_comment) @comment.documentation

; Операторы и управляющие конструкции
(operator) @operator
(control_flow) @keyword

; Идентификаторы и типы
(identifier) @variable
(type_name) @type
(annotation) @attribute

; Специальные конструкции
(keyword_send
  (identifier) @namespace ;namespace(blue) function(green as string literal) Подсветка имени в keyword message
  ":" @punctuation.delimiter)

(explicit_type
  (identifier) @variable ; Подсветка имени модуля/пространства имён
  "::" @punctuation.delimiter)

; Пунктуация в блоках
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