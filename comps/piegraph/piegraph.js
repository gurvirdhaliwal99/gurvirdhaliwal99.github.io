  function PieGraphUI(picture="./pictures/pie1.JPG", margin=100, pMargin=100, flex="row", right=0, paragraph="Reported being threatened"){
    return `<div style='
    height: 300px;
    display: flex;
    justify-content:center;
    align-items:center;
    margin: auto;
    flex-direction: ${flex};

    '>

    <img style ='
    margin-top: ${margin}px;
    '
    src=${picture}/>

    <div style='
        margin-left:15%;
        max-width: 40%;
    '>
    <p style='
        font-size: 35px;
        color: white;
        margin-top: ${pMargin}px;
        margin-right: ${right}px;
        font-family: Arial, Helvetica, sans-serif;
    '>${paragraph}</p></div>

    </div>`
    
}

//export const PieGraph = PieGraphUI();