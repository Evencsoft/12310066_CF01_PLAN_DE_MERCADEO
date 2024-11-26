<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-12
        p El desarrollo de un plan de mercadeo es un proceso fundamental en la gestión empresarial que permite alinear los recursos y capacidades de la organización con las oportunidades y amenazas del entorno competitivo. Para alcanzar los objetivos organizacionales, es necesario realizar un diagnóstico exhaustivo de la situación actual de la empresa, considerando tanto factores internos como externos. Este diagnóstico se convierte en la base sobre la cual se diseñan estrategias efectivas de #[i marketing] que no solo satisfagan las necesidades del cliente, sino que también generen una ventaja competitiva sostenible.
        p El plan de mercadeo facilita la planificación, ejecución y control de las acciones comerciales, asegurando que los productos o servicios ofrecidos respondan a las exigencias del mercado. Este curso se enfoca en proporcionar a los participantes las herramientas y conocimientos necesarios para ejecutar un plan de mercadeo de manera eficiente, utilizando metodologías de análisis y estrategias de mercadeo basadas en el #[i marketing mix].
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/imgintro.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Este componente formativo comenzará con un diagnóstico detallado de la situación empresarial, que permitirá a los participantes entender la realidad competitiva y formular objetivos estratégicos alineados con las metas organizacionales. Asimismo, se abordarán las herramientas de verificación del desempeño del plan, garantizando que se cumplan los plazos y las expectativas establecidas como principio a un plan de mercadeo que es lo que se busca completar.
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="1280" height="720" src="https://www.youtube.com/embed/8NH7O93yeDM" title="Diagnóstico de la situación de la empresa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
