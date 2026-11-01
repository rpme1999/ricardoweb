export type Choice = {
  id: string
  text: string
  correct: boolean
  tip: string
}

export type Question = {
  id: string
  tool: 'taladro' | 'ancla' | 'caja' | 'nivel' | 'llave'
  prompt: string
  context?: string
  choices: Choice[]
}

export type Mission = {
  id: string
  title: string
  subtitle: string
  icon: string
  accent: string
  blurb: string
  questions: Question[]
}

export const missions: Mission[] = [
  {
    id: 'cultura',
    title: 'Cultura Hilti',
    subtitle: 'Care & Perform',
    icon: 'caja',
    accent: '#E3001B',
    blurb: 'Ancla los valores, el purpose y la forma de trabajar en Hilti.',
    questions: [
      {
        id: 'c1',
        tool: 'caja',
        prompt: '¿Cuál es el purpose actual de Hilti?',
        context: 'Es la brújula de toda la compañía.',
        choices: [
          {
            id: 'a',
            text: 'Making Construction Better',
            correct: true,
            tip: 'Correcto: Hilti existe para hacer la construcción más productiva, segura y sostenible.',
          },
          {
            id: 'b',
            text: 'Sell More Power Tools',
            correct: false,
            tip: 'Las herramientas son el medio. El purpose es mejorar la construcción.',
          },
          {
            id: 'c',
            text: 'Build the Cheapest Jobsite',
            correct: false,
            tip: 'Hilti compite por diferenciación y valor, no por ser el más barato.',
          },
        ],
      },
      {
        id: 'c2',
        tool: 'ancla',
        prompt: '¿Cuáles son los 4 valores de Hilti?',
        choices: [
          {
            id: 'a',
            text: 'Integridad, Coraje, Trabajo en equipo, Compromiso',
            correct: true,
            tip: 'Integrity, Courage, Teamwork, Commitment: la base de cómo se actúa cada día.',
          },
          {
            id: 'b',
            text: 'Velocidad, Precio, Volumen, Margen',
            correct: false,
            tip: 'Esos son métricas de negocio, no los valores culturales.',
          },
          {
            id: 'c',
            text: 'Innovación, Marketing, Logística, IT',
            correct: false,
            tip: 'Son funciones. Los valores guían el comportamiento de todo el equipo.',
          },
        ],
      },
      {
        id: 'c3',
        tool: 'nivel',
        prompt: '¿Cómo define Hilti su cultura?',
        choices: [
          {
            id: 'a',
            text: 'Caring and performance-oriented',
            correct: true,
            tip: 'Se cuida a las personas y se exige alto desempeño al mismo tiempo.',
          },
          {
            id: 'b',
            text: 'Solo resultados, sin importar cómo',
            correct: false,
            tip: 'El “care” es tan importante como el performance.',
          },
          {
            id: 'c',
            text: 'Relajada y sin metas claras',
            correct: false,
            tip: 'Hilti es exigente: quiere ganar, y ganar en equipo.',
          },
        ],
      },
      {
        id: 'c4',
        tool: 'taladro',
        prompt: 'Un principio clave del modelo Hilti es…',
        choices: [
          {
            id: 'a',
            text: 'Relación directa con el cliente (direct sales)',
            correct: true,
            tip: 'La cercanía al cliente es una ventaja competitiva central de Hilti.',
          },
          {
            id: 'b',
            text: 'Vender solo por distribuidores anónimos',
            correct: false,
            tip: 'Hilti prioriza el contacto directo para entender necesidades reales.',
          },
          {
            id: 'c',
            text: 'Competir únicamente por precio bajo',
            correct: false,
            tip: 'La estrategia apunta a liderazgo por diferenciación y valor.',
          },
        ],
      },
      {
        id: 'c5',
        tool: 'llave',
        prompt: 'En una reunión, un colega señala un error en tu reporte. ¿Qué refleja mejor la cultura Hilti?',
        choices: [
          {
            id: 'a',
            text: 'Agradecer el feedback, corregir y compartir el aprendizaje',
            correct: true,
            tip: 'Coraje + teamwork: el feedback construye, no castiga.',
          },
          {
            id: 'b',
            text: 'Defenderte aunque sepas que hay un error',
            correct: false,
            tip: 'La integridad pide reconocer y arreglar, no tapar.',
          },
          {
            id: 'c',
            text: 'Ignorarlo para no “hacer ruido”',
            correct: false,
            tip: 'El compromiso con la calidad exige actuar.',
          },
        ],
      },
      {
        id: 'c6',
        tool: 'caja',
        prompt: '“We are one Hilti” significa principalmente…',
        choices: [
          {
            id: 'a',
            text: 'Un equipo global que colabora con un mismo propósito',
            correct: true,
            tip: 'Diversidad local, identidad compartida y apoyo mutuo.',
          },
          {
            id: 'b',
            text: 'Que solo existe la sede y nada local importa',
            correct: false,
            tip: 'Lo local importa; se alinea con el estándar global.',
          },
          {
            id: 'c',
            text: 'Que finanzas trabaja aislada del negocio',
            correct: false,
            tip: 'El controller es partner del negocio, no un silo.',
          },
        ],
      },
    ],
  },
  {
    id: 'finanzas',
    title: 'Finanzas Controller',
    subtitle: 'Números con impacto',
    icon: 'taladro',
    accent: '#C4A35A',
    blurb: 'Domina los conceptos que usarás día a día como Finance Controller.',
    questions: [
      {
        id: 'f1',
        tool: 'nivel',
        prompt: '¿Para qué sirve principalmente el controlling?',
        context: 'Piensa en brújula, no solo en archivo.',
        choices: [
          {
            id: 'a',
            text: 'Planificar, medir, explicar desviaciones y orientar decisiones',
            correct: true,
            tip: 'El controller traduce números en acción para el negocio.',
          },
          {
            id: 'b',
            text: 'Solo archivar facturas al final del mes',
            correct: false,
            tip: 'Eso es parte operativa; controlling es más estratégico.',
          },
          {
            id: 'c',
            text: 'Fijar precios de retail al consumidor final',
            correct: false,
            tip: 'Pricing es colaborativo; controlling aporta análisis de margen.',
          },
        ],
      },
      {
        id: 'f2',
        tool: 'ancla',
        prompt: 'Una desviación (variance) favorable de gastos significa…',
        choices: [
          {
            id: 'a',
            text: 'Gastaste menos de lo presupuestado',
            correct: true,
            tip: 'Favorable en costos = por debajo del budget. Siempre investiga el “por qué”.',
          },
          {
            id: 'b',
            text: 'Gastaste más de lo presupuestado',
            correct: false,
            tip: 'Eso sería desfavorable / adverse.',
          },
          {
            id: 'c',
            text: 'Que el presupuesto no existía',
            correct: false,
            tip: 'Sin budget no hay variance que comparar.',
          },
        ],
      },
      {
        id: 'f3',
        tool: 'taladro',
        prompt: '¿Qué diferencia clave hay entre P&L y Cash Flow?',
        choices: [
          {
            id: 'a',
            text: 'P&L muestra resultado contable; Cash Flow muestra movimiento real de efectivo',
            correct: true,
            tip: 'Puedes tener utilidad y aún así quedar corto de caja (y viceversa).',
          },
          {
            id: 'b',
            text: 'Son exactamente lo mismo',
            correct: false,
            tip: 'Un clásico error. Timing, capex y working capital los separan.',
          },
          {
            id: 'c',
            text: 'Cash Flow solo importa en startups',
            correct: false,
            tip: 'En Hilti y en Panamá, la liquidez es crítica para operar.',
          },
        ],
      },
      {
        id: 'f4',
        tool: 'llave',
        prompt: 'El margen bruto baja aunque las ventas suben. ¿Qué miras primero?',
        choices: [
          {
            id: 'a',
            text: 'Mix de productos, descuentos, costos de producto y fletes',
            correct: true,
            tip: 'Volumen alto con mix malo o descuentos agresivos destruye margen.',
          },
          {
            id: 'b',
            text: 'Solo el color del logo en la factura',
            correct: false,
            tip: 'Necesitas drivers reales del margen.',
          },
          {
            id: 'c',
            text: 'Ignorarlo si el revenue creció',
            correct: false,
            tip: 'Crecer sin margen sano no crea valor sostenible.',
          },
        ],
      },
      {
        id: 'f5',
        tool: 'caja',
        prompt: '¿Qué es un forecast rolling?',
        choices: [
          {
            id: 'a',
            text: 'Una proyección que se actualiza de forma continua hacia adelante',
            correct: true,
            tip: 'Permite reaccionar al mercado sin esperar al próximo presupuesto anual.',
          },
          {
            id: 'b',
            text: 'Un presupuesto que nunca se revisa',
            correct: false,
            tip: 'Eso sería estático; el rolling vive con el negocio.',
          },
          {
            id: 'c',
            text: 'Un reporte solo de RR.HH.',
            correct: false,
            tip: 'Es una herramienta de planning financiero y comercial.',
          },
        ],
      },
      {
        id: 'f6',
        tool: 'nivel',
        prompt: 'Working capital alto por cuentas por cobrar significa…',
        choices: [
          {
            id: 'a',
            text: 'Hay más dinero “atado” en clientes que aún no pagan',
            correct: true,
            tip: 'DSO alto = presión de caja. El controller empuja cobranza y términos.',
          },
          {
            id: 'b',
            text: 'Que la empresa tiene exceso de efectivo libre',
            correct: false,
            tip: 'Al contrario: el efectivo está en manos del cliente.',
          },
          {
            id: 'c',
            text: 'Que no hay ventas',
            correct: false,
            tip: 'Puede haber muchas ventas… a crédito no cobrado.',
          },
        ],
      },
      {
        id: 'f7',
        tool: 'ancla',
        prompt: 'Un buen KPI de controlling para Hilti debería ser…',
        choices: [
          {
            id: 'a',
            text: 'Accionable, entendible por el negocio y ligado a valor',
            correct: true,
            tip: 'Si nadie puede actuar sobre el KPI, no sirve.',
          },
          {
            id: 'b',
            text: 'Lo más complejo posible para impresionar',
            correct: false,
            tip: 'La claridad gana. Complejidad innecesaria confunde.',
          },
          {
            id: 'c',
            text: 'Solo un número bonito en un dashboard',
            correct: false,
            tip: 'Sin narrativa y next steps, el dashboard es decoración.',
          },
        ],
      },
    ],
  },
  {
    id: 'panama',
    title: 'Controller Panamá',
    subtitle: 'Tu rol en el mercado',
    icon: 'ancla',
    accent: '#2F6B4F',
    blurb: 'Aterriza el puesto: partner del negocio, compliance local y ritmo Hilti.',
    questions: [
      {
        id: 'p1',
        tool: 'caja',
        prompt: 'Como Finance Controller en Panamá, tu rol principal es…',
        choices: [
          {
            id: 'a',
            text: 'Ser partner financiero del negocio local alineado a estándares Hilti',
            correct: true,
            tip: 'Traduces la realidad de Panamá al lenguaje del Group y viceversa.',
          },
          {
            id: 'b',
            text: 'Solo pagar nómina una vez al mes',
            correct: false,
            tip: 'Payroll puede existir cerca, pero controlling es mucho más amplio.',
          },
          {
            id: 'c',
            text: 'Ignorar al equipo comercial',
            correct: false,
            tip: 'Sin cercanía al sales/ops no hay buen controlling.',
          },
        ],
      },
      {
        id: 'p2',
        tool: 'taladro',
        prompt: 'Un sales manager pide un descuento agresivo “para ganar el deal”. Tú…',
        choices: [
          {
            id: 'a',
            text: 'Analizas margen, precedent y alternativas; decides con datos',
            correct: true,
            tip: 'Coraje + commitment: ayudas a ganar… sin destruir valor.',
          },
          {
            id: 'b',
            text: 'Apruebas todo para “caer bien”',
            correct: false,
            tip: 'Caer bien no sustituye integridad ni stewardship del margen.',
          },
          {
            id: 'c',
            text: 'Rechazas sin escuchar el contexto comercial',
            correct: false,
            tip: 'Teamwork: primero entiendes el caso, luego decides.',
          },
        ],
      },
      {
        id: 'p3',
        tool: 'nivel',
        prompt: 'En cierre de mes, ¿qué priorizas?',
        choices: [
          {
            id: 'a',
            text: 'Exactitud, timeline del Group, explicación de variances y clean numbers',
            correct: true,
            tip: 'Un cierre limpio y a tiempo es la “caja roja” del controller.',
          },
          {
            id: 'b',
            text: 'Mandar números aproximados sin revisar',
            correct: false,
            tip: 'La calidad del dato es reputación del área financiera.',
          },
          {
            id: 'c',
            text: 'Esperar a que “alguien más” cierre',
            correct: false,
            tip: 'Ownership: el controller lidera el ritmo del close.',
          },
        ],
      },
      {
        id: 'p4',
        tool: 'llave',
        prompt: 'Panamá opera en un entorno multi-moneda / dólarizado. ¿Qué implica para ti?',
        choices: [
          {
            id: 'a',
            text: 'Vigilar FX reporting, consistencia contable y comunicación clara al Group',
            correct: true,
            tip: 'Aunque el USD es local, el reporting Group exige disciplina y claridad.',
          },
          {
            id: 'b',
            text: 'Que FX nunca importa',
            correct: false,
            tip: 'Consolidation, intercompany y políticas Group sí importan.',
          },
          {
            id: 'c',
            text: 'Reportar en cualquier moneda sin estándar',
            correct: false,
            tip: 'Los estándares Hilti/Group no son opcionales.',
          },
        ],
      },
      {
        id: 'p5',
        tool: 'ancla',
        prompt: 'Detectas un gasto que no cuadra con política. ¿Qué haces?',
        choices: [
          {
            id: 'a',
            text: 'Escalar con hechos, proponer corrección y reforzar el control',
            correct: true,
            tip: 'Integridad primero: cuidar la compañía es parte del rol.',
          },
          {
            id: 'b',
            text: 'Guardarlo “para no crear conflicto”',
            correct: false,
            tip: 'Evitar el tema rompe integrity y commitment.',
          },
          {
            id: 'c',
            text: 'Acusarlo en público sin evidencia',
            correct: false,
            tip: 'Coraje con hechos y respeto: investiga antes de señalar.',
          },
        ],
      },
      {
        id: 'p6',
        tool: 'caja',
        prompt: '¿Cómo demuestras “care & perform” en tu primer trimestre?',
        choices: [
          {
            id: 'a',
            text: 'Entregar insights claros, cuidar al equipo y mejorar un proceso real',
            correct: true,
            tip: 'Resultados + personas. Esa es la marca Hilti.',
          },
          {
            id: 'b',
            text: 'Solo trabajar solo y en silencio absoluto',
            correct: false,
            tip: 'Teamwork y visibilidad sana aceleran tu impacto.',
          },
          {
            id: 'c',
            text: 'Criticar todo sin proponer mejoras',
            correct: false,
            tip: 'El coraje incluye soluciones, no solo diagnósticos.',
          },
        ],
      },
      {
        id: 'p7',
        tool: 'taladro',
        prompt: 'Tu “toolbox” de controller en Panamá incluye…',
        choices: [
          {
            id: 'a',
            text: 'P&L, forecast, cash, KPIs, storytelling y cercanía al negocio',
            correct: true,
            tip: 'Herramientas + juicio + relación. Como una Hilti bien armada.',
          },
          {
            id: 'b',
            text: 'Solo Excel sin conversar con nadie',
            correct: false,
            tip: 'Excel es necesario; el impacto viene al conectar con el negocio.',
          },
          {
            id: 'c',
            text: 'Únicamente presentaciones bonitas sin data',
            correct: false,
            tip: 'Sin sustancia financiera, el slide no sostiene decisiones.',
          },
        ],
      },
    ],
  },
]

export const toolLabels: Record<Question['tool'], string> = {
  taladro: 'Taladro',
  ancla: 'Ancla',
  caja: 'Caja roja',
  nivel: 'Nivel',
  llave: 'Llave',
}
