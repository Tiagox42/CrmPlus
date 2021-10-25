let colorA = '#e31919';
let colorC = '#35c459';
let colorT = '#e6b82e';
let color4 = '#2ee6d3';
let colorS = '#bd10e8';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('CRM PLUS - Ativado');
});