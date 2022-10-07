let inp = document.querySelector(".input");
let submit = document.querySelector(".submit");
let result = document.querySelector(".result");


sum = 0;

result.innerHTML=`<h3> ${sum}</h3`;

submit.addEventListener("click", function(){
    inp = inp.value;
    sum += Number(inp1);
    if(sum%5 == 0){
        result.innerHTML = '<h3>'+sum+'</h3>';
        result.style.backgroundColor = "green";
        result.style.color = "white";
    }
    else{
        result.innerHTML = '<h3>'+sum+'</h3>';
        result.style.backgroundColor = "red";
        result.style.color = "white";
    }
})
