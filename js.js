let _butonlar= document.getElementsByTagName("button")
let _netice= document.getElementById("netice")

for(i=0; i<_butonlar.length; i++){
    _butonlar[i].onclick=hesabla;
}

function hesabla(){
    let deyer=this.innerHTML
    if(deyer=="="){
        _netice.value=eval(_netice.value);
        return;
    }
    
    
    _netice.value += deyer;
    
}