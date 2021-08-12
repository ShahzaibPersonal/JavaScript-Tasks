/**
 *? this is an arrow function
 *todo: syntex functionName = (--parameter--) => barses or 
 *todo: no barases based on number of statments 
 * 
 * 
 */

window.onload = () => {
    let selectIntial = document.getElementById("color-select");
    var firstNodeOfSelect = "Choose Color\t";
    var list = document.createElement("option");
    list.textContent = firstNodeOfSelect;
    list.value = firstNodeOfSelect;
    selectIntial.appendChild(firstNodeOfSelect);
}

function changeColor() {

    var select = document.getElementById("color-select");
    var length = select.options.length;
    for (i = length - 1; i >= 0; i--) {
        select.options[i] = null;
    }

    // dynamic array size on user requirment 
    const number = prompt("How many Colors\t")
    var j = 0;

    var a = [] // array declare\
        // var JSONCOPY = []

    //whilte loop 

    while (j < number) {
        a[j] = prompt("Enter color\t")
        j++;
    }


    /**
     * 
     *! Hard coded array method
     *todo: we use const and make an array out of it and hard codedly add 
     *
     * *   const a = ["Pakistan", "iran", "india", "Russia"]
     * *   console.log(a);
     * *
     */


    /**
     * ! Here i tried using JSON method to store value of array into a JSON 
     * ! but this is not procedure to do it 
     *? Json Mehtod is not gonna work on this
     * ? because we are pass array instead of oject
     * 
     *! t a = JSON.parse(JSONCOPY); it is not gonna work 
     * 
     */

    var size = a.length;

    console.log(a)

    //debug process
    // console.log(size);

    var i = 0;
    var select = document.getElementById("color-select");

    for (var i = 0; i < a.length; i++) {
        var opt = a[i];
        var list = document.createElement("option");
        list.textContent = opt;
        list.value = opt;
        select.appendChild(list);
    }

}