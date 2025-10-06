import XCTest
import SwiftTreeSitter
import TreeSitterNiva

final class TreeSitterNivaTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_niva())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Niva grammar")
    }
}
