const videoFeed = document.getElementById("videoFeed");

const videoData = [
  { src: "video1.mp4" },
  { src: "video2.mp4" },
  { src: "video3.mp4" }
];

function createVideoElement(videoSrc) {
  const videoContainer = document.createElement("div");
  videoContainer.classList.add("video");

  const video = document.createElement("video");
  video.src = videoSrc;
  video.autoplay = true;
  video.loop = true;
  video.muted = true;

  const playButton = document.createElement("div");
  playButton.classList.add("play-button");
  playButton.innerHTML = "&#9654;"; // Unicode play symbol

  videoContainer.appendChild(video);
  videoContainer.appendChild(playButton);
  videoFeed.appendChild(videoContainer);

  playButton.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playButton.style.display = "none";
    } else {
      video.pause();
      playButton.style.display = "block";
    }
  });
}

videoData.forEach(video => {
  createVideoElement(video.src);
});
