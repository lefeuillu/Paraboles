<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tableau 2x2 avec compteur et changement de couleur</title>
    <style>
        table {
            margin: 50px auto;
            border-spacing: 10px;
        }
        td {
            border: none;
            text-align: center;
            padding: 40px;
            font-size: 24px;
            cursor: pointer;
            transition: background-color 0.3s;
            border-radius: 30%;
            position: relative;
            width: 20px;
            height: 100px;
            background-color: rgba(163, 163, 163, 0.5);
        }
        td span {
            visibility: hidden;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    </style>
</head>
<body>

<table>
    <tr>
        <td onclick="increment(this)"><span>0</span></td>
        <td onclick="increment(this)"><span>0</span></td>
    </tr>
    <tr>
        <td onclick="increment(this)"><span>0</span></td>
        <td onclick="increment(this)"><span>0</span></td>
    </tr>
</table>

<div id="date" style="display: none;">
    <!-- Div pour afficher la date -->
</div>

<script>
    function increment(cell) {
        let span = cell.querySelector('span');
        let currentNumber = parseInt(span.textContent);
        currentNumber = (currentNumber + 1) % 5;
        span.textContent = currentNumber;
        
        let total = 0;
        document.querySelectorAll('td span').forEach(function(span) {
            total += parseInt(span.textContent);
        });

        if (total !== 0) {
            document.getElementById('date').innerText = new Date().toLocaleDateString('fr-FR');
            document.getElementById('date').style.display = 'block';
        } else {
            document.getElementById('date').style.display = 'none';
        }

        switch (currentNumber) {
            case 0:
                cell.style.backgroundColor = 'rgba(163, 163, 163, 0.5)';
                break;
            case 1:
                cell.style.backgroundColor = 'green';
                break;
            case 2:
                cell.style.backgroundColor = 'yellow';
                break;
            case 3:
                cell.style.backgroundColor = 'orange';
                break;
            case 4:
                cell.style.backgroundColor = 'pink';
                break;
        }
    }
</script>

</body>
</html>
