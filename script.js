/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const form=document.getElementsByTagName("form")[0]
const number =document.getElementById("search")
const divas=document.getElementById("output")

form.addEventListener("submit",function(e){
      e.preventDefault()
      let svarai= number.value * 2.2046
      let gramai= number.value / 0.001
      let Uncijos= number.value * 35.274
      divas.innerHTML=`${number.value} Kilogramų <br> yra ${Math.round(svarai)} svarų <br> 
      yra ${gramai} gramų <br> 
      yra ${Math.round(Uncijos)} uncijų
      `
      divas.style.opacity=1
})