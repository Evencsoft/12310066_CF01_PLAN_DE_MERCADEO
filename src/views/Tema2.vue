<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Dirección estratégica de la empresa
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-up")
        p El direccionamiento estratégico de una empresa es un aspecto clave que define su identidad, propósito y los objetivos que guían sus operaciones diarias. Este concepto engloba una serie de elementos fundamentales que permiten a la organización mantenerse competitiva en su sector, al mismo tiempo que asegura la coherencia en sus acciones internas y externas. A continuación, se detallan los aspectos más importantes del direccionamiento estratégico de la empresa.
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Pero, ¿qué es una empresa? Una empresa puede ser entendida como un ente vivo que reúne a más de una persona —aunque también puede ser unipersonal— que trabaja en conjunto con el fin de alcanzar un objetivo común. Para ello, utiliza recursos financieros, administrativos, mercadológicos, materiales y humanos. Esta colaboración coordinada permite a la organización operar en el mercado y cumplir con sus metas. Las empresas pueden clasificarse de acuerdo con diversos criterios:
    
    .bg--gradientBlue.px-md-5.px-4.py-4.mb-5
      .row
        .col-lg-4.col-sm-8.mb-lg-0.mb-4.tarjeta.h100(data-aos="fade-right")
          .row.justify-content-center.mb-4
            .col-lg-10.col-8
              img(src='@/assets/curso/temas/tema2/img2.svg', alt='Imagen decorativa')
          h4.text-left Propiedad
          p.text-left.mb-0 Públicas, privadas o mixtas.  
        .col-lg-4.col-sm-8.mb-lg-0.mb-4.tarjeta.h100(data-aos="zoom-in")
          .row.justify-content-center.mb-4
            .col-lg-10.col-8
              img(src='@/assets/curso/temas/tema2/img3.svg', alt='Imagen decorativa')
          h4.text-left Producción
          p.text-left Primarias (explotación de recursos naturales), secundarias (transformación de recursos naturales), o terciarias (comercialización y prestación de servicios).
        .col-lg-4.col-sm-8.mb-lg-0.mb-4.tarjeta.h100(data-aos="fade-left")
          .row.justify-content-center.mb-4
            .col-lg-10.col-8
              img(src='@/assets/curso/temas/tema2/img4.svg', alt='Imagen decorativa')
          h4.text-left Tamaño
          p.text-left Micro, pequeñas, medianas y grandes empresas.
    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-up")
        p La conducción y gestión de una empresa se denomina administración o proceso administrativo, y abarca todas las actividades relacionadas con la planificación, organización, dirección y control de los procesos empresariales. Este enfoque administrativo es crucial para el dinamismo y el crecimiento de la organización en el largo plazo.
        p En el siguiente gráfico se describen, de manera general, las actividades de un proceso administrativo que se deben realizar en una empresa:
    
    .titulo-sexto.color-acento-contenido.offset-2(data-aos="zoom-in")
      h5 Figura 4.
      span  #[i Proceso administrativo ]
    
    .row.justify-content-center.mb-4
      .col-md-8.desktop(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img5.svg', alt='Se comparte el proceso administrativo en 4 fases: 1 Organizar: construir el organismo social y material de la empresa 2 Planear: visualizar el futuro 3 Controlar: verificar si lo planeado y organizado fue ejecutado 4 Dirigir: conducir y orientar al personal')
      .col-md-6.movil(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img5_1.svg', alt='Se comparte el proceso administrativo en 4 fases: 1 Organizar: construir el organismo social y material de la empresa 2 Planear: visualizar el futuro 3 Controlar: verificar si lo planeado y organizado fue ejecutado 4 Dirigir: conducir y orientar al personal')


    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Dirección estratégica
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-up")
        p El direccionamiento estratégico es el conjunto de principios y directrices que orientan a la empresa en sus actividades y decisiones a largo plazo. Se enfoca en construir una identidad corporativa sólida y coherente, que le permita diferenciarse en el mercado y posicionarse de manera competitiva. Los elementos clave del direccionamiento estratégico incluyen:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Principios corporativos")
            .col-md-12.mb-4.mb-md-0
              p Los principios corporativos son los valores y creencias fundamentales que guían las acciones de la empresa. Estos principios no solo influyen en la cultura organizacional, sino que también definen la manera en que la empresa interactúa con sus clientes, empleados, proveedores y la sociedad en general.
              figure
                img(src='@/assets/curso/temas/tema2/img6.png', alt='Imagen decorativa')
              
          .row(numero="2" titulo="Misión")
            .col-md-12.mb-4.mb-md-0
              p La misión es la razón de ser de la empresa, es decir, su propósito fundamental. Establece el enfoque central de la organización y responde a preguntas como: ¿Por qué existe la empresa?, ¿A qué negocio se dedica?, y ¿Quiénes son sus clientes? La misión debe ser conocida y compartida por todos los miembros de la organización, ya que establece una guía clara para las actividades y compromisos de cada colaborador.
              figure
                img(src='@/assets/curso/temas/tema2/img7.png', alt='Imagen decorativa')
          .row(numero="3" titulo="Visión")
            .col-md-12.mb-4.mb-md-0
              p La visión es una declaración que describe el estado futuro al que la empresa aspira llegar. Representa el sueño a largo plazo de los ejecutivos y sirve como guía estratégica para el desarrollo de las actividades empresariales. Una buena visión debe ser inspiradora, realista y medible a través de indicadores de gestión que permitan evaluar el progreso hacia los objetivos establecidos.
              figure
                img(src='@/assets/curso/temas/tema2/img8.png', alt='Imagen decorativa')
          .row(numero="4" titulo="Propósitos")
            .col-md-12.mb-4.mb-md-0
              p Los propósitos representan los principios y acciones que la empresa considera esenciales para la ejecución de sus estrategias. Estos son perennes en el tiempo y siempre orientan la actividad empresarial, sirviendo como base para la toma de decisiones a nivel organizacional.
              figure
                img(src='@/assets/curso/temas/tema2/img9.png', alt='Imagen decorativa')
          .row(numero="5" titulo="Objetivos estratégicos")
            .col-md-12.mb-4.mb-md-0
              p Los objetivos estratégicos son los resultados a largo plazo que la empresa espera alcanzar. Estos objetivos deben ser cuantificables, medibles, realistas, comprensibles y alineados con la visión corporativa. Los objetivos estratégicos se pueden clasificar en varias áreas clave, tales como crecimiento en ventas, rentabilidad, satisfacción del cliente, o expansión de activos.
              figure
                img(src='@/assets/curso/temas/tema2/img10.png', alt='Imagen decorativa')
          .row(numero="6" titulo="Metas")
            .col-md-12.mb-4.mb-md-0
              p Las metas son los puntos de llegada, a corto y largo plazo, que permiten evaluar el desempeño de la gestión empresarial. Están directamente relacionadas con los objetivos estratégicos y son esenciales para asegurar que los esfuerzos de la empresa estén encaminados hacia el logro de sus principales prioridades.
              figure
                img(src='@/assets/curso/temas/tema2/img11.png', alt='Imagen decorativa')
          .row(numero="7" titulo="Políticas")
            .col-md-12.mb-4.mb-md-0
              p Las políticas son normas de actuación que guían las decisiones dentro de la empresa. Estas políticas pueden aplicarse a áreas como compras, ventas, relaciones laborales y operaciones. Están diseñadas para asegurar que la empresa actúe de manera coherente con sus valores y objetivos, facilitando una toma de decisiones efectiva y alineada con la estrategia global.
              figure
                img(src='@/assets/curso/temas/tema2/img12.png', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="flip-up")
        p El direccionamiento estratégico es el conjunto de principios y directrices que orientan a la empresa en sus actividades y decisiones a largo plazo. Se enfoca en construir una identidad corporativa sólida y coherente, que le permita diferenciarse en el mercado y posicionarse de manera competitiva. Los elementos clave del direccionamiento estratégico incluyen:
    .titulo-sexto.color-acento-contenido.offset-1(data-aos="zoom-in")
      h5 Figura 5.
      span  #[i Perspectivas empresariales ]
    
    .row.justify-content-center.mb-4
      .col-md-10.desktop(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img13.svg', alt='Se comparten en la imagen las perspectivas empresariales del direccionamiento estratégico: Inicia por el aspecto financiero; sigue el conocimiento de los procesos y su desarrollo; posteriormente el trabajo con el personal; luego se hace el cierre por medio de los clientes, su conocimiento y trabajo.')
      .col-md-6.movil(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img13_1.svg', alt='Se comparten en la imagen las perspectivas empresariales del direccionamiento estratégico: Inicia por el aspecto financiero; sigue el conocimiento de los procesos y su desarrollo; posteriormente el trabajo con el personal; luego se hace el cierre por medio de los clientes, su conocimiento y trabajo.')
    tarjeta
    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Función del diagnóstico empresarial

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="flip-up")
        p El diagnóstico empresarial es una herramienta clave para evaluar la situación interna y externa de la empresa, con el fin de identificar oportunidades y desafíos que puedan influir en la formulación de su plan estratégico. Esta evaluación abarca varias áreas funcionales:
    .row.mb-4
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b Perspectiva financiera
          p.text-center Analiza la situación económica de la empresa, sus recursos y su capacidad para generar ingresos.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Perspectiva de procesos
          p.text-center Evalúa la eficiencia de los procesos operativos y su alineación con los objetivos estratégicos.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Perspectiva de personal 
          p.text-center Examina el desempeño de los recursos humanos y su contribución al logro de los objetivos organizacionales.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-gris.p-5
          .tarjeta-numerada__numero
            .h2 4
          p.text-center 
            b Perspectiva de clientes.
          p.text-center Considera la satisfacción y fidelidad de los clientes, así como su percepción de los productos y servicios ofrecidos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p El objetivo principal del diagnóstico es identificar las fortalezas y debilidades de la empresa, así como las oportunidades y amenazas presentes en su entorno. Esta información es fundamental para la formulación de estrategias que permitan a la organización mejorar su competitividad y asegurar su éxito a largo plazo.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
