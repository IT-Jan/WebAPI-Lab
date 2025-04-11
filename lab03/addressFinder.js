"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
// hehehi1143@fundapk.com:Webapi@2025
//error: try node addressFinder 'nonsensicaladdresserror'
var addressLocation = function (address) { return __awaiter(void 0, void 0, void 0, function () {
    var url, _a, data, status_1, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                url = "https://api.maptiler.com/geocoding/".concat(address, ".json?key=5k83RAAbejEi5TgdcKFR");
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, axios_1.default.get(url, {})];
            case 2:
                _a = _b.sent(), data = _a.data, status_1 = _a.status;
                console.log("".concat(status_1));
                console.log(data); // JSON Object
                return [2 /*return*/, data];
            case 3:
                err_1 = _b.sent();
                if (axios_1.default.isAxiosError(err_1)) {
                    return [2 /*return*/, err_1.message];
                }
                else {
                    return [2 /*return*/, err_1];
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var formatCoordinates = function (center) {
    var lon = center[0];
    var lat = center[1];
    function convertDMS(coord, isLongitude) {
        var absolute = Math.abs(coord);
        var degrees = Math.floor(absolute);
        var minutesNotTruncated = (absolute - degrees) * 60;
        var minutes = Math.floor(minutesNotTruncated);
        var seconds = Math.round((minutesNotTruncated - minutes) * 60);
        var direction = isLongitude ? (coord >= 0 ? 'E' : 'W') : (coord >= 0 ? 'N' : 'S');
        return "".concat(degrees, "\u00B0 ").concat(minutes, "' ").concat(seconds, "\" ").concat(direction);
    }
    var formattedLon = convertDMS(lon, true);
    var formattedLat = convertDMS(lat, false);
    return { lon: formattedLon, lat: formattedLat };
};
try {
    if (process.argv.length < 3) {
        throw 'missing parameter';
    }
    var address = process.argv[2];
    /* we need to remove the single quotes from the string */
    // API test (non-sensical address): https://api.maptiler.com/geocoding/nonsensicaladdresserror.json?key=5k83RAAbejEi5TgdcKFR
    // API test (correct address): https://api.maptiler.com/geocoding/IVE%20(Chai%20Wan).json?key=5k83RAAbejEi5TgdcKFR
    address = address.replace(/'/g, '');
    addressLocation(address).then(function (data) {
        if (data.features.length === 0) {
            throw new Error("Address not found");
        }
        else {
            // const formattedCenter = formatCoordinates(data.features[0].center);
            // console.log(`lon: ${formattedCenter.lon}, lat: ${formattedCenter.lat}, ${data.features[0].place_name}`);
            console.log("lon: ".concat(data.features[0].center[0], " lat: ").concat(data.features[0].center[1]));
            for (var i = 0; i < data.features.length; i++) {
                console.log("".concat(JSON.stringify(data.features[i].properties), "\n").concat(data.features[i].place_name, "\n"));
            }
        }
    });
}
catch (err) {
    console.log(err);
}
