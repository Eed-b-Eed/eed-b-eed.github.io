const dialogues = { 
    
    gym:    [
["مرحبا كوتش","Hello, coach!","مرحبا كوتش!"],
["مرحبا","Hello.","مرحبا!"],
["كيفك","How are you?","كيف حالك؟"],
["الحمد لله","Thanks God. ","نحمد الله."],
["انت كيفك","How about you?","كيف حالك أنت؟"],
["تمام الحمد لله","I'm okay, thanks God. ","الحمد لله بكل خير."],
["جاهز للتدريب","Are you ready for the training? ","هل أنت جاهز للتدريب اليوم؟"],
["اكيد جاهز ومتحمس","Sure! Ready and motivated! ","بكل تأكيد أنا جاهز كل الجهوزية ومتحمس جدا."],
["تمام تفضل معي","Great. Please follow me. ","تمام هيا تفضل معي."],
["تمام","Okay. ","تمام."],
["رح نبدا بحماس قوي وشو بحكيلك اشتغل","We'll start at full power. Train as I tell you!","سوف نبدأ بحماس قوي ومثلما أحكي لك اعمل."],
["تمام كوتش","Sure, coach. ","تمام كوتش."],
["اركض عشر دقائق وبعد ما تخلص احكيلي","Run ten minutes, and tell me when you finish. ","اركض ركض عشر دقائق وعندما تنتهي اخبرني."],
["تمام كوتش","Sure, coach. ","تمام كوتش."],
["خلصت كوتش","Coach, I've finished!","كوتش لقد أكملت."],
["تمام تفضل معي عل ماكنه الصدر","Great. Please follow me to the chest-machine. ","من فضلك تفضل معي على ماكينة الصدر."],
["تمام كيف ادرب كوتش","Sure. How do I train [here]? ","تمام."],
["بتتمدد عل ظهرك وبتبلش ترفع شوي شوي قد ما تقدر","You should lie down on your back and start pushing up.[Just] slowly [and] as much as you can. ","تمدد على ظهرك وابدأ الرفع ببالتدريج على قدر ما تستطيع."],
["تمام كوتش","Sure, coach. ","تمام كوتش."],
["كوتش خلصت","Coach, I've finished!","كوتش لقد أكملت."],
["تمام يلا اللي بعدو","Great. Let's go for the next one. ","جيد من فضلك أعمل التمرين الذي يلية."],
["تمام كوتش خلصت","Okay, coach, I've finished!","لقد أكملت كوتش."],
["يعطيك العافيه","May He give you strength. ","أعطاك الله العافية."],
["الله يعافيك","May God strengthen you. ","وأنت أيضا اعطاك الله العافية."],
["تمام كوتش بكرا اي ساعه","Okay, coach. What time tomorrow? ","تمام على أي ساعة التمرين غدا كوتش."],
["بكرا عل اربعه تمام لالك","Does it work for youat four tomorrow?","غدا على الساعة الرابعة جيد لك؟"],
["تمام منيح","Yes, it's okay. ","تمام جيد جدا."],
["سلام","Bye! "," سلام!"],
["سلام بكرا بشوفك","Bye, I'll see you tomorrow. ","سلام غدا أراك!"]
  ],

    gym2: [
        ["مرحبا","Hello"],
        ["جاهز","Ready?"]
    ]
}; 

function renderDialogue(dialogueId) {

    const container = document.getElementById("dialogue-" + dialogueId);

    if (container.dataset.loaded === "true") {
        return;
    }

    dialogues[dialogueId].forEach(([ar, en, msa]) => {

        container.innerHTML += `
            <div class="dialogue-line">
                <div class="arabic" dir="rtl">${ar}</div>
                <div class="english">${en}</div>
                <div class="arabicmsa" dir="rtl">${msa}</div>
            </div>
        `;

    });

    container.dataset.loaded = "true";
}

function showArabicOnly(dialogueId) {

    document.querySelectorAll(
        "#dialogue-" + dialogueId + " .dialogue-line"
    ).forEach(line => {

        line.classList.remove("below", "side-by-side");

    });
}

function showBelow(dialogueId) {

    document.querySelectorAll(
        "#dialogue-" + dialogueId + " .dialogue-line"
    ).forEach(line => {

        line.classList.remove("side-by-side");
        line.classList.add("below");

    });
}

function showSideBySide(dialogueId) {

    document.querySelectorAll(
        "#dialogue-" + dialogueId + " .dialogue-line"
    ).forEach(line => {

        line.classList.remove("below");
        line.classList.add("side-by-side");

    });
}

function showMSA(dialogueId) {

    document.querySelectorAll(
        "#dialogue-" + dialogueId + " .arabicMSA"
    ).forEach(line => {
        line.classList.remove("below");

    });
}

function toggleStory(dialogueId) {

    const story = document.getElementById("story-" + dialogueId);

    if (story.style.display === "none" || story.style.display === "") {

        story.style.display = "block";

        renderDialogue(dialogueId);

        showArabicOnly(dialogueId);

    } else {

        story.style.display = "none";

    }
}

