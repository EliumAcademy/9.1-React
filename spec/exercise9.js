import {Profile, Detail}    from '../exercises/9.js'
import React         from 'react';
import { render }    from 'react-dom'

render(
    <Profile>
        <Detail detail={{Name: "Pedro"}} />
        <Detail detail={{Email: "pedro@pedro.pedro"}} />
        <Detail detail={{Address: "PedroStraat 21, 3000 Pedroland"}}/>
    </Profile>,
    document.getElementById('app')
)

