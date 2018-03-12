
## Impulse response

Impulse response recordings for chamber emulation reverb effects.


### Audio sources

[openairlib.net](http://www.openairlib.net/)

* `berlin_tunnel_ir.wav` [ToneJs examples](https://github.com/Tonejs/Tone.js/tree/master/examples/audio/IRs)
* `hm2_000_ortf_48k.wav` [Hamilton Mausoleum](http://www.openairlib.net/auralizationdb/content/hamilton-mausoleum)
* `spokane_womans_club_ir.wav` [Spokane Woman’s Club](http://www.openairlib.net/auralizationdb/content/spokane-womans-club)
* `stalbans_a_ortf.wav` [Lady Chapel at St Albans Cathedral](http://www.openairlib.net/auralizationdb/content/lady-chapel-st-albans-cathedral)


### Usage
 
* [Tone.Convolver](https://tonejs.github.io/docs/r11/Convolver)


    let reverb = new Tone.Convolver('./assets/ir/berlin_tunnel_ir.wav').toMaster();
    reverb.wet.value = 0.25;
         
    let synth = = new Tone.PolySynth().connect(reverb);
    
    // Play a chord
    synth.triggerAttackRelease(["C4", "E4", "A4"], "4n");
