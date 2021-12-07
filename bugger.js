let changeColor = document.getElementById("startBugger");

changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: executarBugger,
    });
});

function start2() {
        setTimeout(() => {

            let contagem = document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-142 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div").children;
            console.log("[CRM-PLUS / Core] ######## A contagem é " + contagem.length + " ########");

            for (var i = 1; i < contagem.length + 1; i++) {

                if (document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-142 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child(" + i + ") > div:nth-child(8) > div > div > div > div > div > div.ms-StackItem.truncatableText-217 > label").textContent == "Aguardando Cliente") {

                    document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-142 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child(" + i + ")").style.backgroundColor = colorC;
                }

                else if (document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-142 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child(" + i + ") > div:nth-child(8) > div > div > div > div > div > div.ms-StackItem.truncatableText-217 > label").textContent == "Em Atendimento") {

                    document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-142 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child(" + i + ")").style.backgroundColor = colorA;
                }

                else if (document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-142 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child(" + i + ") > div:nth-child(8) > div > div > div > div > div > div.ms-StackItem.truncatableText-217 > label").textContent == "Aguardando Terceiros") {

                    document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-142 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child(" + i + ")").style.backgroundColor = colorT;
                }

                else if (document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-142 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child(" + i + ") > div:nth-child(8) > div > div > div > div > div > div.ms-StackItem.truncatableText-217 > label").textContent == "Aguardando Atendimento") {

                    document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-142 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child(" + i + ")").style.backgroundColor = colorSafe;
                }

            }


            for (var i = 1; i < contagem.length + 1; i++) {

                document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-142 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child(" + i + ")").style.borderColor = colorBlack;

                if (document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-142 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child(" + i + ") > div:nth-child(9) > div > div > div > div > div > div.ms-StackItem.truncatableText-217 > label").textContent == "4 - Solucionar") {

                    document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-142 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child(" + i + ") > div:nth-child(9)").style.backgroundColor = colorS;
                }

                else if (document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-142 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child(" + i + ") > div:nth-child(9) > div > div > div > div > div > div.ms-StackItem.truncatableText-217 > label").textContent == "2 - Aguard. Atendimento - 2º nível") {

                    document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-142 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child(" + i + ")").style.backgroundColor = colorA2;
                }

            }
            document.querySelector("#sitemap-entity-New_ocorrencia > div > div > div.pa-bi.pa-e.pa-o.pa-cj.flexbox").addEventListener("click", start2);
            document.querySelector("#incident\\|NoRelationship\\|HomePageGrid\\|Mscrm\\.Modern\\.refreshCommand30-button").addEventListener("click", start2);
            console.log('[CRM-PLUS / Core] Botões aplicados');
        }, 2000);

        console.log('[CRM-PLUS / Core] #######');
    }

function executarBugger() {

    chrome.storage.sync.get([

        'data1',
        "data2",
        "data3",
        "data4",
        "data5",
        "data6",
        "data7",

    ], function (result) {

        let colorA = result.data1;
        let colorC = result.data2;
        let colorT = result.data3;
        let colorSafe = result.data4;
        let colorS = result.data5;
        let colorA2 = result.data6;
        let colorM = result.data7;
        let colorBlack = '#262626';

            setTimeout(() => {

                let contagem = document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-142 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div").children;

                for (var i = 1; i < contagem.length + 1; i++) {

                    if (document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-142 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child(" + i + ") > div:nth-child(8) > div > div > div > div > div > div.ms-StackItem.truncatableText-217 > label").textContent == "Aguardando Cliente") {

                        document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-142 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child(" + i + ")").style.backgroundColor = colorC;
                    }

                    else if (document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-142 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child(" + i + ") > div:nth-child(8) > div > div > div > div > div > div.ms-StackItem.truncatableText-217 > label").textContent == "Em Atendimento") {

                        document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-142 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child(" + i + ")").style.backgroundColor = colorA;
                    }

                    else if (document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-142 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child(" + i + ") > div:nth-child(8) > div > div > div > div > div > div.ms-StackItem.truncatableText-217 > label").textContent == "Aguardando Terceiros") {

                        document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-142 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child(" + i + ")").style.backgroundColor = colorT;
                    }

                    else if (document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-142 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child(" + i + ") > div:nth-child(8) > div > div > div > div > div > div.ms-StackItem.truncatableText-217 > label").textContent == "Aguardando Atendimento") {

                        document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-142 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child(" + i + ")").style.backgroundColor = colorSafe;
                    }

                }


                for (var i = 1; i < contagem.length + 1; i++) {

                    document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-142 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child(" + i + ")").style.borderColor = colorBlack;

                    if (document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-142 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child(" + i + ") > div:nth-child(9) > div > div > div > div > div > div.ms-StackItem.truncatableText-217 > label").textContent == "4 - Solucionar") {

                        document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-142 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child(" + i + ") > div:nth-child(9)").style.backgroundColor = colorS;
                    }

                    else if (document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-142 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child(" + i + ") > div:nth-child(9) > div > div > div > div > div > div.ms-StackItem.truncatableText-217 > label").textContent == "2 - Aguard. Atendimento - 2º nível") {

                        document.querySelector("#entity_control-pcf_grid_control_container > div > div.pcf-grid.root-142 > div > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div:nth-child(" + i + ")").style.backgroundColor = colorA2;
                    }

                }
                document.querySelector("#sitemap-entity-New_ocorrencia > div > div > div.pa-bi.pa-e.pa-o.pa-cj.flexbox").addEventListener("click", start2);
                document.querySelector("#incident\\|NoRelationship\\|HomePageGrid\\|Mscrm\\.Modern\\.refreshCommand30-button").addEventListener("click", start2);

                console.log('[CRM-PLUS / Bugger] Botões aplicados');
                console.log('[CRM-PLUS / Bugger] #######');

            }, 2500);

            console.log('[CRM-PLUS / Bugger] #######');
            console.log('[CRM-PLUS / Bugger] #######');
        });

        console.log("[CRM-PLUS / Bugger] Bugger aplicado");
        console.log('[CRM-PLUS / Bugger] #######');


}
