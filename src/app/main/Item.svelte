<!----------------------------------------------- #||--item--|| -->


<!-- #|-CONTEXT-| -->

<!--<script
context="module"
>

// #\-IMPORTS-\

    // --SVELTE

     // --LIB

    // --JS


// #\-EXPORTS-\

    // --CONTEXTS


</script>-->


<!-- #|-HTML-| -->

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<li
class="item"
class:drag={item_DRAG}
draggable="true"
on:dragstart={item_eDragStart}
on:dragend={item_eDragEnd}
>
    <img
    class="s-any"
    src={prop_SRC}
    alt={prop_ALT}
    >
</li>


<!-- #|-SCRIPT-| -->

<script>

// #\-IMPORTS-\

    // --DATA

    // --SVELTE

    // --LIB

    // --CONTEXTS

//=======@COMPONENTS|

    // --*

//=======@STYLE|

    // --*


// #\-EXPORTS-\

    // --PROPS
    export let
    prop_SRC = '',
    prop_ALT = ''

    // --BINDING


// #\-CONSTANTES-\

    // --SVELTE

    // --CONTEXTS

    // --OUTSIDE

    // --THIS

    // --INSIDE


// #\-VARIABLES-\

    // --CONTEXTS

    // --OUTSIDE

    // --THIS
    let item_DRAG = false

    // --INSIDE


// #\-REATIVES-\

    // --CONTEXTS

    // --OUTSIDE

    // --THIS

    // --INSIDE


// #\-FUNCTIONS-\

//=======@LIFE|

    // --SVELTE

    // --SET

    // --GET

    // --UPDATES

    // --DESTROY


//=======@COMMANDS|

    // --*


//=======@EVENTS|

    // --*
    function item_eDragStart() { item_DRAG = true }

    function item_eDragEnd() { item_DRAG = false }

//=======@TRANSITIONS|

    // --*


//=======@ANIMATIONS|

    // --*


//=======@UTILS|

    // --*


</script>


<!-- #|-STYLE-| -->

<style
lang="scss"
>

/* #\-USES-\ */

    /* --SASS */

    /* --APP */

    /* --DEPENDENCIES */

    /* --MEDIA */


/* #\-VARIABLES-\ */

    /* --* */


/* #\-THIS-\ */

.item
{
    cursor: grab;

    img
    {
        object-fit     : cover;
        object-position: center;
    }
}


</style>