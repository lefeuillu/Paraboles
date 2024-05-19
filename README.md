<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tableau de Paraboles</title>
<style>
    *{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', serif;
    }
    table {
        border-collapse:collapse ;
        width:95%;
        margin: 0 0 0 70px; /* Centrer horizontalement */
        
    }
    
    th, td {
        border: 1px solid rgb(214, 214, 214);
        padding: 8px;
        text-align: left;
    }
    thead {
        background-color: transparent;
        color:rgb(163, 163, 163) ;
    }
    /* Fixer la largeur des colonnes */
    th:nth-child(1),
    td:nth-child(1) {
        width: 20%;
    }
    th:nth-child(2),
    td:nth-child(2) {
        width: 25%;
    }
    th:nth-child(3),
    td:nth-child(3) {
        width: 50%;

    }
    th:nth-child(4),
    td:nth-child(4) {
        width: 5%;
        border-top: none;
        border-bottom: none;
        border-right: none;
        background-color: transparent;
    }

    .delete-button {
        display: none;
        border: none; /* Retirer la bordure */
        background: none; /* Retirer l'arrière-plan */
        cursor: pointer;
    }
    .delete-button:hover {
        color: rgb(214, 214, 214); /* Changement de couleur au survol */
    }
    tr:hover .delete-button {
        display: block;
    }
    #ajouter-ligne-btn {
        margin: 30px 0 0px 69px; 
        color: rgb(163, 163, 163);
        border: none; /* Retirer la bordure */
        background: none; /* Retirer l'arrière-plan */
        cursor: pointer;
    }
    #ajouter-ligne-btn:hover{
        
        font-weight: 500;
    }
    .parabole-container {
        display: flex;
        align-items: center;
        font-size: 13pt;
        font-weight: lighter;
    }
    .logo{
    width: 16px;
    height: 16px;
    transform: scale(1.1);
    opacity: 0.5;
    margin-right: 5px;
    }
    h2{
    margin-left: 90px;
    font-size: 30pt;
    font-weight: 500;
    opacity: 0.8;
    fill: rgb(87, 209, 254);
    color: rgb(87, 209, 254);;
    padding-bottom: 0;
    margin-bottom:0 ;
    }
    .logotitre{
    transform: scale(2.4);
    width: 16px;
    height: 16px;
    margin-right: 10px;
    padding-bottom: 5px;
    }
    p{
        margin-left: 70px; 
        margin-bottom: 20px;
        font-size: 10pt;
        font-weight: lighter; 
    }

</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Tabletop.js/1.5.1/tabletop.min.js"></script>
</head>
<body>

<h2>
    <svg class="logotitre" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
        <path  d="M22.855.758L7.875 7.024l12.537 9.733c2.633 2.224 6.377 2.937 9.77 1.518 4.826-2.018 7.096-7.576 5.072-12.413C33.232 1.024 27.68-1.261 22.855.758zm-9.962 17.924L2.05 10.284.137 23.529c-.534 2.855.502 5.902 2.958 7.803 3.494 2.705 8.518 2.066 11.224-1.426 2.705-3.492 2.067-8.517-1.426-11.224zm15.339 7.015l-8.156-4.69-.033 9.223c-.088 2 .904 3.98 2.75 5.041 2.631 1.512 5.977.594 7.479-2.051 1.499-2.644.589-6.013-2.04-7.523z"/>
    </svg>
    Apocalypse
</h2>

<p>
    <i>
    Ici un petit récapitulatif des paraboles que l’on retrouve durant les cours sur les chapitres de l’Apocalypse. N’hésitez pas à ajouter votre pierre à l’édifice 🙏🏾
    </i>
</p>

<table class="paraTable" id="table-body">
    <thead>
        <tr>
            <th>
                <div class="parabole-container">
                    <svg class="logo" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64"><defs fill="#55534E" />
                        <path  d="m46.44,23.32l-12.12-16.16c-.55-.73-1.41-1.16-2.32-1.16s-1.77.43-2.32,1.16l-12.12,16.16c-2.96,3.95-4.56,8.75-4.56,13.68,0,10.49,8.51,19,19,19s19-8.51,19-19c0-4.93-1.6-9.73-4.56-13.68Zm-16.44,12.68h-10.96c.2-3.27,1.35-6.46,3.32-9.08l5.19-6.92h2.45v16Z" fill="#55534E" />
                    </svg>
                    <span>Parabole</span>
                </div>
            </th>
            <th>
                <div class="parabole-container">
                    <svg class="logo" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64"><defs fill="#55534E" />
                        <path  d="m51.25,38.49l-3.25-6.49v-7c0-10.92-5.93-19-17-19-10.49,0-19,8.86-19,23,0,17,12.42,29,27,29,5.55,0,9-3.45,9-9l2.28-2.66c1.11-1.3,1.72-2.95,1.72-4.65,0-1.11-.26-2.2-.75-3.2Zm-7.25-6.49h-4v-3c-2.99,0-5,2.01-5,5s2.01,5,5,5v4c-5.21,0-9-3.79-9-9s3.74-8.95,8.91-9c-.5-5.82-3.26-9-7.91-9-6.17,0-10,4.98-10,13,0,3.39.73,6.5,2.01,9.19l-3.61,1.81c-1.53-3.23-2.39-6.96-2.39-11,0-10.33,5.5-17,14-17,6.97,0,12,4.56,12,15v5Z" fill="#55534E" />
                    </svg>
                    <span>Signification</span>
                </div>
            </th>
            <th>
                <div class="parabole-container">
                    <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs fill="#37352F" />
                        <path  d="m30,20v34h-5l-1.89-3.79c-.76-1.51-1.88-2.21-3.58-2.21H6V12h16c4.94,0,8,3.06,8,8Zm12-8c-4.94,0-8,3.06-8,8v34h5l1.89-3.79c.76-1.51,1.88-2.21,3.58-2.21h13.53V12h-16Z" fill="#55534E" />
                    </svg>
                    <span>Versets</span>
                </div>
            </th>
            <th></th>
        </tr>
    </thead>
    <tbody id="table-body">
        <!-- Les lignes du tableau seront ajoutées dynamiquement -->
    </tbody>
</table>

<button id="ajouter-ligne-btn" onclick="ajouterLigne()">Ajouter une ligne</button>

<script>
    let actionStack = [];
    let undoStack = [];

    document.addEventListener('DOMContentLoaded', function() {
        chargerTableau();

        document.getElementById('tableau').addEventListener('input', function(event) {
            if (!event.isTrusted) return;
            sauvegarderTableau();
            actionStack.push({ type: 'edit', content: snapshotTableau() });
            undoStack = [];
        });

        document.addEventListener('keydown', function(event) {
            if (event.ctrlKey && event.key === 'z') {
                event.preventDefault();
                annulerAction();
            }
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
        actionStack.push({ type: 'add', content: snapshotTableau() });
        undoStack = [];
    }

    function supprimerLigne(bouton) {
        var ligneASupprimer = bouton.parentNode.parentNode;
        actionStack.push({ type: 'delete', content: snapshotTableau() });
        ligneASupprimer.parentNode.removeChild(ligneASupprimer);
        sauvegarderTableau();
        undoStack = [];
    }

    function sauvegarderTableau() {
        var tableau = document.getElementById("tableau").getElementsByTagName('tbody')[0];
        var data = [];
        for (var i = 0; i < tableau.rows.length; i++) {
            var row = tableau.rows[i];
            var rowData = [];
            for (var j = 0; j < row.cells.length - 1; j++) {
                rowData.push(row.cells[j].innerText);
            }
            data.push(rowData);
        }
        localStorage.setItem('tableauParaboles', JSON.stringify(data));
    }

    function chargerTableau() {
        var data = JSON.parse(localStorage.getItem('tableauParaboles')) || [];
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
    }

    function snapshotTableau() {
        var tableau = document.getElementById("tableau").getElementsByTagName('tbody')[0];
        var data = [];
        for (var i = 0; i < tableau.rows.length; i++) {
            var row = tableau.rows[i];
            var rowData = [];
            for (var j = 0; j < row.cells.length - 1; j++) {
                rowData.push(row.cells[j].innerText);
            }
            data.push(rowData);
        }
        return data;
    }

    function annulerAction() {
        if (actionStack.length === 0) return;
        var lastAction = actionStack.pop();
        undoStack.push(snapshotTableau());

        if (lastAction.type === 'add') {
            // Supprimer la dernière ligne ajoutée
            var tableau = document.getElementById("table-body");
            tableau.deleteRow(tableau.rows.length - 1);
        } else if (lastAction.type === 'delete' || lastAction.type === 'edit') {
            restaurerTableau(lastAction.content);
        }

        sauvegarderTableau();
    }

    function restaurerTableau(data) {
        var tableau = document.getElementById("table-body");
        tableau.innerHTML = "";
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
    }
</script>

</body>
</html>
