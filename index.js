/*
button is grabbed and eventListener is added
function grabs tbody, inserts row (tr), inserts cell (td) for each input field and id, adds their value
once its done, the input fields go blank for next user input
*/
let id = 0;
document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('list');
    let row = table.insertRow();
    row.insertCell(0).innerHTML = id++;
    row.insertCell(1).innerHTML = document.getElementById('sportName').value;
    row.insertCell(2).innerHTML = document.getElementById('leagueName').value;
    row.insertCell(3).innerHTML = document.getElementById('location').value;
    row.insertCell(4).innerHTML = document.getElementById('teamName').value;
    document.getElementById('sportName').value = '';
    document.getElementById('leagueName').value = '';
    document.getElementById('location').value = '';
    document.getElementById('teamName').value = '';
});