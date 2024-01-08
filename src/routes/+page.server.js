/*----------------------------------------------- #||--/--|| */


// #\-IMPORTS-\

    // --SVELTE

    // --ENV
    import { PASSWORD } from '$env/static/private'

    // --LIB
    import bcrypt from 'bcrypt'

    // --CONTEXTS

    // --JS

//=======@COMPONENTS|

    // --*


// #\-EXPORTS-\

    // --THIS
    export const actions =
    {
        default: async ({request}) =>
        {
            try
            {
                const
                DATA = await request.formData(),
                PSW  = DATA.get('password'),
                HASH = await bcrypt.hash(PSW, SALT)

                return await bcrypt.compare(PASSWORD, HASH) ? { success: true } : { error: 'Le mot de passe est incorrecte.' }
            }
            catch { return { error: 'Une erreur est survenue.' } }
        }
    }


// #\-CONSTANTES-\

    // --THIS
    const SALT = bcrypt.genSaltSync(10)


// #\-VARIABLES-\

    // --THIS


// #\-FUNCTIONS-\

    // --SET

    // --GET

    // --UPDATES


//=======@UTILS|

    // --*