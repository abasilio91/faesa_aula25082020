import React from 'react';

/* export default function Header(props) {
    return(
        <header>
            <h1> {props.text} </h1>
            {props.children}
        </header>
    )
} */

export default function Header({text, children}) {
    return(
        <header>
            <h1> {text} </h1>
            {children}
        </header>
    )
}


/* export default function Header(props) {

    const { text, children } = props;

    return(
        <header>
            <h1> {text} </h1>
            {children}
        </header>
    )
} */