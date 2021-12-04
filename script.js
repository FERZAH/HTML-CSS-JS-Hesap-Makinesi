Create();

function Create() {
    let sonuc = document.getElementById("sonuc");
    sonuc.innerHTML = "0";
    addNums();
    addProperty();
}

function addNums() {
    var myTableDiv = document.getElementById("nums");

    var table = document.createElement('TABLE');
    table.id = "num-table";
    let num = 1;
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    for (var i = 0; i <= 3; i++) {
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);

        for (var j = 0; j < 3; j++) {
            var td = document.createElement('TD');
            if (i < 3) {
                td.appendChild(document.createTextNode(num));
                td.className = `num-${num}`;
                td.id = "number";
                tr.appendChild(td);
                num++;
            } else {
                if (j == 0) {
                    td.appendChild(document.createTextNode("C"));
                    td.className = `sıfırla`;

                    td.id = "number";
                    tr.appendChild(td);
                } else if (j == 1) {
                    td.appendChild(document.createTextNode("0"));
                    td.className = `num-0`;

                    td.id = "number";
                    tr.appendChild(td);
                } else if (j == 2) {
                    td.appendChild(document.createTextNode("."));
                    td.className = `nokta`;
                    td.id = "number";
                    tr.appendChild(td);
                }
            }
        }
    }
    myTableDiv.appendChild(table);
}

function addProperty() {
    var myTableDiv = document.getElementById("property-table");

    var table = document.createElement('TABLE');
    table.id = "prop-table";
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    for (var i = 0; i < 6; i++) {
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);

        for (var j = 0; j < 1; j++) {
            var td = document.createElement('TD');
            switch (i) {
                case (0): {
                    td.className = `sil fa-solid fa-arrow-left`;
                    td.id = "property";
                    tr.appendChild(td);
                    break;
                }
                case (1): {
                    td.appendChild(document.createTextNode("+"));
                    td.className = `topla`;
                    td.id = "property";
                    tr.appendChild(td);
                    break;
                }
                case (2): {
                    td.appendChild(document.createTextNode("-"));
                    td.className = `cikar`;
                    td.id = "property";
                    tr.appendChild(td);
                    break;
                }
                case (3): {
                    td.appendChild(document.createTextNode("x"));
                    td.className = `carp`;
                    td.id = "property";
                    tr.appendChild(td);
                    break;
                }
                case (4): {
                    td.appendChild(document.createTextNode("/"));
                    td.className = `bolme`;
                    td.id = "property";
                    tr.appendChild(td);
                    break;
                }
                case (5): {
                    td.appendChild(document.createTextNode("="));
                    td.className = `hesapla`;
                    td.style.backgroundColor = "#6ca4fd6e";
                    td.style.color = "#000";
                    td.id = "property";
                    tr.appendChild(td);
                    break;
                }
            }
        }
    }
    myTableDiv.appendChild(table);
}

let button = $("td");
let sonuc = document.getElementById("sonuc");
let islemler = ["+", "x", "-", "/"];
button.on("click", function () {
    switch (this.id) {
        case "number":
            switch (this.className.split(" ")[0]) {
                case "sıfırla":
                    sonuc.innerText = 0;
                    break;
                case "nokta":
                    if (sonuc.innerText[sonuc.innerText.length - 1] == ".") return;
                    if (sonuc.innerText.includes(".")) {
                        return
                    } else {
                        sonuc.innerText += ".";
                    }
                    break;
                default:
                    switch (sonuc.innerText.length) {
                        case 26:
                            console.log("max length");
                            break;

                        default:
                            sonuc.innerText == "0" ? sonuc.innerText = this.className[this.className.length - 1] : sonuc.innerText += this.className[this.className.length - 1];
                            break;
                    }
                    console.log(this.className[this.className.length - 1])
                    break;
            }
            break;
        case "property":
            switch (this.className.split(" ")[0]) {
                case "sil":
                    if (sonuc.innerText.split()[0].slice(0, sonuc.innerText.length - 1).length == 0) {
                        sonuc.innerText = 0;
                    } else {
                        sonuc.innerText = sonuc.innerText.split()[0].slice(0, sonuc.innerText.length - 1);
                    }
                    break;
                case "topla":
                    if (sonuc.innerText == 0) return;
                    if (islemler.includes(sonuc.innerText.split()[0].slice(sonuc.innerText.length - 1, sonuc.innerText.length))) return;
                    sonuc.innerText += "+";
                    break;
                case "cikar":
                    if (islemler.includes(sonuc.innerText.split()[0].slice(sonuc.innerText.length - 1, sonuc.innerText.length))) return;
                    sonuc.innerText += "-";
                    break;
                case "carp":
                    if (islemler.includes(sonuc.innerText.split()[0].slice(sonuc.innerText.length - 1, sonuc.innerText.length))) return;
                    sonuc.innerText += "*";
                    break;
                case "bolme":
                    if (islemler.includes(sonuc.innerText.split()[0].slice(sonuc.innerText.length - 1, sonuc.innerText.length))) return;
                    sonuc.innerText += "/";
                    break;
                case "hesapla":
                    sonuc.innerText = eval(sonuc.innerText);
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
});
