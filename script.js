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
        "im going back to bed",
        "dev focus",
        "You don't have permission to use this.",
        "black and orange youtube",
        "i might be stupid",
        "so... hows the weather",
        'Click <a href="index.html">here</a> for a cookie',
        'Click <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">here</a> for a cookie',
        "This is not the webpage you are looking for",
        "Have you ever heard the tradgedy of Darth Plageius the Wise?",
        "[insert funny comment here]"

    ];

    const randomIndex = Math.floor(Math.random() * texts.length);
    document.getElementById("random-text").innerText = texts[randomIndex];
};
