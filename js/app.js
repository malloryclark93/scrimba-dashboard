let authorText = document.getElementById('author')
let cryptoText = document.getElementById('crypto-top')
let coinImg = document.getElementById('photo-space')
let todaysPrice = document.getElementById('today')
let highPrice = document.getElementById('coin-high')
let lowPrice = document.getElementById('coin-low')
let localTime = document.getElementById('time')
let weather = document.getElementById('weather')


// let time = today.getHours() + ':' + today.getMinutes()
// console.log(time)

// set a changing background image using unsplash API
fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
    .then(response => response.json())
    .then(data => {
      document.body.style.backgroundImage = `url(${data.urls.regular})`
      authorText.textContent = `By: ${data.user.name}`
      
    })

  // set the screen to a set picture incase 'err' occures
    .catch(err => {
      document.body.style.backgroundImage = url('https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080')
    })

  // get dogecoin data from coingecko API
fetch('https://api.coingecko.com/api/v3/coins/dogecoin')
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      cryptoText.innerHTML =  ` <img src=${data.image.small} />
      <span>${data.name}</span>`

      todaysPrice.textContent = `🎯: $${data.market_data.current_price.usd}`,

      highPrice.innerHTML = `👆: $${data.market_data.high_24h.usd}`,

      lowPrice.innerHTML = `👇: $${data.market_data.low_24h.usd}`

    })

      .catch(err => console.log(err))


  function getTime(){
      let date = new Date();
      localTime.textContent = date.toLocaleTimeString('en-us',{timeStyle: 'short'})
      localTime.textContent = date.toLocaleTimeString('en-us',{timeStyle: 'short'})
    }


    setInterval(getTime, 1000)


  

 navigator.geolocation.getCurrentPosition(position => {
   fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
   .then(response => {
     if(!response.ok) {
       throw Error('weather info not retrieved')
     }
     return response.json()
   })
   .then(data => {
      console.log(data )
   })

 })







//     * BaseURL: https://apis.scrimba.com/openweathermap/data/2.5/weather
//  * Queries to include: 
//  *     - lat (latitude)
//  *     - lon (longitude)
//  *     - units (imperial or metric)
//  */







  // await fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=sunsets')
//   const result = await (response => response.json())
//     console.log(result => {
//       console.log(result)
//       // document.body.style.backgroundImage = `url(<)`
//     })