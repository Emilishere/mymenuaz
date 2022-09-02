var a,b,result;
a=document.getElementById("fnumber").value;
b=document.getElementById("snumber").value;
result=parseInt(a) / parseInt(b);
function divide(){
    document.getElementById("sumr").innerHTML=result;
};

