import XCTest
import SwiftTreeSitter
import TreeSitterniva

final class TreeSitternivaTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_niva())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading niva grammar")
    }
}
