import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { CheckCircle2, XCircle, RotateCcw, TrendingUp } from "lucide-react";
import { Pregunta } from "@/data/preguntas";
import { Separator } from "./ui/separator";

interface ResultsSummaryProps {
  totalPreguntas: number;
  correctas: number;
  incorrectas: number;
  preguntasIncorrectas: Array<{
    pregunta: Pregunta;
    respuestaUsuario: number;
  }>;
  onRestart: () => void;
}

export const ResultsSummary = ({
  totalPreguntas,
  correctas,
  incorrectas,
  preguntasIncorrectas,
  onRestart,
}: ResultsSummaryProps) => {
  const porcentaje = Math.round((correctas / totalPreguntas) * 100);

  const getMensaje = () => {
    if (porcentaje >= 90) return "¡Excelente! Dominas muy bien el tema.";
    if (porcentaje >= 75) return "¡Muy bien! Tienes un buen conocimiento.";
    if (porcentaje >= 60) return "Bien. Hay algunos temas que puedes reforzar.";
    return "Sigue practicando. Revisa los temas con atención.";
  };

  const getColorClasses = () => {
    if (porcentaje >= 75) return "text-green-600 dark:text-green-400";
    if (porcentaje >= 60) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6 animate-fade-in">
      <Card>
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
            <TrendingUp className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-2xl">Resultados de tu Prueba</CardTitle>
          <CardDescription>Aquí está tu desempeño en la prueba de conocimiento</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 rounded-lg bg-muted">
              <div className="text-3xl font-bold text-foreground">{totalPreguntas}</div>
              <div className="text-sm text-muted-foreground mt-1">Total preguntas</div>
            </div>

            <div className="text-center p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                <div className="text-3xl font-bold text-green-700 dark:text-green-300">{correctas}</div>
              </div>
              <div className="text-sm text-green-700 dark:text-green-300 mt-1">Correctas</div>
            </div>

            <div className="text-center p-4 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
              <div className="flex items-center justify-center gap-2">
                <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                <div className="text-3xl font-bold text-red-700 dark:text-red-300">{incorrectas}</div>
              </div>
              <div className="text-sm text-red-700 dark:text-red-300 mt-1">Incorrectas</div>
            </div>
          </div>

          <div className="text-center p-6 rounded-lg bg-card border-2">
            <div className={`text-5xl font-bold mb-2 ${getColorClasses()}`}>
              {porcentaje}%
            </div>
            <p className="text-lg font-medium text-foreground">{getMensaje()}</p>
          </div>

          <Separator />

          {preguntasIncorrectas.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <XCircle className="h-5 w-5 text-red-500" />
                Preguntas para revisar ({preguntasIncorrectas.length})
              </h3>
              <div className="space-y-4">
                {preguntasIncorrectas.map(({ pregunta, respuestaUsuario }, index) => (
                  <Card key={pregunta.id} className="border-red-200 dark:border-red-800">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="text-sm font-medium text-muted-foreground">
                          Pregunta {index + 1}
                        </span>
                        <div className="flex gap-2">
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {pregunta.categoria}
                          </span>
                          <span className="text-xs bg-secondary/50 text-secondary-foreground px-2 py-1 rounded">
                            {pregunta.cursoDeVida}
                          </span>
                        </div>
                      </div>
                      <CardTitle className="text-base">{pregunta.pregunta}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="space-y-2">
                        <div className="flex items-start gap-2 text-sm">
                          <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium text-red-700 dark:text-red-300">Tu respuesta:</span>{" "}
                            <span className="text-foreground">{pregunta.opciones[respuestaUsuario]}</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium text-green-700 dark:text-green-300">Respuesta correcta:</span>{" "}
                            <span className="text-foreground">{pregunta.opciones[pregunta.respuestaCorrecta]}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 p-3 rounded bg-muted text-sm">
                        <p className="font-medium mb-1">Explicación:</p>
                        <p className="text-foreground/90">{pregunta.explicacion}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {preguntasIncorrectas.length === 0 && (
            <div className="text-center p-6 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
              <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-3" />
              <p className="text-lg font-semibold text-green-700 dark:text-green-300">
                ¡Perfecto! Respondiste todas las preguntas correctamente.
              </p>
            </div>
          )}

          <div className="flex justify-center pt-4">
            <Button size="lg" onClick={onRestart} className="gap-2">
              <RotateCcw className="h-4 w-4" />
              Realizar nueva prueba
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
