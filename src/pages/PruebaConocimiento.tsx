import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { QuestionCard } from "@/components/QuestionCard";
import { ResultsSummary } from "@/components/ResultsSummary";
import { preguntasRPMS, Pregunta, filtrarPreguntas, mezclarPreguntas } from "@/data/preguntas";
import { BookOpen, Target } from "lucide-react";

const PruebaConocimiento = () => {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [preguntas, setPreguntas] = useState<Pregunta[]>([]);
  const [respuestasUsuario, setRespuestasUsuario] = useState<Record<number, number>>({});
  const [correctas, setCorrectas] = useState(0);
  const [incorrectas, setIncorrectas] = useState(0);
  const [preguntasIncorrectas, setPreguntasIncorrectas] = useState<Array<{
    pregunta: Pregunta;
    respuestaUsuario: number;
  }>>([]);

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>("Todas");
  const [cursoDeVidaSeleccionado, setCursoDeVidaSeleccionado] = useState<string>("Todos");

  const categorias = ["Todas", "RPMS", "CCU", "Rutas de atención", "Valoración integral", "Intervenciones", "Normativa general"];
  const cursosDeVida = ["Todos", "Primera Infancia", "Infancia", "Adolescencia", "Juventud", "Adultez", "Vejez", "General"];

  const handleStart = () => {
    const preguntasFiltradas = filtrarPreguntas(
      preguntasRPMS,
      categoriaSeleccionada === "Todas" ? undefined : categoriaSeleccionada,
      cursoDeVidaSeleccionado === "Todos" ? undefined : cursoDeVidaSeleccionado
    );

    if (preguntasFiltradas.length === 0) {
      alert("No hay preguntas disponibles con los filtros seleccionados. Por favor, selecciona otros criterios.");
      return;
    }

    const preguntasMezcladas = mezclarPreguntas(preguntasFiltradas);
    setPreguntas(preguntasMezcladas);
    setStarted(true);
    setCurrentIndex(0);
    setRespuestasUsuario({});
    setCorrectas(0);
    setIncorrectas(0);
    setPreguntasIncorrectas([]);
    setFinished(false);
  };

  const handleAnswer = (respuestaSeleccionada: number, esCorrecta: boolean) => {
    const preguntaActual = preguntas[currentIndex];
    setRespuestasUsuario((prev) => ({
      ...prev,
      [preguntaActual.id]: respuestaSeleccionada,
    }));

    if (esCorrecta) {
      setCorrectas((prev) => prev + 1);
    } else {
      setIncorrectas((prev) => prev + 1);
      setPreguntasIncorrectas((prev) => [
        ...prev,
        { pregunta: preguntaActual, respuestaUsuario: respuestaSeleccionada },
      ]);
    }
  };

  const handleNext = () => {
    if (currentIndex < preguntas.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setStarted(false);
    setFinished(false);
    setCurrentIndex(0);
    setPreguntas([]);
    setRespuestasUsuario({});
    setCorrectas(0);
    setIncorrectas(0);
    setPreguntasIncorrectas([]);
    setCategoriaSeleccionada("Todas");
    setCursoDeVidaSeleccionado("Todos");
  };

  const progreso = preguntas.length > 0 ? ((currentIndex + 1) / preguntas.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Prueba tu Conocimiento</h1>
          <p className="text-lg text-muted-foreground">
            Responde preguntas sobre la Resolución 3280 y refuerza tu aprendizaje
          </p>
        </div>

        {/* Pantalla inicial: Filtros */}
        {!started && !finished && (
          <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Configura tu prueba
              </CardTitle>
              <CardDescription>
                Selecciona los filtros para personalizar tu prueba de conocimiento
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Categoría
                  </label>
                  <Select value={categoriaSeleccionada} onValueChange={setCategoriaSeleccionada}>
                    <SelectTrigger aria-label="Seleccionar categoría">
                      <SelectValue placeholder="Selecciona una categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      {categorias.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Curso de vida
                  </label>
                  <Select value={cursoDeVidaSeleccionado} onValueChange={setCursoDeVidaSeleccionado}>
                    <SelectTrigger aria-label="Seleccionar curso de vida">
                      <SelectValue placeholder="Selecciona un curso de vida" />
                    </SelectTrigger>
                    <SelectContent>
                      {cursosDeVida.map((curso) => (
                        <SelectItem key={curso} value={curso}>
                          {curso}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="pt-4">
                <Button size="lg" className="w-full" onClick={handleStart}>
                  Comenzar prueba
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Total de preguntas disponibles: {preguntasRPMS.length}
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Pantalla de prueba: Progreso + Pregunta */}
        {started && !finished && preguntas.length > 0 && (
          <div className="space-y-6">
            {/* Panel de progreso */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium text-foreground">
                      Progreso: {currentIndex + 1} de {preguntas.length}
                    </span>
                    <div className="flex gap-4">
                      <span className="text-green-600 dark:text-green-400">
                        ✓ Correctas: {correctas}
                      </span>
                      <span className="text-red-600 dark:text-red-400">
                        ✗ Incorrectas: {incorrectas}
                      </span>
                    </div>
                  </div>
                  <Progress value={progreso} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Pregunta actual */}
            <QuestionCard
              pregunta={preguntas[currentIndex]}
              numeroPregunta={currentIndex + 1}
              totalPreguntas={preguntas.length}
              onAnswer={handleAnswer}
              onNext={handleNext}
            />
          </div>
        )}

        {/* Pantalla final: Resumen de resultados */}
        {finished && (
          <ResultsSummary
            totalPreguntas={preguntas.length}
            correctas={correctas}
            incorrectas={incorrectas}
            preguntasIncorrectas={preguntasIncorrectas}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
};

export default PruebaConocimiento;
