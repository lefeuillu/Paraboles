<DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tableau de Paraboles</title>
<style>
    #jsonOutput {
            width: 100%;
            height: 200px;
    }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Tabletop.js/1.5.1/tabletop.min.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>

<h2>Apocalypse</h2>
<p>
    <i>
    Ici un petit récapitulatif des paraboles que l’on retrouve durant les cours sur les chapitres de l’Apocalypse. N’hésitez pas à ajouter votre pierre à l’édifice 🙏🏾
    </i>
</p>

<table class="paraTable" id="table-body">
    <thead>
        <tr>
            <th>Parabole</th>
            <th>Signification</th>
            <th>Versets</th>
            <th></th>
        </tr>
    </thead>
    <tbody id="table-body">
        <tr>
                <td contenteditable="true">John Doe</td>
                <td contenteditable="true">30</td>
                <td contenteditable="true">USA</td>
            </tr>
            <tr>
                <td contenteditable="true">Jane Smith</td>
                <td contenteditable="true">25</td>
                <td contenteditable="true">Canada</td>
            </tr>
    </tbody>
</table>

<button id="ajouter-ligne-btn" onclick="ajouterLigne()">Ajouter une ligne</button>

<script>
    const JSONBIN_URL = 'https://api.jsonbin.io/v3/b/664ca084ad19ca34f86ce956';
    const JSONBIN_API_KEY = '$2a$10$DHNAnAemgw/9O9GAoUu1D.sJe5WCn8YsoLQiyWLP1V31e2JsR8W/y';

    $(document).ready(function() {
        chargerTableau();

        $('#tableau').on('input', function(event) {
            if (!event.isTrusted) return;
            sauvegarderTableau();
        });
    });

    function ajouterLigne() {
        var tableau = document.getElementById("table-body");
        var nouvelleLigne = tableau.insertRow();
        for (var i = 0; i < 3; i++) {
            var cellule = nouvelleLigne.insertCell(i);
            cellule.contentEditable = "true";
        }
        var celluleSupprimer = nouvelleLigne.insertCell(3);
        var boutonSupprimer = document.createElement("button");
        boutonSupprimer.className = "delete-button";
        boutonSupprimer.textContent = "❌";
        boutonSupprimer.onclick = function() {
            supprimerLigne(this);
        };
        celluleSupprimer.appendChild(boutonSupprimer);
        sauvegarderTableau();
    }

    function supprimerLigne(bouton) {
        var ligneASupprimer = bouton.parentNode.parentNode;
        ligneASupprimer.parentNode.removeChild(ligneASupprimer);
        sauvegarderTableau();
    }

    function sauvegarderTableau() {
        var tableau = document.getElementById("table-body").getElementsByTagName('tbody')[0];
        var data = [];
        for (var i = 0; i < tableau.rows.length; i++) {
            var row = tableau.rows[i];
            var rowData = [];
            for (var j = 0; j < row.cells.length - 1; j++) {
                rowData.push(row.cells[j].innerText);
            }
            data.push(rowData);
        }
        $.ajax({
            url: JSONBIN_URL,
            type: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': JSONBIN_API_KEY
            },
            data: JSON.stringify({ tableData: data }),
            success: function(response) {
                console.log('Tableau sauvegardé', response);
            },
            error: function(err) {
                console.log('Erreur lors de la sauvegarde', err);
            }
        });
    }

    function chargerTableau() {
        $.ajax({
            url: JSONBIN_URL + '/latest',
            type: 'GET',
            headers: {
                'X-Master-Key': JSONBIN_API_KEY
            },
            success: function(response) {
                var data = response.record.tableData || [];
                var tableau = document.getElementById("table-body");
                for (var i = 0; i < data.length; i++) {
                    var nouvelleLigne = tableau.insertRow();
                    for (var j = 0; j < data[i].length; j++) {
                        var cellule = nouvelleLigne.insertCell(j);
                        cellule.contentEditable = "true";
                        cellule.innerText = data[i][j];
                    }
                    var celluleSupprimer = nouvelleLigne.insertCell(data[i].length);
                    var boutonSupprimer = document.createElement("button");
                    boutonSupprimer.className = "delete-button";
                    boutonSupprimer.textContent = "❌";
                    boutonSupprimer.onclick = function() {
                        supprimerLigne(this);
                    };
                    celluleSupprimer.appendChild(boutonSupprimer);
                }
            },
            error: function(err) {
                console.log('Erreur lors du chargement', err);
            }
        });
    }
</script>

</body>
</html>
