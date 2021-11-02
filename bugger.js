let changeColor = document.getElementById("startBugger");

changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: executarBugger,
  });
});

function executarBugger() {
    setTimeout(() => {

        let colorA = '#ba4343';
        let colorC = '#5ad15a';
        let colorT = '#ffc64a';
        let colorSafe = '#4afff9';
        let colorS = '#bd10e8';
    
        let contagem = document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-120 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div").children;
        
    
        for (var i = 1; i < contagem.length+1; i++) {
    
            if (document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-120 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child("+i+") > div:nth-child(8) > div > div > div > div > div > div.ms-StackItem.truncatableText-191 > label").textContent == "Aguardando Cliente") {
    
                document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-120 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child("+i+")").style.backgroundColor = colorC;   
            }
            
            else if (document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-120 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child("+i+") > div:nth-child(8) > div > div > div > div > div > div.ms-StackItem.truncatableText-191 > label").textContent == "Em Atendimento") {
    
                document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-120 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child("+i+")").style.backgroundColor = colorA;   
            } 
            
            else if (document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-120 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child("+i+") > div:nth-child(8) > div > div > div > div > div > div.ms-StackItem.truncatableText-191 > label").textContent == "Aguardando Terceiros") {
    
                document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-120 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child("+i+")").style.backgroundColor = colorT;   
            }
    
            else if (document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-120 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child("+i+") > div:nth-child(8) > div > div > div > div > div > div.ms-StackItem.truncatableText-191 > label").textContent == "Aguardando Atendimento") {
    
                document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-120 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child("+i+")").style.backgroundColor = colorSafe;   
            }
    
         }
    
    
        for (var i = 1; i < contagem.length+1; i++) {
    
            if (document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-120 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child("+i+") > div:nth-child(9) > div > div > div > div > div > div.ms-StackItem.truncatableText-191 > label").textContent == "4 - Solucionar") {
    
                document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-120 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child("+i+") > div:nth-child(9) > div > div > div > div > div > div.ms-StackItem.truncatableText-191 > label").style.backgroundColor = colorS;
            }
    
         }
         var button = document.querySelector("#sitemap-entity-New_ocorrencia > div > div > div.pa-bi.pa-e.pa-o.pa-cj.flexbox");
         button.onclick = function() {
            start();
        };
        }, 1500);   
}
