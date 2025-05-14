let res=" "

function display(para){
    res=res+para;
    document.getElementById('demo').value=res;
}

function result(){
    let result = eval(res);
    document.getElementById('demo').value=result;
}

function clear(){
    res =  ""
    document.getElementById('demo').value=res;
}

document.getElementById('c').addEventListener('click',clear);