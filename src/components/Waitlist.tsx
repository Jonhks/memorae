"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Card, CardContent } from "@/components/ui/card";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      await addDoc(collection(db, "leads"), {
        email,
        message,
        createdAt: serverTimestamp(),
      });

      setSuccess(true);
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setError("No pudimos guardar tu correo. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardContent className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-center">
          Únete a la lista de espera
        </h3>

        <p className="text-sm text-muted-foreground text-center">
          Sé de los primeros en probar inTime cuando esté disponible.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-3"
        >
          <Input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading || success}
          />
          <Textarea
             placeholder="Tu mensaje..."
             value={message}
             onChange={(e) => setMessage(e.target.value)}
             disabled={loading || success}
             className="min-h-[100px]"
          />

          <Button
            type="submit"
            className="w-full"
            disabled={loading || success}
          >
            {loading
              ? "Guardando..."
              : success
                ? "Correo registrado"
                : "Unirme a la lista"}
          </Button>
        </form>

        {success && (
          <p className="text-sm text-green-600 text-center">
            Gracias. Te avisaremos cuando inTime esté listo.
          </p>
        )}

        {error && <p className="text-sm text-red-600 text-center">{error}</p>}
      </CardContent>
    </Card>
  );
}
