<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Cuentas nominales
    
    p.mb-5 Las cuentas nominales son esenciales para planear los aspectos contables de una entidad, ya que permiten monitorear el flujo de recursos durante un ejercicio determinado. Al centrarse en los ingresos, gastos y costos, estas cuentas facilitan desarrollar un registro contable de la actividad financiera que se ajuste estrictamente a las normas vigentes. Su correcta identificación y manejo no solo son requisitos técnicos, sino pasos críticos para obtener un balance adecuado que revele la rentabilidad real de la organización.

    p.mb-5 Ahora se profundizará en el pulso de la operación: las cuentas nominales, esas fichas clave que revelan la verdadera salud financiera de cualquier negocio al cierre de cada ciclo.  

    .row.align-items-center.m-0
      .col-xl
        .row.align-items-center.style___box_2(data-aos="zoom-in")
          .col-auto
            figure.d-none.d-xl-block(data-aos="fade-right")
              img(src="@/assets/curso/temas/img1.svg" style="max-width: 220px").m-auto
          .col
            h4.mb-4 Pódcast
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Cuentas nominales o de resultado"
              :audio="require('@/assets/componentes/audios/CF2_podcast_cuentas_contables.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/temas/img2.jpg" ).m-auto

    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Conceptos

    p.mb-5 Las cuentas nominales, o de resultado, se denominan así porque al final del ejercicio contable muestran las utilidades, gastos y costos. También son llamadas cuentas transitorias, cuentas operacionales y cuentas de ganancias y pérdidas.

    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9(data-aos="zoom-in")
        .style___box_3.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img3.svg', alt="" style="max-width: 115px").m-auto
            h4.text-center Cuentas transitorias
            p.mb-0 Se cancela el cierre del período contable.
      .col-xl-4.col-md-9(data-aos="zoom-in").espacio___movil_3
        .style___box_3.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img4.svg', alt="" style="max-width: 115px").m-auto
            h4.text-center Cuentas operacionales
            p.mb-0 Representan los movimientos a razón de las operaciones que se efectúan durante el ciclo contable.
      .col-xl-4.col-md-9(data-aos="zoom-in").espacio___movil_3
        .style___box_3.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img5.svg', alt="" style="max-width: 115px").m-auto
            h4.text-center Cuentas de ganancias y pérdidas
            p.mb-0 Conforman el estado del mismo nombre.
    
    p.mb-5 A continuación, se revisará qué son ingresos, gastos y costos:

    .fondo___slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ingresos
                p.mb-0 Los ingresos se definen como los incrementos en el patrimonio neto de una entidad, siempre que no provengan de los aportes de los propietarios, originados por la actividad económica de venta de bienes y prestación de servicios, o por variaciones en el valor de activos y pasivos que exijan reconocimiento contable. Este flujo se manifiesta técnicamente a través de un aumento en el valor de los activos o una reducción de los pasivos (o una combinación de ambos), consolidando así una mejora real en la estructura financiera de la organización.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img7.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Gastos
                p.mb-0 Los gastos constituyen disminuciones del patrimonio neto de una organización que no tienen su origen en distribuciones de fondos a los propietarios, sino que derivan de la actividad económica de adquisición de bienes y servicios, o de variaciones en el valor de activos y pasivos que requieren reconocimiento contable. Este fenómeno se materializa de forma efectiva mediante la entrega o reducción de activos o la asunción de nuevos pasivos (o una combinación de ambos), lo que representa una salida de recursos o un incremento de las obligaciones financieras para la organización.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img8.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Costos
                p.mb-0 El costo de ventas representa el valor de adquisición de los productos destinados a la comercialización, así como todas las disminuciones patrimoniales asociadas directamente con la producción de bienes o la prestación de servicios que generan los ingresos del ente económico. Este concepto agrupa de manera integral tanto el precio de compra de las mercancías como los recursos consumidos en los procesos operativos de transformación, vinculando causalmente el esfuerzo productivo con la obtención de beneficios económicos.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img9.png', alt='' style="max-width: 500px").m-auto

    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Características

    .color___box_1
      .px-5

        p.mb-5 En esta parte se identificarán las características de los ingresos, los gastos y los costos de ventas y de esta manera ampliar la información pertinente que permitirá realizar los registros, según corresponda.

        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
          .col
            h3 Ingresos 

        p.mb-5 Con el objetivo de explorar más acerca de los ingresos, se estudiará la naturaleza, clasificación, cierre contable y marco normativo.
        
        .bg--img_03.mb-5
          .row.h-100.align-items-center
            .col-xl-auto
              figure(data-aos="fade-right").d-none.d-xl-block
                img(src="@/assets/curso/temas/img12.png", alt="" ).m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
                .row(titulo="Naturaleza").ajuste-cajaAcordion
                  p.mb-3 Agrupan los beneficios operativos y financieros que la organización percibe en el desarrollo normal de su objeto social durante un periodo determinado.
                  figure.d-none.d-xl-block.mb-3
                    img(src='@/assets/curso/temas/img13.jpg', alt='' style="max-width: 300px").m-auto 
                .row(titulo="Clasificación").ajuste-cajaAcordion
                  p.mb-3 Se dividen en ingresos operacionales, derivados de la actividad principal, y no operacionales, que provienen de actividades secundarias o adicionales.
                  figure.d-none.d-xl-block.mb-3
                    img(src='@/assets/curso/temas/img14.jpg', alt='' style="max-width: 300px").m-auto 
                .row(titulo="Cierre contable").ajuste-cajaAcordion
                  p.mb-3 Al finalizar el ejercicio, estas cuentas deben cancelarse contra la cuenta de Ganancias y Pérdidas, permitiendo determinar el resultado neto del periodo.
                  figure.d-none.d-xl-block.mb-3
                    img(src='@/assets/curso/temas/img15.jpg', alt='' style="max-width: 300px").m-auto 
                .row(titulo="Marco normativo").ajuste-cajaAcordion
                  p.mb-3 Su registro y manejo se rigen por los principios del Decreto 2649 de 1993, incluyendo las cuentas de uso frecuente detalladas en el proceso contable.
                  figure.d-none.d-xl-block.mb-3
                    img(src='@/assets/curso/temas/img16.jpg', alt='' style="max-width: 300px").m-auto 
                    
    .color___box_2
      .px-5

        p.mb-5 A continuación, se presentarán algunas cuentas que se manejan de los ingresos:

        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 1.
              span Ingresos
            .tabla-a.ajuste___tabla(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left CUENTA
                    th.texto-left NOMBRE
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left 4
                    td.texto-left Ingresos
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left 41
                    td.texto-left Operacionales
                  tr
                    td.ajuste-border-tabla.texto-left 4135
                    td.texto-left Comercio al por mayor y al por menor
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left 4140
                    td.texto-left Hoteles y restaurantes
                  tr
                    td.ajuste-border-tabla.texto-left 42
                    td.texto-left No operacionales
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left 4210
                    td.texto-left Financieros
                  tr
                    td.ajuste-border-tabla.texto-left 4220
                    td.texto-left Arrendamientos
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left 4225
                    td.texto-left Comisiones

        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
          .col
            h3 Gastos

        p.mb-5 Para conocer más sobre los gastos, se explorará acerca de su naturaleza, clasificación, cierre y relación con el patrimonio.

    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Naturaleza")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img18.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Naturaleza
            p.mb-0 Agrupan las cuentas que representan los cargos y erogaciones correspondientes al desarrollo normal de la actividad comercial de la organización.

      .py-3.py-md-4(titulo="Clasificación")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img19.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Clasificación
            p.mb-0 Se dividen en operacionales, vinculados directamente al objeto social, y no operacionales, que corresponden a actividades secundarias o imprevistas.
      
      .py-3.py-md-4(titulo="Cierre")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img20.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Cierre
            p.mb-0 Al final del periodo contable, estas cuentas deben cancelarse con cargo a la cuenta 5905 Ganancias y Pérdidas, para determinar el resultado del ejercicio.

      .py-3.py-md-4(titulo="Relación con el patrimonio")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img21.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Relación con el patrimonio
            p.mb-0 Son disminuciones en el beneficio económico, pero comparten el mismo ciclo de vida contable en cuanto a su liquidación anual.

    p.mb-5 Se analizarán ahora algunas cuentas que se manejan de los gastos:

    .row.justify-content-center.mb-5
      .col-xl-6
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 2.
          span Gastos
        .tabla-a.ajuste___tabla(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left CUENTA
                th.texto-left NOMBRE
            tbody
              tr
                td.ajuste-border-tabla.texto-left 5
                td.texto-left Gastos
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left 51
                td.texto-left Operacionales de administración
              tr
                td.ajuste-border-tabla.texto-left 5105
                td.texto-left Gastos de personal
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left 5110
                td.texto-left Honorarios
              tr
                td.ajuste-border-tabla.texto-left 5115
                td.texto-left Impuestos
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left 52
                td.texto-left No operacionales de ventas
              tr
                td.ajuste-border-tabla.texto-left 5205
                td.texto-left Gastos
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left 5210
                td.texto-left Honorarios
              tr
                td.ajuste-border-tabla.texto-left 5215
                td.texto-left Impuestos

    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
      .col
        h3 Costos de ventas

    p.mb-5 Seguidamente, se conocerán las características de los costos de ventas, tales como: acumulación de recursos, componentes del costo, trazabilidad del proceso y cierre contable.

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Acumulación de recursos
                p.mb-0 Contiene las cuentas que registran los costos directos e indirectos, que son indispensables para la fabricación de productos o la prestación de los servicios.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img22.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Componentes del costo
                p.mb-0 Están integrados por rubros operativos fundamentales como compras de mercancías, materias primas, inventarios, mano de obra directa y costos indirectos de fabricación (CIF).
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img23.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Trazabilidad del proceso
                p.mb-0 Permiten el control financiero de las distintas etapas operativas, abarcando desde el costo de la producción en proceso hasta el de la producción terminada lista para la venta.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img24.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Cierre contable
                p.mb-0 Al final del ejercicio económico, sus saldos deben cancelarse con cargo a la cuenta 5905 Ganancias y Pérdidas, siguiendo la misma dinámica de las cuentas de ingresos y gastos.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img25.png', alt='' style="max-width: 500px").m-auto

    .color___box_2
      .px-5

        p.mb-5 Se procederá a detallar algunas cuentas que se manejan de los costos:

        .row.justify-content-center.mb-0
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 3.
              span Costos
            .tabla-a.ajuste___tabla(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left CUENTA
                    th.texto-left NOMBRE
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left 6
                    td.texto-left Costo de ventas
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left 61
                    td.texto-left Costos de ventas y prestación de servicios
                  tr
                    td.ajuste-border-tabla.texto-left 6120
                    td.texto-left Industria
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left 6135
                    td.texto-left Comercio al por mayor al por menor
                  tr
                    td.ajuste-border-tabla.texto-left 62
                    td.texto-left Compras
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left 6205
                    td.texto-left De mercancías
                  tr
                    td.ajuste-border-tabla.texto-left 6225
                    td.texto-left Devoluciones en compras

        <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
        Separador
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3 Movimientos
        
        .color___box_1
          .px-5 

            p.mb-5 En esta parte se analizarán los movimientos de los ingresos, los gastos y los costos.

            TabsB.color-acento-contenido(data-aos="zoom-in")
              .py-4.py-md-5(titulo="Ingresos" :icono="require('@/assets/curso/temas/img26.svg')")
                .row.align-items-center
                  .col-xl-5.ajuste__movil_3
                    h4 Ingresos 
                    p.mb-0 Sus movimientos empiezan y aumentan en el haber; normalmente, no se debitan sino al final del período contable.
                  .col-xl-6.mb-4.mb-md-0.ajuste__movil_3.espacio___movil_3
                    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                      h5 Figura 1.
                      span Cuenta T de ingresos
                    figure(data-aos="zoom-in")
                      img(src='@/assets/curso/temas/img27.svg', alt='Esquema contable que representa el comportamiento de una cuenta de ingresos: los débitos reducen el saldo, mientras los créditos lo incrementan. La imagen resume la lógica básica del registro contable y la naturaleza acreedora característica de las cuentas de ingresos.' style="max-width: 500px")

              .py-4.py-md-5(titulo="Gastos" :icono="require('@/assets/curso/temas/img26.svg')")
                .row.align-items-center
                  .col-xl-5.ajuste__movil_3
                    h4 Gastos
                    p.mb-0 El movimiento de los gastos empieza y aumenta en el Debe, disminuye el saldo de esta cuenta y se cancela al final del período contable en el Haber.
                  .col-xl-6.mb-4.mb-md-0.ajuste__movil_3.espacio___movil_3
                    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                      h5 Figura 2.
                      span Cuenta T de gastos
                    figure(data-aos="zoom-in")
                      img(src='@/assets/curso/temas/img28.svg', alt='La imagen es una representación contable de una cuenta de gastos, donde los valores registrados en el debe incrementan el saldo y los registrados en el haber lo disminuyen. La imagen explica la naturaleza deudora propia de las cuentas utilizadas para reconocer costos y egresos.' style="max-width: 500px")
              
              .py-4.py-md-5(titulo="Costos" :icono="require('@/assets/curso/temas/img26.svg')")
                .row.align-items-center
                  .col-xl-5.ajuste__movil_3
                    h4 Costos
                    p.mb-0 Esta cuenta empieza y aumenta en el Debe, y se disminuye y cancela en el haber. Por lo general, no se acredita; su saldo es débito.
                  .col-xl-6.mb-4.mb-md-0.ajuste__movil_3.espacio___movil_3
                    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                      h5 Figura 3.
                      span Cuenta T de costos
                    figure(data-aos="zoom-in")
                      img(src='@/assets/curso/temas/img29.svg', alt='La ilustración representa la dinámica contable de la cuenta costos de ventas, donde los registros en el debe incrementan su saldo y los del haber lo disminuyen. Explica su naturaleza deudora y su función en el reconocimiento del costo asociado a las ventas.' style="max-width: 500px")

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
