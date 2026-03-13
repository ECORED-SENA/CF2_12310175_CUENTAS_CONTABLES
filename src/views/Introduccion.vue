<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 El manejo de las cuentas nominales y los registros contables constituye el pilar fundamental para planear los aspectos contables de cualquier organización dentro de su sistema financiero. Estas cuentas, que agrupan los ingresos, gastos y costos, permiten desarrollar un registro contable detallado de la actividad financiera de la entidad, asegurando que cada movimiento se realice de acuerdo con las normas vigentes.  A continuación, se analizarán los fundamentos y la aplicación de las cuentas contables.

    .row.align-items-center.mb-5
      .col-xl
        .style___box_1.mb-3(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/intro/img1.jpg', alt='').m-auto
            .col-xl
              p.mb-0 En esta etapa del programa de formación virtual, es fundamental alcanzar un reconocimiento integral de los diversos tipos de cuentas, su caracterización y sus movimientos. Este conocimiento es la base para planear los aspectos contables de una entidad y asegurar un registro financiero que permita obtener un balance adecuado.
        p.mb-0 Al dominar estos conceptos, podrá desarrollar un registro contable de la actividad financiera bajo las normas vigentes, lo que garantiza un orden específico en las finanzas y una gestión eficiente de los ingresos. El material de esta actividad se centra en las cuentas nominales o de estado de resultados, herramientas clave para aplicar los aprendizajes adquiridos de manera proactiva y técnica.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/intro/img2.png", alt="").m-auto
    
    .row.align-items-center
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/intro/img3.jpg", alt="").m-auto
      .col-xl
        p.mb-0 La contabilidad es el eje de la organización financiera. A través de la clasificación de cuentas (reales y nominales) y el dominio de la partida doble, el aprendiz desarrolla la capacidad de realizar registros precisos bajo la normativa vigente. Este conocimiento permite analizar técnicamente ingresos, gastos y costos, facilitando una planeación financiera eficiente que se traduce en balances adecuados, tanto en el ámbito personal como en el corporativo.

</template>

<script>
export default {
  name: 'Introduccion',
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
