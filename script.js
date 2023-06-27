$("#Cima").click(
    function () {
        $("#Halley").css('animation','cima 2s steps(20)').animate({ top: "230px"}, { duration: 2000 })
    }
)
$("#Baixo").click(
    function () {
        $("#Halley").css('animation','baixo 2s steps(20)').animate({top: '400px'},{duration: 2000}) 
    }
)
$("#Direita").click(
    function () {
        $("#Halley").css('animation','direita 2s steps(20)').animate({ left: "500px" }, { duration: 2000 })
    }
)
$("#Esquerda").click(
    function () {
        $("#Halley").css('animation','esquerda 2s steps(20)').animate({ left: "60px" }, { duration: 2000 })
    }
)