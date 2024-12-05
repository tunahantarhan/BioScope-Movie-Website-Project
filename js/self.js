function abonelikTalep() {
    alert("E-postanız listemize eklendi. Artık yeniliklerden en hızlı şekilde haberdar olacaksınız! E-postanızı kontrol etmeyi unutmayın! ");
}

function defaultColumn(){
    document.getElementById("duyuru-container-ann").style.flexDirection = "column";
}

function revertColumn(){
    document.getElementById("duyuru-container-ann").style.flexDirection = "column-reverse";
}

document.getElementById("siparis-ver").addEventListener("click", function(){
    alert("Siparişiniz alındı! Sipariş takibi için size gönderdiğimiz e-postayı inceleyin!")
})