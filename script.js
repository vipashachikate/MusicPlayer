const play = document.getElementById("play");
const music = document.querySelector("audio");
const img = document.getElementById("img");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const songs = [
  {
    img : "img",
    musical : "music",
    artist : "THE ARTIST",
    title : "THE SONG NAME",
  },
  {
    img : "img1",
    musical : "music1",
    artist : "THE ARTIST1",
    title : "THE SONG NAME1",
  },
  {
    img : "img2",
    musical : "music2",
    artist : "THE ARTIST2",
    title : "THE SONG NAME2",
  }
];
let isPlaying = false;

const playMusic = () => {
  isPlaying = false;
  music.play();
  play.classList.replace("fa-play-circle","fa-pause-circle");
  img.classList.add("anime");
};

const pauseMusic = () => {
  isPlaying = true;
  music.pause();
  play.classList.replace("fa-pause-circle","fa-play-circle");
  img.classList.remove("anime");
};

play.addEventListener("click", () => {
 isPlaying ? playMusic() : pauseMusic() ;
});


const loadSong = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  img.src = "images/"+songs.img+".jpeg";
  music.src = "music/"+songs.musical+".mp3";
};



var songIndex = 0;
const nextSong = () => {
  songIndex = (songIndex+1) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};

const prevSong = () => {
  songIndex = (songIndex-1+songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

