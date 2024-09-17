// JQuery - Document ready
$(function () {

    setTimeout(setRadio, 2000); // zwei sekunden warten, dann funktion aufrufen

    // Click - Event
    $('#WerteLesen').click(function () {
        // Funktion aufrufen
        getValue();
    });
});
function setRadio() {
    // Wert setzten
    $("input:radio").each(function () {
        if ($(this).val() == "y") {
            $(this).attr('checked', 'checked');
        }
    });

}
function getValue() {
    // Wert lesen
    $("input:radio").each(function () {
        if ($(this).prop('checked')) {
            console.log("Vaule = " + $(this).val());
            $('body').append('Value = ' + $(this).val() + ' / ');
        }
    });
}