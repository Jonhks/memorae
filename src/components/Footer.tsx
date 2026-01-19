export function Footer() {
  return (
    <footer className="w-full border-t py-12 mt-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Left */}
          <div>
            <p className="text-sm font-medium">inTime</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Algunas palabras merecen llegar a tiempo.
            </p>
          </div>

          {/* Right */}
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a
              href="#"
              className="hover:text-foreground transition"
            >
              Privacidad
            </a>
            <a
              href="#"
              className="hover:text-foreground transition"
            >
              Términos
            </a>
            <a
              href="#"
              className="hover:text-foreground transition"
            >
              Contacto
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 text-xs text-muted-foreground">
          inTime es un proyecto en desarrollo. La información presentada puede
          cambiar antes del lanzamiento oficial.
        </div>
      </div>
    </footer>
  );
}
