package tree_sitter_niva_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_niva "github.com/tree-sitter/tree-sitter-niva/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_niva.Language())
	if language == nil {
		t.Errorf("Error loading niva grammar")
	}
}
