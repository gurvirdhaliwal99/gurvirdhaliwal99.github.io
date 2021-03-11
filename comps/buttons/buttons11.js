function Buttons7UI(p='1 in 5 Adolescent Students.', minw=500, minh=50, buttonMargin=50, barMargin=50){
    return`
    <hr style='
    width:75%;
    height: 10px;
    margin-top: ${barMargin}px;
    background-color:#C4C4C4;
    '
    >
    
    
    <div style='
        background-color: #D9406E;
        border-radius: 10px 10px 10px 10px;
        height: ${minh}px;
        width: ${minw}px;
        display: flex;
        justify-content:center;
        align-items:center;
        margin: auto;
        margin-top: ${buttonMargin}px;
    '
    onclick="Buttons7UI.HandleClick()"
    >
        <p style ='
        color: white;
        text-align: center;
        font-size:80px;
        padding-top: 5px;
        font-family: sans-serif;
        '> 
        ${p} </p>

    </div>
    
    `
}

Buttons7UI.HandleClick = () => 
{
    document.querySelector("#info8").style.display = "flex"
}
//export const Button = buttonsUI();