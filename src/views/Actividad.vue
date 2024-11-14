<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Diagnóstico en la situación de una empresa.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> validar el conocimiento adquirido sobre el diagnóstico empresarial.<br>Lea cada enunciado referente a los temas desarrollados en el componente formativo y elija entre verdadero y falso según corresponda.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'El diagnóstico empresarial solo se enfoca en los factores internos de la organización.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Correcto! El diagnóstico empresarial abarca tanto factores internos como externos, incluyendo aspectos como el entorno competitivo, social, político, económico, y tecnológico.',
          mensaje_incorrecto:
            'Incorrecto. El diagnóstico empresarial evalúa factores internos y externos, proporcionando una visión completa de la situación de la empresa.',
        },
        {
          id: 2,
          texto:
            'La matriz FODA ayuda a identificar fortalezas, oportunidades, debilidades y amenazas de una empresa.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Bien hecho! La matriz FODA es una herramienta esencial para evaluar la posición de la empresa y formular estrategias efectivas.',
          mensaje_incorrecto:
            'No es correcto. La matriz FODA es una herramienta clave para identificar y analizar las fortalezas, oportunidades, debilidades, y amenazas de la empresa.',
        },
        {
          id: 3,
          texto:
            'El análisis interno se enfoca en estudiar los competidores y las tendencias del sector.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Exacto! El análisis interno evalúa los recursos y capacidades de la empresa, mientras que el análisis externo se encarga de estudiar el mercado, los competidores y las tendencias del sector.',
          mensaje_incorrecto:
            'No es correcto. El análisis interno se enfoca en los recursos y capacidades de la empresa. El análisis de competidores y tendencias se realiza en el análisis externo.',
        },
        {
          id: 4,
          texto:
            'Un diagnóstico empresarial incluye la evaluación de áreas como finanzas, recursos humanos, ventas y <em>marketing</em>.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! Un diagnóstico empresarial integral abarca diferentes áreas funcionales de la empresa, lo que permite una comprensión completa de su situación.',
          mensaje_incorrecto:
            'Incorrecto. El diagnóstico empresarial analiza áreas clave de la empresa, como finanzas, recursos humanos, ventas y marketing.',
        },
        {
          id: 5,
          texto:
            'El análisis PESTEL examina únicamente los factores tecnológicos que afectan a la empresa.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Bien hecho! El análisis PESTEL incluye factores políticos, económicos, sociales, tecnológicos, ecológicos y legales que pueden afectar a la empresa.',
          mensaje_incorrecto:
            'No es correcto. El análisis PESTEL examina diversos factores, no solo tecnológicos, sino también políticos, económicos, sociales, ecológicos y legales.',
        },
        {
          id: 6,
          texto:
            'La identificación de oportunidades de crecimiento es uno de los beneficios del diagnóstico empresarial.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Exacto! Un diagnóstico preciso permite identificar oportunidades en el mercado, facilitando la formulación de estrategias para el crecimiento de la empresa.',
          mensaje_incorrecto:
            'Incorrecto. El diagnóstico empresarial es fundamental para identificar oportunidades de crecimiento y mejorar la competitividad de la empresa.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el objetivo principal del diagnóstico de la situación de la empresa en el plan de mercadeo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Revisar la calidad de las relaciones con clientes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Analizar factores internos y externos para decisiones estratégicas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Mejorar el ambiente laboral y las condiciones de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaluar los resultados contables de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El diagnóstico permite analizar factores clave que afectan la competitividad.',
          mensaje_incorrecto:
            'Incorrecto. El diagnóstico se enfoca en factores internos y externos para decisiones estratégicas.',
        },
        {
          id: 8,
          texto:
            '¿Qué aspecto se evalúa en el análisis interno de una empresa?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Relaciones con el sector público y los entes reguladores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Preferencias y tendencias en el mercado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Recursos y capacidades organizacionales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Condiciones económicas del mercado global.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Bien hecho! El análisis interno se enfoca en los recursos y capacidades de la empresa.',
          mensaje_incorrecto:
            'Lo siento, el análisis interno se centra en los recursos y capacidades de la organización.',
        },
        {
          id: 9,
          texto: '¿Qué significa FODA en el análisis empresarial?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fortalezas, Oportunidades, Debilidades, Amenazas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Fuerza, Oportunidad, Diversidad, Alternativas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Financiamiento, Operaciones, Distribución, Administración.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Factores, Opciones, Desventajas, Aspectos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto, FODA significa Fortalezas, Oportunidades, Debilidades y Amenazas.',
          mensaje_incorrecto:
            'Incorrecto, FODA se refiere a Fortalezas, Oportunidades, Debilidades y Amenazas.',
        },
        {
          id: 10,
          texto:
            '¿Qué herramienta evalúa factores políticos, económicos, sociales, tecnológicos, ecológicos y legales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Análisis PESTEL',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Análisis FODA',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Benchmarking</em> empresarial',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaluación general del sector',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! PESTEL evalúa estos factores del entorno macroeconómico.',
          mensaje_incorrecto:
            'Incorrecto, la herramienta que evalúa estos factores es el análisis PESTEL.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
