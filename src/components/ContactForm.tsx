"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; 
import { Button } from "@/components/ui/button";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, Send } from "lucide-react";

export function ContactForm() {
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
      await addDoc(collection(db, "contacts"), {
        email,
        message,
        createdAt: serverTimestamp(),
      });

      setSuccess(true);
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setError("Hubo un error al enviar tu mensaje. Por favor intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-md mx-auto w-full">
      <CardHeader>
        <CardTitle className="text-xl text-center">Contáctanos</CardTitle>
        <CardDescription className="text-center">
          Déjanos tus comentarios o dudas.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading || success}
              aria-label="Email"
            />
          </div>
          <div className="space-y-2">
            <Textarea
              placeholder="Tu mensaje..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              disabled={loading || success}
              className="min-h-[100px]"
              aria-label="Mensaje"
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={loading || success}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : success ? (
              "¡Mensaje enviado!"
            ) : (
              <>
                Enviar
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>

        {success && (
          <p className="text-sm text-green-600 text-center mt-2">
            Gracias por escribirnos. Te responderemos pronto.
          </p>
        )}

        {error && <p className="text-sm text-red-600 text-center mt-2">{error}</p>}
      </CardContent>
    </Card>
  );
}
