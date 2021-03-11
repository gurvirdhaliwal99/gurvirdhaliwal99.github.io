document.querySelector("#title").innerHTML += TitleUI();

document.querySelector("#basics1").innerHTML += HeaderUI(boxHeight=100, boxWidth=45, boxTop=40);
document.querySelector("#basics1").innerHTML += ButtonsUI(p='1 in 5 Adolescent Students...', minw=1080, minh=90);

document.querySelector("#basics2").innerHTML += Buttons1UI(p='Almost Half...', minw=550, minh=85, buttonMargin=50, barMargin=50);

document.querySelector("#basics3").innerHTML += Buttons2UI(p='69% of Students...', minw=750, minh=85);

document.querySelector("#basics4").innerHTML += Buttons3UI(p='The 3 Main Types of Bullying', minw=1100, minh=90);

document.querySelector("#verbal1").innerHTML += HeaderUI(boxHeight=120, boxWidth=60, boxTop=40, text="Verbal Bullying");
document.querySelector("#verbal1").innerHTML += Buttons4UI(p='70% of LGBTQ Students...', minw=1000, minh=85);

document.querySelector("#verbal2").innerHTML += Buttons5UI(p='27% of Middle School Students....', minw=1300, minh=85);

document.querySelector("#info6").innerHTML += PieGraphUI();
document.querySelector("#info6").innerHTML += PieGraphUI(picture="./pictures/pie2.JPG", margin=300, pMargin=350, flex="row-reverse", right=100, paragraph="Of those students who reported being bullied, 13% were made fun of, called names, or insulted; 13% were the subject of rumors.");

document.querySelector("#physical1").innerHTML += HeaderUI(boxHeight=120, boxWidth=60, boxTop=250, text="Physical Bullying");
document.querySelector("#physical1").innerHTML += Buttons6UI(p='5% of Students Were Either...', minw=1200, minh=85);

document.querySelector("#physical2").innerHTML += Buttons7UI(p='More Males Than Females...', minw=1100, minh=85);
document.querySelector("#info8").innerHTML += GraphUI();

document.querySelector("#cyber1").innerHTML += HeaderUI(boxHeight=130, boxWidth=60, boxTop=40, text="Cyber Bullying");
document.querySelector("#cyber1").innerHTML += Buttons8UI(p='Among Student Ages 12 - 18...', minw=1150, minh=85);

document.querySelector("#info9").innerHTML += PieGraphUI(picture="./pictures/phone.JPG", margin=150, pMargin=200, flex="row", right=0, paragraph="Among students ages 12-18 who reported being bullied at school during the school year, 15% were bullied online or by text.");
document.querySelector("#info9").innerHTML += PieGraphUI(picture="./pictures/computer.JPG", margin=300, pMargin=350, flex="row-reverse", right=0, paragraph=" Mean and hurtful comments and rumors spread online were the most common forms of cyber bullying");

document.querySelector("#cyber2").innerHTML += Buttons9UI(p='Reports of Cyberbullying are Highest...', minw=1150, minh=185, buttonMargin=50, barMargin=150);

document.querySelector("#cyber3").innerHTML += Buttons10UI(p='Percentages of Cyberbullying has More Than Doubled...', minw=1150, minh=185, buttonMargin=50, barMargin=150);
document.querySelector("#info11").innerHTML += GraphUI(url='./pictures/bargraph3.JPG', pleft=0, pbot=0, pictop=0, picleft=0, words="Since 2007", dir='row-reverse');
