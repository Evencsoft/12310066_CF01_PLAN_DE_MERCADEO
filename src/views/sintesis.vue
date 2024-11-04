<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") La síntesis del componente formativo comparte de manera ordenada el diagnóstico empresarial como punto de partida de trabajo en el mercado permitiendo el análisis de las situaciones actuales de las empresas tal como se evidencia en el siguiente recurso:

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Se comparte un mapa que presenta: Diagnóstico organizacional inicia con el reconocimiento del direccionamiento estratégico que contiene Misión Visión Valores Posteriormente se analizan los: Factores internos y externos de la empresa que son las debilidades, fortalezas, oportunidades y amenazas que a su vez se conoce como la Matriz FODA")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
