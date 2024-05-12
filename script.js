function quote() {
    quotes = ['"If you attack me, you\'re gay."',
        '"Your enemy can\'t guess your strategy if you don\'t have any."',
        '“It\'s better to shit in the sink than to sink in the shit.”',
        '“Farting while shitting is okay, but shitting while farting is not okay.”',
        '“A foolish man complains about his torn pocket, a wise man uses it to scratch his balls.”',
        '“Fighting is gay it\'s just two men aggressively touching each other.”',
        '“Remember, dying is gay.”',
        '“To confuse your enemies, first confuse yourself.”',
        '“If you don\'t know what you\'re doing the enemy will never know.”',
        '"Sun Tzu"',
        '“It\'s better to be pissed off,than be pissed on.”',
        '“Simp not for a hoe, neither give ear to the bum; for a man\'s bread is his alone.”',
        '“Bitch, I wrote the art of War.”',
        '“The person who owns up to their farts, is a person to be feared indeed.”',
        '"Man who sleep with itchy bum wake up with smelly finger.',
        '"A man who shits in the toilet hides his shame. A man who shits himself has no shame."',
        '"You know it\'s cold outside when you go outside and it\'s cold."',
        '"Geneva convention? More like Geneva suggestion."',
        '"It\'s not a war crime if it\'s funny."',
        '"Pee your pants to stay warm."',
        '"If you tired and you try to go to sleep the tired will go away."',
        '"A battle is not truly WON until you teabag the enemy."',
        '"Self improvement is masturbation. Racism is the way."',
        '"The only mystery in life is why the kamikaze pilots wore helmets."',
        '"homicide, homicide, homicide, homicide."',
        '"It is impossible to look up while sticking your tongue out."',

    ];
    const textFade=document.querySelector("h2");
    textFade.style.animation="fadeIn 1s";
    textFade.addEventListener('animationend', function() {
        textFade.style.animation='';
    });
    document.getElementById("h").innerHTML = (quotes[(Math.floor(Math.random() * quotes.length))]);
    document.getElementById("tzu").style.display= "block";
}