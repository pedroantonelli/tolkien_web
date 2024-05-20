document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const chapter = params.get("chapter");

    const chapters = {
        1: { title: "An Unexpected Party", content: "Content for An Unexpected Party..." },
        2: { title: "Roast Mutton", content: "Content for Roast Mutton..." },
        3: { title: "A Short Rest", content: "Content for A Short Rest..." },
        4: { title: "Over Hill and Under Hill", content: "Content for Over Hill and Under Hill..." },
        5: { title: "Riddles In The Dark", content: "Content for Riddles In The Dark..." },
        6: { title: "Out Of The Frying-Pan Into The Fire", content: "Content for Out Of The Frying-Pan Into The Fire..." },
        7: { title: "Queer Lodgings", content: "Content for Queer Lodgings..." },
        8: { title: "Flies And Spiders", content: "Content for Flies And Spiders..." },
        9: { title: "Barrels Out Of Bond", content: "Content for Barrels Out Of Bond..." },
        10: { title: "A Warm Welcome", content: "Content for A Warm Welcome..." },
        11: { title: "On The Doorstep", content: "Content for On The Doorstep..." },
        12: { title: "Inside Information", content: "Content for Inside Information..." },
        13: { title: "Not At Home", content: "Content for Not At Home..." },
        14: { title: "Fire And Water", content: "Content for Fire And Water..." },
        15: { title: "The Gathering Of The Clouds", content: "Content for The Gathering Of The Clouds..." },
        16: { title: "A Thief In The Night", content: "Content for A Thief In The Night..." },
        17: { title: "The Clouds Burst", content: "Content for The Clouds Burst..." },
        18: { title: "The Return Journey", content: "Content for The Return Journey..." },
        19: { title: "The Last Stage", content: "Content for The Last Stage..." }
    };

    if (chapters[chapter]) {
        document.getElementById("chapter-title").textContent = chapters[chapter].title;
        document.getElementById("chapter-content").textContent = chapters[chapter].content;
    } else {
        document.getElementById("chapter-title").textContent = "Chapter not found";
        document.getElementById("chapter-content").textContent = "The chapter you are looking for does not exist.";
    }
});