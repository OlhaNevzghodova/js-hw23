const table = document.querySelector('table');
let counter = 1;

for (i = 0; i < 10; i++) {
    const row = document.createElement('tr');
    table.append(row);
    for (j = 0; j < 10; j++) {
        const cell = document.createElement('td');
        cell.innerText = counter;
        counter++;
        row.append(cell);
    }
}