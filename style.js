/*
Author:     Brandon M. Piper
Title:      Coding Challenge for Centerfield Media

Design enables large number of similar layouts with minimal changes for scalability. 
Responsive with any dimensions or device. Wrapper contains all elements of page 
allowing for variable width of entire application with only one line of CSS.
Improvisations used where specifications were lacking. */

// Boolean flags for current tab
var tabs = ["false", "false", "false"];

/* tabClick() triggered when user clicks tab and determines layout dynamically based
on current screen and browser dimensions. */
function tabClick( tab ){
    switch( tab ){
        case '#tab_1':
            tabs = ["true", "false", "false"];
            document.querySelector( '#tab_1' ).style.background = 'black';
            document.querySelector( '#tab_2' ).style.background = 'lightgray';
            document.querySelector( '#tab_3' ).style.background = 'lightgray';
            document.querySelector( '#tab_1' ).style.color = 'white';
            document.querySelector( '#tab_2' ).style.color = 'black';
            document.querySelector( '#tab_3' ).style.color = 'black';
            document.querySelector( '#plus_minus_1' ).innerHTML = '-';
            document.querySelector( '#plus_minus_2' ).innerHTML = '+';
            document.querySelector( '#plus_minus_3' ).innerHTML = '+';

            document.querySelector( '#body_1' ).style.display = 'block';
            document.querySelector( '#body_2' ).style.display = 'none';
            document.querySelector( '#body_3' ).style.display = 'none';
            break;
        case '#tab_2':
            tabs = ["false", "true", "false"];
            document.querySelector( '#tab_1' ).style.background = 'lightgray';
            document.querySelector( '#tab_2' ).style.background = 'black';
            document.querySelector( '#tab_3' ).style.background = 'lightgray';
            document.querySelector( '#tab_1' ).style.color = 'black';
            document.querySelector( '#tab_2' ).style.color = 'white';
            document.querySelector( '#tab_3' ).style.color = 'black';
            document.querySelector( '#plus_minus_1' ).innerHTML = '+';
            document.querySelector( '#plus_minus_2').innerHTML = '-';
            document.querySelector( '#plus_minus_3' ).innerHTML = '+';

            document.querySelector( '#body_1' ).style.display = 'none';
            document.querySelector( '#body_2' ).style.display = 'block';
            document.querySelector( '#body_3' ).style.display = 'none';
            break;
        case '#tab_3':
            tabs = ["false", "false", "true"];
            document.querySelector( '#tab_1' ).style.background = 'lightgray';
            document.querySelector( '#tab_2' ).style.background = 'lightgray';
            document.querySelector( '#tab_3' ).style.background = 'black';
            document.querySelector( '#tab_1' ).style.color = 'black';
            document.querySelector( '#tab_2' ).style.color = 'black';
            document.querySelector( '#tab_3' ).style.color = 'white';
            document.querySelector( '#plus_minus_1' ).innerHTML = '+';
            document.querySelector( '#plus_minus_2' ).innerHTML = '+';
            document.querySelector( '#plus_minus_3' ).innerHTML = '-';

            document.querySelector( '#body_1' ).style.display = 'none';
            document.querySelector( '#body_2' ).style.display = 'none';
            document.querySelector( '#body_3' ).style.display = 'block';

            break;
    }

    /* Media query for mobile view changes lagout body in each tab */
    if ( window.matchMedia("(max-width: 768px)" ).matches ){
        switch( tab ){
            case '#tab_1':
                document.querySelector("#body_1").style.display = 'block';
                document.querySelector("#body_1").appendChild( document.querySelector("#body_13") );
                document.querySelector("#body_1").appendChild( document.querySelector("#body_12") );
                document.querySelector("#body_1").appendChild( document.querySelector("#body_11") ); 
                break;
            case '#tab_2':
                document.querySelector("#body_2").style.display = 'block';
                document.querySelector("#body_2").appendChild( document.querySelector("#body_21") );
                document.querySelector("#body_2").appendChild( document.querySelector("#body_22") ); 
                break;
            case '#tab_3':
                document.querySelector("#body_3").style.display = 'block';
                document.querySelector("#body_3").appendChild( document.querySelector("#body_31") );
                document.querySelector("#body_3").appendChild( document.querySelector("#body_33") );
                document.querySelector("#body_3").appendChild( document.querySelector("#body_32") ); 
                break;
        }
    }    

}

