function getData() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${document.getElementById('city_name').value}&appid=18bcbe7265952f81d55f3b0e372b8620&units=metric`
    fetch(url).then((response) => {
        if (response.ok) {
            let a = response.json()
            return a
        }
        throw new Error('Something went wrong');
    }).then((data) => {
        console.log(data);
        let temp = data.main.temp + '\u00B0' + 'C'
        let showdata = document.getElementById('result').innerHTML = temp
        let showimg = document.getElementById('result_img').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        let type = document.getElementById('weather_type').innerHTML = data.weather[0].description
        let humidity = document.getElementById('humidity').innerHTML = "Humidity: "+data.main.humidity+'%'
        let arr = ['result','result_img','weather_type']
        for(let i = 0;i<arr.length;i++){
            document.getElementById(arr[i]).style.display = 'block'
        }
        let showerror = document.getElementById('error').style.display = 'none'
    }).catch((error) => {
        showerror = document.getElementById('error').style.display = 'block'
        showerror = document.getElementById('error').innerHTML = 'Network connection error or unable to get data'
        let arr = ['result','result_img','weather_type']
        for(let i = 0;i<arr.length;i++){
            document.getElementById(arr[i]).style.display = 'none'
        }
      });
}
