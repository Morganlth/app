<!----------------------------------------------- #||--header--|| -->


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

<header
class="header p-rlt d-fjc s-a-w"
>
    <a
    class="logo p-abs"
    data-sveltekit-reload
    href="/"
    >
        <Icon
        prop_WIDTH="7rem"
        >
            <Logo />
        </Icon>
    </a>

    <h1
    class="title d-fac b-lgh"
    >
        TIERLIST
    </h1>
</header>


<!-- #|-SCRIPT-| -->

<script>

// #\-IMPORTS-\

    // --DATA

    // --SVELTE

    // --LIB

    // --CONTEXTS

//=======@COMPONENTS|

    // --*
    import Icon from './global/covers/Icon.svelte'

    import Logo from './global/icons/Logo.svelte'

//=======@STYLE|

    // --*


// #\-EXPORTS-\

    // --PROPS

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
    @use '../assets/scss/app';

    /* --DEPENDENCIES */
    @use '../assets/scss/styles/utils';
    @use '../assets/scss/styles/font';

    /* --MEDIA */


/* #\-VARIABLES-\ */

    /* --* */


/* #\-THIS-\ */

.header
{
    gap: 1rem;

    .logo
    {
        top : app.$g1;
        left: app.$g2 * 2;
    }

    .title
    {
        $radius: 1.6rem;
    
        @include font.h-(4, $color: $drk);

        padding: .8rem 8rem;

        clip-path: polygon(0 0, 100% 0, 98% 100%, 2% 100%);

        border-bottom-left-radius : $radius;
        border-bottom-right-radius: $radius;
    }
}


</style>