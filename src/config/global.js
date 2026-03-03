export default {
  global: {
    Name: 'Cuentas nominales y registros contables',
    Description:
      'Este componente formativo ha sido estructurado para conocer las cuentas nominales, como herramientas esenciales para planear los aspectos contables de una entidad. Su correcto registro financiero permite obtener un balance adecuado y medir el rendimiento operativo. Asimismo, realizar registros contables bajo las normas vigentes, que garanticen actividades financieras transparente y que reflejen fielmente sus ingresos, costos y gastos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Cuentas nominales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Características',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Movimientos',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Cuentas de orden',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Registros contables',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Partida doble',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Asientos contables',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Ejercicios de aplicación',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Activo',
      significado:
        'conjunto de bienes y derechos que posee una entidad y que pueden generar beneficios económicos futuros, como caja, bancos, propiedades y equipos.',
    },
    {
      termino: 'Asiento contable',
      significado:
        'registro ordenado de una operación económica en los libros de contabilidad, donde se identifican las cuentas afectadas, los valores debitados y acreditados.',
    },
    {
      termino: 'Asiento simple',
      significado:
        'registro contable que afecta únicamente dos cuentas: una en el debe y otra en el haber.',
    },
    {
      termino: 'Asiento compuesto',
      significado:
        'registro contable en el que intervienen más de dos cuentas, ya sea varias deudoras y una acreedora, o una deudora y varias acreedoras.',
    },
    {
      termino: 'Balance de comprobación',
      significado:
        'estado contable que permite verificar la correcta aplicación de la partida doble, comprobando que la suma de los débitos sea igual a la suma de los créditos.',
    },
    {
      termino: 'Costo de ventas',
      significado:
        'valor de adquisición o producción de los bienes o servicios vendidos durante un periodo contable.',
    },
    {
      termino: 'Cuentas contables',
      significado:
        'instrumentos utilizados para registrar, clasificar y resumir las operaciones económicas de una entidad.',
    },
    {
      termino: 'Cuentas de orden',
      significado:
        'registros contables que controlan hechos económicos que no afectan de manera inmediata el balance general ni el estado de resultados, pero que pueden hacerlo en el futuro.',
    },
    {
      termino: 'Cuentas de orden acreedoras (Clase 9)',
      significado:
        'cuentas que registran bienes o valores recibidos en custodia, manejo o garantía, con naturaleza de pasivo y saldo crédito.',
    },
    {
      termino: 'Cuentas de orden deudoras (Clase 8)',
      significado:
        'cuentas que registran bienes o valores entregados en custodia o garantía, con naturaleza de activo y saldo débito.',
    },
    {
      termino: 'Cuentas nominales',
      significado:
        'cuentas transitorias que registran ingresos, gastos y costos durante un periodo contable y se cancelan al cierre del ejercicio.',
    },
    {
      termino: 'Debe',
      significado:
        'lado izquierdo de una cuenta contable donde se registran los aumentos de activos y gastos, y las disminuciones de pasivos, patrimonio e ingresos.',
    },
    {
      termino: 'Ecuación patrimonial',
      significado:
        'relación matemática fundamental de la contabilidad que expresa el equilibrio entre activo, pasivo y patrimonio.',
    },
    {
      termino: 'Gastos',
      significado:
        'disminuciones del patrimonio ocasionadas por la adquisición de bienes o servicios necesarios para el funcionamiento de la entidad.',
    },
    {
      termino: 'Haber',
      significado:
        'lado derecho de una cuenta contable donde se registran los aumentos de pasivos, patrimonio e ingresos, y las disminuciones de activos y gastos.',
    },
    {
      termino: 'Ingresos',
      significado:
        'incrementos en el patrimonio de una entidad originados por la venta de bienes, la prestación de servicios u otras actividades económicas.',
    },
    {
      termino: 'Ingresos operacionales',
      significado:
        'ingresos generados por la actividad principal u objeto social de la entidad.',
    },
    {
      termino: 'Ingresos no operacionales',
      significado:
        'ingresos obtenidos por actividades secundarias o distintas a la actividad principal de la entidad.',
    },
    {
      termino: 'Marco normativo contable',
      significado:
        'conjunto de normas legales que regulan el registro y la presentación de la información contable en Colombia, como el Decreto 2649 de 1993.',
    },
    {
      termino: 'Partida doble',
      significado:
        'principio contable según el cual toda operación económica debe registrarse afectando al menos dos cuentas, manteniendo el equilibrio entre el debe y el haber.',
    },
    {
      termino: 'Pasivo',
      significado:
        'obligaciones y deudas que tiene una entidad frente a terceros y que deben ser canceladas en el futuro.',
    },
    {
      termino: 'Patrimonio',
      significado:
        'valor residual de los activos de una entidad después de deducir todos sus pasivos; representa los aportes de los propietarios y los resultados acumulados.n',
    },
    {
      termino: 'Registro contable',
      significado:
        'proceso sistemático mediante el cual se identifican, clasifican y registran las operaciones económicas de una entidad.',
    },
    {
      termino: 'Costos',
      significado:
        'valores directamente relacionados con la producción de bienes o la prestación de servicios, necesarios para generar los ingresos de la entidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alcarria Jaime, J.  (2008).  Contabilidad Financiera  I.    Castelló de la Plana : Publicacions de la Universitat Jaume I. Servei de Comunicació i Publicacions,  2008..  Disponible en: ',
      link: 'https://libros.metabiblioteca.org/handle/001/255',
    },
    {
      referencia:
        'Coral, L., y Gudiño, E. (2008). Contabilidad universitaria. 6ta ed. Bogotá, Colombia: McGraw Hill. ',
      link: '',
    },
    {
      referencia:
        'Legis. (2008). Estatuto de la profesión de Contador Público. Reglamento general de la contabilidad. Plan único de cuentas para comerciantes.',
      link: '',
    },
    {
      referencia:
        'Scoponi, L. M., Casarsa, F. A., & Schmidt, M. A. (2018). Teoría general del costo y contabilidad de gestión: revisión doctrinal. Centro De Estudios De Administración, 1(1), 68-88. Recuperado a partir de ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Dania Aurelia Rueda Guanaro',
          cargo: 'Experta temática',
          centro: 'Regional Risaralda',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Jose Calderon Gutierrez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
