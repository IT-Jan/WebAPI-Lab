import axios from 'axios';

// hehehi1143@fundapk.com:Webapi@2025
//error: try node addressFinder 'nonsensicaladdresserror'

const addressLocation = async (address: string) => {
  const url = `https://api.maptiler.com/geocoding/${address}.json?key=5k83RAAbejEi5TgdcKFR`;
  try {
    const {data, status} = await axios.get(url, {});
    console.log(`${status}`);
    console.log(data)  // JSON Object
    return data;
  } catch (err: any) {
    if (axios.isAxiosError(err)) {
      return err.message;
    } else {
      return err;
    }
  }
}

const formatCoordinates = (center: [number, number]): { lon: string, lat: string } => {
  const lon:number = center[0];
  const lat:number = center[1];

  function convertDMS(coord: number, isLongitude: boolean):string {
    const absolute = Math.abs(coord);
    const degrees = Math.floor(absolute);
    const minutesNotTruncated = (absolute - degrees) * 60;
    const minutes = Math.floor(minutesNotTruncated);
    const seconds = Math.round((minutesNotTruncated - minutes) * 60);

    const direction = isLongitude ? (coord >= 0 ? 'E' : 'W') : (coord >= 0 ? 'N' : 'S');

    return `${degrees}° ${minutes}' ${seconds}" ${direction}`;
  }

  const formattedLon: string = convertDMS(lon, true);
  const formattedLat: string = convertDMS(lat, false);

  return { lon: formattedLon, lat: formattedLat };
}

try {
	if (process.argv.length < 3) {
		throw 'missing parameter';
	}
  
	let address = process.argv[2];
	/* we need to remove the single quotes from the string */
  // API test (non-sensical address): https://api.maptiler.com/geocoding/nonsensicaladdresserror.json?key=5k83RAAbejEi5TgdcKFR
  // API test (correct address): https://api.maptiler.com/geocoding/IVE%20(Chai%20Wan).json?key=5k83RAAbejEi5TgdcKFR
	address = address.replace(/'/g,'');
	addressLocation(address).then((data)=> {
    if(data.features.length === 0 ){
      throw new Error("Address not found");
    }else{
      // const formattedCenter = formatCoordinates(data.features[0].center);
      // console.log(`lon: ${formattedCenter.lon}, lat: ${formattedCenter.lat}, ${data.features[0].place_name}`);
      console.log(`lon: ${data.features[0].center[0]} lat: ${data.features[0].center[1]}`)
      for (let i = 0; i < data.features.length; i++) {
        console.log(`${JSON.stringify(data.features[i].properties)}\n${data.features[i].place_name}\n`)
      }
    }
  })
} catch(err: any) {
	console.log(err);
}
