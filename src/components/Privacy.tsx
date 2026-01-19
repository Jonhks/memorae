import { Card, CardContent } from "@/components/ui/card";

export function Privacy() {
  return (
    <section className="w-full bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-semibold leading-tight">
              Lo que escribas aquí,
              <br />
              se queda aquí.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              inTime fue diseñado para respetar algo sagrado: tus últimas
              palabras. Nadie puede verlas, modificarlas o entregarlas antes de
              tiempo.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <p className="font-medium">Privado por diseño</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Solo las personas que tú elijas recibirán un mensaje.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="font-medium">Sin acceso anticipado</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Nadie puede leer tus mensajes antes de que se entreguen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="font-medium">No editable</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Una vez guardados, tus mensajes no pueden ser alterados por
                  terceros.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="font-medium">Respeto absoluto</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Esto no es contenido. Son despedidas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
