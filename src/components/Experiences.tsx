import { Card, CardContent } from "@/components/ui/card";

export function Experiences() {
  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold leading-tight">
            No es solo un mensaje.
            <br />
            Es lo que nunca dijiste.
          </h2>
          <p className="mt-4 text-muted-foreground">
            inTime te permite dejar palabras, recuerdos y verdades que solo
            pueden entregarse cuando ya no estás.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="space-y-3 pt-6">
              <h3 className="text-lg font-semibold">Para alguien que amas</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                “Quiero que sepas que siempre estuve orgulloso de ti, incluso
                cuando no supe decirlo.”
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-3 pt-6">
              <h3 className="text-lg font-semibold">Para tu familia</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Mensajes, recuerdos e instrucciones que no caben en una herencia
                ni en una conversación.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-3 pt-6">
              <h3 className="text-lg font-semibold">Para cerrar ciclos</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Decir perdón. Decir gracias. Decir la verdad, sin
                interrupciones.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-3 pt-6">
              <h3 className="text-lg font-semibold">Para dejar orden</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Explicaciones importantes, decisiones tomadas y mensajes finales
                para evitar dudas.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
