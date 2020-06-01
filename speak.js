let btn = document.querySelector("#btn");
btn.addEventListener("click", speech);

function speech() {
    window.SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition; // these are predefined function

    let recognition = new SpeechRecognition();

    recognition.interimResults = true; // interimResults try to gives accurate result

    let p = document.createElement("p");
    let words = document.querySelector(".words");
    words.appendChild(p);

    //call dom events
    recognition.addEventListener("result", (e) => {
        let transcript = [...e.results]
            .map((result) => result[0])
            .map((result) => result.transcript)
            .join("");
        // console.log(transcript);
        p.textContent = transcript;
        if (e.results[0].isFinal) {

            p = document.createElement("p");
            words.appendChild(p);
        }
    });

    // restart recognition
    recognition.addEventListener("end", recognition.start);

    // start recognition
    recognition.start();
}
