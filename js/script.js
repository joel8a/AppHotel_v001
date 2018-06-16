var hotel = {


	principal: function(){
		document.addEventListener("deviceready", hotel.inicio, false);
	},
	inicio: function(){
		$("#btn-inicio-sesion").click(hotel.iniciarSesion);
	},
	iniciarSesion(){
		var email = $("#email-inicio").val();
		var password = $("#password-inicio").val();

		try{
			if(email == ""){
				throw new Error("El email no es valido");
			}

			if(password == ""){
				throw new Error("La contraseña no es valida");
			}

			if(email == "joel8a@hotmail.com" && password == "1234"){
				window.location.href = "#main";
			}else{
				throw new Error("Credenciales no validas");
			}

		}catch(error){
			alert(error);
		}

	}

};


// metodo compilar
hotel.principal();

// metodo desarrollo
//hotel.inicio();