var csStart = new Date(2017, 10, 16, 12, 0, 0, 0);
var cppStart = new Date(2019, 1, 1, 12, 0, 0, 0);
var unityStart = new Date(2017, 12, 11, 0, 0, 0, 0);
var ue4Start = new Date(2019, 2, 1, 0, 0, 0, 0);

function SetText()
{
    var element = document.getElementById("lblFooter");
    var dateI = new Date();
    var year = dateI.getFullYear();
    element.innerText = '\u00A9' + " 2020 - " + year + " Made by Alireza Shahbazi (ACBYTES)";
}

function SetDefaultViews(){
    document.body.innerHTML = "<div id=\"NSMenu\" class=\"nsOverlay\"><input type=\"button\" class=\"btnClose\" onclick=\"CloseNSMenu();\" value=\"&times;\"><div class=\"nsOverlayContent\"><a href=\"projects.html\">Projects</a><a href=\"about.html\">About Me</a><a href=\"contact.html\">Contact Me</a><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://docs.acbytes.com\">Docs</a><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/acbytes\">GitHub</a><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://linkedin.com/in/acbytes\">LinkedIn</a></div></div> <div class=\"TopBar\"><a href=\"index.html\"><input type=\"image\" class=\"BarLogo\" src=\"Logos/ACBYTES250250.png\"></a><a></a><a class=\"BarName\">ACBYTES</a> <input id=\"btnOpenNSMenu\" type=\"button\" value=\"☰\" onclick=\"OpenNSMenu();\"></div>" + document.body.innerHTML + "<div class=\"Footer\"><span id=\"lblFooter\" class=\"FooterContent\"></span></div>";
    document.head.innerHTML += "<link href=\"StyleSheets/Shared.css\" rel=\"stylesheet\"> <meta name=\"viewport\" content=\"width=device-width, initial-scale=0.6\">";
    SetText();
}

function OpenNSMenu() {
    document.getElementById("NSMenu").style.width = "100%";
  }
  
function CloseNSMenu() {
    document.getElementById("NSMenu").style.width = "0%";
}

function GetResume(){
    window.open("Docs/AlirezaShahbazi(ACBYTES)sResume.pdf");
}

function UpdateTrackers(){
  var cs = SubDates(new Date(), csStart);
  var cpp = SubDates(new Date(), cppStart);
  var un = SubDates(new Date(), unityStart);
  var ue = SubDates(new Date(), ue4Start);
  csy.innerText = cs[0];
  csm.innerText = cs[1];
  csd.innerText = cs[2];
  csh.innerText = cs[3];
  csmin.innerText = cs[4];
  css.innerText = cs[5];

  cppy.innerText = cpp[0];
  cppm.innerText = cpp[1];
  cppd.innerText = cpp[2];
  cpph.innerText = cpp[3];
  cppmin.innerText = cpp[4];
  cpps.innerText = cpp[5];

  uny.innerText = un[0];
  unm.innerText = un[1];
  und.innerText = un[2];
  unh.innerText = un[3];
  unmin.innerText = un[4];
  uns.innerText = un[5];

  uey.innerText = ue[0];
  uem.innerText = ue[1];
  ued.innerText = ue[2];
  ueh.innerText = ue[3];
  uemin.innerText = ue[4];
  ues.innerText = ue[5];
}

function StartTrackers(){
    UpdateTrackers();
    window.setInterval(UpdateTrackers, 1000);
}

function SubDates(D, D1)
{
    var yDiff = D.getFullYear() - D1.getFullYear();
    var mDiff = D.getMonth() - D1.getMonth();
    var dDiff = D.getDay() - D1.getDay();
    var hDiff = D.getHours() - D1.getHours();
    var minDiff = D.getMinutes() - D1.getMinutes();
    var secDiff = D.getSeconds() - D1.getSeconds();

    (secDiff < 0 ? (function() { secDiff += 60; minDiff--; }) : function(){})();
    (minDiff < 0 ? (function() { minDiff += 60; hDiff--; }) : function(){})();
    (hDiff < 0 ? (function() { hDiff += 24; dDiff--; }) : function(){})();
    (dDiff < 0 ? (function() { dDiff += 30; mDiff--; }) : function(){})();
    (mDiff < 0 ? (function() { mDiff += 12; yDiff--; }) : function(){})();

    return { 0: yDiff, 1: mDiff, 2: dDiff, 3: hDiff, 4: minDiff, 5: secDiff };
}

function toggleReadMore(button) {
    const container = button.previousElementSibling;
    container.classList.toggle('expanded');
    button.textContent = container.classList.contains('expanded') ? 'Read less' : 'Read more...';
  }