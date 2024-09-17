// JQuery - Document ready
$(function () {
    // Initialization der select
    // Datum Initialization
    $('#mydate').datepicker();

    setTimeout(setDate, 2000); // zwei sekunden warten, dann funktion aufrufen

    // Click - Event
    $('#WerteLesen').click(function () {
        // Funktion aufrufen
        getValue();
    });
});
function setDate() {
    // Datum Initialization
    var date = new Date();
    // Variante 1
    var str = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    // Variante 1
    var str = date.toISOString();

    $('#mydate').val(str);
    // Datum Initialization - Deutsch usw.
    $('.datepicker').datepicker({
        format: 'yyyy-mm-dd',
        setDefaultDate: true,
        firstDay: 1,
        selectMonths: true,
        selectYears: 2,
        i18n: {
            labelMonthNext: 'Nexter Monat',
            labelMonthPrev: 'Vorheriger Monat',
            labelMonthSelect: 'Monat wählen',
            labelYearSelect: 'Jahr wählen',
            months: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
            monthsShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
            monthsLong: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
            weekdays: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
            weekdaysShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
            weekdaysAbbrev: ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
            today: 'Heute',
            close: 'schliessen',
            cancel: 'abbrechen',
            clear: 'löschen',
            done: 'wählen'
        }
    });
}
function getValue() {
    // Wert lesen
    console.log($('#mydate').val());
    $('body').append('<hr><p id="Absatz1">Datum: ' + $('#mydate').val() +'</p>');
}
