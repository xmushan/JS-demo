window.onload = function(){
    var open = document.getElementById('open')
    var close = document.getElementById('close')
    var content = document.getElementsByClassName('content')[0]

    open.onclick = function(){
        content.setAttribute('id','show')
    }
    close.onclick = function(){
        content.setAttribute('id','hidden');
    }
}