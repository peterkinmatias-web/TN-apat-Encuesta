/**
 * C2 Voting Backend - Stores votes in C2 sheet, summary table auto-generated
 */

const SHEET_C2 = 'C2';

function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_C2) || ss.insertSheet(SHEET_C2);
    if (sheet.getLastRow() === 0) sheet.appendRow(['Timestamp', 'IP', 'Name']);
    
    const data = JSON.parse(e.postData.contents);
    const ip = data.ip;
    const name = data.name || data.characterName;
    
    if (!ip || !name) return errorResponse('Missing ip/name');
    
    if (hasVoted(ip)) return errorResponse('Already voted');
    
    sheet.appendRow([new Date(), ip, name]);
    updateSummary();
    
    return successResponse();
  } catch (err) {
    return errorResponse(err.message);
  }
}

function doGet(e) {
  if (e.parameter.action === 'counts') return ContentService.createTextOutput(JSON.stringify(getCounts())).setMimeType(ContentService.MimeType.JSON);
  return ContentService.createTextOutput(JSON.stringify({ready: true})).setMimeType(ContentService.MimeType.JSON);
}

function hasVoted(ip) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_C2);
  if (!sheet) return false;
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) if (data[i][1] === ip) return true;
  return false;
}

function getCounts() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_C2);
  if (!sheet || sheet.getLastRow() < 2) return {};
  
  const data = sheet.getDataRange().getValues();
  const counts = {};
  for (let i = 1; i < data.length; i++) {
    const name = data[i][2];
    counts[name] = (counts[name] || 0) + 1;
  }
  return counts;
}

function updateSummary() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let summary = ss.getSheetByName('Summary') || ss.insertSheet('Summary');
  
  const counts = getCounts();
  const names = Object.keys(counts).sort((a,b) => parseInt(a) - parseInt(b));
  
  summary.clear();
  summary.appendRow(['Character', 'Votes']);
  names.forEach(name => {
    summary.appendRow([name, counts[name]]);
  });
}

function successResponse() {
  return ContentService.createTextOutput(JSON.stringify({success: true})).setMimeType(ContentService.MimeType.JSON);
}

function errorResponse(msg) {
  return ContentService.createTextOutput(JSON.stringify({success: false, error: msg})).setMimeType(ContentService.MimeType.JSON);
}

function test() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('C2') || ss.insertSheet('C2');
  sheet.appendRow([new Date(), 'test-ip', 'Test Character']);
  updateSummary();
}

