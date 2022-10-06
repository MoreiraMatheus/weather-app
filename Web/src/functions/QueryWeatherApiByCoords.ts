const apiKey = process.env.REACT_APP_API_KEY

export async function QueryWeatherApiByCoords(lat:number, lon:number){
  const require = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
  const data = await require.json()

  console.log(data)
  return data
}