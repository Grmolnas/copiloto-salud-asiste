import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, MessageSquare, FileText, Calendar, AlertTriangle, Quote } from "lucide-react";

const Copiloto = () => {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Copiloto RIAS 3280</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Formula tus preguntas sobre las intervenciones de la RIAS. El asistente responderá basándose únicamente en las fichas técnicas validadas.
          </p>
        </div>

        {/* Important Notice */}
        <Card className="border-destructive/50 bg-destructive/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground mb-1">Aviso importante</p>
                <p className="text-sm text-muted-foreground">
                  Esta es una herramienta educativa que no reemplaza el juicio clínico profesional. Siempre verifica la información con las fichas técnicas originales y consulta con supervisores según corresponda.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Chat Embed Placeholder */}
        <Card className="shadow-medium">
          <CardContent className="pt-6">
            <div 
              id="copiloto-container" 
              className="min-h-[500px] flex items-center justify-center bg-muted/30 rounded-lg border-2 border-dashed border-border"
            >
              <div className="text-center space-y-3 p-8">
                <MessageSquare className="w-16 h-16 mx-auto text-muted-foreground" />
                <p className="text-lg font-medium text-foreground">Chat del Copiloto</p>
                <p className="text-sm text-muted-foreground max-w-md">
                  Aquí se integrará el widget de chat interactivo. Este es un espacio reservado para el script/iframe del bot.
                </p>
              </div>
            </div>
            {/* Placeholder para el script real del chat */}
            {/* <script src="URL_DEL_CHAT"></script> */}
          </CardContent>
        </Card>

        {/* Response Format Guide */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Formato de respuesta
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-semibold text-accent-foreground">1</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Resumen</p>
                  <p className="text-sm text-muted-foreground">
                    Respuesta concisa a tu consulta
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-semibold text-accent-foreground">2</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Pasos o Checklist</p>
                  <p className="text-sm text-muted-foreground">
                    Procedimientos paso a paso cuando aplique
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Calendar className="w-4 h-4 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Periodicidad y Criterios</p>
                  <p className="text-sm text-muted-foreground">
                    Frecuencia recomendada y criterios de aplicación
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <AlertTriangle className="w-4 h-4 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Advertencias</p>
                  <p className="text-sm text-muted-foreground">
                    Contraindicaciones y precauciones importantes
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Quote className="w-4 h-4 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Citas</p>
                  <p className="text-sm text-muted-foreground">
                    Referencias exactas a las fichas técnicas utilizadas
                  </p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground italic">
                  <strong className="text-foreground">Nota:</strong> Cada respuesta incluye las fuentes específicas del corpus. Verifica siempre consultando las fichas originales en la Biblioteca.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips */}
        <Card className="bg-accent/20 border-accent">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-foreground mb-3">💡 Consejos para mejores resultados</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Sé específico en tus preguntas (ejemplo: "¿Cuál es el esquema de vacunación para menores de 1 año?")</li>
              <li>• Menciona el curso de vida o la intervención específica cuando sea relevante</li>
              <li>• Si la respuesta no es clara, reformula tu pregunta con más detalles</li>
              <li>• Utiliza las citas proporcionadas para verificar en la Biblioteca</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Copiloto;
