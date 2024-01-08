<!----------------------------------------------- #||--tierlist--|| -->


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

<div
class="tierlist d-fcc"
bind:this={tierlist}
>
    <ul
    class="ranks o-hid s-a-w b-lgh"
    >
        {#each TIERLIST_DATA?.tiers ?? [] as tier}
        {@const {name} = tier}
            <li
            class="tier b-box"
            >
                <p
                class="name d-f-c s-a-h b-box"
                style:--tier-color={name.color}
                >
                    {name}
                </p>

                <ul
                class="container d-flx s-a-h"
                on:dragover|preventDefault={container_eDragOver}
                >
                </ul>
            </li>
        {/each}
    </ul>

    <ul
    class="data d-flx s-a-w"
    on:dragover|preventDefault={container_eDragOver}
    >
        {#each TIERLIST_DATA?.data ?? [] as item}
        {@const {src, alt} = item}
            <Item
            prop_SRC={src}
            prop_ALT={alt}
            />
        {/each}
    </ul>
</div>


<!-- #|-SCRIPT-| -->

<script>

// #\-IMPORTS-\

    // --DATA
    import TIERLIST_DATA from '../../assets/js/data/tierlist.data.js'

    // --SVELTE

    // --LIB

    // --CONTEXTS

//=======@COMPONENTS|

    // --*
    import Item from './Item.svelte'

//=======@STYLE|

    // --*
    import '../../assets/scss/global/tierlist.scss'


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
    let tierlist

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
    function container_eDragOver(e)
    {
        const ITEM = tierlist?.querySelector('.drag')

        if (ITEM) e.currentTarget?.appendChild(ITEM)
    }


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


/* #\-THIS-\ */

.tierlist
{
    gap: 4rem;

    .ranks, .data { height: fit-content; }

    .container, .data { flex-wrap: wrap; }

    .ranks
    {
        border-radius: 1.4rem;

        .tier
        {
            $border: solid $drk 2px;

            border-top: $border;

            .name
            {
                @include font.h-(5, $color: $drk);

                background-color: var(--tier-color, $lgh);

                border-right: $border;
            }
        }
    }

    .data { border: solid $lgh 1px; }
}


</style>