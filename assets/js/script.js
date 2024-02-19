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
document.write('<p>Estadisticas centro médico ñuñoa</p>');

  function mostrarTabla(listado, nombreListado) {
    document.write(`<strong>${nombreListado}</strong><br>`);
    document.write('<table>');
    document.write('<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Previsión</th></tr>');

    for (let i = 0; i < listado.length; i++) {
      document.write('<tr>');
      document.write(`<td>${listado[i].hora}</td>`);
      document.write(`<td>${listado[i].especialista}</td>`);
      document.write(`<td>${listado[i].paciente}</td>`);
      document.write(`<td>${listado[i].rut}</td>`);
      document.write(`<td>${listado[i].prevision}</td>`);
      document.write('</tr>');
    }

    document.write('</table><br>');
  }

  mostrarTabla(radiologia, "Radiología");
  mostrarTabla(traumatologia, "Traumatología");
  mostrarTabla(dental, "Dental");