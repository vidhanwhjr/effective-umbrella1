function login(){
    var player1_names = document.getElementById("player1name").value;
    var player2_names = document.getElementById("player2name").value;
    localStorage.setItem("player1", player1_names);
    localStorage.setItem("player2", player2_names);

    window.location = "game_page.html";
}