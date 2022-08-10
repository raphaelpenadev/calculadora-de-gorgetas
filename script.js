// MUDANÇAS DE ESTILO

// MUDANÇAS DE ESTRUTURA
function calculateTip(event) {
  event.preventDefault();
  let bill = document.getElementById('bill').value;
  let serviceQual = document.getElementById('serviceQual').value;
  let numOfPeoples = document.getElementById('people').value;
  let totalLessDivision = bill * serviceQual;
  let totalWithDivision = (bill * serviceQual) / numOfPeoples;
  totalWithDivision.toFixed(2);
  totalLessDivision.toFixed(2);

  if (bill == '' | serviceQual == 0) {
    alert('Por favor, informe os valores');
    return;
  }
  if (numOfPeoples == '' | numOfPeoples <= 1) {
    numOfPeoples = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("each").style.display = "block";
    document.getElementById("tip").innerHTML = totalLessDivision;
    document.getElementById("tipEach").innerHTML = totalWithDivision;
  }
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";


document.getElementById("tipsForm").addEventListener('submit', calculateTip);