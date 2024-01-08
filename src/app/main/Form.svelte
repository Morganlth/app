<!----------------------------------------------- #||--form--|| -->


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

<form
class="form p-ac- d-fc-"
method="POST"
action="/"
bind:this={form}
>
    {#if prop_ERROR}
        <p
        class="error"
        >
            {prop_ERROR}
        </p>
    {:else}
        <p
        class="message"
        >
            Entrer le mot de passe.
        </p>
    {/if}

    <div
    class="p-rlt s-a-w b-lgh b-box"
    style:--pe-drt="-1"
    >
        <input
        class="p-rlt s-any"
        type="password"
        name="password"
        placeholder="MOT DE PASSE"
        autocomplete="off"
        required
        >
    </div>

    <button
    class="p-rlt d-f-c s-a-w b-lgh b-box"
    style:--pe-drt="1"
    type="submit"
    >
        ENVOYER

        <Icon
        prop_WIDTH="2.2rem"
        prop_COLOR={COLORS.drk}
        >
            <TopArrow />
        </Icon>
    </button>
</form>


<!-- #|-SCRIPT-| -->

<script>

// #\-IMPORTS-\

    // --DATA

    // --SVELTE
    import { onMount } from 'svelte'

    // --LIB
    import COLORS from '$lib/colors'

    // --CONTEXTS

//=======@COMPONENTS|

    // --*
    import Icon from '../global/covers/Icon.svelte'

    import TopArrow from '../global/icons/TopArrow.svelte'

//=======@STYLE|

    // --*


// #\-EXPORTS-\

    // --PROPS
    export let prop_ERROR = false

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
    let form

    // --INSIDE


// #\-REATIVES-\

    // --CONTEXTS

    // --OUTSIDE

    // --THIS

    // --INSIDE


// #\-FUNCTIONS-\

//=======@LIFE|

    // --SVELTE
    onMount(form_set)

    // --SET
    function form_set()
    {
    }

    // --GET

    // --UPDATES

    // --DESTROY


//=======@COMMANDS|

    // --*


//=======@EVENTS|

    // --*


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
    @use '../../assets/scss/app';

    /* --DEPENDENCIES */
    @use '../../assets/scss/styles/utils';
    @use '../../assets/scss/styles/font';

    /* --MEDIA */


/* #\-VARIABLES-\ */

    /* --* */
    $pe-gap: .6rem;


/* #\-THIS-\ */

.form
{
    @include font.txt($color: $drk, $regular: false, $size: 2);

    gap: 1.8rem;

    width    : 12vw;
    min-width: fit-content;
    max-width: 240px;

    p, input[type="password"] { text-align: center; }

    .error { color: $idc; }

    .message { color: $prm; }

    &>*:not(p)
    {
        &::before
        {
            @include utils.placement(absolute, $top: $pe-gap, $left: calc($pe-gap * var(--pe-drt, 1)), $pe: true);

            width : 100%;
            height: 100%;

            border: solid $lgh 1px;

            box-sizing: border-box;
        }
    
        height: 4.8rem;

        border: solid $drk 2px;
    }

    input[type="password"], button
    {
        font          : inherit;
        letter-spacing: 1px;
    }

    input[type="password"]::placeholder
    {
        color    : $itr;
        font-size: 80%;
    }

    button { gap: .6rem; }
}


</style>