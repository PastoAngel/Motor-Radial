/* =========================================================
   PESTAÑAS: AVIACIÓN Y MOTOR DE ESTRELLA (VARIABLES GLOBALES)
   ========================================================= */

var PESTANA_AVIACION = {
  id: 'aviacion',
  alineacion: '',
  html: `
    <h2>Los primeros motores de aviación</h2>
    <div class="g">
      ${card('inline', '1903 · En línea', 'Wright Flyer', '4 cilindros en línea, refrigerado por agua. ~12 hp y 81 kg. Hecho por Charlie Taylor y los hermanos Wright.', 0)}
      ${card('v', '1905 · En V', 'Antoinette V8', '8 cilindros en V a 90°, ~50 hp y ~50 kg (Léon Levavasseur). Su relación potencia-peso no se igualó en ~25 años.', 1)}
      ${card('radial', '1908 · Rotativo', 'Gnome', 'Cilindros en estrella enfriados por aire que giran junto con la hélice. Dominó la aviación de la Primera Guerra.', 2)}
    </div>
    <div class="note">
      <b>El reto:</b> más potencia con menos peso. El agua, el radiador y las tuberías pesan:
      la idea fue enfriar con aire y repartir los cilindros alrededor de un solo cigüeñal.
    </div>
  `
};
agregarPestana(PESTANA_AVIACION);

