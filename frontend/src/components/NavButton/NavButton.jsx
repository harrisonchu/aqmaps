import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    option: {
        background: '#065B7F',
        '&:hover': {
            background: '#077BAB',
         },
        marginLeft: 20
    }
});

export default function NavButton({ text, handleClick }) {
    const classes = useStyles();

    return (
        <Button 
            onClick={handleClick} 
            className={classes.option}
            color="primary"
            variant="contained" 
            disableElevation>
            {text}
        </Button>
    );
}