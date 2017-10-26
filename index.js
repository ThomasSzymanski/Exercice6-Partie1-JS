function diviser(){
	var first = document.getElementById('premier_nombre').value;
    var second = document.getElementById('deuxieme_nombre').value;
      if (isNaN(first) == false && isNaN(second) == false && second != 0) {
    var result = (first) % (second);
    alert('Le résultat est : ' + result);
  } else {
    alert('Veuillez saisir un nombre');
  }
}