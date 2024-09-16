$.getJSON("data.json", function (response) {
  // console.log(response); 
  $.get("template2.hbs", function(template){
         // console.log(template);
         var compiled = Handlebars.compile(template); //Wichtig
         var html = compiled(response);//Wichtig
          console.log(html);
         $('main').append(html);//Wichtig
  });
});

document.addEventListener('DOMContentLoaded', function() {
    // Materialize Modal initialisieren
    const modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    // Funktion zum Hinzufügen eines neuen Autos
    document.getElementById('add-car-btn').addEventListener('click', function() {
      // Eingabewerte abrufen
      const name = document.getElementById('name').value;
      const kraftstoff = document.getElementById('kraftstoff').value;
      const farbe = document.getElementById('farbe').value;
      const bauart = document.getElementById('bauart').value;
  
      // Überprüfen, ob alle Felder ausgefüllt sind
      if (name === '' || kraftstoff === '' || farbe === '' || bauart === '') {
        M.toast({html: 'Bitte alle Felder ausfüllen!', classes: 'red'});
        return;
      }
  
      // Neues Auto zur Tabelle hinzufügen
      const tableBody = document.getElementById('car-table-body');
      const newRow = document.createElement('tr');
      
      newRow.innerHTML = `
        <td>${tableBody.children.length + 1}</td>
        <td>${name}</td>
        <td>${kraftstoff}</td>
        <td>
          <div class="color-box" style="background-color: ${farbe};"></div>
          ${farbe}
        </td>
        <td>${bauart}</td>
        <td>0</td>
        <td>
          <i class="material-icons fill-car">directions_car</i>
          <i class="material-icons">edit</i>
          <i class="material-icons red-text">delete</i>
        </td>
      `;
  
      // Neue Zeile der Tabelle hinzufügen
      tableBody.appendChild(newRow);
  
      // Toast-Nachricht für Bestätigung
      M.toast({html: 'Neues Auto hinzugefügt!', classes: 'green'});
  
      // Modal schließen und Formular zurücksetzen
      const modalInstance = M.Modal.getInstance(document.getElementById('add-car-modal'));
      modalInstance.close();
      document.querySelector('form').reset();
    });
  });
  







