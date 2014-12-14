"use strict";
var utils = require("../../lib/utils");
var assert = require("chai").assert;
describe("Removing Headers", (function() {
  var headers;
  beforeEach((function() {
    headers = {
      "content-encoding": "gzip",
      "content-length": "1202",
      "content-type": "text/html"
    };
  }));
  it("should delete a single header", (function() {
    utils.removeHeaders(headers, ["content-encoding"]);
    var actual = headers.hasOwnProperty("content-encoding");
    assert.isFalse(actual);
  }));
  it("should delete mulitple headers", (function() {
    utils.removeHeaders(headers, ["content-encoding", "content-length"]);
    var actual = headers.hasOwnProperty("content-encoding") || headers.hasOwnProperty("content-length");
    assert.isFalse(actual);
  }));
}));
