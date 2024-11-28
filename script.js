// Rätsel und Lösungen

document.addEventListener("DOMContentLoaded", () => {
    const riddles = {
        1: {text: "Ich bin wie ein Baum, der Wurzeln hat. Mein Stand ist fest, auch wenn Stürme toben. - Psalm 1,3"},
        2: {text: "Ich bin das Licht, das dich in der Dunkelheit führt. - Johannes 8,12"},
        3: {text: "Eine Festung, die niemals wankt – das bin ich für dich in schweren Zeiten. - Psalm 46,22"},
        4: {text: "Meine Liebe hört niemals auf – sie bleibt, so wie der Himmel hoch ist. - Psalm 103,11"},
        5: {text: "Wenn du mich suchst, wirst du mich finden, denn ich bin nicht fern. - Jeremia 29,13"},
        6: {text: "Ich schenke dir Flügel wie einem Adler, damit du wieder fliegen kannst. - Jesaja 40,31"},
        7: {text: "Ich habe Gedanken des Friedens und der Hoffnung für dich, nicht des Unheils. - Jeremia 29,11"},
        8: {text: "Selbst wenn alle um dich wanken, ich halte dich mit meiner starken Hand. - Jesaja 41,10"},
        9: {text: "Ich bin bei dir, egal wohin du gehst – ich lasse dich nicht allein. - Josua 1,9"},
        10: {text: "Ich gebe dir Ruhe, wenn deine Seele schwer beladen ist. - Matthäus 11,28"},
        11: {text: "Ich bin die Quelle des Lebens – trinke und du wirst nie wieder dürsten. - Johannes 4,14"},
        12: {text: "Die Freude am Herrn ist deine Stärke. - Nehemia 8,10"},
        13: {text: "Ich bin dein Hirte, dir wird nichts fehlen. - Psalm 23,1"},
        14: {text: "Meine Barmherzigkeit ist jeden Morgen neu – wie die Sonne, die aufgeht. - Klagelieder 3,22-23"},
        15: {text: "Mein Friede ist größer als all deine Sorgen – er bewahrt dein Herz. - Philipper 4,7"},
        16: {text: "Ich habe dich je und je geliebt, meine Treue währt ewig. - Jeremia 31,3"},
        17: {text: "Nichts kann dich von meiner Liebe trennen – nicht einmal die dunkelste Nacht. - Römer 8,38-39"},
        18: {text: "Sei still und wisse, dass ich Gott bin. - Psalm 46,11"},
        19: {text: "Auch wenn du Angst hast: Fürchte dich nicht, ich halte dich fest. - Jesaja 41,10"},
        20: {text: "Ich trage deine Last und gebe dir neue Kraft. - Psalm 55, 23"},
        21: {text: "Meine Worte sind wie eine Lampe für deinen Weg – sie zeigen dir, wo es langgeht. - Psalm 119, 105"},
        22: {text: "Sorge dich nicht, ich bin dein Helfer und stärke dich. - Jesaja 41,13"},
        23: {text: "Du bist mein geliebtes Kind, und ich habe Wohlgefallen an dir. - Matthäus 3,17"},
        24: {text: "Euch ist heute der Retter geboren – er bringt Licht und Frieden in die Welt.“ - Lukas 2,11"}
    };

// Elemente
    const doors = document.querySelectorAll(".door");
    const popup = document.getElementById("popup");
    const riddleTitle = document.getElementById("riddle-title");
    const riddleText = document.getElementById("riddle-text");
    const answerInput = document.getElementById("answer");
    const feedback = document.getElementById("feedback");
    const closePopupButton = document.getElementById("close-popup");
    const submitAnswer = document.getElementById("submit-answer");
    // Element für den Button zum Zurücksetzen des Fortschritts
    const resetButton = document.getElementById("reset-progress");

// Fortschritt speichern
    let openedDoors = JSON.parse(localStorage.getItem("openedDoors")) || [];

// Türchen öffnen
    doors.forEach(door => {
        const day = door.dataset.day;

        // Bereits geöffnete Türchen markieren
        if (openedDoors.includes(day)) {
            door.classList.add("opened");
        }

        door.addEventListener("click", () => {
            openRiddle(day); // Popup öffnen
            if (!openedDoors.includes(day)) {
                // Fortschritt speichern
                openedDoors.push(day);
                localStorage.setItem("openedDoors", JSON.stringify(openedDoors));
                door.classList.add("opened");
            }
        });
    });


// Popup mit Rätsel anzeigen
    function openRiddle(day) {
        const riddle = riddles[day];
        if (!riddle) return;

        // Zeige den Text im Popup
        riddleTitle.textContent = `Türchen ${day}`;
        riddleText.textContent = riddle.text;
        popup.classList.remove("hidden");

        // Eingabefeld und Buttons ausblenden, da keine Interaktion nötig ist
        answerInput.style.display = "none";
        submitAnswer.style.display = "none";
        feedback.textContent = "";
    }

// Popup schließen
    closePopupButton.addEventListener("click", closePopup);

    function closePopup() {
        console.log("closePopup wurde aufgerufen");
        popup.classList.add("hidden");
        answerInput.value = "";
        feedback.textContent = "";
    }

    if ("serviceWorker" in navigator) {
        navigator.serviceWorker
            .register("/service-worker.js")
            .then(() => console.log("Service Worker registriert"))
            .catch(error => console.error("Service Worker Fehler:", error));
    }

});