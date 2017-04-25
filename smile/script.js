/**
 * Created by Vita on 24.04.2017.
 */

function randomNumber (m,n)
{
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor( Math.random() * (n - m + 1) ) + m;
}

var createImg = function(str)
{
    var elem = document.createElement("img");
    elem.setAttribute('src','smile.png');
    document.getElementById(str).appendChild(elem);
    elem.style.top = randomNumber(0,400) + 'px';
    elem.style.left = randomNumber(0,400) + 'px';


};

var createExclusiveImg = function()
{
    createImg('firstOne');
    // document.getElementById("firstOne").addEventListener("click", add3Element);

    document.getElementById("firstOne").lastChild.addEventListener("click", add3Element);
    if(countAlert == 1){
        countAlert+=1;
        document.getElementsByTagName("body")[0].addEventListener("click", function(){
            alert('Game over');
            document.getElementById("firstOne").innerHTML = '';
            document.getElementById("secondOne").innerHTML = '';
            generateImg();
    });}



};

function add3Element(event) {
    event.stopPropagation();
    var counter = i + 3;
    document.getElementById("firstOne").innerHTML = '';
    document.getElementById("secondOne").innerHTML = '';
    i = 0;

    do{
        createImg('firstOne');
        i++;
    }while(i!=counter);
    document.getElementById('secondOne').innerHTML = document.getElementById('firstOne').innerHTML; //clone
    createExclusiveImg();

}
function generateImg() {
    i = 0;
    while (i!=4){
        createImg('secondOne');
        i++;
    }
    document.getElementById('firstOne').innerHTML = document.getElementById('secondOne').innerHTML; //clone
    createExclusiveImg();
}

var i = 0;
var countAlert = 1;
generateImg();














