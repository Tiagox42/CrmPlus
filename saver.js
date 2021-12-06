document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("save").addEventListener("click", save);
  document.getElementById("padrao").addEventListener("click", padrao);

  chrome.storage.sync.get([

    'data1',
    "data2",
    "data3",
    "data4",
    "data5",
    "data6",
    "data7",

  ], function (result) {

    document.getElementById('colorA').value = result.data1;
    document.getElementById('colorC').value = result.data2;
    document.getElementById('colorT').value = result.data3;
    document.getElementById('colorSafe').value = result.data4;
    document.getElementById('colorS').value = result.data5;
    document.getElementById('colorA2').value = result.data6;
    document.getElementById('colorM').value = result.data7;

    console.log("[CRM-PLUS] Cores antigas aplicadas");
  });

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
    "data1": colorA,
    "data2": colorC,
    "data3": colorT,
    "data4": colorSafe,
    "data5": colorS,
    "data6": colorA2,
    "data7": colorM

  }, function () {
    
  });

  alert('Configurações salvas');
}

function padrao() {

  document.getElementById('colorA').value = '#ba4343';
  document.getElementById('colorC').value = '#5ad15a';
  document.getElementById('colorT').value = '#ffc64a';
  document.getElementById('colorSafe').value = '#4afff9';
  document.getElementById('colorS').value = '#bd10e8';
  document.getElementById('colorA2').value = '#4b48db';
  document.getElementById('colorM').value = '#8c8c8c';

}