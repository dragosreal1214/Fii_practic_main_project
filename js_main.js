
const calendar=document.getElementById('calendar-wrap')
//calendar.removeChild(calendar, lastElementChild);

const section = document.createAttribute.Element('section');

calendar.appendChild(section);

const labels = ['Su','Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa',
];

for(let i = 0; i<labels.length;i++) {
    const div= document.createElement('div');
    div.textContent=labels[i];
}

const date= new Date();
date.setDate(1);
const currentMonth= date.getMonth();

let day=1;
while(date.getMonth() === currentMonth){
    const div = document.createElement('div');
    div.textContent =day;
    section.appendChild(div);
    date.setDate(++day);
}

calendar.appendChild(section);
