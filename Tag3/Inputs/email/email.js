$(document).ready(function() {
    function validateEmail(email) {
        // Einfaches Regex-Muster zur Validierung einer E-Mail-Adresse
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    $('#submit-btn').click(function() {
        var email = $('#email').val();
        var messageElement = $('#message');
        
        if (validateEmail(email)) {
            // Wenn die E-Mail gültig ist, zeige sie an und verstecke die Fehlermeldung
            messageElement.css('color', 'green');
            messageElement.text('Ihre E-Mail-Adresse ist: ' + email);
            $('#error-msg').hide();
        } else {
            // Wenn die E-Mail ungültig ist, zeige eine Fehlermeldung an
            messageElement.css('color', 'red');
            messageElement.text('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
            $('#error-msg').hide();
        }
    });
});
