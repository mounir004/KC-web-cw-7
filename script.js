function BMI(weight = 10,height = 8){
let result = weight/(height*height)
return result
}

console.log(BMI())

function Status(bmi){
 if(bmi<18.5){

    document.getElementById("h3").style.color="orange"
 return document.getElementById("h3").innerText="لديك نقص في الوزن"

 }
 
else if(bmi>= 18 && bmi<25){

    document.getElementById("h3").style.color="green"
return document.getElementById("h3").innerText= "وزنك صحي" 

}

else if (bmi>=25){
    document.getElementById("h3").style.color="red"
return document.getElementById("h3").innerText= "لديك زيادة في الوزن"

}

}

function calculate(){
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    let bmi = BMI(weight,height)
    let desc = Status(bmi)
    let div = document.getElementById('result')
    div.innerText= bmi + " == " + desc
    document.getElementById("weight").value= ""
    document.getElementById("height").value= ""




}





















