// ================================
// ===== Get Strongest Pirate =====
// ================================
function getWinner(a,b){
  return a>b? a: b
}

let luffy = {name: "Luffy", strength: 100}
let law = {name: "Law", strength: 70}
let kidd = {name: "Kidd", strength: 110}
let dofflamingo = {name: "Dofflamingo", strength: 75}
let kaido = {name: "Kaido", strength: 200}
let teach = {name: "Teach", strength: 105}
let linlin = {name: "Linlin", strength: 195}
let buggy = {name: "Buggy", strength: 30}

let pirate = [luffy, law, kidd, dofflamingo, kaido, teach, linlin, buggy]

function strongestPirate(input){
  console.log('===== 1. Strongest Pirate =====')
  input.sort((a, b) => (a.strength < b.strength) ? 1 : -1)
  let strongest = getWinner(input[1], input[0])
  console.log(`The Strongest: ${strongest.name}`)
  return strongest
}

function secondStrongestPirate(input){
  input.sort((a, b) => (a.strength < b.strength) ? 1 : -1)
  let runnerUp = getWinner(input[0], input[1])
  console.log(`Runner Up: ${runnerUp.name}`)
  return runnerUp
}
// Test Case
strongestPirate(pirate) // Return the strongest Pirate
secondStrongestPirate(pirate) // Return runner up pirate

// =======================
// ===== Search Data =====
// =======================
console.log('===== 2. Search Data =====')
let data = ['BNI-AM Dana Pasar Uang Kemilau', 'Avrist Equity - Cross Sectoral', 'BNP Paribas Pesona','Bahana Dana Likuid', 'CIMB-Principal Balanced Strategic Plus', 'Capital Fixed Income Fund','Cipta Dana Cash', 'MNC Dana Lancar', 'Pinnacle Strategic Equity Fund']

function search (data, keywords){
  let format = /[^A-Za-z0-9\s-.,+]+''+/g;
  if (keywords.length<3 || keywords.length>50 || format.test(keywords)){
    console.log([])
    return []
  }
  let result = []

  let newKeywords = ''
  for (let i=0; i<keywords.length; i++){
    if (keywords[i] === '+' || keywords[i] === ','){
      newKeywords+= ' '
    }
    else {
      newKeywords+= keywords[i]
    }
  }

  // console.log(newKeywords)
  for (let i=0; i<data.length; i++){
    let arrKeyword = newKeywords
    if (arrKeyword.includes(' ')){
      arrKeyword = newKeywords.split(' ')
      // console.log(arrKeyword)
      let flag = false
      for (let j=0; j<arrKeyword.length; j++){
        if (data[i].toLowerCase().includes(arrKeyword[j].toLowerCase())){
          flag = true
        }
      }
      if (flag){
        result.push(data[i])
      }
    }
    else {
      if (data[i].toLowerCase().includes(newKeywords.toLowerCase())){
        result.push(data[i])
      }
    }    
  }
  console.log(result)
  return result
}
// Case 1
search(data, 'Dana')
// Case 2
search(data, 'cimb')
// Case 3
search(data, 'ci')
// Case 4
search(data, 'Equity Fund')
// Case 4
search(data, 'CIMB,Equity+Dana Fund')