<DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tableau avec Enregistrement Automatique</title>
</head>
<body>
    <table id="dataTable" border="1">
        <thead>
            <tr>
                <th>Nom</th>
                <th>Âge</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td contenteditable="true">Jean</td>
                <td contenteditable="true">30</td>
            </tr>
            <tr>
                <td contenteditable="true">Marie</td>
                <td contenteditable="true">25</td>
            </tr>
        </tbody>
    </table>
    <script>
        document.addEventListener('DOMContentLoaded', (event) => {
            const table = document.getElementById('dataTable');
        
            // Fonction pour convertir le tableau HTML en objet JSON
            function tableToJson(table) {
                const data = [];
                const headers = [];
                for (let i = 0; i < table.rows[0].cells.length; i++) {
                    headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase();
                }
                for (let i = 1; i < table.rows.length; i++) {
                    const tableRow = table.rows[i];
                    const rowData = {};
                    for (let j = 0; j < tableRow.cells.length; j++) {
                        rowData[headers[j]] = tableRow.cells[j].innerHTML;
                    }
                    data.push(rowData);
                }
                return data;
            }
        
            // Fonction pour sauvegarder les données sur JSON Bin
            function saveToJsonBin(data) {
                const binId = 'votre-bin-id';
                const secretKey = 'votre-secret-key';
        
                fetch(`https://api.jsonbin.io/v3/b/664ca084ad19ca34f86ce956`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Master-Key': $2a$10$DHNAnAemgw/9O9GAoUu1D.sJe5WCn8YsoLQiyWLP1V31e2JsR8W/y
                    },
                    body: JSON.stringify({tableData: data})
                }).then(response => response.json())
                  .then(json => console.log('Données enregistrées:', json))
                  .catch(error => console.error('Erreur:', error));
            }
        
            // Détection des modifications du tableau
            table.addEventListener('input', () => {
                const jsonData = tableToJson(table);
                saveToJsonBin(jsonData);
            });
        });
    </script>
</body>
</html>

