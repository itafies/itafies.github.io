function onFileSelected(event, num) {
  var selectedFile = event.target.files[0];
  var reader = new FileReader();

  var imgtag = document.getElementById("preview" + num);
  imgtag.title = selectedFile.name;

  reader.onload = function(event) {
    imgtag.src = event.target.result;
  };

  reader.readAsDataURL(selectedFile);
}


//Agrega un nuevo evento
function agregar(){
	var form = $("#form")[0];
	
	//Obtiene las imágenes subidas
	var image1 = form.imagen1
	var image2 = form.imagen2
	var image3 = form.imagen3
	var files = [];
	
	
	if (image1.files.length > 0) {
		files.push({name: image1.files[0].name, file: image1.files[0]});
	}
	if (image2.files.length > 0) {
		files.push({name: image2.files[0].name, file: image2.files[0]});
	}
	if (image3.files.length > 0) {
		files.push({name: image3.files[0].name, file: image3.files[0]});
	}
	
	var name = form.nombre.value;
	var strLabels = form.etiquetas.value;
	var place = form.lugar.value;
	var price = form.precio.value;	
	var description = form.descripcion.value;
	var date = form.fecha.value;
	var startTime = form.desde.value;
	var endTime = form.hasta.value;
	
	//Separa el string de etiquetas	
	var labelsArray = strLabels.split(",");

	//GUARDAR EVENTO
	alert("El evento \"" + name + "\" ha sido creado satisfactoriamente. El evento será revisado por los administradores.");
}