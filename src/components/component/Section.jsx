import React from 'react'
import {Welcome, Uslugi, Plus, Stages, Portfol} from '../../import';


function Section() {
return (
    <div className="Section">
    <div className="Section__container">
<Welcome />
<Uslugi />
<Plus />
<Stages />
<Portfol />
    </div>
    </div>
    );
}

export default Section;
