import  {useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import {carList} from '../data/carList'


const RideSelector = ({pickupCoordinates, dropoffCoordinates}) => {

    const [rideDuration, setRideDuration] = useState(0)

    //get ride duration from mapbox api
    useEffect(() => {
        rideDuration = fetch (
            `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiYXp6aW5tIiwiYSI6ImNsNmx5dnRvYzBiZGwzZG1yZ25ncTFhanEifQ.nJLyN9ihmMgC9Z6CkOrSGQ`
        ).then((res) => res.json())
        .then(data => {
            setRideDuration(data.routes[0].duration / 100)
        })
    }, [pickupCoordinates, dropoffCoordinates])

  return (
    <Wrapper>
        <Title>Choose a ride, or sweep up for more</Title>
        <CarList>
            {carList.map((car, index)=> (
                <Car key={index}>
                <CarImage src={car.imgUrl}/>
                <CarDetails>
                    <Service>{car.service} </Service>
                    <Time> 5 Menit</Time>
                </CarDetails>
                <Price>{'Rp' + (rideDuration * car.multiplier).toFixed(3)}</Price>
            </Car>
            ))}
            
        </CarList>
    </Wrapper>
  )
}

export default RideSelector

const CarDetails = tw.div`
flex-1
`
const Service = tw.div`
font-medium
`
const Time = tw.div`
text-xs text-blue-500
`
const Price = tw.div`
text-sm
`

const CarImage = tw.img`
h-14 mr-4
`

const Car = tw.div`
flex p-4 item-center
`

const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`

const CarList = tw.div`
`

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex-col
`