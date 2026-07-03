; Indentation rules for Zed.
; Any block increases indentation; the closing delimiter ends the indented
; region so it (and only it) gets outdented, while blank lines inside the
; block keep the block's indentation.

(block) @indent

(block "]" @end)
(block "}" @end)
(block ")" @end)
