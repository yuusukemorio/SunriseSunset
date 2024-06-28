window.onload = function() {
    const test = document.querySelector(".test");
    const test2 = document.querySelector(".test2");

    function updateWindowPosition() {
        if (test) {
            const x = window.screenX;
            const y = window.screenY;
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            test.style.left = `${screenWidth - x}px`;
            test.style.top = `${screenHeight - y}px`;
        }
        if (test2) {
            const x2 = window.screenX;
            const y2 = window.screenY;
            const screenWidth2 = window.innerWidth;
            const screenHeight2 = window.innerHeight;
            test2.style.left = `${screenWidth2 - x2 + 400}px`;
            test2.style.top = `${screenHeight2 - y2 + 300}px`;
        }
    }

    updateWindowPosition();
    setInterval(updateWindowPosition, 0.01);

    const latitude = 34.573; // 堺市の緯度
    const longitude = 135.483; // 堺市の経度
    const url = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&formatted=0`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const sunrise = new Date(data.results.sunrise);
            const sunset = new Date(data.results.sunset);

            document.getElementById('sunrise').textContent = `日の出: ${sunrise.toLocaleTimeString()}`;
            document.getElementById('sunset').textContent = `日の入り: ${sunset.toLocaleTimeString()}`;
        })
        .catch(error => console.error('Error fetching sunrise and sunset data:', error));
};
