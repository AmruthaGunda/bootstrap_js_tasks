function f(){
    var input1=document.getElementById("uname").value;
    var input2=document.getElementById("pwd").value;
    if(input1.length<5 || input2.length<5){
     document.getElementById("msg").innerHTML='<p class=" alert alert-danger"> Invalid</p>';
     return false;
    }
    document.getElementById("msg").innerHTML='<p class=" alert alert-success fs-4  "> Valid</p>';

    return false; 
}