const opening = document.getElementById("opening");
const openInvitation =
    document.getElementById("openInvitation");
const weddingMusic =
    document.getElementById("weddingMusic");
const musicButton =
    document.getElementById("musicButton");
// ========================================
// فتح الدعوة وتشغيل الموسيقى
// ========================================
openInvitation.addEventListener("click", function () {
    opening.classList.add("hide");
    weddingMusic.volume = 0.7;
    weddingMusic.play()
        .then(function () {
            musicButton.textContent =
                "🎵 إيقاف الموسيقى";
        })
        .catch(function () {
            musicButton.textContent =
                "🎵 تشغيل الموسيقى";
        });
});
// ========================================
// زر الموسيقى
// ========================================
musicButton.addEventListener("click", function () {
    if (weddingMusic.paused) {
        weddingMusic.play();
        musicButton.textContent =
            "🎵 إيقاف الموسيقى";
    } else {
        weddingMusic.pause();
        musicButton.textContent =
            "🎵 تشغيل الموسيقى";
    }
});
// ========================================
// العداد التنازلي
// ========================================
// تاريخ ووقت بداية الحفل
// 19 سبتمبر 2026
// الساعة 3:00 مساءً
// توقيت العراق +03:00
const weddingDate =
    new Date("2026-09-19T15:00:00+03:00").getTime();
function updateCountdown() {
    const now =
        new Date().getTime();
    const difference =
        weddingDate - now;
    // عند وصول موعد الحفل
    if (difference <= 0) {
        document.getElementById("days")
            .textContent = "00";
        document.getElementById("hours")
            .textContent = "00";
        document.getElementById("minutes")
            .textContent = "00";
        document.getElementById("seconds")
            .textContent = "00";
        return;
    }
    // حساب الأيام
    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );
    // حساب الساعات
    const hours =
        Math.floor(
            (difference %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );
    // حساب الدقائق
    const minutes =
        Math.floor(
            (difference %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );
    // حساب الثواني
    const seconds =
        Math.floor(
            (difference %
                (1000 * 60))
            /
            1000
        );
    // عرض العداد
    document.getElementById("days")
        .textContent =
        String(days).padStart(2, "0");
    document.getElementById("hours")
        .textContent =
        String(hours).padStart(2, "0");
    document.getElementById("minutes")
        .textContent =
        String(minutes).padStart(2, "0");
    document.getElementById("seconds")
        .textContent =
        String(seconds).padStart(2, "0");
}
// تشغيل العداد مباشرة
updateCountdown();
// تحديث كل ثانية
setInterval(
    updateCountdown,
    1000
);
