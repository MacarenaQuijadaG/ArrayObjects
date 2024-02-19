let traumatologia = [ 
    {
        hora: '8:00', 
        especialista: 'MARIA PAZ ALTUZARRA',
        paciente: 'PAULA SANCHEZ', 
        rut: '15554774-5', 
        prevision: 'FONASA'}, 

     {
        hora: '10:00', 
        especialista: 'RAUL ARAYA', 
        paciente: 'ANGÉLICA NAVAS', 
        rut: '15444147-9', 
        prevision: 'ISAPRE'
    }, 
        
    {
        hora: '10:30', 
        especialista: 'MARIA ARRIAGADA', 
        paciente: 'ANA KLAPP', 
        rut: '17879423-9', 
        prevision: 'ISAPRE'
    }, 
    
    {
        hora: '11:00', 
        especialista: 'ALEJANDRO BADILLA', 
        paciente: 'FELIPE MARDONES', 
        rut: '1547423-6', 
        prevision: 'ISAPRE'
    
    }, 
    {
        hora: '11:30', 
        especialista: 'CECILIA BUDNIK',
        paciente: 'DIEGO MARRE', 
        rut: '16554741-K', 
        prevision: 'FONASA'
    }, 
    {
        hora: '12:00', 
        especialista: 'ARTURO CAVAGNARO', 
        paciente: 'CECILIA MENDEZ', 
        rut: '9747535-8', 
        prevision: 'ISAPRE'
    }, 
    {
        hora: '12:30', 
        especialista: 'ANDRES KANACRI', 
        paciente: 'MARCIAL SUAZO', 
        rut: '11254785-5', 
        prevision: 'ISAPRE'
    }, 
];

let radiologia = [{
    hora: "10:00",
    especialista: "<NAME>",
    paciente: "<NAME>",
    rut: "12345678",
    prevision: "Fonasa"
}
];

let dental = [{
    hora: "10:00",
    especialista: "<NAME>",
    paciente: "<NAME>",
    rut: "12345678",
    prevision: "Fonasa"
}
];

let ultPosition = radiologia.length -1;
document.write('Atenciones de radiologias\t');
document.write(`Primera atencion: ${radiologia[0].paciente} - 
                                  ${radiologia[0].prevision} | ultima atencion = 
                                  ${radiologia[ultPosition].paciente} - 
                                  ${radiologia[ultPosition].prevision}`);

ultPosition = traumatologia.length -1;
document.write('atencion de traumatologia');
document.write(`Primera atencion: ${traumatologia[0].paciente} - 
                                    ${traumatologia[0].prevision} | ultima atencion = 
                                    ${traumatologia[ultPosition].paciente} - 
                                    ${traumatologia[ultPosition].prevision}`);

ultPosition = dental.length -1;
document.write(`atencion dental`);
document.write(`Primera atencion: ${dental[0].paciente} - 
                                    ${dental[0].prevision} | ultima atencion = 
                                    ${dental[ultPosition].paciente} - 
                                    ${dental[ultPosition].prevision}`);

for(let i = 0; i<= radiologia.length -1; i++){
    document.write(`${radiologia[i].hora} - 
                    ${radiologia[i].especialista} - 
                    ${radiologia[i].paciente} - 
                    ${radiologia[i].rut} - 
                    ${radiologia[i].prevision}`)
   
}

for (let i = 0; i <= traumatologia.length - 1; i++) {
    document.write(`${traumatologia[i].hora} -
                    ${traumatologia[i].especialista} - 
                    ${traumatologia[i].paciente} - 
                    ${traumatologia[i].rut} - 
                    ${traumatologia[i].prevision}`)
}

for (let i = 0; i <= dental.length - 1; i++) {
    document.write(`${dental[i].hora} - 
                    ${dental[i].especialista} - 
                    ${dental[i].paciente} - 
                    ${dental[i].rut} - 
                    ${dental[i].prevision}`)
}

