// JQuery - Document ready
$(function () {
    // Initialization der select
    $('select').formSelect();

    setTimeout(InputSet, 2000); // zwei sekunden warten, dann funktion aufrufen

    // Click - Event
    $('#WerteLesen').click(function () {
        // Funktion aufrufen
        getValue();
    });
});
function InputSet() {
    // Wert setzten
    $('#select2').val('g');
    $('select').formSelect();
    console.info('Select aktualisiert');
}
function getValue() {
    // Wert lesen
    var tmpVar1 = $('#select1').val();
    console.warn('Wert im select 1: ' + tmpVar1);
    var tmpVar2 = $('#select2').val();
    console.warn('Wert im select 2: ' + tmpVar2);
    $('body').append( tmpVar1 + ' / ' + tmpVar2);
}