// BACKGROUND MUSIC

const music = document.getElementById("backgroundMusic");

const musicButton = document.getElementById("musicButton");


// CHANGE SCREEN FUNCTION

function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(function(screen) {

        screen.classList.add("hidden");

    });

    document.getElementById(screenId).classList.remove("hidden");

}


// YES BUTTON

function sayYes() {

    if (music.readyState >= 1) {

        music.currentTime = 30;

        music.play().catch(function(error) {
            console.log("Music error:", error);
        });

    } else {

        music.addEventListener("loadedmetadata", function() {

            music.currentTime = 15;

            music.play().catch(function(error) {
                console.log("Music error:", error);
            });

        }, { once: true });
    }

    showScreen("apologyScreen");
}


// NO BUTTON

function sayNo() {

    // Nothing happens.

}


// NEXT BUTTON

function showOptions() {

    showScreen("optionsScreen");

}


// SELECT OPTION

function selectOption(option) {

    if (option === "number") {

        showScreen("numberScreen");

    } else {

        showScreen("budgetScreen");

    }

}


// CHOOSE BUDGET

function chooseBudget(budget) {

    document.getElementById("responseHeading").innerText =
        "Your budget is " + budget + "? 😂";

    showScreen("responseScreen");

}


// FINAL SURPRISE

function showFinal() {

    showScreen("finalScreen");

}


// MUSIC ON / OFF

function toggleMusic() {

    if (music.paused) {

        music.play().then(function() {

            musicButton.innerText = "🔊 Music ON";

        }).catch(function(error) {

            alert("Music file could not play. Please check your music file.");

        });

    } else {

        music.pause();

        musicButton.innerText = "🔇 Music OFF";

    }

}