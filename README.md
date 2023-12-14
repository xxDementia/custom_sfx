# custom_sfx
Custom sound effects implementation for CORRU.OBSERVER

## what this does
this will allow you to use your own custom sound effects normally whether for dialogue, combat, and others!!

\+ also benefits as being future proof, as future updates to corru observer will add more sound effects

you are free to use this for your mods :) credit not required

## what you need to change when using it for your mod

* in sfxmap_custom:
    * change the src to the url where your audio hosted

        **(⟡) - ALERT::'CORS';'cross-origin resource sharing'**

    * add sound sprites, formatted like so:
    
            SFXNAME: [START MS, DURATION MS]

* if you have more than one sound effect for one sound (talksound, multi-sfx):
    * in the switch in play(), add a new case formatted like so: 
    
            case "SFXNAME": sfx = \`SFXNAME${rand(1, #)}`; break

        **(⟡) - NOTE::'function rand()';'first inclusive';'last exclusive';'number of different sounds plus one'**


aaaand that should be it!! you should be able to just type in the name of your desired sound effect in places where it is needed and it will just work! thanks for checkin this out