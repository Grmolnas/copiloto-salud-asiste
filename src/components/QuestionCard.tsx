import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { CheckCircle2, XCircle, ChevronRight } from "lucide-react";
import { Pregunta } from "@/data/preguntas";

interface QuestionCardProps {
  pregunta: Pregunta;
  numeroPregunta: number;
  totalPreguntas: number;
  onAnswer: (respuestaSeleccionada: number, esCorrecta: boolean) => void;
  onNext: () => void;
}

export const QuestionCard = ({
  pregunta,
  numeroPregunta,
  totalPreguntas,
  onAnswer,
  onNext,
}: QuestionCardProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleVerify = () => {
    if (selectedOption === null) return;
    
    const esCorrecta = selectedOption === pregunta.respuestaCorrecta;
    setHasAnswered(true);
    onAnswer(selectedOption, esCorrecta);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setHasAnswered(false);
    onNext();
  };

  const getOptionClassName = (index: number) => {
    if (!hasAnswered) {
      return "border-2 border-border hover:border-primary transition-colors cursor-pointer";
    }

    if (index === pregunta.respuestaCorrecta) {
      return "border-2 border-green-500 bg-green-50 dark:bg-green-950";
    }

    if (index === selectedOption && index !== pregunta.respuestaCorrecta) {
      return "border-2 border-red-500 bg-red-50 dark:bg-red-950";
    }

    return "border-2 border-border opacity-50";
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            Pregunta {numeroPregunta} de {totalPreguntas}
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
        <CardTitle className="text-xl">{pregunta.pregunta}</CardTitle>
        {pregunta.referencia && (
          <CardDescription className="text-xs italic">
            Referencia: {pregunta.referencia}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="space-y-6">
        <RadioGroup
          value={selectedOption?.toString()}
          onValueChange={(value) => !hasAnswered && setSelectedOption(parseInt(value))}
          disabled={hasAnswered}
          className="space-y-3"
        >
          {pregunta.opciones.map((opcion, index) => (
            <div key={index} className={`flex items-start space-x-3 p-4 rounded-lg ${getOptionClassName(index)}`}>
              <RadioGroupItem
                value={index.toString()}
                id={`option-${index}`}
                disabled={hasAnswered}
                className="mt-0.5"
              />
              <Label
                htmlFor={`option-${index}`}
                className={`flex-1 text-sm leading-relaxed ${hasAnswered ? "" : "cursor-pointer"}`}
              >
                <span className="font-medium mr-2">
                  {String.fromCharCode(65 + index)}.
                </span>
                {opcion}
              </Label>
              {hasAnswered && index === pregunta.respuestaCorrecta && (
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
              )}
              {hasAnswered && index === selectedOption && index !== pregunta.respuestaCorrecta && (
                <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0" />
              )}
            </div>
          ))}
        </RadioGroup>

        {hasAnswered && (
          <div className={`p-4 rounded-lg animate-fade-in ${
            selectedOption === pregunta.respuestaCorrecta
              ? "bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800"
              : "bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800"
          }`}>
            <div className="flex items-start gap-2 mb-2">
              {selectedOption === pregunta.respuestaCorrecta ? (
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
              )}
              <p className={`font-semibold ${
                selectedOption === pregunta.respuestaCorrecta
                  ? "text-green-700 dark:text-green-300"
                  : "text-red-700 dark:text-red-300"
              }`}>
                {selectedOption === pregunta.respuestaCorrecta ? "¡Correcto!" : "Incorrecto"}
              </p>
            </div>
            <p className="text-sm text-foreground/90 ml-7">
              {pregunta.explicacion}
            </p>
          </div>
        )}

        <div className="flex justify-between items-center pt-4">
          {!hasAnswered ? (
            <>
              <div className="text-sm text-muted-foreground">
                Selecciona una opción y verifica tu respuesta
              </div>
              <Button
                onClick={handleVerify}
                disabled={selectedOption === null}
                aria-label="Verificar respuesta"
              >
                Verificar respuesta
              </Button>
            </>
          ) : (
            <>
              <div className="text-sm text-muted-foreground">
                {numeroPregunta < totalPreguntas ? "Continúa con la siguiente pregunta" : "Has completado todas las preguntas"}
              </div>
              <Button
                onClick={handleNext}
                aria-label={numeroPregunta < totalPreguntas ? "Siguiente pregunta" : "Ver resultados"}
              >
                {numeroPregunta < totalPreguntas ? (
                  <>
                    Siguiente pregunta
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </>
                ) : (
                  "Ver resultados"
                )}
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
