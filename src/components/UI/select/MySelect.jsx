import React, {useState} from 'react';
import classes from "./MySelect.module.css";

const MySelect = ({option, defaultValue, value, onChange}) => {

    return (
        <select
            className={classes.sel}
            value={value}
            onChange={e => onChange(e.target.value)}
            >
            <option disabled value="1" className={classes.opt}>{defaultValue}</option>
            {option.map(opt =>
                <option value={opt.value} key={opt.value}>{opt.name}</option>
            )}

        </select>
    );
};

export default MySelect;