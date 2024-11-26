export default {
  global: {
    componenteFormativo: 'Diagnóstico de la situación de la empresa',
    descripcionCurso:
      'Es necesario realizar un diagnóstico de mercados para que las empresas comprendan la realidad a la que se enfrentan en cada momento y mantengan una conexión constante con todos los ámbitos comerciales. Esta es la razón por la cual es fundamental trabajar este componente formativo para adquirir conocimientos que faciliten entender la situación real de una empresa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Diagnóstico de la situación de la empresa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Elementos clave del diagnóstico empresarial',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Matriz FODA',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Importancia del diagnóstico empresarial en el plan de mercadeo',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Dirección estratégica de la empresa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Dirección estratégica',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Función del diagnóstico empresarial',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Aprendiendo sobre el mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Definiciones de <em>marketing</em>',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'La planeación estratégica en el <em>marketing</em>',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'La segmentación',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Formulación estratégica para el plan de mercadeo',
        desarrolloContenidos: true,
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
        download: 'downloads/CFA_01_12310066_DU.pdf',
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
      tema: 'Introducción al CRM',
      referencia:
        'Lifeder Educación. (2022). ¿Qué es el DIAGNÓSTICO ORGANIZACIONAL y para qué sirve?',
      tipo: 'Video en línea',
      link: 'https://www.youtube.com/watch?v=SnJz_2__fC0',
    },
    {
      tema: 'Formulación estratégica para el plan de mercadeo',
      referencia:
        'TEDx Talks (2020). La evolución del marketing | Paul Soto | TEDxUANL.',
      tipo: 'Video en línea',
      link: 'https://www.youtube.com/watch?v=QyrL-K8AUuU',
    },
  ],
  glosario: [
    {
      termino: 'Bienes de consumo',
      significado:
        'productos elaborados expresamente para que los utilice el consumidor final, en contraposición a aquellos que se fabrican para revenderlos o utilizarlos en la fabricación de otros artículos. Productos, como cigarrillos, cerveza y goma de mascar que se compran con frecuencia, inmediatamente y con poco esfuerzo.',
    },
    {
      termino: 'Bienes industriales',
      significado:
        'artículos utilizados para producir otros bienes para su reventa.',
    },
    {
      termino: '<em>Brand</em>',
      significado: 'marca de producto o de un servicio.',
    },
    {
      termino: '<em>Branding</em>',
      significado:
        'la práctica de crear prestigio y gran valor a un producto con apoyo de marketing; dicha marca puede estar asociada o no al nombre de la empresa.',
    },
    {
      termino: 'Comportamiento de compra del consumidor',
      significado:
        'la conducta de compra de los consumidores finales, es decir, individuos y familias que adquieren bienes y servicios para consumo personal.',
    },
    {
      termino: 'Comportamiento del consumidor',
      significado:
        'forma en que un individuo llega a las decisiones relativas a la selección, compra y uso de bienes y servicios.',
    },
    {
      termino: 'Concepto de producto',
      significado:
        'noción que establece que los consumidores preferirán productos que ofrezcan mejor calidad, rendimiento o características y que la organización debe dedicar su energía a mejorarlos continuamente; versión detallada de la idea del nuevo producto expresada en términos comprensibles para los consumidores.',
    },
    {
      termino: 'Concepto de venta',
      significado:
        'idea de que el consumidor no comprará suficientes productos de la organización a menos que ésta haga un gran esfuerzo de promoción y ventas.',
    },
    {
      termino: 'Demandas',
      significado: 'deseos humanos apoyados por el poder de compra.',
    },
    {
      termino: 'Estrategia',
      significado:
        'arte de dirigir operaciones. Arte, traza para dirigir un asunto.',
    },
    {
      termino: 'Mercado objeto',
      significado:
        'grupo de compradores que comparten necesidades o características comunes, a los cuales una empresa decide servir.',
    },
    {
      termino: 'Mercado',
      significado:
        'grupo identificable de consumidores con cierto poder adquisitivo, que están dispuestos y disponibles para pagar por un producto o un servicio. La totalidad de los compradores potenciales y actuales de algún producto o servicio.',
    },
    {
      termino: 'Segmentación de mercado',
      significado:
        'proceso de clasificación de clientes en grupos con distintas necesidades, características o comportamientos. Se divide un mercado en grupos de consumidores bien definidos que acaso requieran productos o mezclas de mercadotecnia distintas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Baena, V. (2011). Fundamentos de marketing: entorno, consumidor, estrategia e investigación comercial. España: Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Kloter, P. (2008). Las preguntas más frecuentes sobre el marketing. Bogotá, Colombia: Editorial Norma.',
      link: '',
    },
    {
      referencia:
        'Lerma, A., & Bárcena, S. (2012). Planeación estratégica por áreas funcionales: guía práctica. México: Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Limas, S. (2012). Marketing empresarial: dirección como estrategia competitiva. Bogotá, Colombia: Ediciones de la U.',
      link: '',
    },
    {
      referencia:
        'Mesa, M. (2012). Fundamentos de marketing. Colombia: Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Sainz de Vicuña, J. (2004). La importancia del plan de marketing como herramienta de gestión. España: Ediciones Deusto - Planeta de Agostini Profesional y Formación S.L.',
      link: '',
    },
    {
      referencia:
        'Schnarch, A., & Schnarch, G. (2010). Marketing para emprendedores. Colombia: Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Schnarch, K. (2013). Marketing para Pymes: un enfoque para Latinoamérica. México: Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Solomon, M., & Stuart, E. (2001). Marketing. Personas reales, decisiones reales (2ª ed.). Bogotá, Colombia: Pearson Educación de Colombia Ltda.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos ',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gloria Eugenia Arango Londoño',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Johana Melina Montoya Piriachi',
          cargo: 'Asesora pedagógica',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Tabla Rico',
          cargo: 'Guionistas de la Línea de Producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz ',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseñadora web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador <em>Full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>Full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animación y producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
