$.getJSON("data.json", function (response) {
       // console.log(response); 
       $.get("template.hbs", function(template){
              // console.log(template);
              var compiled = Handlebars.compile(template); //Wichtig
              var html = compiled(response);//Wichtig
               console.log(html);
              $('main').append(html);//Wichtig
       });
});


