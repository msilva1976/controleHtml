const btn_gravar = document.getElementById("btn_gravar");
const btn_cancelar = document.querySelector("btn_cancelar");
const frota = document.getElementById("frota");
const placacarrtea = document.getElementById("placacarreta");
const capacidade = document.getElementById("capacidade");
const eixos = document.getElementById("eixos");
const destino = document.getElementById("destino");
/*btn_gravar.addEventListener("click",(evt)=>{
  console.log(frota.value)
})
btn_gravar.addEventListener("click",(evt)=>{
  console.log(placaCarreta.value)
})
btn_gravar.addEventListener("click",(evt)=>{
  console.log(capacidade.value)
})
btn_gravar.addEventListener("click",(evt)=>{
  console.log(eixos.value)
})
btn_gravar.addEventListener("click",(evt)=>{
  console.log(destino.value)
})*/
btn_gravar.addEventListener("click",(evt)=>{
  const valores={
    "frota":frota.value,
    "placacarreta":placacarreta.value,
    "capacidade":capacidade.value,
    "eixos":eixos.value,
    "destino":destino.value
  }
const cabecalho={
  method:'POST',
  body:JSON.stringify(valores),

}
const endpoint="http://127.1.0.1:1880/carretas"
fetch(endpoint,cabecalho)
.then(res=>{
  if (res.status==200) {
    console.log("OK")
  }else{
    alert("Erro na gravação")
  }
})
});




