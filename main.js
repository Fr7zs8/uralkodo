const array = [
    {
        uralkodo: 'I. István',
        esemeny1: 'Koronázás',
        esemeny2: 'Pannonhalmi apátság megalapítása',
        evszam1: '1000',
        evszam2: '1001'
    },
    
    {
        uralkodo: 'IV. Béla',
        esemeny1: 'tatárjárás',
        evszam1: '1241-1242'
    },
    {
        uralkodo: 'Mátyás király',
        esemeny1: 'Bécs elfoglalása',
        esemeny2: 'Kenyérmezei csata',
        evszam1: '1485',
        evszam2: '1479'
    },
    
    {
        uralkodo: 'II. Rákóczi Ferenc',
        esemeny1: 'A szabadságharc kezdete',
        esemeny2: 'A szabadságharc vége',
        evszam1: '1703',
        evszam2: '1711'
    },
    
]

const table = document.createElement("table");
document.body.appendChild(table);

const thead = document.createElement("thead");
table.appendChild(thead);

const colgroup = document.createElement("colgroup");

table.appendChild(colgroup);

const col1 = document.createElement("col");
col1.span = 1;
col1.classList.add("colored-column");
colgroup.appendChild(col1);

const col2 = document.createElement("col");
colgroup.appendChild(col2);

const col3 = document.createElement("col");
col3.span = 1;
col3.classList.add("colored-column");
colgroup.appendChild(col3);

const Headertr = document.createElement("tr");
thead.appendChild(Headertr);

const HeaderthUralkodo = document.createElement("th");
HeaderthUralkodo.innerHTML = "Uralkodó";
Headertr.appendChild(HeaderthUralkodo);

const HeaderthEsemeny = document.createElement("th");
HeaderthEsemeny.innerHTML = "Esemény";
Headertr.appendChild(HeaderthEsemeny);

const HeaderthEvszam = document.createElement("th");
HeaderthEvszam.innerHTML = "Évszám";
Headertr.appendChild(HeaderthEvszam);

const tbody = document.createElement("tbody");
table.appendChild(tbody);


for (person of array){

    const TBodytr = document.createElement("tr");
    tbody.appendChild(TBodytr);

    const tduralkodo = document.createElement("td");
    tduralkodo.innerHTML = person.uralkodo;
    TBodytr.appendChild(tduralkodo);

    const tdesemeny1 = document.createElement("td");
    tdesemeny1.innerHTML = person.esemeny1;
    TBodytr.appendChild(tdesemeny1);

    const tdevszam = document.createElement("td");
    tdevszam.innerHTML = person.evszam1;
    TBodytr.appendChild(tdevszam);

    if(person.esemeny2 !== undefined){
        const TBodytr = document.createElement("tr");
        tbody.appendChild(TBodytr);

        tduralkodo.rowSpan = 2;

        const tdesemeny2 = document.createElement("td");
        tdesemeny2.innerHTML = person.esemeny2;
        TBodytr.appendChild(tdesemeny2);

        const tdevszam2 = document.createElement("td");
        tdevszam2.innerHTML = person.evszam2;
        TBodytr.appendChild(tdevszam2);
    }

}
    

