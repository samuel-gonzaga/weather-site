document.getElementById('fetchWeatherBtn').addEventListener('click', () => {
    const API_KEY = '02433f4aa6d04420887174622240610'
    const apiUrl = 'https://api.weatherapi.com/v1/current.json?key=02433f4aa6d04420887174622240610&q=London&aqi=no';
    
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const weatherInfo = `Location: ${data.location.name}, ${data.location.region} - Temperature: ${data.current.temp_c}°C`;
        document.getElementById('result').innerText = weatherInfo;
      })
      .catch(error => {
        document.getElementById('result').innerText = `Error: ${error.message}`;
      });
  });
  