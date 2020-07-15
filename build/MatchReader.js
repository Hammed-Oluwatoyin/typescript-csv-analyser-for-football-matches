"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResults_1 = require("./MatchResults");
var utils_1 = require("./utils");
var fs_1 = __importDefault(require("fs"));
var MatchReader = /** @class */ (function (_super) {
    __extends(MatchReader, _super);
    function MatchReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatchReader.prototype.mapRow = function (row) {
        return [
            utils_1.convertDateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6]
        ];
    };
    MatchReader.prototype.winsAnalysis = function (team) {
        var manUnitedWins = 0;
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var match = _a[_i];
            if (match[1] === team && match[5] === MatchResults_1.MatchResults.HomeWins) {
                manUnitedWins++;
            }
            else if (match[2] === team && match[5] === MatchResults_1.MatchResults.AwayWins) {
                manUnitedWins++;
            }
        }
        return team + " won " + manUnitedWins + " games";
    };
    MatchReader.prototype.printHTML_Report = function (report) {
        var html = "\n                    <div>\n                        <h1>Analysis Output</h1>\n                        <div>" + report + "<div>\n                    </div>";
        fs_1.default.writeFileSync('report.html', html);
    };
    return MatchReader;
}(CsvFileReader_1.CsvFileReader));
exports.MatchReader = MatchReader;
