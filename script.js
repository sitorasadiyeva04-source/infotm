// Запрос к бесплатному сервису для получения IP и координат
fetch('http://ip-api.com/json/')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // Заполняем текст на странице
        document.getElementById('ip').textContent = data.query;
        document.getElementById('city').textContent = data.city;
        document.getElementById('country').textContent = data.country;
        document.getElementById('isp').textContent = data.isp;

        // Вставляем карту с правильными координатами
        var mapUrl = 'https://www.google.com/maps?q=' + data.lat + ',' + data.lon + '&output=embed';
        document.getElementById('map').src = mapUrl;
    })
    .catch(function(error) {
        console.log('Ошибка при загрузке:', error);
    });

