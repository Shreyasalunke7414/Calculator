let input = document.getElementById('inputbox');
function display(num){
    inputbox.value += num;
}
function calculator(){
    try{
        inputbox.value = eval(inputbox.value);
    }
    catch(err)
    {
        alert("invalid")
    }
}

function clear1()
{
    inputbox.value = "";
}

function del()
{
    inputbox.value = inputbox.value.slice(0,-1);

}

