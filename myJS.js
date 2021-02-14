/*
* Excercise 1
*
*/



/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    //Write a condition determine what color it should be changed to
    const box = document.getElementById("color-block");
    const text = document.getElementById("color-name");
    box.addEventListener("click", () => {
    /*console.log(box.style.backgroundColor);*/

    if(rgbToHex(box.style.backgroundColor) === "#f08080"){
        //change the background color using JS
        box.style.backgroundColor="#ffffff";

        //Change the text of the color using the span id color-name
        text.textContent= "#FFFFFF";
    }
    else{
        //change the background color using JS
        box.style.backgroundColor="#f08080";
        //Change the text of the color using the span id color-name
        text.textContent="#F08080";

    }
});
}

function rgbToHex(col)
{
    if(col.charAt(0)=='r')
    {
        col=col.replace('rgb(','').replace(')','').split(',');
        var r=parseInt(col[0], 10).toString(16);
        var g=parseInt(col[1], 10).toString(16);
        var b=parseInt(col[2], 10).toString(16);
        r=r.length==1?'0'+r:r; g=g.length==1?'0'+g:g; b=b.length==1?'0'+b:b;
        var colHex='#'+r+g+b;
        return colHex;
    }
}

changeColor();


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/
function convertTemp(){
    const button = document.getElementById("convertbtn");
    button.addEventListener("click", () => {
    //Calculate the temperature here
    const cTemp = ((document.getElementById("f-input").value -32) * (5/9));
    console.log(cTemp);

    //Send the calculated temperature to HTML
    const output = document.getElementById("c-output");
    output.innerHTML = cTemp
    });
}

convertTemp();