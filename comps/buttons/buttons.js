function ButtonsUI(p='1 in 5 Adolescent Students.', minw=500, minh=50, buttonMargin=50, barMargin=50){
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
        border: #B21C49 solid 4px;
        border-radius: 10px 10px 10px 10px;
        height: ${minh}px;
        width: ${minw}px;
        display: flex;
        justify-content:center;
        align-items:center;
        margin: auto;
        margin-top: ${buttonMargin}px;
    '
    onclick="ButtonsUI.HandleClick()"
    >
        <p style ='
        color: white;
        text-align: center;
        font-size:80px;
        padding-top: 0px;
        font-family: sans-serif;
        text-shadow: 4px 2px 2px #000;
        '> 
        ${p} </p>

    </div>
    
    `
}

ButtonsUI.HandleClick = () => 
{
    document.querySelector(".firstpic").style.display = "flex"
    document.querySelector(".firstp").style.display = "flex"
}
//export const Button = buttonsUI();