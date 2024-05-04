const images = [
    { "url": "./img/IMG_1888.png" },
    { "url": "./img/IMG_1888.png" },
    { "url": "./img/IMG_1888.png" },
]
const targetDirID = "slideshow"
const zoomDuration = 6000;
const zoomValue = "1.2"
const fadeDuration = 1000;

document.addEventListener("DOMContentLoaded", () => {
    let count = 0;
    const targetDir = document.getElementById(targetDirID);
    targetDir.style = "width:100%;height:100vh;position:relative;overflow:hidden;z-index:15;"

    addAndDeleteSlide();
    setInterval(() => {
        addAndDeleteSlide();
    }, zoomDuration-fadeDuration);

    function addAndDeleteSlide() {
        let slide = createSlide(images[count].url,count)
        targetDir.appendChild(slide)
        count = (count + 1) % images.length;
        setTimeout(() => {
            slide.remove();
        },zoomDuration)
    }

    function createSlide(image,id) {
        const zoomKeyFrame = [
            { transform: `scale(${zoomValue},${zoomValue})`},
            { transform: "scale(1,1)" },
        ]
        const zoomTimes = {
            duration: zoomDuration,
            iterations: 1,
            fill:"forwards",
            easing: "ease-in-out"
        }
        const fadeKeyFrame = [
            { opacity: 0 },
            { opacity: 1 },
        ]
        const fadeTimes = {
            duration: fadeDuration,
            iterations: 1,
            fill:"forwards",
            easing: "ease-in"
        }
        let slide = document.createElement("div");
        slide.style = `background-image: url(${image});width: 100vw;height: 100vh;background-size: cover;position: absolute;top:0`;
        slide.id = `slide${id}`
        slide.animate(zoomKeyFrame, zoomTimes)
        slide.animate(fadeKeyFrame,fadeTimes)
        return slide
    }
})
