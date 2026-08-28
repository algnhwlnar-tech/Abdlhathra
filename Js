const welcomeScreen = document.getElementById("welcomeScreen");
const openInvitation = document.getElementById("openInvitation");
const weddingMusic = document.getElementById("weddingMusic");
const musicButton = document.getElementById("musicButton");
openInvitation.addEventListener("click", function () {
    // إخفاء شاشة البداية
    welcomeScreen.classList.add("hide");
    // تشغيل الموسيقى بعد ضغطة المستخدم
    weddingMusic.play()
        .then(() => {
            musicButton.textContent = "🎵 إيقاف الموسيقى";
        })
        .catch(() => {
            musicButton.textContent = "🎵 تشغيل الموسيقى";
        });
});
musicButton.addEventListener("click", function () {
    if (weddingMusic.paused) {
        weddingMusic.play();
        musicButton.textContent = "🎵 إيقاف الموسيقى";
    } else {
        weddingMusic.pause();
        musicButton.textContent = "🎵 تشغيل الموسيقى";
    }
});
