function DodajKomentar() {
   //odredi se lista u koju se unosi novi element
   var ul = document.getElementById("listaKom");
   //vrednost elementa treba da predstavlja tekst iz textarea - komentar
   var komentar = document.getElementById("komentar");
   //pomocu "createElement" f-je se kreira novi element iz liste, tipa "li"
   var li = document.createElement("li");
   //JS f-ja Date() pravi novi objekat sa vrednoscu danasnjeg datum
   var datum = new Date();
   //danasnji datum citljiv za ljude
   var sadrzajElementa = datum.toDateString();
   sadrzajElementa+="\nKomentar: ";
   sadrzajElementa+=komentar.value;
   li.setAttribute("id", sadrzajElementa);
   //u li element se ubacuje vrednost pomocu f-je append
   li.appendChild(document.createTextNode(sadrzajElementa));
   //u listu se ubacuje element li kao dete
   ul.appendChild(li);
   document.getElementById("komentar").value="";
  }