; Indentation rules for Zed.
; @indent  - mark a node whose inner lines should be indented (usually a block).
; @end     - mark the token that closes the block; its line is outdented back.

(block "]" @end) @indent
(block "}" @end) @indent
(block ")" @end) @indent
