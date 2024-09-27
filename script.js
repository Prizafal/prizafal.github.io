window.onload = function() {
    const texts = [
        "idk what to put here ngl",
        "WTF is a dumbass",
        "🍞",
        "🍞🍞🍞",
        "🍞🍞🍞🍞🍞🍞🍞🍞🍞🍞",
        "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        "sudo rm -rf */",
        "read the fucking docs (RTFD)",
        "looks like a layer 8 error chief",
        "i want soup",
        "how are you? actually nvm idrc",
        "ERROR 418",
        "always carry a towel",
        "42",
        "todo: add funny comment",
        "im going back to bed"

    ];

    const randomIndex = Math.floor(Math.random() * texts.length);
    document.getElementById("random-text").innerText = texts[randomIndex];
};
