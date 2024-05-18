document.getElementById('exportBtn').addEventListener('click', () => {
    const table = document.getElementById('myTable');
    const headers = Array.from(table.querySelectorAll('th')).map(th => th.textContent);
    const rows = Array.from(table.querySelectorAll('tbody tr')).map(tr => {
        const cells = Array.from(tr.querySelectorAll('td'));
        const rowData = {};
        cells.forEach((cell, index) => {
            rowData[headers[index]] = cell.textContent;
        });
        return rowData;
    });

    const jsonString = JSON.stringify(rows, null, 2);
    downloadJSON(jsonString, 'data.json');
});

function downloadJSON(jsonString, filename) {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
