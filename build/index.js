"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var firstMatchReader = new MatchReader_1.MatchReader('football.csv');
firstMatchReader.read();
var output = firstMatchReader.winsAnalysis('Newcastle');
firstMatchReader.printHTML_Report(output);
