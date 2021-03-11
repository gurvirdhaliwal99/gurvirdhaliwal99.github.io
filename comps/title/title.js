  function TitleUI() {
    return `
    <div style='
    background-image: url(./pictures/header.JPG);
    background-repeat: no-repeat;
    background-size: 100vw;
    height: 350px;
    width: 100%;'>
        <div class="paras" style='
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        line-height: 5px;
        margin-left: -600px;'>
       
            <div class="top" style='
            font-family: sans-serif;
            font-size: 50px;
            color: #fff;
            text-shadow: 3px 4px 2px #000;
            margin-top: 50px;
            z-index: 1;'>
            <p>The Facts About</p></div>
            
            <div class="bot" style='
            font-family: Impact, sans-serif;
            font-size: 70px;
            letter-spacing: 10px;
            color: #fff;
            text-shadow: 3px 4px 2px #000;
            z-index: 1;'>
            <p>Bullying</p>
            </div>

            <img src="./pictures/logo.png" style='
            z-index: 1;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            left: 650px;
            bottom: 220px;
            '/>
        </div>
    </div>
    `
}

//export const Title = TitleUI();
