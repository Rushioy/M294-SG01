$(document).ready(function() {
    // Wenn sich die "Von" oder "Bis" Zahl ändert, überprüfen und setze die Min/Max-Werte für das Zahleneingabefeld
    $('#from-number, #to-number').on('input', function() {
        var fromNumber = parseFloat($('#from-number').val());
        var toNumber = parseFloat($('#to-number').val());

        // Wenn beide Felder gültige Zahlen enthalten
        if (!isNaN(fromNumber) && !isNaN(toNumber) && fromNumber <= toNumber) {
            // Aktiviert das Eingabefeld und setzt min/max Attribute für den Bereich
            $('#check-number').prop('disabled', false);
            $('#check-number').attr('min', fromNumber);
            $('#check-number').attr('max', toNumber);
        } else {
            // Deaktiviert das Eingabefeld, falls der Bereich ungültig ist
            $('#check-number').prop('disabled', true);
            $('#check-number').removeAttr('min');
            $('#check-number').removeAttr('max');
        }
    });

    // Wenn der Benutzer auf den "Prüfen"-Button klickt
    $('#submit-btn').click(function() {
        var fromNumber = parseFloat($('#from-number').val());
        var toNumber = parseFloat($('#to-number').val());
        var checkNumber = parseFloat($('#check-number').val());
        var messageElement = $('#message');

        // Überprüfe, ob alle Werte gültig sind
        if (isNaN(fromNumber) || isNaN(toNumber) || isNaN(checkNumber)) {
            messageElement.css('color', 'red');
            messageElement.text('Bitte geben Sie gültige Zahlen ein.');
            return;
        }

        // Sicherstellen, dass die Zahl innerhalb des Bereichs liegt
        if (checkNumber >= fromNumber && checkNumber <= toNumber) {
            messageElement.css('color', 'green');
            messageElement.text('Die Zahl ' + checkNumber + ' liegt innerhalb des Bereichs.');
        } else {
            messageElement.css('color', 'red');
            messageElement.text('Die Zahl ' + checkNumber + ' liegt nicht innerhalb des Bereichs.');
        }
    });
});
