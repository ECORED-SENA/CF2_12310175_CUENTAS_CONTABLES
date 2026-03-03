<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Cuentas de orden
    
    p.mb-3 En Colombia las cuentas de orden son registros contables que se utilizan para controlar circunstancias, que no afectan directamente e inmediata el balance general ni el estado de resultados, pero sí a futuro. Se utilizan para control interno y dar información. Se registran en la clase 8 y 9. 

    p.mb-3 También se utiliza para conciliar las diferencias que existan entre los registros contables y las declaraciones tributarias. 

    p.mb-5 En la siguiente sección se revisará su clasificación.

    .fondo___slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Cuentas de orden deudoras (Clase 8)
                p.mb-0 Los dineros, los documentos y los bienes que conforman el grupo de cuentas de orden deudoras se manejan como las cuentas de activo, por lo tanto, su saldo es débito. Ejemplo: bienes y valores entregados en custodia o en garantía.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img30.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Cuentas de orden acreedoras (Clase 9)
                p.mb-0 Los bienes recibidos para custodia, manejo o negociación constituyen este grupo. Se manejan como cuentas de pasivo, por lo que su saldo es crédito. Ejemplo: bienes y valores recibidos en custodia y garantía.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img31.png', alt='' style="max-width: 500px").m-auto

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
