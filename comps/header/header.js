function HeaderUI(boxHeight=50, boxWidth=500, boxTop=20, text="The Basics"){
    return `<div class='header' style='
    background-color:#5097D9;
    border: #1F6CB4 solid 4px;
    border-radius: 25px;
    display:flex;
    height: ${boxHeight}px;
    width:${boxWidth}vw;
    justify-content:center;
    align-items:center;
    margin: auto;
    margin-top: ${boxTop}px;
   
    '>
    <p style='
        text-align:center;
        padding-top: 0px;
        font-size: 100px;
        font-weight: bold;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: white;
        font-family: impact;
    '>${text}</p>

    </div>

    `

}

//export const Header = HeaderUI();