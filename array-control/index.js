function changeColor() {

    // dynamic array size on user requirment 
    const number = prompt("How many Colors\t")
    var j = 0;

    var a = [] // array declare

    //whilte loop 

    while (j < number) {
        a[j] = prompt("Enter color\t")
        j++;
    }


    // Hard coded array
    // const a = ["Pakistan", "iran", "india", "Russia"]
    // console.log(a);

    var size = a.length;

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