const playlist = document.getElementsByClassName("musicPlayList")[0];
const audioTag = document.getElementsByClassName("audioTag")[0];
const music = [
  {
    trackId: "music/Billie Eilish - CHIHIRO (Official Music Video).mp3",
    title: "Chiniro by Billie Eilish",
  },
  {
    trackId: "music/Imagine Dragons - Believer (Official Music Video).mp3",
    title: "Bliever by Imagine Dragons",
  },
  {
    trackId: "music/Imagine Dragons - Bones (Official Music Video).mp3",
    title: "Bones by Imagine Drangons",
  },
  {
    trackId: "music/sunflower_postmalone.mp3",
    title: "sunflower by Post Malone",
  },
  {
    trackId: "music/Taylor Swift - Fortnight (feat. Post Malone).mp3",
    title: " Fortnight by Taylor Swift (Feat. Post Malone)",
  },
];
for (let i = 0; i < music.length; i++) {
  const song = document.createElement("div");
  song.addEventListener("click", () => {
    const trackId = music[i].trackId;
    audioTag.src = trackId;
    audioTag.play();
  });
  song.classList.add("trackList");
  const title = (i + 1).toString() + ". " + music[i].title;
  song.textContent = title;
  playlist.append(song);
}
