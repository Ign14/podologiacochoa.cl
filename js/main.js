// JS base — sitio Podología Cochoa
// Función simple para abrir un evento prellenado en Google Calendar desde la página Agenda.
function q(s){return document.querySelector(s)}
function fmtDateBlock(dt){ // YYYYMMDDTHHMMSSZ (UTC)
  const z = new Date(dt).toISOString().replace(/[-:]/g,'').replace('.000','');
  return z.substring(0,15)+'Z';
}
function abrirEnGoogleCalendar(e){
  e?.preventDefault?.();
  const servicio = q('#servicio')?.value || 'Atención Podológica';
  const nombre = q('#nombre')?.value || '';
  const tel = q('#telefono')?.value || '';
  const notas = q('#notas')?.value || '';
  const fecha = q('#fecha')?.value;      // YYYY-MM-DD
  const hora = q('#hora')?.value;        // HH:MM

  if(!fecha || !hora){ alert('Selecciona fecha y hora'); return; }

  const [hh,mm] = hora.split(':').map(Number);
  const start = new Date(fecha + 'T00:00:00');
  start.setHours(hh, mm, 0, 0);
  const end = new Date(start.getTime() + 45*60000); // duración base 45 min (puedes ajustar)

  const title = `${servicio} — Podología Cochoa`;
  const detailsLines = [
    nombre ? `Cliente: ${nombre}` : null,
    tel ? `Teléfono: ${tel}` : null,
    notas ? `Notas: ${notas}` : null,
    "Agendado desde la web.",
    "Horario: Lunes a Sábado, 10:00–19:30 (solo con agenda)."
  ].filter(Boolean);
  const details = detailsLines.join('\n');

  const params = new URLSearchParams({
    action:'TEMPLATE',
    text:title,
    details:details,
    location:'Cochoa 0716, Puente Alto, Santiago, Puente Alto, Santiago'
  });
  params.append('add','virastorga@gmail.com');
  params.append('dates', fmtDateBlock(start) + '/' + fmtDateBlock(end));

  const url = 'https://calendar.google.com/calendar/render?' + params.toString();
  window.open(url, '_blank');
}
