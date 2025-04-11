"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var readline = require("readline-sync");
var url = 'https://data.fixer.io';
var key = 'd2fe3fcd2c34519c0e65802b8a6634d7';
var getInput = function () { return new Promise(function (resolve) {
    var base = readline.question('Enter base currency: ');
    var convertTo = readline.question('Enter Exchange currency: ');
    var amount = +readline.question('Enter base amount: ');
    resolve({
        'base': base,
        'convert': convertTo,
        'amount': amount
    });
}); };
var checkValidCurrencyCode = function (code) {
    console.log("Checking Valid Currency Code... ".concat(code.base, " & ").concat(code.convert));
    return new Promise(function (resolve, reject) {
        axios_1.default.get("".concat(url, "/symbols?access_key=").concat(key), {}).then(function (_a) {
            var data = _a.data, status = _a.status;
            if (status === 200) {
                var currency = data.symbols;
                var err = false;
                if (currency.hasOwnProperty(code.base)) {
                    err = false;
                }
                else {
                    console.log("invalid currency code ".concat(code.base));
                    err = true;
                }
                if (currency.hasOwnProperty(code.convert)) {
                    if (!err)
                        err = false;
                }
                else {
                    console.log("invalid currency code ".concat(code.convert));
                    err = true;
                }
                if (err)
                    reject(new Error('invalid currency code found'));
                else
                    resolve(code);
            }
            reject('Connection Error');
        }).catch(function (err) {
            reject(err);
        });
    });
};
var getFullName = function (code) {
    console.log("Getting Full Name... ".concat(code.base, " & ").concat(code.convert));
    return new Promise(function (resolve, reject) {
        axios_1.default.get('https://openexchangerates.org/api/currencies.json?app_id=42183dd440b84155a6dcec399e4c7af4').then(function (_a) {
            var data = _a.data, status = _a.status;
            if (status === 200) {
                var baseFullName = data[code.base];
                var convertFullName = data[code.convert];
                var fullName = {};
                fullName[code.base] = baseFullName;
                fullName[code.convert] = convertFullName;
                var d = {
                    code: code,
                    fullName: fullName
                };
                resolve(d);
            }
            reject('Connection Error');
        }).catch(function (err) {
            reject(err);
        });
    });
};
var getData = function (name) {
    console.log('Retrieving the rate...');
    return new Promise(function (resolve, reject) {
        axios_1.default.get("".concat(url, "/latest?base=EUR&symbols=").concat(name.code.base, ",").concat(name.code.convert, "&access_key=").concat(key), {}).then(function (_a) {
            var data = _a.data, status = _a.status;
            if (status === 200) {
                var d = {
                    name: name.fullName,
                    code: name.code,
                    rate: data
                };
                resolve(d);
            }
            else {
                reject('Connection Error');
            }
        }).catch(function (err) {
            reject(err);
        });
    });
};
// https://openexchangerates.org/api/: gorip54554@maonyn.com
// APP ID: 42183dd440b84155a6dcec399e4c7af4
var printObject = function (data) { return new Promise(function (resolve) {
    // const indent = 2;
    // const str = JSON.stringify(data, null, indent);
    console.log(data);
    var rateFrom = data.rate.rates[data.code.base];
    var rateTo = data.rate.rates[data.code.convert];
    var rate = rateTo / rateFrom;
    var exchanged = data.code.amount * rate;
    console.log("".concat(data.code.amount, " ").concat(data.name[data.code.base], " can exchange ").concat(exchanged, " ").concat(data.name[data.code.convert]));
    resolve(null);
}); };
var exit = function () { return new Promise(function () {
    process.exit();
}); };
getInput('enter currency: ')
    .then(checkValidCurrencyCode)
    .then(getFullName)
    .then(getData)
    .then(printObject)
    .then(exit)
    .catch(function (err) { return console.error("error: ".concat(err.message)); })
    .then(exit);
