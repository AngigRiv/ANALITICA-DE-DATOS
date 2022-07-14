window.onload=()=>{
    setearControles();
}

const setearControles=()=>{
    let txtName=document.getElementById("txtName");
    txtName.onkeypress=(e)=>{
        var regex = new RegExp("^[a-zA-ZnÑ ]+$");
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) return true;
        e.preventDefault();
        return false;
    }

//     var eregex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   
//    $.validator.addMethod("validemail", function( value, element ) {
//        return this.optional( element ) || eregex.test( value );
//    });
   
   $("#contactForm").validate({
     
    rules:
    {
        txtName: {
     required: true,
     minlength: 3
    },
    txtEmail: {
     required: true,
     email: true,
     minlength: 4
    },
    txtSubject: {
     required: true,
     minlength: 4,
    },
    txtMessage: {
     required: true,
     minlength: 4,
    },
     },
     messages:
     {
        txtName: {
     required: "Es requerido los nombres y apellidos",
     minlength: "Tu nombre es muy corto"
       },
       txtEmail: {
       required: "Es requerido el correo electrónico",
       email: "Ingrese un correo electrónico valido",
       minlength: "Tu correo electrónico es muy corto"
        },
        txtSubject: {
            required: "Es requerido el asunto",
            minlength: "El asunto es muy corto"
              },
              txtMessage: {
                required: "Es requerido el mensaje",
                minlength: "Tu mensaje es muy corto"
                  },
     },
     errorPlacement : function(error, element) {
     $(element).closest('.form-group').find('.help-block').html(error.html());
     },
     highlight : function(element) {
     $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
     },
     unhighlight: function(element, errorClass, validClass) {
     $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
     $(element).closest('.form-group').find('.help-block').html('');
     },
     
     submitHandler: function(form) {
      $('div.spanner').removeClass('show').addClass('show');
      $('div.overlayLoad').removeClass('show').addClass('show');

      $.post("https://970q8.mocklab.io/uss/contactanos", {
        name: $('#txtName').val().trim(),
        email: $('#txtEmail').val().trim(),
        subject:$('#txtSubject').val().trim(),
        message:$('#txtMessage').val().trim()
      },
      function(informacion, estado){
        $('div.spanner').removeClass('show');
        $('div.overlayLoad').removeClass('show');
        let info=JSON.parse(informacion);
        $('#divAlerta').html(info.messages);
        // alert(info.messages);
          $("#divAlerta").fadeIn(500).fadeOut(3500);
 
 
      });
                }
     }); 
}