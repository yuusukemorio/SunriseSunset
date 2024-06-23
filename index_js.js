window.onload = function() {
    const sunImage = document.getElementById("sunImage");

    // ジャイロセンサーのイベントリスナーを追加
    window.addEventListener("deviceorientation", handleOrientation);

    function handleOrientation(event) {
        // デバイスの傾きを取得
        const alpha = event.alpha; // デバイスの回転 (方位角)
        const beta = event.beta; // デバイスの前後の傾き
        const gamma = event.gamma; // デバイスの左右の傾き

        // 特定の方向（例：方位角が90度（東））に向いたときに画像を表示
        if (alpha > 80 && alpha < 100) {
            sunImage.style.display = "block";
        } else {
            sunImage.style.display = "none";
        }
    }
};
