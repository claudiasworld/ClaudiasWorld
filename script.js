// ============================================
// CLAUDIA'S WORLD — MAIN SCRIPT
// ============================================


// ============================================
// SECRET CODE
// ============================================

const secretCode = "7132";

let hintUsed = 0;


// ============================================
// UNLOCK GARDEN
// ============================================

function unlock() {

    const codeInput =
        document.getElementById("codeInput");

    const error =
        document.getElementById("error");

    const success =
        document.getElementById("success");

    if (!codeInput || !error || !success) {
        return;
    }

    const enteredCode =
        codeInput.value.trim();

    if (enteredCode === secretCode) {

        success.style.display = "flex";

        error.textContent = "";

    } else {

        error.textContent =
            "Hmm... that's not quite it, princess. 🌷";

    }
}


// ============================================
// SHOW HINTS
// ============================================

function showHint() {

    const hint =
        document.getElementById("hint");

    const button =
        document.getElementById("hintRevealButton");

    const count =
        document.getElementById("hintCount");

    if (!hint || !button || !count) {
        return;
    }


    // ========================================
    // HINT #1
    // ========================================

    if (hintUsed === 0) {

        hint.innerHTML = `
            <strong>Hint 1 of 3</strong>

            4 digits<br>
            Two pieces of our story hold the key.<br>
            One marks a new beginning.<br>
            The other holds memories in melody.
        `;

        hint.classList.add("visible");

        hintUsed = 1;

        count.textContent =
            "2 hints remaining";

        button.innerHTML =
            "✦ Reveal Hint 2";

        return;
    }


    // ========================================
    // HINT #2
    // ========================================

    if (hintUsed === 1) {

        hint.classList.remove("visible");

        setTimeout(function () {

            hint.innerHTML = `
                <strong>Hint 2 of 3</strong>

                The first two digits are found on the calendar.<br>
                The last two digits are found in our playlist
                we made together.
            `;

            hint.classList.add("visible");

        }, 150);

        hintUsed = 2;

        count.textContent =
            "1 hint remaining";

        button.innerHTML =
            "✦ Reveal Hint 3";

        return;
    }


    // ========================================
    // HINT #3
    // ========================================

    if (hintUsed === 2) {

        hint.classList.remove("visible");

        setTimeout(function () {

            hint.innerHTML = `
                <strong>Hint 3 of 3</strong>

                Remember the notecard I told you to keep safe
                from your package?<br><br>

                The answer to the problem is the passcode.
            `;

            hint.classList.add("visible");

        }, 150);

        hintUsed = 3;

        count.textContent =
            "All hints revealed";

        button.innerHTML =
            "✦ All Hints Revealed";

        button.disabled = true;

        button.style.opacity = "0.4";
        button.style.cursor = "default";

        return;
    }
}

// ============================================
// DOM READY
// ============================================

document.addEventListener("DOMContentLoaded", function () {

    const codeInput = document.getElementById("codeInput");

    if (codeInput) {
        codeInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                unlock();
            }
        });
    }

    // Load first music track
    loadMusicTrack(0);
});


// ============================================
// GARDEN — FIREFLY
// ============================================

function revealGardenMessage() {

    const garden = document.querySelector(".garden-scene");

    if (!garden) {
        return;
    }

    const message = document.createElement("div");

    message.className = "garden-message";

    message.innerHTML = `
        <div class="garden-message-box">

            <div class="message-flower">
                🤍
            </div>

            <p>
                If you found this, you were looking closely.
            </p>

            <p>
                I hope you know how much you mean to me.
            </p>

            <button
                onclick="this.parentElement.parentElement.remove()">
                Keep exploring ✨
            </button>

        </div>
    `;

    garden.appendChild(message);
}


// ============================================
// GARDEN — FLOWER
// ============================================

function revealFlowerMessage() {

    const existingMessage =
        document.getElementById("flowerMessage");

    if (existingMessage) {
        return;
    }

    const garden =
        document.querySelector(".garden-scene");

    if (!garden) {
        return;
    }

    const message =
        document.createElement("div");

    message.id =
        "flowerMessage";

    message.className =
        "garden-message";

    message.innerHTML = `
        <div class="garden-message-box">

            <div class="message-flower">
                🌷
            </div>

            <p>
                Some things are meant to be found slowly.
            </p>

            <p>
                And some little things are here simply<br>
                because I thought they might make you smile.
            </p>

            <button onclick="closeFlowerMessage()">
                Keep exploring
            </button>

        </div>
    `;

    garden.appendChild(message);
}


function closeFlowerMessage() {

    const message =
        document.getElementById("flowerMessage");

    if (message) {
        message.remove();
    }
}


// ============================================
// GARDEN — LANTERN
// ============================================

function revealLanternMessage() {

    const message =
        document.getElementById("lanternMessage");

    if (message) {
        message.style.display = "flex";
    }
}


function closeLanternMessage() {

    const message =
        document.getElementById("lanternMessage");

    if (message) {
        message.style.display = "none";
    }
}


// ============================================
// GARDEN — BENCH
// ============================================

function revealBenchMessage() {

    const message =
        document.getElementById("benchMessage");

    if (message) {
        message.style.display = "flex";
    }
}


function closeBenchMessage() {

    const message =
        document.getElementById("benchMessage");

    if (message) {
        message.style.display = "none";
    }
}


// ============================================
// WORLD SECTION HELPER
// ============================================

function hideAllWorldSections() {

    const garden =
        document.querySelector(".garden-scene");

    const hub =
        document.getElementById("worldHub");

    const princessRoom =
        document.getElementById("princessRoom");

    const favoriteGallery =
        document.getElementById("favoriteGallery");

    const musicRoom =
        document.getElementById("musicRoom");

    const transition =
        document.getElementById("worldTransition");

    const peaceRoom =
        document.getElementById("peaceRoom");

    const lettersRoom =
        document.getElementById("lettersRoom");

    const stargazingRoom =
        document.getElementById("stargazingRoom");

    if (garden) {
        garden.style.display = "none";
    }

    if (hub) {
        hub.style.display = "none";
    }

    if (princessRoom) {
        princessRoom.style.display = "none";
    }

    if (favoriteGallery) {
        favoriteGallery.style.display = "none";
    }

    if (musicRoom) {
        musicRoom.style.display = "none";
    }

    if (transition) {
        transition.style.display = "none";
    }

    if (peaceRoom) {
        peaceRoom.style.display = "none";
    }

    if (lettersRoom) {
        lettersRoom.style.display = "none";
    }

    if (stargazingRoom) {
        stargazingRoom.style.display = "none";
    }
}


// ============================================
// ENTER CLAUDIA'S WORLD
// ============================================

function enterWorld() {

    const transition =
        document.getElementById("worldTransition");

    const hub =
        document.getElementById("worldHub");

    const garden =
        document.querySelector(".garden-scene");

    if (!transition || !hub) {
        return;
    }

    if (garden) {
        garden.style.display = "block";
    }

    transition.style.display = "flex";

    const content =
        transition.querySelector(
            ".world-transition-content"
        );

    if (content) {

        content.style.opacity = "0";
        content.style.transition = "none";

        setTimeout(function () {

            content.style.transition =
                "opacity 1.5s ease";

            content.style.opacity = "1";

        }, 100);

        setTimeout(function () {

            content.style.opacity = "0";

        }, 3000);
    }

    setTimeout(function () {

        if (transition) {
            transition.style.display = "none";
        }

        if (garden) {
            garden.style.display = "none";
        }

        if (hub) {
            hub.style.display = "flex";
            hub.style.zIndex = "5000";
        }

    }, 4500);
}


// ============================================
// THE PRINCESS'S ROOM
// ============================================

function openPrincessRoom() {

    const garden =
        document.querySelector(".garden-scene");

    const worldHub =
        document.getElementById("worldHub");

    const princessRoom =
        document.getElementById("princessRoom");

    const favoriteGallery =
        document.getElementById("favoriteGallery");

    const musicRoom =
        document.getElementById("musicRoom");

    const peaceRoom =
        document.getElementById("peaceRoom");

    const lettersRoom =
        document.getElementById("lettersRoom");

    if (garden) {
        garden.style.display = "none";
    }

    if (worldHub) {
        worldHub.style.display = "none";
    }

    if (musicRoom) {
        musicRoom.style.display = "none";
    }

    if (favoriteGallery) {
        favoriteGallery.style.display = "none";
    }

    if (peaceRoom) {
        peaceRoom.style.display = "none";
    }

    if (lettersRoom) {
        lettersRoom.style.display = "none";
    }

    if (princessRoom) {

        princessRoom.style.display = "flex";
        princessRoom.style.position = "fixed";
        princessRoom.style.inset = "0";
        princessRoom.style.zIndex = "10000";
    }
}


// ============================================
// CLOSE PRINCESS'S ROOM
// ============================================

function closePrincessRoom() {

    const princessRoom =
        document.getElementById("princessRoom");

    const worldHub =
        document.getElementById("worldHub");

    const favoriteGallery =
        document.getElementById("favoriteGallery");

    if (princessRoom) {
        princessRoom.style.display = "none";
    }

    if (favoriteGallery) {
        favoriteGallery.style.display = "none";
    }

    if (worldHub) {

        worldHub.style.display = "flex";
        worldHub.style.position = "fixed";
        worldHub.style.inset = "0";
        worldHub.style.zIndex = "5000";
    }
}


// ============================================
// FAVORITE PICTURES
// ============================================

function openFavoritePhotos() {

    const princessRoom =
        document.getElementById("princessRoom");

    const favoriteGallery =
        document.getElementById("favoriteGallery");

    if (!favoriteGallery) {

        console.error(
            "Favorite gallery element was not found."
        );

        return;
    }

    if (princessRoom) {
        princessRoom.style.display = "none";
    }

    favoriteGallery.style.display = "flex";
    favoriteGallery.style.position = "fixed";
    favoriteGallery.style.inset = "0";
    favoriteGallery.style.zIndex = "11000";
}


// ============================================
// CLOSE FAVORITE PICTURES
// ============================================

function closeFavoritePhotos() {

    const favoriteGallery =
        document.getElementById("favoriteGallery");

    const princessRoom =
        document.getElementById("princessRoom");

    if (favoriteGallery) {
        favoriteGallery.style.display = "none";
    }

    if (princessRoom) {

        princessRoom.style.display = "flex";
        princessRoom.style.position = "fixed";
        princessRoom.style.inset = "0";
        princessRoom.style.zIndex = "10000";
    }
}


// ============================================
// PRINCESS'S ROOM — CROWN
// ============================================

function revealCrownMessage() {

    const message =
        document.getElementById("crownMessage");

    if (message) {

        message.style.display = "flex";
        message.style.zIndex = "20000";
    }
}


function closeCrownMessage() {

    const message =
        document.getElementById("crownMessage");

    if (message) {
        message.style.display = "none";
    }
}


// ============================================
// PRINCESS'S ROOM — BED
// ============================================

function revealBedMessage() {

    const message =
        document.getElementById("bedMessage");

    if (!message) {
        return;
    }

    message.style.display = "flex";
    message.style.position = "fixed";
    message.style.inset = "0";
    message.style.zIndex = "20000";
}


function closeBedMessage() {

    const message =
        document.getElementById("bedMessage");

    if (message) {
        message.style.display = "none";
    }
}


// ============================================
// PRINCESS'S ROOM — WINDOW
// ============================================

function revealWindowMessage() {

    const message =
        document.getElementById("windowMessage");

    if (message) {

        message.style.display = "flex";
        message.style.zIndex = "20000";
    }
}


function closeWindowMessage() {

    const message =
        document.getElementById("windowMessage");

    if (message) {
        message.style.display = "none";
    }
}


// ============================================
// PRINCESS'S ROOM — DESK
// ============================================

function revealDeskMessage() {

    const message =
        document.getElementById("deskMessage");

    if (message) {

        message.style.display = "flex";
        message.style.zIndex = "20000";
    }
}


function closeDeskMessage() {

    const message =
        document.getElementById("deskMessage");

    if (message) {
        message.style.display = "none";
    }
}


// ============================================
// MUSIC ROOM
// ============================================


// ============================================
// THE STARGAZING ROOM
// ============================================


function createShootingStars() {
    const sky = document.querySelector(".stargazing-sky");
    if (!sky || sky.dataset.shootingStarsReady === "true") return;

    sky.dataset.shootingStarsReady = "true";

    for (let i = 0; i < 5; i++) {
        const star = document.createElement("span");
        star.className = "shooting-star shooting-star-" + (i + 1);
        sky.appendChild(star);
    }
}

function openStargazingRoom() {

    const garden = document.querySelector(".garden-scene");
    const worldHub = document.getElementById("worldHub");
    const stargazingRoom = document.getElementById("stargazingRoom");

    if (garden) garden.style.display = "none";
    if (worldHub) worldHub.style.display = "none";

    [
        "princessRoom",
        "favoriteGallery",
        "musicRoom",
        "peaceRoom",
        "lettersRoom",
        "galleryRoom",
        "placesRoom",
        "somethingWaitedRoom"
    ].forEach(function (id) {
        const room = document.getElementById(id);
        if (room) room.style.display = "none";
    });

    if (stargazingRoom) {
        stargazingRoom.style.display = "block";
        stargazingRoom.style.position = "fixed";
        stargazingRoom.style.inset = "0";
        stargazingRoom.style.zIndex = "10000";
        stargazingRoom.scrollTop = 0;
        createShootingStars();
    }
}

function closeStargazingRoom() {

    const stargazingRoom = document.getElementById("stargazingRoom");
    const worldHub = document.getElementById("worldHub");

    if (stargazingRoom) {
        stargazingRoom.style.display = "none";
        stargazingRoom.scrollTop = 0;
    }

    if (worldHub) {
        worldHub.style.display = "flex";
        worldHub.style.position = "fixed";
        worldHub.style.inset = "0";
        worldHub.style.zIndex = "5000";
    }
}

const stargazingMessages = {
    1: ["✦", "A Beginning", "Every story has a first little moment. Sometimes you don't realize how important it is until you look back. Looking back at the first time we talked, we definitely didn't start off on the best foot. But you gave me another chance, and somehow, our relationship blossomed into something truly wonderful and completely unexpected."],
    2: ["✧", "An Unexpected Place", "I never expected you to become such an important part of my life. Somewhere along the way, you went from someone I barely knew to someone whose presence became something I genuinely cherished."],
    3: ["✦", "Something I Hope You Know", "You have made an impact on my life that I won't pretend didn't matter."],
    4: ["✧", "A Quiet Reminder", "You don't have to have everything figured out. Take your time. You're allowed to become who you're meant to be."],
    5: ["✦", "For the Nights You Overthink", "Put your thoughts down for a moment. Not every question needs an answer tonight."],
    6: ["✧", "One Last Star", "Whatever comes next, I hope there are still beautiful things waiting for you along your journey, and that we both continue to grow... hopefully together."]
};

function revealStarMessage(number) {

    const data = stargazingMessages[number];
    const overlay = document.getElementById("stargazingMessage");

    if (!data || !overlay) return;

    document.getElementById("stargazingMessageSymbol").textContent = data[0];
    document.getElementById("stargazingMessageTitle").textContent = data[1];
    document.getElementById("stargazingMessageText").textContent = data[2];

    overlay.style.display = "flex";
}

function closeStarMessage() {
    const overlay = document.getElementById("stargazingMessage");
    if (overlay) overlay.style.display = "none";
}

function lookThroughTelescope() {

    const cinema = document.getElementById("telescopeCinema");
    const telescope = document.querySelector(".telescope-visual");

    if (!cinema) return;

    if (telescope) telescope.classList.add("telescope-lift-off");

    cinema.classList.remove("closing");
    cinema.classList.add("active");
    cinema.setAttribute("aria-hidden", "false");
    document.body.classList.add("telescope-view-open");

    setTimeout(function () {
        cinema.classList.add("reveal-stars");
    }, 850);
}

function closeTelescopeCinema() {

    const cinema = document.getElementById("telescopeCinema");
    const telescope = document.querySelector(".telescope-visual");

    if (!cinema) return;

    cinema.classList.remove("reveal-stars");
    cinema.classList.add("closing");
    cinema.setAttribute("aria-hidden", "true");
    document.body.classList.remove("telescope-view-open");

    if (telescope) telescope.classList.remove("telescope-lift-off");

    setTimeout(function () {
        cinema.classList.remove("active", "closing");
    }, 900);
}

function openMusicRoom() {

    const garden =
        document.querySelector(".garden-scene");

    const worldHub =
        document.getElementById("worldHub");

    const musicRoom =
        document.getElementById("musicRoom");

    const princessRoom =
        document.getElementById("princessRoom");

    const favoriteGallery =
        document.getElementById("favoriteGallery");

    const peaceRoom =
        document.getElementById("peaceRoom");

    const lettersRoom =
        document.getElementById("lettersRoom");

    if (garden) {
        garden.style.display = "none";
    }

    if (worldHub) {
        worldHub.style.display = "none";
    }

    if (princessRoom) {
        princessRoom.style.display = "none";
    }

    if (favoriteGallery) {
        favoriteGallery.style.display = "none";
    }

    if (peaceRoom) {
        peaceRoom.style.display = "none";
    }

    if (lettersRoom) {
        lettersRoom.style.display = "none";
    }

    if (musicRoom) {

        musicRoom.style.display = "block";
        musicRoom.style.zIndex = "10000";
    }
}


// ============================================
// CLOSE MUSIC ROOM
// ============================================

function closeMusicRoom() {

    const musicRoom =
        document.getElementById("musicRoom");

    const worldHub =
        document.getElementById("worldHub");

    if (musicRoom) {
        musicRoom.style.display = "none";
    }

    if (worldHub) {

        worldHub.style.display = "flex";
        worldHub.style.zIndex = "5000";
    }
}


// ============================================
// SPOTIFY PLAYLISTS
// ============================================

function openSpotifyPlaylist(playlist) {

    if (playlist === "lateNight") {

        window.open(
            "https://open.spotify.com/playlist/2ihvMYghlkHiyPJNbzlBsZ",
            "_blank"
        );

    } else if (playlist === "forClaudia") {

        window.open(
            "https://open.spotify.com/playlist/07d9NckPf1Wgkmt0nBzSUk",
            "_blank"
        );
    }
}


// ============================================
// MUSIC PLAYER — PERSONAL RECORD PLAYER
// ============================================

const musicTracks = [

    {
        title: "WASSUP",
        artist: "Young Miko",
        file: "music/WASSUP.mp3"
    },

    {
        title: "LATINA FOREVA",
        artist: "KAROL G",
        file: "music/LATINA FOREVA.mp3"
    },

    {
        title: "Gabriela",
        artist: "KATSEYE ft. Young Miko",
        file: "music/Gabriela (with Young Miko ).mp3"
    },

    {
        title: "OKI DOKI",
        artist: "KAROL G",
        file: "music/KAROL G - OKI DOKI.mp3"
    },

    {
        title: "Ahi",
        artist: "KAROL G",
        file: "music/Ahi.mp3"
    },

    {
        title: "Glock",
        artist: "Cazzu",
        file: "music/Glock.mp3"
    },

    {
        title: "Chulo pt.2",
        artist: "Bad Gyal",
        file: "music/Chulopt.2.mp3"
    }

];


// ============================================
// MUSIC PLAYER STATE
// ============================================

let currentTrackIndex = 0;

let musicPlaying = false;

const musicAudio = new Audio();

musicAudio.preload = "metadata";


// ============================================
// LOAD CURRENT SONG
// ============================================

function loadMusicTrack(index) {

    if (!musicTracks[index]) {
        return;
    }

    currentTrackIndex = index;

    const track =
        musicTracks[currentTrackIndex];

    musicAudio.src =
        track.file;

    musicAudio.load();

    const title =
        document.getElementById(
            "nowPlayingTitle"
        );

    const artist =
        document.getElementById(
            "nowPlayingArtist"
        );

    if (title) {
        title.textContent =
            track.title;
    }

    if (artist) {
        artist.textContent =
            track.artist;
    }

    musicPlaying = false;

    const musicCenter =
        document.querySelector(
            ".music-center"
        );

    const playButton =
        document.getElementById(
            "musicPlayButton"
        );

    if (musicCenter) {

        musicCenter.classList.remove(
            "playing"
        );
    }

    if (playButton) {

        playButton.textContent =
            "▶";

        playButton.setAttribute(
            "aria-label",
            "Play music"
        );
    }
}


// ============================================
// PLAY / PAUSE
// ============================================

function toggleMusicPlayer() {

    if (!musicAudio.src) {

        loadMusicTrack(
            currentTrackIndex
        );
    }

    if (musicPlaying) {

        musicAudio.pause();

        musicPlaying = false;

        const musicCenter =
            document.querySelector(
                ".music-center"
            );

        const playButton =
            document.getElementById(
                "musicPlayButton"
            );

        if (musicCenter) {

            musicCenter.classList.remove(
                "playing"
            );
        }

        if (playButton) {

            playButton.textContent =
                "▶";

            playButton.setAttribute(
                "aria-label",
                "Play music"
            );
        }

        return;
    }

    musicAudio.play()
        .then(function () {

            musicPlaying = true;

            const musicCenter =
                document.querySelector(
                    ".music-center"
                );

            const playButton =
                document.getElementById(
                    "musicPlayButton"
                );

            if (musicCenter) {

                musicCenter.classList.add(
                    "playing"
                );
            }

            if (playButton) {

                playButton.textContent =
                    "Ⅱ";

                playButton.setAttribute(
                    "aria-label",
                    "Pause music"
                );
            }

        })
        .catch(function (error) {

            console.error(
                "Unable to play music:",
                error
            );
        });
}


// ============================================
// PREVIOUS SONG
// ============================================

function previousSong() {

    currentTrackIndex--;

    if (currentTrackIndex < 0) {

        currentTrackIndex =
            musicTracks.length - 1;
    }

    loadMusicTrack(
        currentTrackIndex
    );

    musicAudio.play()
        .then(function () {

            musicPlaying = true;

            const musicCenter =
                document.querySelector(
                    ".music-center"
                );

            const playButton =
                document.getElementById(
                    "musicPlayButton"
                );

            if (musicCenter) {

                musicCenter.classList.add(
                    "playing"
                );
            }

            if (playButton) {

                playButton.textContent =
                    "Ⅱ";
            }

        })
        .catch(function (error) {

            console.error(
                "Unable to play previous song:",
                error
            );
        });
}


// ============================================
// NEXT SONG
// ============================================

function nextSong() {

    currentTrackIndex++;

    if (
        currentTrackIndex >=
        musicTracks.length
    ) {

        currentTrackIndex = 0;
    }

    loadMusicTrack(
        currentTrackIndex
    );

    musicAudio.play()
        .then(function () {

            musicPlaying = true;

            const musicCenter =
                document.querySelector(
                    ".music-center"
                );

            const playButton =
                document.getElementById(
                    "musicPlayButton"
                );

            if (musicCenter) {

                musicCenter.classList.add(
                    "playing"
                );
            }

            if (playButton) {

                playButton.textContent =
                    "Ⅱ";
            }

        })
        .catch(function (error) {

            console.error(
                "Unable to play next song:",
                error
            );
        });
}


// ============================================
// AUTOMATICALLY PLAY NEXT SONG
// ============================================

musicAudio.addEventListener(
    "ended",
    function () {

        currentTrackIndex++;

        if (
            currentTrackIndex >=
            musicTracks.length
        ) {

            currentTrackIndex = 0;
        }

        loadMusicTrack(
            currentTrackIndex
        );

        musicAudio.play()
            .then(function () {

                musicPlaying = true;

                const musicCenter =
                    document.querySelector(
                        ".music-center"
                    );

                const playButton =
                    document.getElementById(
                        "musicPlayButton"
                    );

                if (musicCenter) {

                    musicCenter.classList.add(
                        "playing"
                    );
                }

                if (playButton) {

                    playButton.textContent =
                        "Ⅱ";
                }

            })
            .catch(function (error) {

                console.error(
                    "Unable to automatically play next song:",
                    error
                );

            });

    }
);


// ============================================
// A PLACE FOR PEACE
// ============================================


// ============================================
// OPEN PEACE ROOM
// ============================================

function openPeaceRoom() {

    const garden =
        document.querySelector(".garden-scene");

    const worldHub =
        document.getElementById("worldHub");

    const peaceRoom =
        document.getElementById("peaceRoom");

    const princessRoom =
        document.getElementById("princessRoom");

    const musicRoom =
        document.getElementById("musicRoom");

    const favoriteGallery =
        document.getElementById("favoriteGallery");

    const lettersRoom =
        document.getElementById("lettersRoom");

    if (garden) {
        garden.style.display = "none";
    }

    if (worldHub) {
        worldHub.style.display = "none";
    }

    if (princessRoom) {
        princessRoom.style.display = "none";
    }

    if (musicRoom) {
        musicRoom.style.display = "none";
    }

    if (favoriteGallery) {
        favoriteGallery.style.display = "none";
    }

    if (lettersRoom) {
        lettersRoom.style.display = "none";
    }

    if (peaceRoom) {

        peaceRoom.style.display = "flex";
        peaceRoom.style.position = "fixed";
        peaceRoom.style.inset = "0";
        peaceRoom.style.zIndex = "10000";
    }
}


// ============================================
// CLOSE PEACE ROOM
// ============================================

function closePeaceRoom() {

    const peaceRoom =
        document.getElementById("peaceRoom");

    const worldHub =
        document.getElementById("worldHub");

    if (peaceRoom) {
        peaceRoom.style.display = "none";
    }

    if (worldHub) {

        worldHub.style.display = "flex";
        worldHub.style.position = "fixed";
        worldHub.style.inset = "0";
        worldHub.style.zIndex = "5000";
    }
}


// ============================================
// PEACE — CROSS
// ============================================

function revealPeaceCross() {

    showPeaceMessage(
        "✝",
        "You Can Come As You Are",
        `You don't have to have the right words.

You don't have to understand everything.

You don't have to pretend that you're okay.

You can simply come as you are,
and talk to God exactly where you are.`
    );
}


// ============================================
// PEACE — CANDLE
// ============================================

function revealPeaceCandle() {

    showPeaceMessage(
        "🕯️",
        "For the Nights That Feel Heavy",
        `When the night feels longer than it should,
remember that darkness doesn't mean
you've been forgotten.

Take a breath.

Be still for a moment.

You don't have to figure everything out tonight.`
    );
}


// ============================================
// PEACE — BIBLE
// ============================================

function revealPeaceBible() {

    showPeaceMessage(
        "📖",
        "A Little Reminder",
        `Sometimes the words we need most
are the ones we have heard before.

"Be still, and know that I am God."

Psalm 46:10

You can slow down here.

You can breathe.

You can let your heart be quiet.`
    );
}


// ============================================
// PEACE — DOVE
// ============================================

function revealPeaceDove() {

    showPeaceMessage(
        "🕊️",
        "You Can Let Go",
        `You don't have to carry every worry
all at the same time.

Give yourself permission to place
some of those things down.

You can pray about them.

You can breathe through them.

And you can trust that you don't
have to carry everything alone.`
    );
}


// ============================================
// PEACE — BENCH
// ============================================

function revealPeaceBench() {

    showPeaceMessage(
        "🪑",
        "Stay Here Awhile",
        `You don't have to fix everything today.

You can sit.

You can pray.

You can cry.

You can be silent.

Whatever is on your heart,
God already knows.

Take as much time as you need.`
    );
}


// ============================================
// SHOW PEACE MESSAGE
// ============================================

function showPeaceMessage(
    symbol,
    title,
    text
) {

    const message =
        document.getElementById(
            "peaceMessage"
        );

    const messageSymbol =
        document.getElementById(
            "peaceMessageSymbol"
        );

    const messageTitle =
        document.getElementById(
            "peaceMessageTitle"
        );

    const messageText =
        document.getElementById(
            "peaceMessageText"
        );

    if (!message) {
        return;
    }

    if (messageSymbol) {
        messageSymbol.textContent =
            symbol;
    }

    if (messageTitle) {
        messageTitle.textContent =
            title;
    }

    if (messageText) {

        messageText.innerHTML =
            text.replace(
                /\n/g,
                "<br>"
            );
    }

    message.style.display = "flex";
}


// ============================================
// CLOSE PEACE MESSAGE
// ============================================

function closePeaceMessage() {

    const message =
        document.getElementById(
            "peaceMessage"
        );

    if (message) {
        message.style.display = "none";
    }
}


// ============================================
// PRAYER & REFLECTION
// ============================================

function showPeaceNeed(need) {

    const reflections = {

        peace: {
            symbol: "🌿",
            title: "For Peace",
            text: `When everything feels loud,
you are allowed to become quiet.

Take a breath.

You don't need to solve everything
in this moment.

"Peace I leave with you, my peace I give you."

John 14:27`
        },

        comfort: {
            symbol: "🤍",
            title: "For Comfort",
            text: `For the moments when your heart feels tired:

You are allowed to rest.

You are allowed to be cared for.

You don't have to be strong every second.

"Come to me, all you who are weary and burdened,
and I will give you rest."

Matthew 11:28`
        },

        strength: {
            symbol: "🙏",
            title: "For Strength",
            text: `When you don't know how you're going
to keep going, you don't have to know
the entire path.

Sometimes strength simply means
taking the next step.

"I can do all things through Christ
who strengthens me."

Philippians 4:13`
        },

        hope: {
            symbol: "🌙",
            title: "For Hope",
            text: `Even when you can't see what comes next,
that doesn't mean there isn't something
beautiful waiting beyond what you can see.

Hold onto hope.

"The Lord is my light and my salvation;
whom shall I fear?"

Psalm 27:1`
        },

        guidance: {
            symbol: "✨",
            title: "For Guidance",
            text: `You don't have to know every answer.

Sometimes the best thing you can do
is ask for guidance and take one step
at a time.

"Trust in the Lord with all your heart
and lean not on your own understanding."

Proverbs 3:5`
        }

    };

    const reflection =
        reflections[need];

    if (!reflection) {
        return;
    }

    showPeaceMessage(
        reflection.symbol,
        reflection.title,
        reflection.text
    );
}


// ============================================
// BE STILL
// ============================================

function beginStillness() {

    const peaceRoom =
        document.getElementById(
            "peaceRoom"
        );

    if (!peaceRoom) {
        return;
    }

    peaceRoom.classList.add(
        "stillness-mode"
    );

    setTimeout(function () {

        showPeaceMessage(
            "🕊️",
            "Be Still",
            `For just a moment,
you don't have to do anything.

Take a slow breath.

Let your shoulders relax.

Think about what has been weighing
on your heart.

You can give it to God.

You don't need to carry it alone.

Stay here as long as you need.`
        );

    }, 1200);

    setTimeout(function () {

        peaceRoom.classList.remove(
            "stillness-mode"
        );

    }, 3500);
}


// ============================================
// THE LETTERS
// ============================================


// ============================================
// OPEN LETTERS ROOM
// ============================================

function openLettersRoom() {

    const garden =
        document.querySelector(".garden-scene");

    const worldHub =
        document.getElementById("worldHub");

    const lettersRoom =
        document.getElementById("lettersRoom");

    const princessRoom =
        document.getElementById("princessRoom");

    const musicRoom =
        document.getElementById("musicRoom");

    const favoriteGallery =
        document.getElementById("favoriteGallery");

    const peaceRoom =
        document.getElementById("peaceRoom");

    if (garden) {
        garden.style.display = "none";
    }

    if (worldHub) {
        worldHub.style.display = "none";
    }

    if (princessRoom) {
        princessRoom.style.display = "none";
    }

    if (musicRoom) {
        musicRoom.style.display = "none";
    }

    if (favoriteGallery) {
        favoriteGallery.style.display = "none";
    }

    if (peaceRoom) {
        peaceRoom.style.display = "none";
    }

    if (lettersRoom) {

        lettersRoom.style.display = "block";
        lettersRoom.style.position = "fixed";
        lettersRoom.style.inset = "0";
        lettersRoom.style.zIndex = "10000";

    } else {

        console.error(
            "Could not find #lettersRoom"
        );
    }
}


// ============================================
// CLOSE LETTERS ROOM
// ============================================

function closeLettersRoom() {

    const lettersRoom =
        document.getElementById(
            "lettersRoom"
        );

    const worldHub =
        document.getElementById(
            "worldHub"
        );

    if (lettersRoom) {
        lettersRoom.style.display = "none";
    }

    if (worldHub) {

        worldHub.style.display = "flex";
        worldHub.style.position = "fixed";
        worldHub.style.inset = "0";
        worldHub.style.zIndex = "5000";
    }
}

// ============================================
// LETTER AUDIO
// ============================================

let currentLetterNumber = null;

const letterAudioFiles = {

    1: "letter1.m4a",
    2: "letter2.m4a",
    3: "letter3.m4a",
    4: "letter4.m4a",
    5: "letter5.m4a"

};

// ============================================
// OPEN LETTER
// ============================================

function openLetter(number) {
currentLetterNumber = number;

    const envelope =
        document.querySelector(
            ".letters-envelope-" + number
        );

    const reader =
        document.getElementById(
            "lettersReader"
        );

    const letterNumber =
        document.getElementById(
            "letterNumber"
        );

    const letterTitle =
        document.getElementById(
            "letterTitle"
        );

    const letterText =
        document.getElementById(
            "letterText"
        );


    if (!envelope) {

        console.error(
            "Could not find envelope " + number
        );

        return;
    }


    if (!reader) {

        console.error(
            "Could not find #lettersReader"
        );

        return;
    }


    // ========================================
    // REMOVE OPENING ANIMATION
    // ========================================

    document
        .querySelectorAll(".letters-envelope")
        .forEach(function (item) {

            item.classList.remove(
                "opening"
            );

        });


    // ========================================
    // LETTER CONTENT
    // ========================================

    const letters = {

        1: {

            title: "For Your Eyes Only",

            text: `

                <h4>White Tulips for You</h4>

                <p>
                    I was going to send you flowers,<br>
                    The kind that sit pretty in a vase<br>
                    The kind that almost match the beauty<br>
                    I see when I look at your face.
                </p>

                <p>
                    But the distance between us stepped in,<br>
                    So instead I drew them in their place.
                </p>

                <p>
                    White tulips, your favorite of them all.<br>
                    Soft petals, simple and sweet, calm and bright<br>
                    Somehow so gentle and quiet,<br>
                    Yet still makes everything so light.
                </p>

                <p>
                    They say white tulips signify new beginnings,<br>
                    Something tender, Something true<br>
                    And that feels kind of fitting<br>
                    For something that is growing with you.
                </p>

                <p>
                    Even though it’s only been a little while.<br>
                    You still find a way into my random thoughts<br>
                    And quiet smiles.
                </p>

                <p>
                    So until I can hand you flowers myself<br>
                    Instead of sending art through a screen<br>
                    Just know that you’re truly appreciated<br>
                    More so than you probably think.
                </p>

            `

        },


        2: {

            title: "Something I Wanted to Say",

            text: `

                <p>
                    I wanted to write this so you understood why I made this website for you.
                </p>

                <p>
                    When I first started it, it was simple. I wanted to do something special for you. I wanted to make you smile, give you something you weren’t expecting, and create something that showed you how much you meant to me.
                </p>

                <p>
                    But somewhere along the way, things between us started changing. We started talking less and less, and eventually I found myself questioning whether I should even keep working on it. There were moments where I thought, “What am I even doing this for?” because it felt like the person I originally wanted to give it to was slowly becoming someone who didn’t want me in her life anymore.
                </p>

                <p>
                    And honestly, that’s when I realized something.
                </p>

                <p>
                    I wasn’t only making this for you anymore. I was making it for myself, too.
                </p>

                <p>
                    I taught myself how to code because of this. I started with an idea and built this entire thing from thin air. I had to learn how everything worked, figure things out when I didn’t understand them, make mistakes, fix them, and keep going. And somewhere along the way, this became more than just a website I was making for someone I cared about.
                </p>

                <p>
                    It became something I was proud of.
                </p>

                <p>
                    I’m proud that I actually followed through. I’m proud that I learned something completely new and understood what I was doing instead of just putting something together and calling it finished. And even when my feelings about giving this to you changed, I still wanted to see it through to the end.
                </p>

                <p>
                    So that’s what I did.
                </p>

                <p>
                    I know things have changed between us. I don’t really know how you feel anymore, or where I stand in your life, and I don’t want to pretend that I do. Maybe your feelings have changed, maybe life has simply taken us in different directions, or maybe I’m just left trying to make sense of the distance between us.
                </p>

                <p>
                    I know you’ve said you’ve been busy and that you have a lot going on, and I don’t doubt that you do. I have seen just a portion of what you’re going through recently and it is a lot. But when so much time can pass without us talking, it’s hard not to wonder what that means. I’ve found myself questioning whether I’m still someone you genuinely want in your life, or whether things between us have simply become something different. And that’s not to put blame or guilt unto you, that's just where my mind wanders to at times and me overthinking things due to uncertainty.
                </p>

                <p>
                    And as much as not knowing can hurt, I’m trying to accept that I may not have an answer to everything.
                </p>

                <p>
                    Don’t feel like you owe me anything because I made this. You don’t. I made this because I wanted to, and I finished it because I wanted to prove to myself that I could.
                </p>

                <p>
                    Whatever happens between us after this, I’ll still have something I created from nothing. Something that taught me patience, creativity, and a skill I didn’t have before.
                </p>

                <p>
                    And despite everything, I hope this makes you smile at least once.
                </p>

                <p>
                    Because that’s why I started it in the first place.
                </p>

            `

        },


        3: {

            title: "The Flowers I Made for You",

            text: `

                <h4>The Flowers I Made for You</h4>

                <p>
                    I drew you tulips once,<br>
                    Thinking they were your favorite.<br>
                    You smiled and laughed<br>
                    “No silly, it's white lilies.”
                </p>

                <p>
                    Across the distance<br>
                    I can’t hand you flowers,<br>
                    But I can learn your heart<br>
                    One petal at a time.
                </p>

                <p>
                    So here I am now,<br>
                    Drawing white lilies for you.<br>
                    To serve as a reminder<br>
                    That even miles away<br>
                    I’m paying attention and thinking of you.
                </p>

                <p>
                    Because loving you<br>
                    Is learning the small things,<br>
                    And never forgetting<br>
                    The ones that make you,<br>
                    You.
                </p>

            `

        },


        4: {

            title: "A Bedtime Story",

            text: `

                <h4>The Princess of the Texas Sky</h4>

                <p>
                    Once upon a time in a quiet corner of Texas, there lived a princess named Claudia who had been planning a very important adventure. For weeks she had planned, organized, stressed, worried, and worked hard to make sure everything was in place and would be just right. She had carried so many things on her mind that sometimes she forgot she didn’t have to be superwoman all the time and she isn’t supposed to carry the whole world by herself.
                </p>

                <p>
                    Now the night before her big adventure had quickly approached and was finally here. The princess was burnt out and out of energy. Her day was coming to a close and she was finally able to climb into bed. The moon peeked through her windows and whispered, “you’ve done enough for today.”
                </p>

                <p>
                    She looked out her window gazing at the stars and said “but what if something goes wrong?” The stars twinkled softly in the moonlight, “then tomorrow we will take care of that.”
                </p>

                <p>
                    And for the first time in a while, princess Claudia let herself stop worrying. She didn't need to organize anything. She didn't need to fix anything. She didn't need to make everything perfect. She could simply close her eyes and finally rest.
                </p>

                <p>
                    Because tomorrow wasn't waiting for the perfect Claudia. It was waiting for just Claudia to be herself, the kind, sweet, caring, loving, hardworking, and wonderful woman who had given so much of herself to make this adventure special for everyone else.
                </p>

                <p>
                    So she closed her eyes, laid her head on the pillow, and let all the worries drift away like the clouds in the Texas sky.
                </p>

                <p>
                    And someone under those same stars far away was thinking about her, and hoping she knew one thing.
                </p>

                <p>
                    She had done enough. She was enough. She deserved to enjoy this adventure she worked so hard to create too.
                </p>

                <p>
                    So sleep peacefully, pretty princess. Tomorrow your adventure begins. But for tonight you don't have to do anything except dream.
                </p>

                <p>
                    Goodnight hermosa. I hope you sleep well.
                </p>

            `

        },


        5: {

            title: "Reminder Letter",

            text: `

                <h4>Reminder Letter</h4>

                <p>
                    I just wanted to give you a little reminder that I see you.
                </p>

                <p>
                    I know you've been feeling overwhelmed and like no matter how much you do, it's still somehow not enough in certain people’s eyes. I know how much that weighs on you, especially when you're already giving so much of yourself to everyone around you. You sacrifice your own time, your own energy, and sometimes even your own peace just to make sure the people and things you care about are okay.
                </p>

                <p>
                    And I hope you know that I notice that.
                </p>

                <p>
                    I notice how much you try. I notice the things you do that probably go unrecognized. I notice how you keep going even when you're exhausted, stressed, frustrated, or feeling like you have nothing left to give. Just because someone doesn't acknowledge everything you're doing doesn't mean it isn't there.
                </p>

                <p>
                    You don't have to destroy yourself trying to prove that you're doing enough.
                </p>

                <p>
                    You are allowed to be tired. You're allowed to have days where you don't accomplish everything you wanted to. You're allowed to take a step back and breathe without feeling guilty about it. Resting doesn't mean you're lazy, and needing help doesn't mean you're incapable.
                </p>

                <p>
                    I know sometimes you probably look at everything you haven't been able to do and forget about everything you have done. So let me remind you of something: you're still here. You're still trying. You're still showing up for the people you love even when you're struggling yourself. That means something.
                </p>

                <p>
                    And please don't let the expectations of other people become the way you measure your worth. You are so much more than how productive you are, how much money you make, how much you accomplish in a day, or whether someone thinks you've done enough.
                </p>

                <p>
                    You don't have to constantly give pieces of yourself away just to deserve to be appreciated.
                </p>

                <p>
                    I wish I could take some of that weight off your shoulders and give you a chance to breathe without having to worry about the next thing waiting for you.
                </p>

                <p>
                    But since I can't, I'll keep reminding you whenever you forget.
                </p>

                <p>
                    You are doing enough.<br>
                    You are trying hard enough.<br>
                    You are worthy of being proud of yourself.<br>
                    And you deserve the same kindness you give to everyone else.
                </p>

                <p>
                    I know things might feel overwhelming right now, and maybe it feels like there's always another problem waiting around the corner. But you don't have to solve your entire life at once. Just take things one day at a time. One problem at a time. And if one day all you can do is get through that day, then that's enough.
                </p>

                <p>
                    I'm proud of you, Claudia. I really am.
                </p>

                <p>
                    Not because of everything you accomplish or everything you do for other people, but because of who you are. I've seen you keep going through things that would have worn anyone down, and I hope you never forget how much strength that takes.
                </p>

                <p>
                    So this is just another little reminder from me:
                </p>

                <p>
                    You don't have to carry everything alone.<br>
                    You don't have to be perfect.<br>
                    You don't have to prove yourself to anyone.<br>
                    And you don't have to earn the right to rest.
                </p>

                <p>
                    Please take care of yourself too, Claudia. You spend so much time making sure everyone else is okay that I hope you remember that you deserve to be taken care of too.
                </p>

            `

        }

    };


    // ========================================
    // GET SELECTED LETTER
    // ========================================

    const selectedLetter =
        letters[number] ||
        letters[1];


    // ========================================
    // UPDATE NUMBER
    // ========================================

    if (letterNumber) {

        letterNumber.textContent =
            String(number).padStart(2, "0");

    }


    // ========================================
    // UPDATE TITLE
    // ========================================

    if (letterTitle) {

        letterTitle.textContent =
            selectedLetter.title;

    }


    // ========================================
    // UPDATE LETTER TEXT
    // ========================================

    if (letterText) {

        letterText.innerHTML =
            selectedLetter.text;

    }


    // ========================================
    // ANIMATE ENVELOPE
    // ========================================

    envelope.classList.add(
        "opening"
    );


    // ========================================
    // OPEN READER
    // ========================================

    setTimeout(function () {

        reader.style.display = "flex";

        requestAnimationFrame(function () {

            reader.classList.add(
                "open"
            );

        });

    }, 850);

}
// ============================================
// TOGGLE LETTER AUDIO
// ============================================

function toggleLetterAudio() {

    const audio =
        document.getElementById("letterAudio");

    const icon =
        document.getElementById("lettersVoiceIcon");

    const text =
        document.getElementById("lettersVoiceText");


    if (!audio) {
        return;
    }


    if (!currentLetterNumber) {

        console.error(
            "No letter is currently open."
        );

        return;
    }


    const selectedAudio =
        letterAudioFiles[currentLetterNumber];


    if (!selectedAudio) {

        console.error(
            "No audio file for letter " +
            currentLetterNumber
        );

        return;
    }


    // Load the correct recording
    if (audio.src !==
        new URL(
            selectedAudio,
            window.location.href
        ).href) {

        audio.src = selectedAudio;
        audio.currentTime = 0;
    }


    // Play
    if (audio.paused) {

        audio.play();

        if (icon) {
            icon.textContent = "❚❚";
        }

        if (text) {
            text.textContent =
                "Pause reading";
        }

    }

    // Pause
    else {

        audio.pause();

        if (icon) {
            icon.textContent = "▶";
        }

        if (text) {
            text.textContent =
                "Hear me read it";
        }
    }


    // Reset button when finished
    audio.onended = function () {

        if (icon) {
            icon.textContent = "▶";
        }

        if (text) {
            text.textContent =
                "Hear me read it";
        }

    };
}



// ============================================
// CLOSE LETTER
// ============================================

function closeLetter() {

    const reader =
        document.getElementById(
            "lettersReader"
        );

    const envelopes =
        document.querySelectorAll(
            ".letters-envelope"
        );

    const audio =
        document.getElementById(
            "letterAudio"
        );

    const icon =
        document.getElementById(
            "lettersVoiceIcon"
        );

    const text =
        document.getElementById(
            "lettersVoiceText"
        );


    // ========================================
    // STOP AND RESET AUDIO
    // ========================================

    if (audio) {

        audio.pause();

        audio.currentTime = 0;

    }


    // Reset audio button

    if (icon) {

        icon.textContent = "▶";

    }

    if (text) {

        text.textContent =
            "Hear me read it";

    }


    // ========================================
    // CLOSE LETTER READER
    // ========================================

    if (reader) {

        reader.classList.remove(
            "open"
        );

        setTimeout(function () {

            reader.style.display =
                "none";

        }, 400);

    }


    // ========================================
    // RESET ENVELOPE ANIMATION
    // ========================================

    setTimeout(function () {

        envelopes.forEach(function (envelope) {

            envelope.classList.remove(
                "opening"
            );

        });

    }, 450);

}



// ============================================
// THE GALLERY
// ============================================


// ============================================
// OPEN GALLERY
// ============================================

function openGallery() {

    const garden =
        document.querySelector(".garden-scene");

    const worldHub =
        document.getElementById("worldHub");

    const galleryRoom =
        document.getElementById("galleryRoom");

    const princessRoom =
        document.getElementById("princessRoom");

    const favoriteGallery =
        document.getElementById("favoriteGallery");

    const musicRoom =
        document.getElementById("musicRoom");

    const peaceRoom =
        document.getElementById("peaceRoom");

    const lettersRoom =
        document.getElementById("lettersRoom");


    if (garden) {
        garden.style.display = "none";
    }

    if (worldHub) {
        worldHub.style.display = "none";
    }

    if (princessRoom) {
        princessRoom.style.display = "none";
    }

    if (favoriteGallery) {
        favoriteGallery.style.display = "none";
    }

    if (musicRoom) {
        musicRoom.style.display = "none";
    }

    if (peaceRoom) {
        peaceRoom.style.display = "none";
    }

    if (lettersRoom) {
        lettersRoom.style.display = "none";
    }


    if (galleryRoom) {

        galleryRoom.style.display = "block";
        galleryRoom.style.position = "fixed";
        galleryRoom.style.inset = "0";
        galleryRoom.style.zIndex = "10000";

    } else {

        console.error(
            "Could not find #galleryRoom"
        );

    }
}


// ============================================
// CLOSE GALLERY
// ============================================

function closeGallery() {

    const galleryRoom =
        document.getElementById("galleryRoom");

    const worldHub =
        document.getElementById("worldHub");


    if (galleryRoom) {
        galleryRoom.style.display = "none";
    }


    if (worldHub) {

        worldHub.style.display = "flex";
        worldHub.style.position = "fixed";
        worldHub.style.inset = "0";
        worldHub.style.zIndex = "5000";

    }
}
// ============================================
// GALLERY — COMIC
// ============================================

const comicPanels = [

    {
        image: "comic-1.jpg",
        caption: "You were out driving to clear your mind..."
    },

    {
        image: "comic-2.jpg",
        caption: "When suddenly three little cats caught your eye"
    },

    {
        image: "comic-3.jpg",
        caption: "You wanted to get out and save them. I talked you out of it."
    },

    {
        image: "comic-4.jpg",
        caption: "This is what I imagined if you did get out for the cats."
    }

];


let currentComicPanel = 0;


// ============================================
// OPEN COMIC
// ============================================

function openComic() {

    const reader =
        document.getElementById("comicReader");

    if (!reader) {
        return;
    }

    currentComicPanel = 0;

    updateComicPanel();

    reader.style.display = "flex";

    requestAnimationFrame(function () {

        reader.classList.add("open");

    });
}


// ============================================
// CLOSE COMIC
// ============================================

function closeComic() {

    const reader =
        document.getElementById("comicReader");

    if (!reader) {
        return;
    }

    reader.classList.remove("open");

    setTimeout(function () {

        reader.style.display = "none";

    }, 400);
}


// ============================================
// UPDATE COMIC PANEL
// ============================================

function updateComicPanel() {

    const image =
        document.getElementById("comicImage");

    const caption =
        document.getElementById("comicCaption");

    const page =
        document.getElementById("comicPage");

    const panel =
        comicPanels[currentComicPanel];

    if (!panel) {
        return;
    }

    if (image) {

        image.src =
            panel.image;

        image.alt =
            "Comic panel " +
            (currentComicPanel + 1);

    }

    if (caption) {

        caption.textContent =
            panel.caption;

    }

    if (page) {

        page.textContent =
            (currentComicPanel + 1) +
            " / " +
            comicPanels.length;

    }

}


// ============================================
// NEXT COMIC PANEL
// ============================================

function nextComicPanel() {

    currentComicPanel++;

    if (
        currentComicPanel >=
        comicPanels.length
    ) {

        currentComicPanel = 0;

    }

    updateComicPanel();

}


// ============================================
// PREVIOUS COMIC PANEL
// ============================================

function previousComicPanel() {

    currentComicPanel--;

    if (currentComicPanel < 0) {

        currentComicPanel =
            comicPanels.length - 1;

    }

    updateComicPanel();

}
// ============================================
// PLACES THAT CHANGED YOU
// ============================================


// ============================================
// OPEN PLACES ROOM
// ============================================

function openPlacesRoom() {

    const garden =
        document.querySelector(".garden-scene");

    const worldHub =
        document.getElementById("worldHub");

    const placesRoom =
        document.getElementById("placesRoom");

    const princessRoom =
        document.getElementById("princessRoom");

    const favoriteGallery =
        document.getElementById("favoriteGallery");

    const musicRoom =
        document.getElementById("musicRoom");

    const peaceRoom =
        document.getElementById("peaceRoom");

    const lettersRoom =
        document.getElementById("lettersRoom");

    const galleryRoom =
        document.getElementById("galleryRoom");


    if (garden) {
        garden.style.display = "none";
    }

    if (worldHub) {
        worldHub.style.display = "none";
    }

    if (princessRoom) {
        princessRoom.style.display = "none";
    }

    if (favoriteGallery) {
        favoriteGallery.style.display = "none";
    }

    if (musicRoom) {
        musicRoom.style.display = "none";
    }

    if (peaceRoom) {
        peaceRoom.style.display = "none";
    }

    if (lettersRoom) {
        lettersRoom.style.display = "none";
    }

    if (galleryRoom) {
        galleryRoom.style.display = "none";
    }


    if (placesRoom) {

        placesRoom.style.display = "block";
        placesRoom.style.position = "fixed";
        placesRoom.style.inset = "0";
        placesRoom.style.zIndex = "10000";

    } else {

        console.error(
            "Could not find #placesRoom"
        );

    }

}


// ============================================
// CLOSE PLACES ROOM
// ============================================

function closePlacesRoom() {

    const placesRoom =
        document.getElementById("placesRoom");

    const worldHub =
        document.getElementById("worldHub");


    if (placesRoom) {
        placesRoom.style.display = "none";
    }


    if (worldHub) {

        worldHub.style.display = "flex";
        worldHub.style.position = "fixed";
        worldHub.style.inset = "0";
        worldHub.style.zIndex = "5000";

    }

}
// ============================================
// SOMETHING WAITED — FINAL ROOM
// ============================================

const somethingWaitedPasscode = "seven";


// ============================================
// OPEN SOMETHING WAITED PASSCODE
// ============================================

function openSomethingWaited() {

    const overlay =
        document.getElementById(
            "waitingPasscodeOverlay"
        );

    const input =
        document.getElementById(
            "waitingPasscode"
        );

    const error =
        document.getElementById(
            "waitingPasscodeError"
        );

    if (!overlay) {
        return;
    }

    overlay.style.display = "flex";

    if (input) {
        input.value = "";
        input.focus();
    }

    if (error) {
        error.textContent = "";
    }
}


// ============================================
// CLOSE PASSCODE
// ============================================

function closeWaitingPasscode() {

    const overlay =
        document.getElementById(
            "waitingPasscodeOverlay"
        );

    if (overlay) {
        overlay.style.display = "none";
    }
}


// ============================================
// UNLOCK SOMETHING WAITED
// ============================================

function unlockSomethingWaited() {

    const input =
        document.getElementById(
            "waitingPasscode"
        );

    const error =
        document.getElementById(
            "waitingPasscodeError"
        );

    if (!input) {
        return;
    }

    const enteredCode =
        input.value.trim();

    if (enteredCode === somethingWaitedPasscode) {

        if (error) {
            error.textContent = "";
        }

        closeWaitingPasscode();

        enterSomethingWaited();

    } else {

        if (error) {

            error.textContent =
                "Not yet. There may still be something you haven't found.";

        }

        input.value = "";
        input.focus();
    }
}


// ============================================
// ENTER SOMETHING WAITED
// ============================================

function enterSomethingWaited() {

    const worldHub =
        document.getElementById(
            "worldHub"
        );

    const room =
        document.getElementById(
            "somethingWaitedRoom"
        );

    if (worldHub) {
        worldHub.style.display = "none";
    }

    if (!room) {
        console.error(
            "Could not find #somethingWaitedRoom"
        );
        return;
    }

    room.style.display = "block";

    beginWaitingHallway();
}


// ============================================
// BEGIN HALLWAY
// ============================================

function beginWaitingHallway() {

    const intro =
        document.getElementById(
            "waitingIntro"
        );

    const walkButton =
        document.getElementById(
            "waitingWalkButton"
        );

    const message =
        document.getElementById(
            "waitingHallwayMessage"
        );

    const messageText =
        document.getElementById(
            "waitingMessageText"
        );

    const door =
        document.getElementById(
            "waitingDoorContainer"
        );

    if (intro) {

        setTimeout(function () {

            intro.style.opacity = "0";

        }, 2500);

        setTimeout(function () {

            intro.style.display = "none";

        }, 4500);
    }


    if (message && messageText) {

        setTimeout(function () {

            messageText.textContent =
                "You've seen almost everything.";

            message.style.opacity = "1";

        }, 4500);

        setTimeout(function () {

            message.style.opacity = "0";

        }, 7000);


        setTimeout(function () {

            messageText.textContent =
                "But there was always something I kept for last.";

            message.style.opacity = "1";

        }, 8500);

        setTimeout(function () {

            message.style.opacity = "0";

        }, 11500);


        setTimeout(function () {

            messageText.textContent =
                "Something I couldn't put anywhere else.";

            message.style.opacity = "1";

        }, 13000);

        setTimeout(function () {

            message.style.opacity = "0";

        }, 16000);
    }


    if (walkButton) {

        setTimeout(function () {

            walkButton.classList.remove(
                "hidden"
            );

        }, 4500);
    }


    if (door) {

        door.style.transform =
            "translate(-50%, -50%) scale(0.35)";
    }
}


// ============================================
// WALK TOWARD THE DOOR
// ============================================

function walkTowardWaitingDoor() {

    const door =
        document.getElementById(
            "waitingDoorContainer"
        );

    const button =
        document.getElementById(
            "waitingWalkButton"
        );

    const message =
        document.getElementById(
            "waitingHallwayMessage"
        );

    if (button) {

        button.classList.add(
            "hidden"
        );
    }

    if (message) {

        message.style.opacity = "1";

        const text =
            document.getElementById(
                "waitingMessageText"
            );

        if (text) {

            text.textContent =
                "You're almost there.";
        }
    }

    if (door) {

        door.classList.add(
            "approaching"
        );
    }

    setTimeout(function () {

        if (message) {
            message.style.opacity = "0";
        }

    }, 4000);
}



// ============================================
// CLICK THE DOOR — LOCKED MOMENT
// ============================================

function attemptWaitingDoor() {

    const door =
        document.getElementById(
            "waitingDoor"
        );

    const doorMessage =
        document.getElementById(
            "waitingDoorMessage"
        );

    if (!doorMessage) {
        return;
    }

    // Make the door react
    if (door) {

        door.classList.add(
            "door-locked-shake"
        );

        setTimeout(function () {

            door.classList.remove(
                "door-locked-shake"
            );

        }, 700);
    }

    // Slight delay before revealing the message
    setTimeout(function () {

        doorMessage.style.display =
            "flex";

    }, 500);
}
// ============================================
// SOMETHING WAITED — CIPHER ANSWER
// ============================================

function checkWaitingAnswer() {

    const input =
        document.getElementById(
            "waitingDecodedMessage"
        );

    const error =
        document.getElementById(
            "waitingDecodeError"
        );

    const finalReveal =
        document.getElementById(
            "waitingFinalReveal"
        );

    if (!input || !finalReveal) {
        return;
    }

    const answer =
        input.value
            .trim()
            .toLowerCase()
            .replace(/[?!.,]/g, "")
            .replace(/\s+/g, " ");

    const correctAnswer =
        "will you let me be yours";

    if (answer === correctAnswer) {

        if (error) {
            error.textContent = "";
        }

        input.disabled = true;

        const button =
            document.querySelector(
                ".waiting-decode-button"
            );

        if (button) {
            button.style.display = "none";
        }

        finalReveal.style.display = "block";

        setTimeout(function () {

            finalReveal.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 100);

    } else {

        if (error) {

            error.textContent =
                "That's not it. Follow the numbers back to the poems.";

        }

        input.value = "";
        input.focus();
    }
}


// ============================================
// ENTER KEY FOR FINAL ANSWER
// ============================================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key !== "Enter") {
            return;
        }

        const input =
            document.getElementById(
                "waitingDecodedMessage"
            );

        const cipher =
            document.getElementById(
                "waitingCipher"
            );

        if (
            input &&
            cipher &&
            cipher.style.display !== "none" &&
            document.activeElement === input
        ) {

            checkWaitingAnswer();

        }

    }
);

// ============================================
// SHOW FINAL CIPHER
// ============================================

function showWaitingCipher() {

    const doorMessage =
        document.getElementById(
            "waitingDoorMessage"
        );

    const cipher =
        document.getElementById(
            "waitingCipher"
        );

    if (doorMessage) {
        doorMessage.style.display =
            "none";
    }

    if (cipher) {
        cipher.style.display =
            "flex";
    }
}


// ============================================
// CLOSE SOMETHING WAITED
// ============================================

function closeSomethingWaited() {

    const room =
        document.getElementById(
            "somethingWaitedRoom"
        );

    const worldHub =
        document.getElementById(
            "worldHub"
        );

    if (room) {
        room.style.display = "none";
    }

    if (worldHub) {

        worldHub.style.display =
            "flex";

        worldHub.style.position =
            "fixed";

        worldHub.style.inset =
            "0";

        worldHub.style.zIndex =
            "5000";
    }
}


// ============================================
// ENTER KEY FOR PASSCODE
// ============================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Enter"
        ) {

            const overlay =
                document.getElementById(
                    "waitingPasscodeOverlay"
                );

            if (
                overlay &&
                overlay.style.display === "flex"
            ) {

                unlockSomethingWaited();
            }
        }

    }
)
// ============================================
// RETURN TO GARDEN
// ============================================

function openGarden() {

    const garden =
        document.querySelector(".garden-scene");

    if (!garden) {
        console.error(
            "Could not find .garden-scene"
        );
        return;
    }

    hideAllWorldSections();

    garden.style.display = "flex";
}
