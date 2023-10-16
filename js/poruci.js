//napravi se niz u koji ce se smestati buduce porudzbine
let porudzbine = [];
//konstruktor klase "porudzbina", kako bismo sve atribute jedne porudzbine smestili u jedinstven objekat
class Porudzbina {
  constructor(ime, adresa, broj, grad, cokolada, dodaci, komentar) {
    this.ime = ime;
    this.adresa = adresa;
    this.broj = broj;
    this.grad = grad;
    this.cokolada = cokolada;
    this.dodaci = dodaci;
    this.komentar = komentar;
  }
}

//pre nego sto prihvatimo porudzbinu proveravamo ispravnost unetih podataka
function Validiraj(){
  var ime = document.getElementById("imePrezime").value;
  var adresa = document.getElementById("adresa").value;
  var brojTelefona = document.getElementById("brojTelefona").value;
  var cokolada = document.forms["myForm"]["cokolada"];
  var grad = document.forms["myForm"]["grad"];
  //koristimo regex kako bismo uporedili format unetog broja sa zeljenim formatom pomocu match f-je
  let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 

  var poruka="";

  if(ime==null || ime==""){
   poruka+="Morate uneti ime\n";
  }
  if(adresa==null || adresa==""){
    poruka+="Morate uneti adresu\n";
  }
  if(brojTelefona==null || brojTelefona=="" ){
    poruka+="Morate uneti broj telefona\n";
  } else if(!brojTelefona.match(phoneno)){
      poruka+="Upisite broj telefona u formatu: 06x xxx xxxx ili 06x-xxx-xxxx ili 06x.xxx.xxxx\n";
    }
   else if(!brojTelefona.includes('06')){
    poruka+="Broj telefona mora poceti sa 06\n";
  }

  if(cokolada[0].checked==false && cokolada[1].checked==false && cokolada[2].checked==false){
    poruka+="Morate izabrati jednu vrstu cokolade\n";
  }
  if(grad.selectedIndex==0){
    poruka+="Izaberite grad za isporuku\n";
  } 
  if(poruka!==""){
    alert(poruka);
  } else{
    Poruci(ime, adresa, brojTelefona);
  }
}

function Poruci(ime, adresa, brojTelefona){
  //sve izabrane dodatke smestamo u value type string kako bismo ih prikazali
  var dodaci = document.getElementsByName('dodatak');
  var poruka_dodaci="";
  for(var i=0; i<3;i++){
    if(dodaci[i].checked){
      poruka_dodaci+=dodaci[i].value + "\n";
    }
  }

  var komentar = document.getElementById("kom").value;
  var vrsta_cokolade = document.querySelector('input[name="cokolada"]:checked').value;
  var koji_grad = document.querySelector('#grad').value;
  //koristimo konstruktor i pravimo novi objekat klase Porudzbina sa svim 
  //izvucenim parametrima u prethodnim koracima
  let porudzbina = new Porudzbina(ime, adresa, brojTelefona, koji_grad, vrsta_cokolade, poruka_dodaci, komentar);

  var poruka = `Hvala na porudzbini! Da li su ovo ispravni podaci za isporuku:\nIme: ${ime}\nAdresa isporuke: ${adresa}\nBroj telefona: ${brojTelefona}\nVrsta cokolade: ${vrsta_cokolade}\nGrad za isporuku: ${koji_grad}\nDodaci su:\n${poruka_dodaci}\n${komentar}`;

  //pomocu confirm f-je korisnika pitamo da proveri unete podatke
  //ako su ispravni, objekat porudzbina ubacujemo u niz porudzbine, ako ne, resetujemo stranicu
  //i traimo ponovni unos
  if(confirm(poruka)){
    alert("Proizvod ce biti isporucen za dva dana na adresu "+adresa);
    porudzbine.push(porudzbina);
  } else{
    alert("Ponovo unesite podatke");
  }
}

 function Obrisi(){
  document.getElementById("imePrezime").value="";
  document.getElementById("adresa").value="";
  document.getElementById("brojTelefona").value=""; 
  document.getElementById("kom").value="";
  document.querySelector('#grad').value="izaberi";
  var dodaci = document.getElementsByName('dodatak');
  dodaci.forEach(uncheck);
  var cokolada = document.getElementsByName('cokolada');
  cokolada.forEach(uncheck);
}

function uncheck(item){
  item.checked=false;
}

function Kutija(){
  alert("Uspesno ste narucili bombonjeru!");
}