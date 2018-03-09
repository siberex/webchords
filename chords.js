/**
 *
 */


class Chords {


    /**
     * Get perfect fifth (P5) from tonic
     * e.g. +7 semitones
     * https://en.wikipedia.org/wiki/Perfect_fifth
     *
     * @param tonic
     */
    static getDominant(tonic = 'C') {

    }


    /**
     * Get augmented fifth (A5) from tonic
     * e.g. +8 semitones
     * https://en.wikipedia.org/wiki/Augmented_fifth
     *
     * @param tonic
     */
    static getAugmentedFifth(tonic = 'C') {

    }


    /**
     * Get major third (M3) from tonic
     * e.g. +4 semitones
     * https://en.wikipedia.org/wiki/Major_third
     *
     * @param tonic
     */
    static getMajorThird(tonic = 'C') {

    }


    /**
     * Get minor third (m3) from tonic
     * e.g. +3 semitones
     * https://en.wikipedia.org/wiki/Minor_third
     *
     * @param tonic
     */
    static getMinorThird(tonic = 'C') {

    }


    static getScale(root = 'C') {

        let chromaticScale = 'C C# D D# E F F# G G# A Bb B'.split(' ');

        let chromaticScaleMap = 'C C# D D# E F F# G G# A A# B'.split(' ')
            .map( (key, i) => ({[key]: i}) )
            .reduce( (acc, val) => Object.assign(acc, val), {} );

        // Add indices for flats too
        chromaticScaleMap = 'C Db D Eb E F Gb G Ab A Bb B'.split(' ')
            .map( (key, i) => ({[key]: i}) )
            .reduce( (acc, val) => Object.assign(acc, val), chromaticScaleMap );

        if (root === 'C') {
            return chromaticScale;
        } else {
            // Chromatic scale from desired key
            let keyIndex = chromaticScaleMap[root];
            return chromaticScale.slice( keyIndex ).concat( chromaticScale.slice(0, keyIndex) );
        }

    }

}