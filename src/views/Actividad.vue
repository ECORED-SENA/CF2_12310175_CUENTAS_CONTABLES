<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Cuentas nominales y registros contables',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> conocer e identificar las operaciones comerciales mediante el uso de las cuentas nominales y la realización de los registros contables.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué reflejan las cuentas nominales o de resultado?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Muestra las utilidades, gastos y costos de una empresa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Muestra el saldo disponible en la caja y bancos de una empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Muestra las deudas y obligaciones contraídas a corto plazo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Muestra el aporte inicial y adicional de los propietarios de la entidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿De qué otras formas son llamadas o se conocen las cuentas nominales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuentas reales y de balance.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuentas patrimoniales y de finanzas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cuentas operacionales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cuentas de dividendos e impuestos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Los valores que recibe una empresa cuando realiza la venta de un bien o presta un servicio se conocen como:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Activo corriente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ingresos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Utilidades.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Bancos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Una empresa cuyo objeto social principal sea la comercialización de equipos de cómputos, recibe un pago por concepto de arrendamiento de una oficina que tiene desocupada en su edificio ¿Bajo qué categoría debe registrarse este ingreso?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ingresos no operacionales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ingresos operacionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Otros activos y rentas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ingresos por ventas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Los cargos operativos y financieros de una actividad económica de una organización hacen parte de:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Activo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Patrimonio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Gastos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Costos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál es la naturaleza del saldo de la cuenta de "Compras"?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crédito.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Débito.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Neutro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Inversa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'Una empresa comercializadora realiza una venta de mercancías al contado por un valor de $10,000. ¿En qué cuenta se debe registrar el ingreso generado por esta operación y cuál es su naturaleza contable?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cliente, naturaleza débito.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ventas, naturaleza débito.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Caja, naturaleza crédito.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ventas, naturaleza crédito.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de los siguientes enunciados describe correctamente la regla fundamental de la partida doble en un registro contable?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'A todo cargo corresponde un abono por el mismo importe, manteniendo el equilibrio de la ecuación contable.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Es el registro que permite que la cuenta de capital siempre sea mayor que la suma de activo y pasivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La partida doble indica que solo se deben registrar las operaciones que involucren entrada de efectivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Los cargos siempre representan una disminución en los activos y los abonos un aumento en los pasivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Cuál de los siguientes asientos contables representa correctamente una compra de mercancía al contado, considerando que la empresa maneja un sistema de inventario perpetuo y no se incluyen impuestos en la operación?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Debe: Mercaderías y haber: Cuentas por Pagar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Debe: Caja/Bancos y haber: Mercaderías.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Debe: Mercaderías y haber: Caja/Bancos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Debe: Gastos de Compra y haber: Caja/Bancos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Si una empresa al finalizar el mes debe los servicios públicos correspondientes a un mes por valor de $300.000 ¿A qué cuenta pertenece ese gasto?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Bancos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Deudores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Servicios.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Inventario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'En el proceso contable, al finalizar el registro de los asientos y proceder a la comprobación mediante una sola cuenta T, ¿qué condición matemática debe cumplirse obligatoriamente para considerar que se ha respetado el principio de la partida doble?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La suma de los saldos deudores debe ser mayor a la suma de los saldos acreedores para reflejar utilidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El resultado de la cuenta T debe coincidir con el saldo inicial de la cuenta de Caja y Bancos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Solo se deben sumar las cuentas de activo y pasivo, ignorando las cuentas de patrimonio y gastos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El total de la columna de los débitos debe ser exactamente igual al total de la columna de los créditos).',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Para hallar el equilibrio entre las cuentas reales (activo, pasivo y patrimonio) y determinar el valor del capital de los dueños una vez descontadas las obligaciones externas, ¿cuál es la representación matemática correcta de la ecuación patrimonial?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Patrimonio = Activo + Pasivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pasivo = Activo + Patrimonio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Activo = Pasivo - Patrimonio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Patrimonio = Activo - Pasivo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'En el sistema de inventario permanente, cuando se realiza una compra de mercancía, el valor de la adquisición debe registrarse como un débito en la cuenta de "caja".',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'La ecuación patrimonial se define matemáticamente como: Activo = Pasivo - Patrimonio.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Si una empresa tiene activos por $10.000.000 y deudas (pasivos) por $4.000.000, su patrimonio neto es de $6.000.000.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
