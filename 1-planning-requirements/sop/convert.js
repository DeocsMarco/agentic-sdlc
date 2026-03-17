const fs = require('fs');
const md = fs.readFileSync('D:/hcoding/sandlot-ops-final/1-planning-requirements/sop/sop.md', 'utf8');

const lines = md.split('\n');
let out = [];
let inTable = false;
let headerDone = false;

for (const line of lines) {
  const trimmed = line.trim();
  
  // Table handling
  if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
    const cells = trimmed.split('|').slice(1, -1).map(c => c.trim());
    if (cells.every(c => /^[-:]+$/.test(c))) { headerDone = true; continue; }
    if (!inTable) {
      out.push('<table>');
      inTable = true;
    }
    const tag = !headerDone ? 'th' : 'td';
    out.push('<tr>' + cells.map(c => `<${tag}>${formatInline(c)}</${tag}>`).join('') + '</tr>');
    continue;
  }
  
  if (inTable) { out.push('</table>'); inTable = false; headerDone = false; }
  
  // Headers
  if (trimmed.startsWith('#### ')) { out.push(`<h4>${formatInline(trimmed.slice(5))}</h4>`); continue; }
  if (trimmed.startsWith('### ')) { out.push(`<h3>${formatInline(trimmed.slice(4))}</h3>`); continue; }
  if (trimmed.startsWith('## ')) { out.push(`<h2>${formatInline(trimmed.slice(3))}</h2>`); continue; }
  if (trimmed.startsWith('# ')) { out.push(`<h1>${formatInline(trimmed.slice(2))}</h1>`); continue; }
  if (trimmed === '---') { out.push('<hr>'); continue; }
  if (trimmed === '') { out.push(''); continue; }
  
  // List items
  const liMatch = trimmed.match(/^(\s*)[-*] (.*)/);
  const olMatch = trimmed.match(/^(\s*)\d+\. (.*)/);
  if (liMatch) {
    const indent = line.match(/^\s*/)[0].length;
    const ml = Math.floor(indent / 2) * 16;
    out.push(`<li style="margin-left:${ml}px">${formatInline(liMatch[2])}</li>`);
    continue;
  }
  if (olMatch) {
    const indent = line.match(/^\s*/)[0].length;
    const ml = Math.floor(indent / 2) * 16;
    out.push(`<li style="margin-left:${ml}px">${formatInline(olMatch[2])}</li>`);
    continue;
  }
  
  out.push(`<p>${formatInline(trimmed)}</p>`);
}
if (inTable) out.push('</table>');

function formatInline(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code>$1</code>');
}

const style = `
body { font-family: 'Segoe UI', Arial, sans-serif; max-width: 850px; margin: 30px auto; padding: 20px; font-size: 13px; line-height: 1.6; color: #222; }
h1 { font-size: 22px; border-bottom: 2px solid #333; padding-bottom: 8px; margin-top: 30px; }
h2 { font-size: 18px; margin-top: 24px; color: #1a1a1a; }
h3 { font-size: 15px; margin-top: 20px; color: #333; }
h4 { font-size: 14px; margin-top: 16px; color: #444; }
table { border-collapse: collapse; width: 100%; margin: 10px 0; font-size: 12px; }
th, td { border: 1px solid #ccc; padding: 6px 10px; text-align: left; }
th { background: #f5f5f5; font-weight: 600; }
hr { border: none; border-top: 1px solid #ddd; margin: 20px 0; }
li { margin: 3px 0; list-style-type: none; }
li::before { content: "• "; color: #666; }
code { background: #f4f4f4; padding: 1px 4px; border-radius: 3px; font-size: 12px; }
strong { font-weight: 600; }
p { margin: 6px 0; }
@media print { body { margin: 0; padding: 15px; } }
`;

const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>SOP-PMR-001 Planning & Requirements</title><style>${style}</style></head><body>${out.join('\n')}</body></html>`;

fs.writeFileSync('D:/hcoding/sandlot-ops-final/1-planning-requirements/sop/sop.html', html);
console.log('HTML written OK');
