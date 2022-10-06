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
    },
    erro => {
      window.alert('não foi possivel receber a localização do usuário')
      console.error(erro)
    }
  )

  return currentCoordinates
}