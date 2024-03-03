import React from "react";
import {Autocomplete} from "../utils";

export const CreateGroup = (props) => {
    return (<>
     <Autocomplete
            value={'Honda'}
            label="Model"
            data={['Honda', 'Yamaha', 'Suzuki', 'TVS']}
            menuStyle={{backgroundColor: 'white'}}
            onChange={() => {}}
          />
    </>
    );
}