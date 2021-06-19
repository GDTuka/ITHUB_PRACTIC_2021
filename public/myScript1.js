const firstDialog = document.querySelector('.firstDialog')
const firstPluss = document.querySelector('.firstPluss')
const cardd = document.querySelector('.cardd')
const secondDialog = document.querySelector('.secondDialog')
const secondPluss = document.querySelector('.secondPluss')
const thirddDialog = document.querySelector('.thirdDialog')
const thirdPluss = document.querySelector('.thirdPluss')
const fourthdDialog = document.querySelector('.fourthDialog')
const fourthPluss = document.querySelector('.fourthPluss')
const fifthdDialog = document.querySelector('.fifthDialog')
const fifthPluss = document.querySelector('.fifthPluss')
const sixthPluss = document.querySelector('.sixthPluss')
const sixthDialog = document.querySelector('.sixthDialog')
const seventhDialog = document.querySelector('.seventhDialog')
const seventhPluss = document.querySelector('.seventhPluss')
const eighthDialog = document.querySelector('.eighthDialog')
const eighthPluss = document.querySelector('.eighthPluss')
const ninethDialog = document.querySelector('.ninethDialog')
const ninethPluss = document.querySelector('.ninethPluss')
const tenthDialog = document.querySelector('.tenthDialog')
const tenthPluss = document.querySelector('.tenthPluss')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const eight = document.querySelector('.eight')
const perviy = document.querySelector('.perviy')
const vtoroy = document.querySelector('.vtoroy')
const tretiy = document.querySelector('.tretiy')
const chetvertiy = document.querySelector('.chetvertiy')
const pyatiy = document.querySelector('.pyatiy')
const shestoy = document.querySelector('.shestoy')
const sedmoy = document.querySelector('.sedmoy')
const vosmoy = document.querySelector('.vosmoy')
const devyatiy = document.querySelector('.devyatiy')
const desyatiy = document.querySelector('.desyatiy')
const odinadsatiy = document.querySelector('.odinadcatiy')
const twelve = document.querySelector('.twelfe')
const thirteen = document.querySelector('.thirteen')
const carddw = document.querySelector('.carddw')
const glasss = document.querySelector('.glasss')
const mirror = document.querySelector('.mirror')
const FinalButton = document.querySelector('.FinalButton')
 
let IfMirror=0
let IfGlass=0
let IfMirrorTypeGlobal = ''
let IfMirrorTypeCorrect = ''
let IfCount = 0
let width = 0
const send = async(body) => {
    let res = await fetch("/api", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(body)
    });
    let data = await res.json();
}
FinalButton.addEventListener('click', e=>{
    send({Mirror: IfMirror,Glass:IfGlass,MirrorTypeGlobal: IfMirrorTypeGlobal,MirrorTypeCorrect:IfMirrorTypeCorrect})
    console.log(IfMirror)
})

firstPluss.onclick = event => {
    firstDialog.classList.toggle('hide')
}
firstDialog.onclick = event => {    
    console.log(event.target);    
    firstDialog.classList.toggle('hide')    
    if (event.target.classList.contains('mirror')) {

        IfMirror=1

        secondPluss.classList.remove('hide')
        firstPluss.onclick = event => {
            console.log();
        }
        firstPluss.classList.add('block')
    } else {

        IfGlass=1
        thirdPluss.classList.remove('hide')
        firstPluss.onclick = event => {
            console.log();
        }
        firstPluss.classList.add('block')
    }   
}
secondPluss.onclick = event => {
    secondDialog.classList.toggle('hide')
}
secondDialog.onclick = event => {
    console.log(event.target);    
    secondDialog.classList.toggle('hide')
    if (event.target.classList.contains('silver')) {
        fourthPluss.classList.remove('hide')
        IfMirrorTypeGlobal = 'silver'
    }
    if (event.target.classList.contains('colorful')) {
        fifthPluss.classList.remove('hide')
        IfMirrorTypeGlobal='colorful'
    }
    if (event.target.classList.contains('old')) {
        sixthPluss.classList.remove('hide')
        IfMirrorTypeGlobal='old'
    }
    if (event.target.classList.contains('satinat')) {
        seventhPluss.classList.remove('hide')
        IfMirrorTypeGlobal='satinat'
    }
    if (event.target.classList.contains('pattern')) {
        eighthPluss.classList.remove('hide')
        IfMirrorTypeGlobal='pattern'
    }
    if (event.target.classList.contains('drawning')) {
        ninethPluss.classList.remove('hide')
        IfMirrorTypeGlobal='drawning'
    }
    if (event.target.classList.contains('light')) {
        tenthPluss.classList.remove('hide')
        IfMirrorTypeGlobal='light'
    }
}
thirdPluss.onclick = event => {
    thirddDialog.classList.toggle('hide')
}
thirddDialog.onclick = event => {
    console.log(event.target);
    fourthPluss.classList.remove('hide')
    //thirddDialog.classList.toggle('hide')    
}
fourthPluss.onclick = event => {
   console.log(event.target)
   fourthdDialog.classList.toggle('hide')
}
// сюда
fourthdDialog.onclick = event => {
    console.log(event.target);   
    fourthdDialog.classList.toggle('hide')
    if (event.target.classList.contains('AGC')) {
        thirdPluss.classList.remove('hide')
        four.classList.remove('block')
        tretiy.classList.remove('block')
        let IfMirrorTypeCorrect = 'AGC'
    }   
    if (event.target.classList.contains('Elabuga')) {
        thirdPluss.classList.remove('hide')
        three.classList.remove('block')
        four.classList.remove('block')
        five.classList.remove('block')
        six.classList.remove('block')
        perviy.classList.remove('block')
        vtoroy.classList.remove('block')
        chetvertiy.classList.remove('block')
        pyatiy.classList.remove('block')
        let IfMirrorTypeCorrect = 'Elabuga'
    }     
}
fifthPluss.onclick = event => {
    fifthdDialog.classList.toggle('hide')
}
fifthdDialog.onclick = event => {
    console.log(event.target);
    fifthdDialog.classList.toggle('hide')
    if (event.target.classList.contains('bronze')) {
        thirdPluss.classList.remove('hide')
        four.classList.remove('block')
        shestoy.classList.remove('block')
        IfMirrorTypeCorrect = 'bronze'

    }    
    if (event.target.classList.contains('graphit')) {
        four.classList.remove('block')
        thirdPluss.classList.remove('hide')
        shestoy.classList.remove('block')
        IfMirrorTypeCorrect = 'graphit'
    }
    if (event.target.classList.contains('gold')) {
        four.classList.remove('block')
        thirdPluss.classList.remove('hide')
        sedmoy.classList.remove('block')
        IfMirrorTypeCorrect = ''
    }
    if (event.target.classList.contains('champagne')) {
        four.classList.remove('block')
        thirdPluss.classList.remove('hide')
        sedmoy.classList.remove('block')
         IfMirrorTypeCorrect = 'champange'
    }
    if (event.target.classList.contains('ping')) {
        four.classList.remove('block')
        thirdPluss.classList.remove('hide')
        sedmoy.classList.remove('block')
         IfMirrorTypeCorrect = 'ping'
    }
    if (event.target.classList.contains('violet')) {
        four.classList.remove('block')
        thirdPluss.classList.remove('hide')
        sedmoy.classList.remove('block')
         IfMirrorTypeCorrect = 'violet'
    }
    if (event.target.classList.contains('red')) {
        four.classList.remove('block')
        thirdPluss.classList.remove('hide')
        sedmoy.classList.remove('block')
        let IfMirrorTypeCorrect = 'red'
    }
    if (event.target.classList.contains('mirastar')) {
        thirdPluss.classList.remove('hide')
        four.classList.remove('block')
        six.classList.remove('block')  
        vosmoy.classList.remove('block')      
         IfMirrorTypeCorrect = 'mirstar'
    }
}
sixthDialog.onclick = event => {
    console.log(event.target)
    sixthDialog.classList.toggle('hide')
    if (event.target.classList.contains('J001')) {
        thirdPluss.classList.remove('hide')
        four.classList.remove('block')
        devyatiy.classList.remove('block')
         IfMirrorTypeCorrect = 'j001'
    }
    if (event.target.classList.contains('J002')) {
        thirdPluss.classList.remove('hide')
        four.classList.remove('block')
        devyatiy.classList.remove('block')
         IfMirrorTypeCorrect = 'j002'
    }
    if (event.target.classList.contains('A1')) {
        thirdPluss.classList.remove('hide')
        four.classList.remove('block')
        devyatiy.classList.remove('block')
         IfMirrorTypeCorrect = 'a1'
    }
    if (event.target.classList.contains('F020')) {
        thirdPluss.classList.remove('hide')
        four.classList.remove('block')
        devyatiy.classList.remove('block')
         IfMirrorTypeCorrect = 'f020'
    }
    if (event.target.classList.contains('F021')) {
        thirdPluss.classList.remove('hide')
        four.classList.remove('block')
        devyatiy.classList.remove('block')
         IfMirrorTypeCorrect = 'f021'
    }
    if (event.target.classList.contains('F030')) {
        thirdPluss.classList.remove('hide')
        four.classList.remove('block')
        devyatiy.classList.remove('block')
         IfMirrorTypeCorrect = 'f030'
    }
    if (event.target.classList.contains('A5')) {
        thirdPluss.classList.remove('hide')
        four.classList.remove('block')
        devyatiy.classList.remove('block')
        IfMirrorTypeCorrect = 'a5'
    }
    if (event.target.classList.contains('K1')) {
        thirdPluss.classList.remove('hide')
        four.classList.remove('block')
        devyatiy.classList.remove('block')
        IfMirrorTypeCorrect = 'k1'
    }
    if (event.target.classList.contains('J021')) {
        thirdPluss.classList.remove('hide')
        five.classList.remove('block')
        devyatiy.classList.remove('block')
        IfMirrorTypeCorrect = 'j021'
    }
    if (event.target.classList.contains('J033')) {
        thirdPluss.classList.remove('hide')
        four.classList.remove('block')
        devyatiy.classList.remove('block')
        IfMirrorTypeCorrect = 'j033'
    }
    if (event.target.classList.contains('C1')) {
        thirdPluss.classList.remove('hide')
        four.classList.remove('block')
        devyatiy.classList.remove('block')
        IfMirrorTypeCorrect = 'c1'
    }
}
sixthPluss.onclick = event => {
    sixthDialog.classList.toggle('hide')
}
seventhDialog.onclick = event => {
    console.log(event.target)
    seventhDialog.classList.toggle('hide')
    if (event.target.classList.contains('satinSilver')) {
        thirdPluss.classList.remove('hide')
        four.classList.remove('block')
        desyatiy.classList.remove('block')
        IfMirrorTypeCorrect = 'satinSilver'
    }
    if (event.target.classList.contains('satinBronze')) {
        thirdPluss.classList.remove('hide')
        four.classList.remove('block')
        desyatiy.classList.remove('block')
        IfMirrorTypeCorrect = 'satinBronze'
    }
    if (event.target.classList.contains('satinSSilver')) {
        thirdPluss.classList.remove('hide')
        four.classList.remove('block')
        desyatiy.classList.remove('block')
        IfMirrorTypeCorrect = 'satinSSilver'
    }
    if (event.target.classList.contains('satinBBronze')) {
        thirdPluss.classList.remove('hide')
        four.classList.remove('block')
        desyatiy.classList.remove('block')
        IfMirrorTypeCorrect = 'satinBBronze'
    }
}
seventhPluss.onclick = event => {
    seventhDialog.classList.toggle('hide')
}
eighthDialog.onclick = event => {
    console.log(event.target)
    eighthDialog.classList.toggle('hide')
    if (event.target.classList.contains('chinaSilver')) {
        thirdPluss.classList.remove('hide')
        four.classList.remove('block')
        IfMirrorTypeCorrect = 'chinaSilver'
    }
    if (event.target.classList.contains('chinaBronze')) {
        thirdPluss.classList.remove('hide')
        four.classList.remove('block')
        IfMirrorTypeCorrect = 'chinabronze'
    }
    if (event.target.classList.contains('chinaBlack')) {
        thirdPluss.classList.remove('hide')
        four.classList.remove('block')
        IfMirrorTypeCorrect = 'chinaBlack'
    }
}
eighthPluss.onclick = event => {
    eighthDialog.classList.toggle('hide')
}
ninethDialog.onclick = event => {
    console.log(event.target)
    ninethDialog.classList.toggle('hide')
    if (event.target.classList.contains('fourWays')) {
        thirdPluss.classList.remove('hide')
        four.classList.remove('block')
        IfMirrorTypeCorrect = 'Fantom 4 ways'
    }
    if (event.target.classList.contains('threeWays')) {
        thirdPluss.classList.remove('hide')
        four.classList.remove('block')
        IfMirrorTypeCorrect = 'Fantom 3 Ways'
    }
}
ninethPluss.onclick = event => {
    ninethDialog.classList.toggle('hide')
}
tenthDialog.onclick = event => {
    console.log(event.target)
    tenthDialog.classList.toggle('hide')
    if (event.target.classList.contains('penza')) {
        thirdPluss.classList.remove('hide')
        six.classList.remove('block')
        eight.classList.remove('block')
        odinadsatiy.classList.remove('block')
        twelve.classList.remove('block')
        IfMirrorTypeCorrect = 'penza'
    }
    if (event.target.classList.contains('china')) {
        thirdPluss.classList.remove('hide')
        four.classList.remove('block')
        six.classList.remove('block')
        thirteen.classList.remove('block')
        IfMirrorTypeCorrect = 'china'
    }
}
tenthPluss.onclick = event => {
    tenthDialog.classList.toggle('hide')
}


