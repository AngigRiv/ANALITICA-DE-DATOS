window.onload=()=>{

      setearControles();
}

const setearControles=()=>{
	$('.appointment_date').datepicker({
    'format': 'm/d/yyyy',
    'autoclose': true
  });

  $('.appointment_time').timepicker();


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
 
 $("#citaForm").validate({
   
  rules:
  {
    txtName: {
   required: true,
   minlength: 4
  },
  txtDate: {
    required: true,
    minlength: 4
  },
  txtHour: {
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
     txtDate: {
          required: "Es requerida la fecha",
          minlength: "La fecha es muy corto"
            },
            txtHour: {
              required: "Es requerida la hora",
              minlength: "La hora es muy corta"
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

    $.post("https://970q8.mocklab.io/uss/citas", {
      name: $('#txtName').val().trim(),
      date: $('#txtDate').val().trim(),
      hour:$('#txtHour').val().trim(),
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