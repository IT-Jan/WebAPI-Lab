import axios from 'axios';

const exchange = async (from:string, to: string) => {
  // const url = `https://data.fixer.io/api/latest?base=${base}&symbols=${symbol}&access_key=d2fe3fcd2c34519c0e65802b8a6634d7`;
  // const url = [`https://data.fixer.io/api/latest?base=EUR&symbols=${from}&access_key=d2fe3fcd2c34519c0e65802b8a6634d7`,
  //   `https://data.fixer.io/api/latest?base=EUR&symbols=${to}&access_key=d2fe3fcd2c34519c0e65802b8a6634d7`
  // ]

  // const url = [`https://api.exchangeratesapi.io/v1/latest?access_key=6b234af1aaa5cc46c808ce6fe25928b7&base=EUR&symbols=${from}`, `https://api.exchangeratesapi.io/v1/latest?access_key=6b234af1aaa5cc46c808ce6fe25928b7&base=EUR&symbols=${to}`];
  // const options = [{url:url[0]}, {url:url[1]}];

  // const url1 = `https://api.exchangeratesapi.io/v1/latest?access_key=6b234af1aaa5cc46c808ce6fe25928b7&base=EUR&symbols=${from}`;
  // const url2 = `https://api.exchangeratesapi.io/v1/latest?access_key=6b234af1aaa5cc46c808ce6fe25928b7&base=EUR&symbols=${to}`;
  // const option1 = {url:url1};
  // const option2 = {url:url2};

  const url = `https://api.exchangeratesapi.io/v1/latest?access_key=6b234af1aaa5cc46c808ce6fe25928b7&base=EUR&symbols=${from},${to}`;
  const options = {url:url};
  
  try{
    const { data, status } = await axios.get(url, options);
    // const dataFrom = await axios.get(url[0], options[0]);
    // console.log(dataFrom.data.rates[from], `${dataFrom.status}`);
    // const dataTo = await axios.get(url[1], options[1]);
    // console.log(dataTo.data.rates[to],`${dataTo.status}`);
    // const rate = dataFrom.data.rates[from] / dataTo.data.rates[to];

    const rateFrom = data.rates[from];
    const rateTo = data.rates[to];

    const rate = rateFrom / rateTo;

    return rate.toFixed(2);

  } catch (err: any) {
    if (axios.isAxiosError(err)) {
      return err.message;
    } else {
      return err;
    }
  }
}

try {
  if (process.argv.length < 4) {
    throw 'missing parameter'
  } else {
    const from = process.argv[2].toUpperCase();
    const to = process.argv[3].toUpperCase();
    // console.log(from);
    // console.log(to);
    exchange(from, to).then((rate)=> {
      console.log(`1 ${from} = ${rate} ${to}`);
      // console.log(data);
    })
  }
} catch (err: any) {
  console.log(`${err} Usage: currency [From currency] [To currency] e.g. currency HKD USD`)
}
