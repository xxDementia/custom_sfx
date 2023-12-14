//custom SFX map
var sfxmap_custom = new Howl({
    src: ['source goes here'], // URL goes here, ex: ['https://file.garden']
    preload: true,
    html5: false,
    volume: 0.75,
    sprite: {
        example1: [0, 1000], // NAME: [START MS, DURATION MS]
        example2: [1000, 1000],
        example3: [2000, 1000],
        __default: [0, 1]
    }
});

function play(sfxName, pitch = true, volume = 0.75, forcePlay) {
    if(forcePlay) env.recentSfx = false    
    if(env.recentSfx) return
    env.recentSfx = true
    
    //we may change this depending on the SFX played
    var sfx = sfxName

    //if this uses a talk sound, we randomly select one of eight
    switch(sfxName) {
        case "talk": sfx = `talk${rand(1, 9)}`; break
        case "talkhigh": sfx = `talkhigh${rand(1, 9)}`; break
        case "talklaugh": sfx = `talklaugh${rand(1, 9)}`; break
        case "talksignal": sfx = `talksignal${rand(1, 9)}`; break
        case "talkcore": sfx = `talkcore${rand(1, 9)}`; break
        case "talkgal": sfx = `talkgal${rand(1, 9)}`; break
        case "talkgel": sfx = `talkgel${rand(1, 9)}`; break
        case "talkcroak": sfx = `talkcroak${rand(1, 9)}`; break
        case "talkchoir": sfx = `talkchoir${rand(1, 9)}`; break
        case "talkflower": sfx = `talkflower${rand(1, 9)}`; break
        case "talkfloweralt": sfx = `talkfloweralt${rand(1, 5)}`; break
        case "talkfairy": sfx = `talkfairy${rand(1, 9)}`; break
        //shot also has a variety
        case "shot": sfx = `shot${rand(1, 7)}`; break

        // case "[NAME]": sfx = `[NAME]${rand(1, #)}`; break
        // (<>) - NOTE::'rand(1,#)';'inclusive exclusive';'number of different sounds plus one'
    }


    //custom sfx check
    let sourceSFXmap = sfxmap

    if(!sfxmap._sprite[sfxName])
        sourceSFXmap = sfxmap_custom


    //randomize the pitch slightly by default
    if(pitch === true) {
        sourceSFXmap.rate((Math.random() * 0.2) + 0.9) 
    } else if(typeof pitch == "number") { //set the pitch if specified
        sourceSFXmap.rate(pitch)
    } else { //otherwise false
        sourceSFXmap.rate(1)
    }

    //duck the BGM briefly so the SFX doesn't layer with it too hard
    if(env.bgm && !env.bgm.isFading && !env.noBgmDuck) {
        env.bgm.volume(0.5)
        setTimeout(()=>{ try{env.bgm.fade(0.5, env.bgm.intendedVol ? env.bgm.intendedVol : 1, 500)} catch(e) {} }, 500)
    }
    
    //play!
    setTimeout(()=>env.recentSfx = false, 50)
    sourceSFXmap.volume(volume)
    sourceSFXmap.play(sfx)    
}