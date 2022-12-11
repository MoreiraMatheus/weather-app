export interface coordinates{
  latitude: number;
  longitude: number;
}

const currentCoordinates:coordinates = {latitude:0, longitude:0};

export function FindCurrentLocation():coordinates {
  navigator.geolocation.getCurrentPosition(
    position => {
      currentCoordinates.latitude = position.coords.latitude
      currentCoordinates.longitude = position.coords.longitude
      console.log(currentCoordinates)
    },
    erro => {
      window.alert('não foi possivel receber a localização do usuário')
      console.error(erro)
    },
    {enableHighAccuracy:true, maximumAge:30000, timeout:30000}
    )
  
  return currentCoordinates
}