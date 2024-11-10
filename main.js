const array = [
    {
        uralkodo: 'I. István',
        esemeny: 'Koronázás',
        evszam: '1000'
    },
    {
        esemeny: 'Pannonhalmi apátság megalapítása',
        evszam: '1001'
    },
    {
        uralkodo: 'IV. Béla',
        esemeny: 'tatárjárás',
        evszam: '1241-1242'
    },
    {
        uralkodo: 'Mátyás király',
        esemeny: 'Bécs elfoglalása',
        evszam: '1485'
    },
    {
        esemeny: 'Kenyérmezei csata',
        evszam: '1479'
    },
    {
        uralkodo: 'II. Rákóczi Ferenc',
        esemeny: 'A szabadságharc kezdete',
        evszam: '1703'
    },
    {
        esemeny: 'A szabadságharc vége',
        evszam: '1711'
    },
]




const table = document.createElement("table");
document.body.appendChild(table);

const thead = document.createElement("thead");
table.appendChild(thead);

const colgroup = document.createElement("colgroup")
table.appendChild(colgroup);

const col = document.createElement("col");
colgroup.appendChild(col);

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

