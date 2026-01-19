export default function HowItWorks() {
  return (
    <section className="w-full py-24 px-6 bg-muted/40">
      <div className="mx-auto max-w-5xl">
        {/* Título */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            ¿Cómo funciona?
          </h2>
          <p className="text-lg text-muted-foreground">
            Crear un mensaje en inTime es simple, personal y completamente
            privado.
          </p>
        </div>

        {/* Pasos */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Paso 1 */}
          <div className="space-y-4">
            <span className="text-sm font-medium text-muted-foreground">
              Paso 1
            </span>
            <h3 className="text-xl font-semibold">Escribe tu mensaje</h3>
            <p className="text-muted-foreground leading-relaxed">
              Redacta lo que quieras decir: una despedida, una explicación, una
              confesión o simplemente palabras que no pudiste expresar.
              (modificalo cuando quieras)
            </p>
          </div>

          {/* Paso 2 */}
          <div className="space-y-4">
            <span className="text-sm font-medium text-muted-foreground">
              Paso 2
            </span>
            <h3 className="text-xl font-semibold">Elige a quién va dirigido</h3>
            <p className="text-muted-foreground leading-relaxed">
              Asigna el mensaje a una persona específica. Solo esa persona podrá
              acceder a él cuando llegue el momento.
            </p>
          </div>

          {/* Paso 3 */}
          <div className="space-y-4">
            <span className="text-sm font-medium text-muted-foreground">
              Paso 3
            </span>
            <h3 className="text-xl font-semibold">
              Se entrega cuando ya no estés
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              El mensaje no se envía antes ni puede abrirse anticipadamente.
              Solo será entregado cuando se confirme tu partida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
