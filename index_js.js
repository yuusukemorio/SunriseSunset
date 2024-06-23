window.onload = function() {
    const test = document.querySelector(".test");
    const test2 = document.querySelector(".test2");

    function updateWindowPosition() {
        if (test) {
            // ウィンドウのx, y位置を取得
            const x = window.screenX;
            const y = window.screenY;
            // 画面の幅と高さを取得
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            // pタグの内容にx, y位置を上書き
            // test.textContent = `ウィンドウの位置 - X: ${x}, Y: ${y}`;
            // pタグの位置をウィンドウの反対方向に合わせて更新
            test.style.left = `${screenWidth - x}px`;
            test.style.top = `${screenHeight - y}px`;
        }
        if (test2) {
            // ウィンドウのx, y位置を取得
            const x2 = window.screenX;
            const y2 = window.screenY;
            // 画面の幅と高さを取得
            const screenWidth2 = window.innerWidth;
            const screenHeight2 = window.innerHeight;
            // pタグの内容にx, y位置を上書き
            // test.textContent = `ウィンドウの位置 - X: ${x}, Y: ${y}`;
            // pタグの位置をウィンドウの反対方向に合わせて更新
            test2.style.left = `${screenWidth2 - x2 + 400}px`;
            test2.style.top = `${screenHeight2 - y2 + 300}px`;
        }
    }

    

    // 初回実行
    updateWindowPosition();

    // 1秒ごとにウィンドウの位置を更新
    setInterval(updateWindowPosition, 0.01);
};
