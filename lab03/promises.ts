
import axios from 'axios';
import * as readline from 'readline-sync';

const url = 'https://data.fixer.io';
const key = 'd2fe3fcd2c34519c0e65802b8a6634d7';

const getInput = () => new Promise<string>( (resolve) => {
	const base = readline.question('Enter base currency: ');
  const convertTo = readline.question('Enter Exchange currency: ');
  const amount = +readline.question('Enter base amount: ');
  resolve({
    'base': base,
    'convert': convertTo,
    'amount': amount
  });
});

const checkValidCurrencyCode = (code: any) => {
  console.log(`Checking Valid Currency Code... ${code.base} & ${code.convert}`);
  return new Promise<string>((resolve, reject) =>{
    axios.get(`${url}/symbols?access_key=${key}`, {}).then(({data, status}) => {
      if(status===200){

        const currency = data.symbols;
        let err: boolean = false

        if (currency.hasOwnProperty(code.base)) {
          err = false
        } else {
          console.log(`invalid currency code ${code.base}`)
          err = true
        }
        if (currency.hasOwnProperty(code.convert)) { 
          if(!err) err = false
        } else {
          console.log(`invalid currency code ${code.convert}`)
          err = true
        }
        if (err)
          reject(new Error('invalid currency code found'));
        else
          resolve(code);
      }
      reject('Connection Error'); 
    }).catch((err) => {
      reject(err);
    })
  })
}

const getFullName = (code: any) => {
  console.log(`Getting Full Name... ${code.base} & ${code.convert}`);
  return new Promise<string>((resolve, reject) =>{
    axios.get('https://openexchangerates.org/api/currencies.json?app_id=42183dd440b84155a6dcec399e4c7af4').then(({data, status}) => {
      if(status===200){
        const baseFullName = data[code.base];
        const convertFullName = data[code.convert];
        
        const fullName = {};
        fullName[code.base] = baseFullName;
        fullName[code.convert] = convertFullName;

        const d = {
          code: code,
          fullName: fullName
        }
        resolve(d);
      }
      reject('Connection Error'); 
    }).catch((err) => {
      reject(err);
    })
  })
}

const getData = (name: string) => {
  console.log('Retrieving the rate...');
  return new Promise((resolve, reject) =>{
    axios.get(`${url}/latest?base=EUR&symbols=${name.code.base},${name.code.convert}&access_key=${key}`, {}).then(({data, status}) => {
      if(status===200){
        const d = {
          name: name.fullName,
          code: name.code,
          rate: data
        }
        resolve(d);
      } else {
        reject('Connection Error');
      }
    }).catch((err) => {
      reject(err);
    })
  })
}

// https://openexchangerates.org/api/: gorip54554@maonyn.com
// APP ID: 42183dd440b84155a6dcec399e4c7af4

const printObject = (data: any) => new Promise<any>( resolve => {
	// const indent = 2;
	// const str = JSON.stringify(data, null, indent);
	console.log(data);
  const rateFrom = data.rate.rates[data.code.base];
  const rateTo = data.rate.rates[data.code.convert];

  const rate = rateTo / rateFrom;
  const exchanged = data.code.amount * rate;
  console.log(`${data.code.amount} ${data.name[data.code.base]} can exchange ${exchanged} ${data.name[data.code.convert]}`)

	resolve(null);                                      
});

const exit = () => new Promise( () => {
	process.exit();
})

getInput('enter currency: ')
	.then(checkValidCurrencyCode)
  .then(getFullName)
	.then(getData)
	.then(printObject)
	.then(exit)
	.catch( err => console.error(`error: ${err.message}`))
	.then(exit);
