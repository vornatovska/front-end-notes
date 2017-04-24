/**
 * Created by Vita on 24.04.2017.
 */
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
{//   exlusive = document.createElement('div');
//     exlusive.setAttribute("id", "exclusive");
    createImg('firstOne');
    // document.getElementById("firstOne").addEventListener("click", add3Element);
    document.getElementById("firstOne").addEventListener("click", add3Element);
};

function add3Element() {
    var counter = i + 3;
    document.getElementById("firstOne").innerHTML = '';
    document.getElementById("secondOne").innerHTML = '';
    i = 0;

    do{
        createImg('firstOne');
        i++;
    }while(i!=counter);
    document.getElementById('secondOne').innerHTML = document.getElementById('firstOne').innerHTML;
    createExclusiveImg();
}
var i = 0;
while (i!=4){
    createImg('firstOne');
    i++;
}
document.getElementById('secondOne').innerHTML = document.getElementById('firstOne').innerHTML;


//
// createImg('firstOne');
// document.getElementById("firstOne").addEventListener("click", add3Element);

createExclusiveImg();











