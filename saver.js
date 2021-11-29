document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM completamente carregado e analisado");
    document.getElementById("save").addEventListener("click", save);
  });

function save() {

    var colorA = document.getElementById('colorA').value;
    var colorC = document.getElementById('colorC').value;
    var colorT = document.getElementById('colorT').value;
    var colorSafe = document.getElementById('colorSafe').value;
    var colorS = document.getElementById('colorS').value;
    var colorA2 = document.getElementById('colorA2').value;
    var colorM = document.getElementById('colorM').value;



    chrome.storage.sync.set({ 

        colorA:  colorA,
        colorC: colorC,
        colorT: colorT,
        colorSafe: colorSafe,
        colorS: colorS,
        colorA2: colorA2,
        colorM: colorM
      
    });
    alert('Configurações salvas');
  }