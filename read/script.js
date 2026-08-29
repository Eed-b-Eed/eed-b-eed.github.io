function showArabicOnly() {
    document.querySelectorAll('.dialogue-line').forEach(line => {
        line.classList.remove('below', 'side-by-side');
    });
}

function showBelow() {
    document.querySelectorAll('.dialogue-line').forEach(line => {
        line.classList.remove('side-by-side');
        line.classList.add('below');
    });
}

function showSideBySide() {
    document.querySelectorAll('.dialogue-line').forEach(line => {
        line.classList.remove('below');
        line.classList.add('side-by-side');
    });
}

function toggleStory() {

    const story = document.getElementById("storyContent");

    if (story.style.display === "none" || story.style.display === "") {

        story.style.display = "block";
        showArabicOnly();

    } else {

        story.style.display = "none";

    }
}

const dialogue = [
["مرحبا كوتش","Hello, coach!"],
["مرحبا","Hello."],
["كيفك","How are you?"],
["الحمد لله","Thanks God. "],
["انت كيفك","How about you?"],
["تمام الحمد لله","I'm okay, thanks God. "],
["جاهز للتدريب","Are you ready for the training? "],
["اكيد جاهز ومتحمس","Sure! Ready and motivated! "],
["تمام تفضل معي","Great. Please follow me. "],
["تمام","Okay. "],
["رح نبدا بحماس قوي وشو بحكيلك اشتغل","We'll start at full power. Train as I tell you!"],
["تمام كوتش","Sure, coach. "],
["اركض عشر دقائق وبعد ما تخلص احكيلي","Run ten minutes, and tell me when you finish. "],
["تمام كوتش","Sure, coach. "],
["خلصت كوتش","Coach, I've finished!"],
["تمام تفضل معي عل ماكنه الصدر","Great. Please follow me to the chest-machine. "],
["تمام كيف ادرب كوتش","Sure. How do I train [here]? "],
["بتتمدد عل ظهرك وبتبلش ترفع شوي شوي قد ما تقدر","You should lie down on your back and start pushing up.[Just] slowly [and] as much as you can. "],
["تمام كوتش","Sure, coach. "],
["كوتش خلصت","Coach, I've finished!"],
["تمام يلا اللي بعدو","Great. Let's go for the next one. "],
["تمام كوتش خلصت","Okay, coach, I've finished!"],
["يعطيك العافيه","May He give you strength. "],
["الله يعافيك","May God strengthen you. "],
["تمام كوتش بكرا اي ساعه","Okay, coach. What time tomorrow? "],
["بكرا عل اربعه تمام لالك","Does it work for youat four tomorrow?"],
["تمام منيح","Yes, it's okay. "],
["سلام","Bye! "],
["سلام بكرا بشوفك","Bye, I'll see you tomorrow. "]
];

const container = document.getElementById("dialogue");

dialogue.forEach(([ar, en]) => {
    container.innerHTML += `
        <div class="dialogue-line">
            <div class="arabic" dir="rtl">${ar}</div>
            <div class="english">${en}</div>
        </div>
    `;
});
