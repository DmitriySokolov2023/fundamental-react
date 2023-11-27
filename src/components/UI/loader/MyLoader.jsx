import React from 'react';
import classes from "./MyLoader.module.css";

const MyLoader = () => {
    return (
        <div className={classes.loader}>
            <div className={classes.loader__text}>Loading....</div>
        </div>
    );
};

export default MyLoader;