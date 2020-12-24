import React from 'react'
import {Welcome, Uslugi, Plus, Stages, Portfol} from '../../import';


function Section(props) {
return (
    <div className="Section">
    <div className="Section__container">
<Welcome />
<Uslugi func={props.func}/>
<Plus />
<Stages />
<Portfol />
    </div>
    </div>
    );
}

export default Section;
