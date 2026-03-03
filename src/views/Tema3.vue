<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Registros contables

    p.mb-5 Los registros contables se fundamentan en una organización financiera estructurada que comienza con la recolección sistemática de información dentro del proceso de una organización. Al identificar y clasificar las cuentas en reales, nominales y de resultado, se facilita el dominio de la técnica de registro bajo el concepto de partida doble, esencial para su aplicación en ejercicios prácticos. Este aprendizaje permite a las personas analizar y planear sus propios ingresos, gastos y costos, brindándoles las herramientas necesarias para medir su situación financiera personal y trasladar con éxito ese conocimiento básico al ámbito empresarial.

    .color___box_3
      .px-5 

        <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Partida doble

        p.mb-5 Es el método más utilizado para el registro de las operaciones contables. Cada operación debe registrarse dos veces, una en “debe” y otra en “haber”. Esto es similar a una balanza en equilibrio porque la suma de los registros en el “debe” y el “haber” debe coincidir. Para interiorizar estos conceptos realizaremos algunos ejemplos:

        .fondo___slider.mb-0
          .px-5
            .ajuste-slider(data-aos="zoom-in")
              SlyderA(tipo="b")
                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Ejemplo 1
                    p.mb-3 Una empresa vende al contado un terreno por $7.400.000. Esto quiere decir que recibió esa suma de dinero. 
                    p.mb-3 Cuando se vende al contado se recibe dinero, por lo que la cuenta de activos Caja aumenta, y por tanto se debita. 
                    p.mb-0 Al entregar un terreno, la cuenta de activos Terrenos disminuye, y entonces se acredita.
                  .col-xl-6
                    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                      h5 Figura 4.
                      span Registros
                    figure(data-aos="zoom-in")
                      img(src='@/assets/curso/temas/img32.svg', alt='Las imágenes representan en forma de cuenta T los registros realizados. Primero en la cuenta 1105 - Caja, donde se ubican en el “debe” el valor de $7.400.000 por la venta al contado del terreno y en contrapartida, en la cuenta 1504 - Terrenos, se ubicado en el “haber” los $7.400.000 porque disminuye el valor de los terrenos. ' style="max-width: 500px")
                
                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Ejemplo 2
                    p.mb-3 Una empresa realiza una compra de mercancías a crédito por $900.000. La cuenta de costo, denominada compra de mercancías aumenta, y por tanto se debita.
                    p.mb-0 Cuando se recibe la mercancía se debe pagar su valor, pero como fue comprada a crédito, las deudas aumentan, por lo que la cuenta de pasivo llamada proveedores nacionales se acredita.
                  .col-xl-6
                    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                      h5 Figura 5.
                      span Registros
                    figure(data-aos="zoom-in")
                      img(src='@/assets/curso/temas/img33.svg', alt='Las imágenes representan en forma de cuenta T los registros realizados. Primero en la cuenta 6205 - Compra de mercancía, donde se ubican en el “debe” el valor de $900.000 por la adquisición de mercancía y en contrapartida, en la cuenta 2205 -Proveedores nacionales, se ubicado en el “haber” los $900.000 porque la compra se realizó a crédito.' style="max-width: 500px")

    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Asientos contables

    p.mb-5 Un asiento contable es el registro de las operaciones mercantiles en los comprobantes y libros de contabilidad. Existen dos tipos de asientos:

    .color___box_2
      .px-5

        TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
          .py-3.py-md-4(titulo="Asiento simple")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 6.
                  span Registro
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img34.svg', alt='Las cuentas afectadas son dos: 1528 Equipo de computación y comunicación, que es una cuenta de activo,  que por aumentar se debita en 300.000; y por otra parte, la 1110 bancos, cuenta que es una cuenta del activo que, disminuye en 300.000, se acredita.' style="max-width: 500px")
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Asiento simple
                p.mb-3 Este registro se presenta cuando solo son afectadas dos cuentas: un débito y un crédito. 
                h4.txt--purpura.mb-4 Ejemplo: 
                p.mb-0 Se compra al contado, con cheque, un teléfono para uso de la empresa por $300.000. 

          .py-3.py-md-4(titulo="Asiento compuesto")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 7.
                  span Registro
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img35.svg', alt='Las cuentas afectadas son tres: 1105 Caja, cuenta del activo, que por recibir 200.000 de contado aumenta en el débito; la 1305 Clientes, que también es del activo, aumenta 620.000r en el débito porque es el saldo a crédito de la venta; y la 4135 Comercio al por mayor y al por menor, que es una cuenta de los ingresos, aumenta en el crédito en 820.000, que es el valor total de la venta. ' style="max-width: 500px")
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Asiento compuesto
                p.mb-3 Se genera cuando en el registro contable se afectan más de dos cuentas: puede ser una cuenta deudora y dos o más cuentas acreedoras, o dos o más cuentas deudoras y una acreedora.
                h4.txt--purpura.mb-4 Ejemplo: 
                p.mb-0 Una empresa vende mercancías por $820.000. Se reciben $200.000 de contado y el saldo a crédito.

        p.mb-5 Para registrar las operaciones mercantiles en los comprobantes y libros de contabilidad se cambia la estructura de la cuenta T por los asientos de diario, de forma horizontal.

        .row.justify-content-center.mb-0
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 4.
              span Asiento contable
            .tabla-a.ajuste___tabla(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Código
                    th.ajuste-border-tabla.texto-left Cuentas
                    th.ajuste-border-tabla.texto-left Debe
                    th.texto-left Haber
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left 1105
                    td.ajuste-border-tabla.texto-left Caja
                    td.ajuste-border-tabla.texto-left 200.000
                    td -
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left 1305
                    td.ajuste-border-tabla.texto-left Clientes
                    td.ajuste-border-tabla.texto-left 620.000
                    td -
                  tr
                    td.ajuste-border-tabla.texto-left 4135
                    td.ajuste-border-tabla.texto-left Comercio al por mayor y al por menor.
                    td.ajuste-border-tabla -
                    td.texto-left 820.000

    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Ejercicios de aplicación

    .color___box_1
        .px-5

          p.mb-5 En la presente sección se desarrollará una serie de ejercicios prácticos diseñados para fortalecer la comprensión del ciclo contable y la correcta aplicación del principio de devengo. A través de estos casos, se abordará el registro de transacciones de gastos e ingresos en sus diversas modalidades, incluyendo el tratamiento técnico de los gastos pagados por anticipado y los ingresos recibidos por adelantado. Asimismo, se profundizará en el reconocimiento de gastos causados por pagar, culminando el proceso con la comprobación de saldos para garantizar la integridad y el equilibrio de las cifras financieras presentadas.
          
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in").mb-5
            .row(titulo="Gastos").ajuste-cajaAcordion
              p.mb-3 Una empresa gira un cheque por $120,000 por concepto de arrendamiento de oficina por un mes.
              .ajuste-cajaAcordion_1
                .titulo-sexto.color-acento-contenido.mb-2
                  h5 Tabla 5.
                  span Primer asiento contable
                .tabla-a.ajuste___tabla.mb-4
                  table
                    thead
                      tr
                        th.ajuste-border-tabla.texto-left Código
                        th.ajuste-border-tabla.texto-left Cuentas
                        th.ajuste-border-tabla.texto-left Debe
                        th.texto-left Haber
                    tbody
                      tr
                        td.ajuste-border-tabla.texto-left 5120
                        td.ajuste-border-tabla.texto-left Arrendamientos
                        td.ajuste-border-tabla.texto-left 120.000
                        td  -
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left 1110
                        td.ajuste-border-tabla.texto-left Bancos
                        td.ajuste-border-tabla -
                        td.texto-left 120.000
              p.mb-3 Como la gestión se realiza por medio de un banco, esta cobra intereses por sobregiro y debita inmediatamente de la cuenta corriente de la empresa $5.000. 
              .ajuste-cajaAcordion_1
                .titulo-sexto.color-acento-contenido.mb-2
                  h5 Tabla 6.
                  span Segundo asiento contable
                .tabla-a.ajuste___tabla.mb-3
                  table
                    thead
                      tr
                        th.ajuste-border-tabla.texto-left Código
                        th.ajuste-border-tabla.texto-left Cuentas
                        th.ajuste-border-tabla.texto-left Debe
                        th.texto-left Haber
                    tbody
                      tr
                        td.ajuste-border-tabla.texto-left 5305
                        td.ajuste-border-tabla.texto-left Financieros
                        td.ajuste-border-tabla.texto-left 5.000
                        td -
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left 1110
                        td.ajuste-border-tabla.texto-left Bancos
                        td.ajuste-border-tabla -
                        td.texto-left 5.000
            .row(titulo="Gastos pagados por anticipado").ajuste-cajaAcordion
              p.mb-3 Una empresa gira un cheque por valor de $300.000 para pagar tres meses de arrendamiento adelantado.
              .ajuste-cajaAcordion_1
                .titulo-sexto.color-acento-contenido.mb-2
                  h5 Tabla 7.
                  span Asiento de gastos pagados por anticipado
                .tabla-a.ajuste___tabla.mb-3
                  table
                    thead
                      tr
                        th.ajuste-border-tabla.texto-left Código
                        th.ajuste-border-tabla.texto-left Cuentas
                        th.ajuste-border-tabla.texto-left Debe
                        th.texto-left Haber
                    tbody
                      tr
                        td.ajuste-border-tabla.texto-left 1705
                        td.ajuste-border-tabla.texto-left Gastos pagados por anticipado
                        td.ajuste-border-tabla.texto-left 300.000
                        td  -
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left 1110
                        td.ajuste-border-tabla -
                        td.ajuste-border-tabla -
                        td 300.000
            .row(titulo="Ingresos").ajuste-cajaAcordion
              p.mb-3 Una empresa obtiene honorarios por valor de $180.000 por asistencia técnica.
              .ajuste-cajaAcordion_1
                .titulo-sexto.color-acento-contenido.mb-2
                  h5 Tabla 8.
                  span Asiento de ingresos recibidos por anticipado
                .tabla-a.ajuste___tabla.mb-3
                  table
                    thead
                      tr
                        th.ajuste-border-tabla.texto-left Código
                        th.ajuste-border-tabla.texto-left Cuentas
                        th.ajuste-border-tabla.texto-left Debe
                        th.texto-left Haber
                    tbody
                      tr
                        td.ajuste-border-tabla.texto-left 1105
                        td.ajuste-border-tabla.texto-left Caja
                        td.ajuste-border-tabla.texto-left 180.000
                        td  -
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left 4230
                        td.ajuste-border-tabla.texto-left Honorario
                        td.ajuste-border-tabla -
                        td 180.000
            .row(titulo="Gastos causados por pagar").ajuste-cajaAcordion
              p.mb-3 Al finalizar el mes, una empresa debe los servicios generales públicos correspondientes a un mes por valor de $185.450.
              .ajuste-cajaAcordion_1
                .titulo-sexto.color-acento-contenido.mb-2
                  h5 Tabla 9.
                  span Asiento de gastos causados por pagar
                .tabla-a.ajuste___tabla.mb-3
                  table
                    thead
                      tr
                        th.ajuste-border-tabla.texto-left Código
                        th.ajuste-border-tabla.texto-left Cuentas
                        th.ajuste-border-tabla.texto-left Debe
                        th.texto-left Haber
                    tbody
                      tr
                        td.ajuste-border-tabla.texto-left 5135
                        td.ajuste-border-tabla.texto-left Servicios
                        td.ajuste-border-tabla.texto-left 185.450
                        td -
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left 2335
                        td.ajuste-border-tabla.texto-left Costos y gastos por pagar
                        td.ajuste-border-tabla -
                        td.texto-left 185.450
            .row(titulo="Ingresos recibidos por anticipado").ajuste-cajaAcordion
              p.mb-3 Una empresa recibe $90.000 por concepto de intereses anticipados.
              .ajuste-cajaAcordion_1
                .titulo-sexto.color-acento-contenido.mb-2
                  h5 Tabla 10.
                  span Asiento de ingresos recibidos por anticipado
                .tabla-a.ajuste___tabla.mb-3
                  table
                    thead
                      tr
                        th.ajuste-border-tabla.texto-left Código
                        th.ajuste-border-tabla.texto-left Cuentas
                        th.ajuste-border-tabla.texto-left Debe
                        th.texto-left Haber
                    tbody
                      tr
                        td.ajuste-border-tabla.texto-left 1105
                        td.ajuste-border-tabla.texto-left Caja
                        td.ajuste-border-tabla.texto-left 90.000
                        td -
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left 2705
                        td.ajuste-border-tabla.texto-left Ingresos recibidos por anticipado
                        td.ajuste-border-tabla -
                        td.texto-left 90.000
            .row(titulo="Comprobación de saldos").ajuste-cajaAcordion
              p.mb-3 Al terminar el registro de los asientos contables se debe comprobar la aplicación de la partida doble; para esto se debe, en primer lugar, desarrollar el ejercicio en una sola cuenta T al final, se suman los débitos y créditos, los cuales debe dar sumas iguales.
              .ajuste-cajaAcordion_1
                .titulo-sexto.color-acento-contenido.mb-2
                  h5 Tabla 11.
                  span Comprobación de saldos
                .tabla-a.ajuste___tabla.mb-3
                  table
                    thead
                      tr
                        th.ajuste-border-tabla.texto-left Debe
                        th.texto-left Haber
                    tbody
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left 120.000
                        td.texto-left 120.000
                      tr
                        td.ajuste-border-tabla.texto-left 5.000
                        td.texto-left 5.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left 300.000
                        td.texto-left 300.000
                      tr
                        td.ajuste-border-tabla.texto-left 180.000
                        td.texto-left 180.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left 185.450
                        td.texto-left 185.450
                      tr
                        td.ajuste-border-tabla.texto-left 90.000
                        td.texto-left 90.000
                      tr.ajuste-color-tabla
                        td.ajuste-border-tabla.texto-left #[b 880.450]
                        td.texto-left #[b 880.450]
    
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
      .col
        h3 Ecuación patrimonial

    p.mb-5 Es necesario encontrar el equilibrio entre las cuentas reales. Para lograrlo se utiliza una fórmula matemática conocida como la #[b ecuación patrimonial]. Esta fórmula revela el valor del activo, pasivo o del patrimonio.

    .row.align-items-center.justify-content-center.mb-5(data-aos="zoom-in")
      .col-xl-5
        .style___box_4.text-center
          p.mb-3 #[b Activo] = Pasivo + Patrimonio
          p.mb-3 #[b Pasivo] = Activo - Patrimonio
          p.mb-0 #[b Patrimonio] = Activo - Pasivo

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img
        figure
          img(src="@/assets/curso/temas/img36.svg", alt="" style="max-width: 250px").m-auto
      .bloque-texto-g__texto.p-4
        h4 Ejemplo:
        br
        br
        p.mb-0 Una empresa suministra la siguiente información:
        br
        ul.fa-ul.estilo___ul_bloque.mb-0
          br
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | $500.000,00 en cuenta corriente bancaria.
          br
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | $800.000,00 en equipos para oficina.
          br
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | $2.000.000,00 que debe cobrar por venta de mercancías.
          br
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | $2.000.000,00 en propiedades.
          br
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | $500.000,00 que adeuda a los proveedores.
          br
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | $1.000.000,00 que paga de cuota por un préstamo bancario.

    .color___box_2
      .px-5

        p.mb-5 La información contable suministrada por la empresa se debe registrar en cada una de sus cuentas y para conocer cuál es el valor del patrimonio, las agruparemos por activo, pasivo y patrimonio.

        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 12.
              span Cuentas del activo
            .tabla-a.ajuste___tabla.mb-3(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Cuentas
                    th.texto-left Valor
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Caja
                    td.texto-left 800.000
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Bancos
                    td.texto-left 500.000
                  tr
                    td.ajuste-border-tabla.texto-left Equipo oficina
                    td.texto-left 2.000.000
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Terrenos
                    td.texto-left 2.000.000
                  tr
                    td.ajuste-border-tabla.texto-left Total activos
                    td.texto-left 5.300.000

        
        p.mb-5 Al sumar los valores de cada una de las cuentas del activo se tiene un total de #[b #[u 5.300.000]]. Para comprender el origen de los recursos externos, se procederá a agrupar las cuentas del pasivo, analizando cada una de las obligaciones y deudas que la entidad ha contraído para financiar su operación.

        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 13.
              span Cuentas del pasivo
            .tabla-a.ajuste___tabla.mb-3(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Cuentas
                    th.texto-left Valor
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Bancos
                    td.texto-left 500.000
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Nacionales
                    td.texto-left 1.000.000
                  tr
                    td.ajuste-border-tabla.texto-left Total pasivos
                    td.texto-left 1.500.000
    
    p.mb-5 Al sumar los valores de cada una de las cuentas del pasivo se tiene un total de #[b #[u 1.500.000]]. Al tener los valores del activo y el pasivo, ya se puede determinar el valor del patrimonio, el cual, se puede calcular aplicando la fórmula de ecuación patrimonial así:

    .row.align-items-center.justify-content-center.mb-5(data-aos="zoom-in")
      .col-xl-6
        .style___box_4.text-center
          p.mb-0 #[b Patrimonio] = 5.300.000 (activo) - 1.500.000 (pasivo) = 3.800.000
    
    p.mb-5 Aplicando la fórmula de ecuación patrimonial, se puede calcular que el valor del patrimonio es de 3.800.000.

    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img10.svg" style="max-width: 60px").m-auto
      .col
        h3 Modificaciones en la ecuación patrimonial

    p.mb-5 La ecuación patrimonial no es un cálculo estático, sino un equilibrio vivo que se ajusta constantemente ante cualquier variación en los activos, pasivos o el capital. Para visualizar cómo interactúan estos elementos y entender su interdependencia contable, se analizará el siguiente caso práctico: 

    .color___box_2
      .px-5

        .row.align-items-center.mb-5
          .col-xl
            h4 Ejemplo:
            p.mb-3 El 10 de abril de 2010 el señor Saavedra tiene $3.000.000 en bancos. La ecuación patrimonial se presenta así:
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 14.
              span Cuenta del activo
            .tabla-a.ajuste___tabla.mb-3(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Cuentas
                    th.texto-left Valor
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Bancos
                    td.texto-left 3.000.000
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Nacionales
                    td.texto-left 3.000.000
            p.mb-0 Al sumar el valor de la cuenta bancos del activo se tiene un total de 3.000.000. Respecto a los pasivos no se realiza ningún registro porque el enunciado del ejercicio únicamente hace referencia a los 3.000.000 en bancos. Finalmente, se tiene el siguiente patrimonio:
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img37.svg", alt="" ).m-auto

        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 15.
              span Cuenta del patrimonio
            .tabla-a.ajuste___tabla.mb-3(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Cuentas
                    th.texto-left Valor
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Aportes sociales
                    td.texto-left 3.000.000
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Total patrimonio
                    td.texto-left 3.000.000
        
        p.mb-5 Al aplicar la fórmula de la ecuación patrimonial, se tiene como resultado un valor de 3.000.000. 

        .row.align-items-center.justify-content-center.mb-5(data-aos="zoom-in")
          .col-xl-6
            .style___box_4.text-center
              p.mb-0 #[b Patrimonio] = 3.000.000 (activo) - 0 (pasivo) = 3.000.000
        
        p.mb-5 Para comprender la dinámica de las modificaciones en la ecuación patrimonial, se estudiarán otros ejemplos en el siguiente video:  

        figure(data-aos="zoom-in")
          .video.mb-1
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption(data-aos="zoom-in") #[b Video]: 

</template>

<script>
export default {
  name: 'Tema3',
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
