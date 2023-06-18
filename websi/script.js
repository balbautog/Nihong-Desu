function showTable(tableId) {
  // Hide all tables
  var tables = document.getElementsByClassName('table');
  for (var i = 0; i < tables.length; i++) {
    tables[i].style.display = 'none';
  }
  // Show selected table
  var table = document.getElementById(tableId);
  table.style.display = 'table';
}

