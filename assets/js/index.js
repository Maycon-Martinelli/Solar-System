if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página");
    window.location.href = "./assets/html/signin.html";
  }
  
  const userLogado = JSON.parse(localStorage.getItem("userLogado"));
  
  
  
  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "./assets/html/signin.html";
  }

  function quiz(){
    window.location.href = "./quiz/html/quiz1.html"
}

function sistema(){
    window.location.href = "./menu/html/sistema.html"
}

function sair(){
    window.location.href = "./assets/html/signin.html"
}

