var idade = parseInt(prompt("Qual a sua idade?"));

var devolverIdade = new Promise((resolve,reject)=>{
    if(idade >= 18){
        resolve()
    }else{
        reject();
    }
})
    .then(()=>console.log("já pode ir no putero"))
    .catch(()=>console.log("vou chamar a policia"));

    setTimeout(devolverIdade, 2000);