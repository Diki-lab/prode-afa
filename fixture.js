// Fixture oficial de la fase regular del Torneo Apertura LPF 2026.
// Fuente: https://www.ligaprofesional.ar/notas/primera/2025/12/11/fixtures-de-la-temporada-2026/

const ZONAS_LIGA_AFA = Object.freeze({
  A: Object.freeze([
    'Platense', 'Defensa y Justicia', 'Central Córdoba', 'Lanús',
    'Deportivo Riestra', 'Talleres', 'Boca Juniors', 'Estudiantes de La Plata',
    'Instituto', 'Gimnasia de Mendoza', 'San Lorenzo', 'Independiente',
    "Newell's Old Boys", 'Unión', 'Vélez Sarsfield'
  ]),
  B: Object.freeze([
    'Argentinos Juniors', 'Aldosivi', 'Atlético Tucumán', 'Banfield',
    'Barracas Central', 'Belgrano', 'River Plate', 'Gimnasia de La Plata',
    'Estudiantes de Río Cuarto', 'Independiente Rivadavia', 'Huracán',
    'Racing Club', 'Rosario Central', 'Sarmiento', 'Tigre'
  ])
});

const EQUIPOS_LIGA_AFA = Object.freeze([
  ...ZONAS_LIGA_AFA.A,
  ...ZONAS_LIGA_AFA.B
]);

const FIXTURE_APERTURA_2026 = Object.freeze([
  { date: '25/01/2026', matches: [
    ['Aldosivi', 'Defensa y Justicia'], ['Boca Juniors', 'Deportivo Riestra'],
    ['Independiente', 'Estudiantes de La Plata'], ['Talleres', "Newell's Old Boys"],
    ['Instituto', 'Vélez Sarsfield'], ['Unión', 'Platense'], ['San Lorenzo', 'Lanús'],
    ['Central Córdoba', 'Gimnasia de Mendoza'], ['Barracas Central', 'River Plate'],
    ['Gimnasia de La Plata', 'Racing Club'], ['Rosario Central', 'Belgrano'],
    ['Tigre', 'Estudiantes de Río Cuarto'], ['Argentinos Juniors', 'Sarmiento'],
    ['Banfield', 'Huracán'], ['Independiente Rivadavia', 'Atlético Tucumán']
  ]},
  { date: '28/01/2026', matches: [
    ['Atlético Tucumán', 'Central Córdoba'], ['Gimnasia de Mendoza', 'San Lorenzo'],
    ['Lanús', 'Unión'], ['Platense', 'Instituto'], ['Vélez Sarsfield', 'Talleres'],
    ["Newell's Old Boys", 'Independiente'], ['Estudiantes de La Plata', 'Boca Juniors'],
    ['Deportivo Riestra', 'Defensa y Justicia'], ['Huracán', 'Independiente Rivadavia'],
    ['Sarmiento', 'Banfield'], ['Estudiantes de Río Cuarto', 'Argentinos Juniors'],
    ['Belgrano', 'Tigre'], ['Racing Club', 'Rosario Central'],
    ['River Plate', 'Gimnasia de La Plata'], ['Aldosivi', 'Barracas Central']
  ]},
  { date: '01/02/2026', matches: [
    ['Barracas Central', 'Deportivo Riestra'], ['Defensa y Justicia', 'Estudiantes de La Plata'],
    ['Boca Juniors', "Newell's Old Boys"], ['Independiente', 'Vélez Sarsfield'],
    ['Talleres', 'Platense'], ['Instituto', 'Lanús'], ['Unión', 'Gimnasia de Mendoza'],
    ['San Lorenzo', 'Central Córdoba'], ['Gimnasia de La Plata', 'Aldosivi'],
    ['Rosario Central', 'River Plate'], ['Tigre', 'Racing Club'],
    ['Argentinos Juniors', 'Belgrano'], ['Banfield', 'Estudiantes de Río Cuarto'],
    ['Independiente Rivadavia', 'Sarmiento'], ['Atlético Tucumán', 'Huracán']
  ]},
  { date: '08/02/2026', matches: [
    ['Huracán', 'San Lorenzo'], ['Central Córdoba', 'Unión'],
    ['Gimnasia de Mendoza', 'Instituto'], ['Lanús', 'Talleres'],
    ['Platense', 'Independiente'], ['Vélez Sarsfield', 'Boca Juniors'],
    ["Newell's Old Boys", 'Defensa y Justicia'], ['Estudiantes de La Plata', 'Deportivo Riestra'],
    ['Sarmiento', 'Atlético Tucumán'], ['Estudiantes de Río Cuarto', 'Independiente Rivadavia'],
    ['Belgrano', 'Banfield'], ['Racing Club', 'Argentinos Juniors'],
    ['River Plate', 'Tigre'], ['Aldosivi', 'Rosario Central'],
    ['Barracas Central', 'Gimnasia de La Plata']
  ]},
  { date: '15/02/2026', matches: [
    ['Gimnasia de La Plata', 'Estudiantes de La Plata'],
    ['Deportivo Riestra', "Newell's Old Boys"], ['Defensa y Justicia', 'Vélez Sarsfield'],
    ['Boca Juniors', 'Platense'], ['Independiente', 'Lanús'],
    ['Talleres', 'Gimnasia de Mendoza'], ['Instituto', 'Central Córdoba'],
    ['Unión', 'San Lorenzo'], ['Rosario Central', 'Barracas Central'],
    ['Tigre', 'Aldosivi'], ['Argentinos Juniors', 'River Plate'],
    ['Banfield', 'Racing Club'], ['Independiente Rivadavia', 'Belgrano'],
    ['Atlético Tucumán', 'Estudiantes de Río Cuarto'], ['Huracán', 'Sarmiento']
  ]},
  { date: '22/02/2026', matches: [
    ['Vélez Sarsfield', 'River Plate'], ['Platense', 'Barracas Central'],
    ['Rosario Central', 'Talleres'], ['Estudiantes de La Plata', 'Sarmiento'],
    ['Defensa y Justicia', 'Belgrano'], ['Argentinos Juniors', 'Lanús'],
    ['Boca Juniors', 'Racing Club'], ['Independiente Rivadavia', 'Independiente'],
    ['Unión', 'Aldosivi'], ['Instituto', 'Atlético Tucumán'],
    ['San Lorenzo', 'Estudiantes de Río Cuarto'], ['Gimnasia de Mendoza', 'Gimnasia de La Plata'],
    ['Central Córdoba', 'Tigre'], ['Deportivo Riestra', 'Huracán'],
    ['Banfield', "Newell's Old Boys"]
  ]},
  { date: '25/02/2026', matches: [
    ['Sarmiento', 'Unión'], ['San Lorenzo', 'Instituto'], ['Central Córdoba', 'Talleres'],
    ['Gimnasia de Mendoza', 'Independiente'], ['Lanús', 'Boca Juniors'],
    ['Platense', 'Defensa y Justicia'], ['Vélez Sarsfield', 'Deportivo Riestra'],
    ["Newell's Old Boys", 'Estudiantes de La Plata'], ['Estudiantes de Río Cuarto', 'Huracán'],
    ['Belgrano', 'Atlético Tucumán'], ['Racing Club', 'Independiente Rivadavia'],
    ['River Plate', 'Banfield'], ['Aldosivi', 'Argentinos Juniors'],
    ['Barracas Central', 'Tigre'], ['Gimnasia de La Plata', 'Rosario Central']
  ]},
  { date: '01/03/2026', matches: [
    ["Newell's Old Boys", 'Rosario Central'], ['Estudiantes de La Plata', 'Vélez Sarsfield'],
    ['Deportivo Riestra', 'Platense'], ['Defensa y Justicia', 'Lanús'],
    ['Boca Juniors', 'Gimnasia de Mendoza'], ['Independiente', 'Central Córdoba'],
    ['Talleres', 'San Lorenzo'], ['Instituto', 'Unión'],
    ['Tigre', 'Gimnasia de La Plata'], ['Argentinos Juniors', 'Barracas Central'],
    ['Banfield', 'Aldosivi'], ['Independiente Rivadavia', 'River Plate'],
    ['Atlético Tucumán', 'Racing Club'], ['Huracán', 'Belgrano'],
    ['Sarmiento', 'Estudiantes de Río Cuarto']
  ]},
  { date: '08/03/2026', matches: [
    ['Estudiantes de Río Cuarto', 'Instituto'], ['Unión', 'Talleres'],
    ['San Lorenzo', 'Independiente'], ['Central Córdoba', 'Boca Juniors'],
    ['Gimnasia de Mendoza', 'Defensa y Justicia'], ['Lanús', 'Deportivo Riestra'],
    ['Platense', 'Estudiantes de La Plata'], ['Vélez Sarsfield', "Newell's Old Boys"],
    ['Belgrano', 'Sarmiento'], ['Racing Club', 'Huracán'],
    ['River Plate', 'Atlético Tucumán'], ['Aldosivi', 'Independiente Rivadavia'],
    ['Barracas Central', 'Banfield'], ['Gimnasia de La Plata', 'Argentinos Juniors'],
    ['Rosario Central', 'Tigre']
  ]},
  { date: '11/03/2026', matches: [
    ['Tigre', 'Vélez Sarsfield'], ["Newell's Old Boys", 'Platense'],
    ['Estudiantes de La Plata', 'Lanús'], ['Deportivo Riestra', 'Gimnasia de Mendoza'],
    ['Defensa y Justicia', 'Central Córdoba'], ['Boca Juniors', 'San Lorenzo'],
    ['Independiente', 'Unión'], ['Talleres', 'Instituto'],
    ['Argentinos Juniors', 'Rosario Central'], ['Banfield', 'Gimnasia de La Plata'],
    ['Independiente Rivadavia', 'Barracas Central'], ['Atlético Tucumán', 'Aldosivi'],
    ['Huracán', 'River Plate'], ['Sarmiento', 'Racing Club'],
    ['Estudiantes de Río Cuarto', 'Belgrano']
  ]},
  { date: '15/03/2026', matches: [
    ['Belgrano', 'Talleres'], ['Instituto', 'Independiente'], ['Unión', 'Boca Juniors'],
    ['San Lorenzo', 'Defensa y Justicia'], ['Central Córdoba', 'Deportivo Riestra'],
    ['Gimnasia de Mendoza', 'Estudiantes de La Plata'], ['Lanús', "Newell's Old Boys"],
    ['Platense', 'Vélez Sarsfield'], ['Racing Club', 'Estudiantes de Río Cuarto'],
    ['River Plate', 'Sarmiento'], ['Aldosivi', 'Huracán'],
    ['Barracas Central', 'Atlético Tucumán'], ['Gimnasia de La Plata', 'Independiente Rivadavia'],
    ['Rosario Central', 'Banfield'], ['Tigre', 'Argentinos Juniors']
  ]},
  { date: '22/03/2026', matches: [
    ['Argentinos Juniors', 'Platense'], ['Vélez Sarsfield', 'Lanús'],
    ["Newell's Old Boys", 'Gimnasia de Mendoza'], ['Estudiantes de La Plata', 'Central Córdoba'],
    ['Deportivo Riestra', 'San Lorenzo'], ['Defensa y Justicia', 'Unión'],
    ['Boca Juniors', 'Instituto'], ['Independiente', 'Talleres'],
    ['Banfield', 'Tigre'], ['Independiente Rivadavia', 'Rosario Central'],
    ['Atlético Tucumán', 'Gimnasia de La Plata'], ['Huracán', 'Barracas Central'],
    ['Sarmiento', 'Aldosivi'], ['Estudiantes de Río Cuarto', 'River Plate'],
    ['Belgrano', 'Racing Club']
  ]},
  { date: '05/04/2026', matches: [
    ['Independiente', 'Racing Club'], ['Talleres', 'Boca Juniors'],
    ['Instituto', 'Defensa y Justicia'], ['Unión', 'Deportivo Riestra'],
    ['San Lorenzo', 'Estudiantes de La Plata'], ['Central Córdoba', "Newell's Old Boys"],
    ['Gimnasia de Mendoza', 'Vélez Sarsfield'], ['Lanús', 'Platense'],
    ['River Plate', 'Belgrano'], ['Aldosivi', 'Estudiantes de Río Cuarto'],
    ['Barracas Central', 'Sarmiento'], ['Gimnasia de La Plata', 'Huracán'],
    ['Rosario Central', 'Atlético Tucumán'], ['Tigre', 'Independiente Rivadavia'],
    ['Argentinos Juniors', 'Banfield']
  ]},
  { date: '12/04/2026', matches: [
    ['Lanús', 'Banfield'], ['Platense', 'Gimnasia de Mendoza'],
    ['Vélez Sarsfield', 'Central Córdoba'], ["Newell's Old Boys", 'San Lorenzo'],
    ['Estudiantes de La Plata', 'Unión'], ['Deportivo Riestra', 'Instituto'],
    ['Defensa y Justicia', 'Talleres'], ['Boca Juniors', 'Independiente'],
    ['Independiente Rivadavia', 'Argentinos Juniors'], ['Atlético Tucumán', 'Tigre'],
    ['Huracán', 'Rosario Central'], ['Sarmiento', 'Gimnasia de La Plata'],
    ['Estudiantes de Río Cuarto', 'Barracas Central'], ['Belgrano', 'Aldosivi'],
    ['Racing Club', 'River Plate']
  ]},
  { date: '19/04/2026', matches: [
    ['River Plate', 'Boca Juniors'], ['Independiente', 'Defensa y Justicia'],
    ['Talleres', 'Deportivo Riestra'], ['Instituto', 'Estudiantes de La Plata'],
    ['Unión', "Newell's Old Boys"], ['San Lorenzo', 'Vélez Sarsfield'],
    ['Central Córdoba', 'Platense'], ['Gimnasia de Mendoza', 'Lanús'],
    ['Aldosivi', 'Racing Club'], ['Barracas Central', 'Belgrano'],
    ['Gimnasia de La Plata', 'Estudiantes de Río Cuarto'], ['Rosario Central', 'Sarmiento'],
    ['Tigre', 'Huracán'], ['Argentinos Juniors', 'Atlético Tucumán'],
    ['Banfield', 'Independiente Rivadavia']
  ]},
  { date: '26/04/2026', matches: [
    ['Independiente Rivadavia', 'Gimnasia de Mendoza'], ['Lanús', 'Central Córdoba'],
    ['Platense', 'San Lorenzo'], ['Vélez Sarsfield', 'Unión'],
    ["Newell's Old Boys", 'Instituto'], ['Estudiantes de La Plata', 'Talleres'],
    ['Deportivo Riestra', 'Independiente'], ['Defensa y Justicia', 'Boca Juniors'],
    ['Atlético Tucumán', 'Banfield'], ['Huracán', 'Argentinos Juniors'],
    ['Sarmiento', 'Tigre'], ['Estudiantes de Río Cuarto', 'Rosario Central'],
    ['Belgrano', 'Gimnasia de La Plata'], ['Racing Club', 'Barracas Central'],
    ['River Plate', 'Aldosivi']
  ]}
]);

// Programación oficial publicada por la LPF para las fechas 1, 2, 3 y 4
// del Torneo Clausura 2026. Las fechas posteriores permanecen pendientes
// hasta que la Liga confirme día y horario.
const PROGRAMACION_CLAUSURA_2026 = Object.freeze({
  'Belgrano|Rosario Central': ['23/07/2026', '19:30'],
  'Sarmiento|Argentinos Juniors': ['23/07/2026', '19:30'],
  'Defensa y Justicia|Aldosivi': ['23/07/2026', '21:45'],
  'Gimnasia de Mendoza|Central Córdoba': ['24/07/2026', '16:45'],
  'Racing Club|Gimnasia de La Plata': ['24/07/2026', '19:00'],
  'Vélez Sarsfield|Instituto': ['24/07/2026', '19:00'],
  'Huracán|Banfield': ['24/07/2026', '21:15'],
  'Platense|Unión': ['24/07/2026', '21:15'],
  'Estudiantes de Río Cuarto|Tigre': ['25/07/2026', '14:45'],
  "Newell's Old Boys|Talleres": ['25/07/2026', '17:00'],
  'River Plate|Barracas Central': ['25/07/2026', '19:15'],
  'Lanús|San Lorenzo': ['25/07/2026', '21:30'],
  'Atlético Tucumán|Independiente Rivadavia': ['26/07/2026', '15:00'],
  'Estudiantes de La Plata|Independiente': ['26/07/2026', '17:15'],
  'Deportivo Riestra|Boca Juniors': ['26/07/2026', '19:30'],

  'San Lorenzo|Gimnasia de Mendoza': ['28/07/2026', '19:00'],
  'Banfield|Sarmiento': ['28/07/2026', '19:00'],
  'Argentinos Juniors|Estudiantes de Río Cuarto': ['28/07/2026', '21:15'],
  'Rosario Central|Racing Club': ['28/07/2026', '21:15'],
  'Barracas Central|Aldosivi': ['29/07/2026', '14:30'],
  'Defensa y Justicia|Deportivo Riestra': ['29/07/2026', '17:00'],
  'Gimnasia de La Plata|River Plate': ['29/07/2026', '19:15'],
  'Instituto|Platense': ['29/07/2026', '21:30'],
  'Independiente Rivadavia|Huracán': ['30/07/2026', '19:00'],
  'Talleres|Vélez Sarsfield': ['30/07/2026', '19:00'],
  "Independiente|Newell's Old Boys": ['30/07/2026', '21:15'],
  'Central Córdoba|Atlético Tucumán': ['30/07/2026', '21:15'],
  'Boca Juniors|Estudiantes de La Plata': ['05/08/2026', '19:00'],
  'Tigre|Belgrano': ['05/08/2026', '21:15'],
  'Unión|Lanús': ['06/08/2026', '19:00'],

  'Gimnasia de Mendoza|Unión': ['01/08/2026', '15:30'],
  'Estudiantes de Río Cuarto|Banfield': ['01/08/2026', '15:30'],
  'Belgrano|Argentinos Juniors': ['01/08/2026', '18:00'],
  'Estudiantes de La Plata|Defensa y Justicia': ['01/08/2026', '18:00'],
  'Racing Club|Tigre': ['01/08/2026', '20:30'],
  'Deportivo Riestra|Barracas Central': ['02/08/2026', '14:30'],
  'Aldosivi|Gimnasia de La Plata': ['02/08/2026', '14:30'],
  "Newell's Old Boys|Boca Juniors": ['02/08/2026', '17:00'],
  'River Plate|Rosario Central': ['02/08/2026', '19:15'],
  'Lanús|Instituto': ['02/08/2026', '21:30'],
  'Sarmiento|Independiente Rivadavia': ['03/08/2026', '16:45'],
  'Platense|Talleres': ['03/08/2026', '19:00'],
  'Vélez Sarsfield|Independiente': ['03/08/2026', '19:00'],
  'Central Córdoba|San Lorenzo': ['03/08/2026', '21:15'],
  'Huracán|Atlético Tucumán': ['03/08/2026', '21:15'],

  'Rosario Central|Aldosivi': ['07/08/2026', '19:30'],
  'Independiente Rivadavia|Estudiantes de Río Cuarto': ['07/08/2026', '21:45'],
  'Deportivo Riestra|Estudiantes de La Plata': ['08/08/2026', '14:45'],
  'Atlético Tucumán|Sarmiento': ['08/08/2026', '14:45'],
  'Tigre|River Plate': ['08/08/2026', '17:00'],
  'Boca Juniors|Vélez Sarsfield': ['08/08/2026', '19:15'],
  'Independiente|Platense': ['08/08/2026', '21:30'],
  'Instituto|Gimnasia de Mendoza': ['08/08/2026', '21:30'],
  'San Lorenzo|Huracán': ['09/08/2026', '15:00'],
  "Defensa y Justicia|Newell's Old Boys": ['09/08/2026', '17:45'],
  'Gimnasia de La Plata|Barracas Central': ['09/08/2026', '17:45'],
  'Argentinos Juniors|Racing Club': ['09/08/2026', '20:15'],
  'Banfield|Belgrano': ['10/08/2026', '19:00'],
  'Unión|Central Córdoba': ['10/08/2026', '21:15'],
  'Talleres|Lanús': ['11/08/2026', '21:00']
});

const FIXTURE_CLAUSURA_2026 = Object.freeze(
  FIXTURE_APERTURA_2026.map(round => Object.freeze({
    date: '',
    matches: Object.freeze(round.matches.map(([home, away]) => Object.freeze([away, home])))
  }))
);

function buildKickoffFromDateAndTime(dateText, timeText) {
  const [day, month, year] = String(dateText || '').split('/').map(Number);
  const time = String(timeText || '').trim();
  const match = time.match(/^([01]\d|2[0-3]):([0-5]\d)$/);
  if (!day || !month || !year || !match) return '';
  return `${String(year).padStart(4, '0')}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T${match[1]}:${match[2]}:00-03:00`;
}

function getTeamZone(team) {
  if (ZONAS_LIGA_AFA.A.includes(team)) return 'A';
  if (ZONAS_LIGA_AFA.B.includes(team)) return 'B';
  return '';
}

function buildDefaultMatches() {
  let matchId = 1;
  return FIXTURE_CLAUSURA_2026.flatMap((round, roundIndex) =>
    round.matches.map(([home, away]) => {
      const homeZone = getTeamZone(home);
      const awayZone = getTeamZone(away);
      const phase = homeZone === awayZone ? `Zona ${homeZone}` : 'Interzonal';
      const [date = '', time = ''] = PROGRAMACION_CLAUSURA_2026[`${home}|${away}`] || [];
      return {
        id: matchId++,
        date,
        time,
        timeConfirmed: Boolean(date && time),
        group: `Fecha ${roundIndex + 1} - ${phase}`,
        home,
        away,
        homeGoals: '',
        awayGoals: '',
        kickoff: buildKickoffFromDateAndTime(date, time)
      };
    })
  );
}

window.ZONAS_LIGA_AFA = ZONAS_LIGA_AFA;
window.EQUIPOS_LIGA_AFA = EQUIPOS_LIGA_AFA;
window.FIXTURE_APERTURA_2026 = FIXTURE_APERTURA_2026;
window.FIXTURE_CLAUSURA_2026 = FIXTURE_CLAUSURA_2026;
window.PROGRAMACION_CLAUSURA_2026 = PROGRAMACION_CLAUSURA_2026;
window.buildDefaultMatches = buildDefaultMatches;
