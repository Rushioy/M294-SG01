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
    var myvar = 1;
    if (myvar == 1) {
        $('#checkbox2').prop("checked", true);
    }
}
function getValue() {
    // Wert lesen
    var i = 1;
    $('body').append('<hr><p id="Absatz1">');
    $("input:checkbox").each(function () {
        if ($(this).prop('checked')) {
            console.log("Checkbox " + i + " = 1");
            $('body').append("Checkbox " + i + " = 1");
            
        } else {
            console.log("Checkbox " + i + " = 0");
            $('body').append("Checkbox " + i + " = 0");
        }
         $('body').append("<br>");
        i++;
    });
    $('body').append('</p>');
}