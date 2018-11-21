




// https://github.com/Tonejs/Tone.js

// Sampler example
/*
let piano = new Tone.Sampler({
    'A0'    : 'A0.mp3',
    'C1'    : 'C1.mp3',
    'D#1'   : 'Ds1.mp3',
    'F#1'   : 'Fs1.mp3',
    'A1'    : 'A1.mp3',
    'C2'    : 'C2.mp3',
    'D#2'   : 'Ds2.mp3',
    'F#2'   : 'Fs2.mp3',
    'A2'    : 'A2.mp3',
    'C3'    : 'C3.mp3',
    'D#3'   : 'Ds3.mp3',
    'F#3'   : 'Fs3.mp3',
    'A3'    : 'A3.mp3',
    'C4'    : 'C4.mp3',
    'D#4'   : 'Ds4.mp3',
    'F#4'   : 'Fs4.mp3',
    'A4'    : 'A4.mp3',
    'C5'    : 'C5.mp3',
    'D#5'   : 'Ds5.mp3',
    'F#5'   : 'Fs5.mp3',
    'A5'    : 'A5.mp3',
    'C6'    : 'C6.mp3',
    'D#6'   : 'Ds6.mp3'
}, {
    'baseUrl'   : './assets/samples/'
});

piano.toMaster();
*/


['C', 'D#', 'F#', 'A'].forEach(note => {
    for (let octave = 1; octave < 7; octave++) {
        let noteName = note + octave.toString();
    }
});


// Create a synth and connect it to the master output
let piano = new Tone.PolySynth().toMaster();



function keyDown(name, octave, velocity) {
    let note = name + octave.toString();
    // console.log(note);

    piano.triggerRelease(note, '+0', velocity);

    // Play a note.
    // '+0.01' is added for performance: https://github.com/Tonejs/Tone.js/wiki/Performance#scheduling-in-advance
    piano.triggerAttack(note, '+0.01', velocity);
}

function keyUp(name, octave, velocity) {
    let note = name + octave.toString();

    // Release note
    piano.triggerRelease(note, '+0', velocity)
}



// https://github.com/cotejp/webmidi
WebMidi.enable(function (error) {
    if (error) throw error;

    let inputs = WebMidi.inputs;

    inputs = inputs.filter(input => input.state === 'connected');

    if (!inputs.length) {
        console.log('No MIDI inputs connected');
        return false;
    }

    let inputNames = WebMidi.inputs.map(input => input.name);
    console.log('MIDI inputs connected', inputNames);

    inputs.forEach(input => {

        //console.log(input);

        input.addListener('noteon', 'all', function(e) {
            keyDown(e.note.name, e.note.octave, e.velocity);
        });

        input.addListener('noteoff', 'all', function(e) {
            //console.log(e);
            keyUp(e.note.name, e.note.octave, e.velocity);
        });

        input.addListener('controlchange', 'all', function(e) {

            if (!e.controller || !e.controller.number) {
                console.error('Unknown MIDI control received');
            }

            // https://www.midi.org/specifications-old/item/table-3-control-change-messages-data-bytes-2
            switch(e.controller.number) {
                case 1:
                    // Modulation change
                    console.log (e.target.name, 'Modulation', e.value / 127, e.data[2]);
                    break;
                case 7:
                    // Volume change
                    console.log (e.target.name, 'Volume', e.value / 127, e.data[2]);
                    break;
                case 11:
                    // e.controller.name == 'expressioncoarse'
                    console.log (e.target.name, 'Expression Pedal', e.value / 127, e.data[2]);
                    break;
                case 64:
                    // e.controller.name == 'holdpedal'
                    console.log (e.target.name, 'Sustain Pedal', e.value >= 64 ? 'off' : 'on', e.data[2]);
                    break;
                default:
                    console.log('controlchange', e);
            }

        });

        input.addListener('pitchbend', 'all', function(e) {
            console.log (e.target.name, 'Pitch', e.value, e.data[2]);
        });
        input.addListener('programchange', 'all', function(e) {
            console.log (e.target.name, 'Program', e.value, e.data[1]);
        });

    });


});



StartAudioContext(Tone.context, document.documentElement);