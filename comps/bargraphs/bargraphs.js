function GraphUI(url='./pictures/bargraph2.JPG', pleft=-205, pbot=75, pictop=50, picleft=325, words="report being physically bullied", dir="column-reverse"){
    return`<div style='
        background-color: #000000;
        min-height: 350px;
        min-width: 500px;
        display: flex;
        justify-content:center;
        align-items:center;
        margin: auto;
        flex-direction: ${dir};
    '>
        <img style ='
        left:${picleft}px;
        top:${pictop}px;
        '
        src ='${url}'>

        <p style='
        color:white;
        font-size:50px;
        left:${pleft}px;
        bottom:${pbot}px;
        font-family:sans-serif;
        '
        > ${words} </p>
    </div>`
}

//export const Graph = GraphUI();