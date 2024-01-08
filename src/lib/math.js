/*----------------------------------------------- #||--math--|| */


// #\-IMPORTS-\

    // --SVELTE

    // --LIB

    // --CONTEXTS

    // --JS

//=======@COMPONENTS|

    // --*


// #\-EXPORTS-\

    // --THIS
    export const
    MATH_2PI = Math.PI * 2
    ,
    MATH_TO_RAD = math_toRad,
    MATH_TO_DEG = math_toDeg,
    MATH_RANDOM = math_random


// #\-CONSTANTES-\

    // --THIS


// #\-VARIABLES-\

    // --THIS


// #\-FUNCTIONS-\

    // --SET

    // --GET

    // --UPDATES


//=======@UTILS|

    // --*
    function math_toRad(_) { return _ * Math.PI / 180 }

    function math_toDeg(_) { return _ / Math.PI * 180 }

    function math_random(_ = 1) { return Math.round(Math.random() * _) }