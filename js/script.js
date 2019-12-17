let currentplayer ="X"
let totalturn = "1"
let gameend = false
function Winner(tileId1, tileId2, tileId3){
    let tile1 = $(tileId1).val();
    let tile2 = $(tileId2).val();
    let tile3 = $(tileId3).val();
    }
    if ((tile1 == tile2) && (tile2 == tile3) && (title3 == currentplayer)){
    return true;
    }
    else {
    return false;
    }
}
function performLogic(buttonId, tileId){
    $(buttonId).hide();
    $(tileId).text(currentplayer)

    if (totalturn == 9){
        $("h2").html("It's a draw")
        gameend = true
        
    }
    else if (totalturn % 2 == 0){
        currentplayer = "X"
        totalturn++
    }
    else if (totalturn % 1 ==0 ){
        currentplayer = "O"
        totalturn++
    }
    else{

    }
    
   
}



if (gameend == false){
$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});
}
else{
    gameend
}
