// 1 Užduotis
function displayText() {
    const name = document.getElementById('nameInput').value
    const number = parseFloat(document.getElementById('numberInput').value)

    if (Number.isInteger(number) && number > 0 && Number.isFinite(number)) {

        const output = document.getElementById('output') 
        output.innerText = (name + ' ').repeat(number)
        document.getElementById('nameInput').value = ''
        document.getElementById('numberInput').value = ''
    } 
    else {
        alert('Įveskite teigiamą sveikąjį skaičių!')
    }
}


// 2 Užduotis
function checkNameLength() {

    const name = document.getElementById('vardasInput').value.trim() 
    const nameLength = name.length

    if (nameLength > 0) {
        alert(`Jūsų vardo ilgis yra: ${nameLength}`)
    } else {
        alert('Įveskite savo vardą!')
    }
}
  
// 3. Užduotis
function vardaspavarde() {
    const fullName = document.getElementById('fullNameInput').value
    const names = fullName.split(' ')

    if (names.length ) {
        const firstName = names[0]
        let lastName = ''
    
        if (names.length > 2) {
          lastName = names.slice(1).join(' ')
                          .replace(/\s/g, ' ')
        } else {
          lastName = names.slice(1).join(' ')
        }
      document.getElementById('firstName').innerText = `Vardas: ${firstName}`
      document.getElementById('lastName').innerText = `Pavardė: ${lastName}`
    } 
  }