/*geen effect maar dit scriptj staat op elke pagina dus ik makklijkr*/
function removeBlockedOverlay() {
    
    document.getElementById("blocked-game-overlay").remove();
    
}  

function darkModeSwitch() {
    localStorage.setItem('mode', (localStorage.getItem('mode') || 'dark') === 'dark' ? 'off' : 'dark'); localStorage.getItem('mode') === 'dark' ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')
}
function search() {
localStorage.setItem('search', (localStorage.getItem('search') || 'search-open') === 'search-open' ? 'closed' : 'search-open'); localStorage.getItem('search') === 'search-open' ? document.querySelector('body').classList.add('search-open') : document.querySelector('body').classList.remove('search-open')
}
function showEffects() {
    localStorage.setItem('effect', (localStorage.getItem('effect') || 'effects-visible') === 'effects-visible' ? 'off' : 'effects-visible'); localStorage.getItem('effect') === 'effects-visible' ? document.querySelector('body').classList.add('effects-visible') : document.querySelector('body').classList.remove('effects-visible')
}
function showEffects() {
    document.querySelector('body').classList.remove('themeoptions-visible');
    localStorage.setItem('effect', (localStorage.getItem('effect') || 'effects-visible') === 'effects-visible' ? 'off' : 'effects-visible'); localStorage.getItem('effect') === 'effects-visible' ? document.querySelector('body').classList.add('effects-visible') : document.querySelector('body').classList.remove('effects-visible')
}
function showThemeOptions() {
    document.querySelector('body').classList.remove('effects-visible');
    localStorage.setItem('effect', (localStorage.getItem('effect') || 'themeoptions-visible') === 'themeoptions-visible' ? 'off' : 'themeoptions-visible'); localStorage.getItem('effect') === 'themeoptions-visible' ? document.querySelector('body').classList.add('themeoptions-visible') : document.querySelector('body').classList.remove('themeoptions-visible')
}

/*Effects*/
function deactivateAll() {
    document.querySelector('body').classList.remove('inverted');document.querySelector('body').classList.remove('saturated');
    document.querySelector('body').classList.remove('turned');
    document.querySelector('body').classList.remove('spinning');
    document.querySelector('body').classList.remove('slow-spinning');
    document.querySelector('body').classList.remove('text-turned');
    document.querySelector('body').classList.remove('img-turned');
    document.querySelector('body').classList.remove('pinkgreen');
    document.querySelector('body').classList.remove('all-turned');
    document.querySelector('body').classList.remove('all-turned-1deg');
    document.querySelector('body').classList.remove('all-turned-36deg');
    document.querySelector('body').classList.remove('pink');
    document.querySelector('body').classList.remove('white');
    document.querySelector('body').classList.remove('old');
    document.querySelector('body').classList.remove('white-background');
    document.querySelector('body').classList.remove('effect-spin');
    document.querySelector('body').classList.remove('spastic-background');
    document.querySelector('body').classList.remove('lekrdraaitj');
    document.querySelector('body').classList.remove('fat-border');
    document.querySelector('body').classList.remove('lekrknippertj');
    document.querySelector('body').classList.remove('border');
    document.querySelector('body').classList.remove('shadow');
    document.querySelector('body').classList.remove('shadow-inset');
    document.querySelector('body').classList.remove('zoomed');
}
function activateAll() {
    toggleInvert();
    toggleSaturation();
    toggleTurn();
    toggleSiteSpin();
    toggleSlowSiteSpin();
    toggleTurnIMG();
    togglePinkGreen();
    toggleTurnText();
    toggleTurnAll();
    toggleTurnAll1deg();
    toggleTurnAll36deg();
    togglePink();
    toggleWhite();
    toggleOld();
    toggleWhiteBackground();
    toggleF();
    toggleSpasticBackground();
    toggleLekrdraaitj();
    toggleLekrdikrandj();
    toggleLekrknippertj();
    toggleLekrrandj();
    toggleLekrschaduwtj();
    toggleLekrschaduwtjInset();
    toggleLekrzoompj();
}

function toggleInvert() {
    localStorage.setItem('effect', (localStorage.getItem('effect') || 'inverted') === 'inverted' ? 'off' : 'inverted'); localStorage.getItem('effect') === 'inverted' ? document.querySelector('body').classList.add('inverted') : document.querySelector('body').classList.remove('inverted')
}
    
function toggleSaturation() {
localStorage.setItem('effect', (localStorage.getItem('effect') || 'saturated') === 'saturated' ? 'off' : 'saturated'); localStorage.getItem('effect') === 'saturated' ? document.querySelector('body').classList.add('saturated') : document.querySelector('body').classList.remove('saturated')
}

function toggleTurn() {
localStorage.setItem('effect', (localStorage.getItem('effect') || 'turned') === 'turned' ? 'off' : 'turned'); localStorage.getItem('effect') === 'turned' ? document.querySelector('body').classList.add('turned') : document.querySelector('body').classList.remove('turned')
}

function toggleSiteSpin() {
localStorage.setItem('effect', (localStorage.getItem('effect') || 'spinning') === 'spinning' ? 'off' : 'spinning'); localStorage.getItem('effect') === 'spinning' ? document.querySelector('body').classList.add('spinning') : document.querySelector('body').classList.remove('spinning')
}

function toggleSlowSiteSpin() {
localStorage.setItem('effect', (localStorage.getItem('effect') || 'slow-spinning') === 'slow-spinning' ? 'off' : 'slow-spinning'); localStorage.getItem('effect') === 'slow-spinning' ? document.querySelector('body').classList.add('slow-spinning') : document.querySelector('body').classList.remove('slow-spinning')
}

function toggleTurnIMG() {
localStorage.setItem('effect', (localStorage.getItem('effect') || 'img-turned') === 'img-turned' ? 'off' : 'img-turned'); localStorage.getItem('effect') === 'img-turned' ? document.querySelector('body').classList.add('img-turned') : document.querySelector('body').classList.remove('img-turned')
}

function togglePinkGreen() {
localStorage.setItem('effect', (localStorage.getItem('effect') || 'pinkgreen') === 'pinkgreen' ? 'off' : 'pinkgreen'); localStorage.getItem('effect') === 'pinkgreen' ? document.querySelector('body').classList.add('pinkgreen') : document.querySelector('body').classList.remove('pinkgreen')
}

function toggleTurnText() {
localStorage.setItem('effect', (localStorage.getItem('effect') || 'text-turned') === 'text-turned' ? 'off' : 'text-turned'); localStorage.getItem('effect') === 'text-turned' ? document.querySelector('body').classList.add('text-turned') : document.querySelector('body').classList.remove('text-turned')
}

function toggleTurnAll() {
localStorage.setItem('effect', (localStorage.getItem('effect') || 'all-turned') === 'all-turned' ? 'off' : 'all-turned'); localStorage.getItem('effect') === 'all-turned' ? document.querySelector('body').classList.add('all-turned') : document.querySelector('body').classList.remove('all-turned')
}

function toggleTurnAll1deg() {
localStorage.setItem('effect', (localStorage.getItem('effect') || 'all-turned-1deg') === 'all-turned-1deg' ? 'off' : 'all-turned-1deg'); localStorage.getItem('effect') === 'all-turned-1deg' ? document.querySelector('body').classList.add('all-turned-1deg') : document.querySelector('body').classList.remove('all-turned-1deg')
}

function toggleTurnAll36deg() {
localStorage.setItem('effect', (localStorage.getItem('effect') || 'all-turned-36deg') === 'all-turned-36deg' ? 'off' : 'all-turned-36deg'); localStorage.getItem('effect') === 'all-turned-36deg' ? document.querySelector('body').classList.add('all-turned-36deg') : document.querySelector('body').classList.remove('all-turned-36deg')
}

function togglePink() {
localStorage.setItem('effect', (localStorage.getItem('effect') || 'pink') === 'pink' ? 'off' : 'pink'); localStorage.getItem('effect') === 'pink' ? document.querySelector('body').classList.add('pink') : document.querySelector('body').classList.remove('pink')
}

function toggleWhite() {
localStorage.setItem('effect', (localStorage.getItem('effect') || 'white') === 'white' ? 'off' : 'white'); localStorage.getItem('effect') === 'white' ? document.querySelector('body').classList.add('white') : document.querySelector('body').classList.remove('white')
}

function toggleWhiteBackground() {
localStorage.setItem('effect', (localStorage.getItem('effect') || 'white-background') === 'white-background' ? 'off' : 'white-background'); localStorage.getItem('effect') === 'white-background' ? document.querySelector('body').classList.add('white-background') : document.querySelector('body').classList.remove('white-background')
}

function toggleF() {
localStorage.setItem('effect', (localStorage.getItem('effect') || 'effect-spin') === 'effect-spin' ? 'off' : 'effect-spin'); localStorage.getItem('effect') === 'effect-spin' ? document.querySelector('body').classList.add('effect-spin') : document.querySelector('body').classList.remove('effect-spin')
}

function toggleSpasticBackground() {
localStorage.setItem('effect', (localStorage.getItem('effect') || 'spastic-background') === 'spastic-background' ? 'off' : 'spastic-background'); localStorage.getItem('effect') === 'spastic-background' ? document.querySelector('body').classList.add('spastic-background') : document.querySelector('body').classList.remove('spastic-background')
}

function toggleLekrdraaitj() {
localStorage.setItem('effect', (localStorage.getItem('effect') || 'lekrdraaitj') === 'lekrdraaitj' ? 'off' : 'lekrdraaitj'); localStorage.getItem('effect') === 'lekrdraaitj' ? document.querySelector('body').classList.add('lekrdraaitj') : document.querySelector('body').classList.remove('lekrdraaitj')
}

function toggleLekrknippertj() {
localStorage.setItem('effect', (localStorage.getItem('effect') || 'lekrknippertj') === 'lekrknippertj' ? 'off' : 'lekrknippertj'); localStorage.getItem('effect') === 'lekrknippertj' ? document.querySelector('body').classList.add('lekrknippertj') : document.querySelector('body').classList.remove('lekrknippertj')
}

function toggleLekrschaduwtj() {
localStorage.setItem('effect', (localStorage.getItem('effect') || 'shadow') === 'shadow' ? 'off' : 'shadow'); localStorage.getItem('effect') === 'shadow' ? document.querySelector('body').classList.add('shadow') : document.querySelector('body').classList.remove('shadow')
}

function toggleLekrschaduwtjInset() {
localStorage.setItem('effect', (localStorage.getItem('effect') || 'shadow-inset') === 'shadow-inset' ? 'off' : 'shadow-inset'); localStorage.getItem('effect') === 'shadow-inset' ? document.querySelector('body').classList.add('shadow-inset') : document.querySelector('body').classList.remove('shadow-inset')
}

function toggleLekrzoompj() {
localStorage.setItem('effect', (localStorage.getItem('effect') || 'zoomed') === 'zoomed' ? 'off' : 'zoomed'); localStorage.getItem('effect') === 'zoomed' ? document.querySelector('body').classList.add('zoomed') : document.querySelector('body').classList.remove('zoomed')
}

function toggleLekrrandj() {
localStorage.setItem('effect', (localStorage.getItem('effect') || 'border') === 'border' ? 'off' : 'border'); localStorage.getItem('effect') === 'border' ? document.querySelector('body').classList.add('border') : document.querySelector('body').classList.remove('border')
}

function toggleLekrdikrandj() {
localStorage.setItem('effect', (localStorage.getItem('effect') || 'fat-border') === 'fat-border' ? 'off' : 'fat-border'); localStorage.getItem('effect') === 'fat-border' ? document.querySelector('body').classList.add('fat-border') : document.querySelector('body').classList.remove('fat-border')
}

/*Thema Instellingen*/

function toggleLKG4BG() {
    document.querySelector('body').classList.remove('old');
    localStorage.setItem('theme-background', (localStorage.getItem('theme-background') || 'lkg4background') === 'lkg4background' ? 'off' : 'lkg4background'); localStorage.getItem('theme-background') === 'lkg4background' ? document.querySelector('body').classList.add('lkg4background') : document.querySelector('body').classList.remove('lkg4background')
}

function toggleOld() {
    document.querySelector('body').classList.remove('lkg4background');
localStorage.setItem('theme-background', (localStorage.getItem('theme-background') || 'old') === 'old' ? 'off' : 'old'); localStorage.getItem('theme-background') === 'old' ? document.querySelector('body').classList.add('old') : document.querySelector('body').classList.remove('old')
}

    function toggleGreenTheme() {
        document.querySelector('body').classList.remove('turquoise-theme');
        document.querySelector('body').classList.remove('purple-theme');
        document.querySelector('body').classList.remove('pink-theme');
        document.querySelector('body').classList.remove('orange-theme');
        document.querySelector('body').classList.remove('red-theme');
        localStorage.setItem('theme-color', (localStorage.getItem('theme-color') || 'green-theme') === 'green-theme' ? 'off' : 'green-theme'); localStorage.getItem('theme-color') === 'green-theme' ? document.querySelector('body').classList.add('green-theme') : document.querySelector('body').classList.remove('green-theme')
    }

    function toggleTurquoiseTheme() {
        document.querySelector('body').classList.remove('green-theme');
        document.querySelector('body').classList.remove('purple-theme');
        document.querySelector('body').classList.remove('pink-theme');
        document.querySelector('body').classList.remove('orange-theme');
        document.querySelector('body').classList.remove('red-theme');
        localStorage.setItem('theme-color', (localStorage.getItem('theme-color') || 'turquoise-theme') === 'turquoise-theme' ? 'off' : 'turquoise-theme'); localStorage.getItem('theme-color') === 'turquoise-theme' ? document.querySelector('body').classList.add('turquoise-theme') : document.querySelector('body').classList.remove('turquoise-theme')
    }

    function togglePurpleTheme() {
        document.querySelector('body').classList.remove('green-theme');
        document.querySelector('body').classList.remove('turquoise-theme');
        document.querySelector('body').classList.remove('pink-theme');
        document.querySelector('body').classList.remove('orange-theme');
        document.querySelector('body').classList.remove('red-theme');
        localStorage.setItem('theme-color', (localStorage.getItem('theme-color') || 'purple-theme') === 'purple-theme' ? 'off' : 'purple-theme'); localStorage.getItem('theme-color') === 'purple-theme' ? document.querySelector('body').classList.add('purple-theme') : document.querySelector('body').classList.remove('purple-theme')
    }

    function togglePinkTheme() {
        document.querySelector('body').classList.remove('green-theme');
        document.querySelector('body').classList.remove('turquoise-theme');
        document.querySelector('body').classList.remove('purple-theme');
        document.querySelector('body').classList.remove('orange-theme');
        document.querySelector('body').classList.remove('red-theme');
        localStorage.setItem('theme-color', (localStorage.getItem('theme-color') || 'pink-theme') === 'pink-theme' ? 'off' : 'pink-theme'); localStorage.getItem('theme-color') === 'pink-theme' ? document.querySelector('body').classList.add('pink-theme') : document.querySelector('body').classList.remove('pink-theme')
    }

    function toggleOrangeTheme() {
        document.querySelector('body').classList.remove('green-theme');
        document.querySelector('body').classList.remove('turquoise-theme');
        document.querySelector('body').classList.remove('purple-theme');
        document.querySelector('body').classList.remove('pink-theme');
        document.querySelector('body').classList.remove('red-theme');
        localStorage.setItem('theme-color', (localStorage.getItem('theme-color') || 'orange-theme') === 'orange-theme' ? 'off' : 'orange-theme'); localStorage.getItem('theme-color') === 'orange-theme' ? document.querySelector('body').classList.add('orange-theme') : document.querySelector('body').classList.remove('orange-theme')
    }

    function toggleRedTheme() {
        document.querySelector('body').classList.remove('green-theme');
        document.querySelector('body').classList.remove('turquoise-theme');
        document.querySelector('body').classList.remove('purple-theme');
        document.querySelector('body').classList.remove('pink-theme');
        document.querySelector('body').classList.remove('orange-theme');
        localStorage.setItem('theme-color', (localStorage.getItem('theme-color') || 'red-theme') === 'red-theme' ? 'off' : 'red-theme'); localStorage.getItem('theme-color') === 'red-theme' ? document.querySelector('body').classList.add('red-theme') : document.querySelector('body').classList.remove('red-theme')
    }