const cabecalho = document.querySelector("#cabecalho");
const menu = document.querySelector("#menu");
const btn_home = document.querySelector("#btn_home");
const btn_novo = document.querySelector("#btn_novo");
const btn_pesquisar = document.querySelector("#btn_pesquisar");
const btn_gestao = document.querySelector("#btn_gestao");
const btn_sobre = document.querySelector("#btn_sobre");
const principal = document.querySelector("#principal");


btn_home.addEventListener("click",(evt)=>{
  abrirPaginas(evt.target,"./home.html")
});
btn_carreta.addEventListener("click",(evt)=>{
  abrirPaginas(evt.target,"./carretas.html")
});
btn_cavalo.addEventListener("click",(evt)=>{
  abrirPaginas(evt.target,"./cavalo.html")
});
btn_bobs.addEventListener("click",(evt)=>{
  abrirPaginas(evt.target,"./bobs.html")
});
btn_sobre.addEventListener("click",(evt)=>{
  abrirPaginas(evt.target,"./sobre.html")
});
const abrirPaginas=(el, url)=>{
  const abas = [...document.querySelectorAll(".aba")];
  abas.forEach(element => {
    element.classList.remove("abaSelecionada");
  });
  el.classList.add("abaSelecionada");
  window.open(url,"if_principal");
}