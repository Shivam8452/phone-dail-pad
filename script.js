function display(num){
    var result = document.getElementById("pad");
    result.value += num
}


function back() {
    var value = document.getElementById("pad").value;
    document.getElementById("pad").value = value.substr(0, value.length - 1);
}