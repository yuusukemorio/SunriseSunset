window.onload = function() {
    const sunImage = document.querySelector(".test img");

    // ジャイロセンサーのイベントリスナーを追加
    window.addEventListener("deviceorientation", handleOrientation);

    function handleOrientation(event) {
        // デバイスの傾きを取得
        const beta = event.beta; // 前後の傾き
        const gamma = event.gamma; // 左右の傾き

        // 傾きを画像の位置に反映
        if (sunImage) {
            sunImage.style.transform = `translate(${gamma * 5}px, ${beta * 5}px)`;
        }
    }

    // Sunrise-Sunset APIから日の出と日の入りの情報を取得
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
