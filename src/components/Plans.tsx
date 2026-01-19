import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

export function Plans() {
  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold leading-tight">
            Así funcionará inTime
          </h2>
          <p className="mt-4 text-muted-foreground">
            inTime aún está en desarrollo. Estos son los niveles de acceso que
            estamos planeando para su lanzamiento.
          </p>
        </div>

        {/* Plans */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Basic */}
          <Card>
            <CardContent className="space-y-6 pt-8">
              <div>
                <h3 className="text-xl font-semibold">Acceso esencial</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Para dejar un mensaje importante.
                </p>
              </div>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 1 mensaje (editable) </li>
                <li>• 1 persona destinataria</li>
                <li>• Entrega automática tras el fallecimiento</li>
              </ul>

              <p className="text-xs text-muted-foreground">
                Incluido sin costo en el lanzamiento.
              </p>
            </CardContent>
          </Card>

          {/* Plus */}
          <Card className="border-primary/50">
            <CardContent className="space-y-6 pt-8">
              <div>
                <h3 className="text-xl font-semibold">Acceso completo</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Para quienes quieren dejar más de un mensaje.
                </p>
              </div>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Múltiples mensajes</li>
                <li>• Mensajes privados por persona</li>
                <li>• Organización por destinatario</li>
              </ul>

              <p className="text-xs text-muted-foreground">
                Disponible como plan de pago en el lanzamiento.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
