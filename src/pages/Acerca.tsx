import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Database, RefreshCw, Users } from "lucide-react";

const Acerca = () => {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Acerca del Copiloto RIAS 3280</h1>
          <p className="text-lg text-muted-foreground">
            Un asistente educativo especializado en promoción y mantenimiento de la salud
          </p>
        </div>

        {/* Mission */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-6 h-6 text-primary" />
              Objetivo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground">
              El Copiloto RIAS 3280 es una herramienta educativa diseñada para apoyar al talento humano en salud en la consulta de información sobre las intervenciones de promoción y mantenimiento establecidas en la <strong>Resolución 3280 de 2018</strong> del Ministerio de Salud y Protección Social de Colombia.
            </p>
            <p className="text-muted-foreground">
              Su propósito es facilitar el acceso rápido y confiable a lineamientos técnicos, promoviendo la calidad y estandarización en la atención de las Rutas Integrales de Atención en Salud (RIAS).
            </p>
          </CardContent>
        </Card>

        {/* Methodology */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-6 h-6 text-primary" />
              Metodología: RAG sobre corpus cerrado
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <p className="text-foreground font-medium">
                ¿Qué es RAG (Retrieval Augmented Generation)?
              </p>
              <p className="text-muted-foreground">
                RAG es una técnica que combina la búsqueda de información específica en documentos con la generación de respuestas por inteligencia artificial. Esto permite que el Copiloto:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Extraiga información directamente de las fichas técnicas validadas</li>
                <li>Cite las fuentes exactas de donde proviene la información</li>
                <li>Genere respuestas coherentes y contextualizadas</li>
                <li>Mantenga fidelidad con los documentos originales</li>
              </ul>
            </div>

            <div className="mt-6 p-4 bg-accent/20 rounded-lg border border-accent">
              <p className="text-sm text-foreground">
                <strong>Corpus cerrado:</strong> El Copiloto <strong>NO</strong> tiene acceso a internet ni a fuentes externas. Solo consulta las fichas técnicas que han sido validadas e indexadas en su base de conocimiento interna.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Update Flow */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RefreshCw className="w-6 h-6 text-primary" />
              Flujo de actualización
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                La información del Copiloto se actualiza siguiendo un proceso riguroso para garantizar la calidad y validez de los contenidos:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Creación de ficha técnica</h4>
                    <p className="text-sm text-muted-foreground">
                      Se elabora el documento siguiendo los lineamientos oficiales de la Resolución 3280/2018
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Validación técnica</h4>
                    <p className="text-sm text-muted-foreground">
                      Revisión por expertos en salud pública para verificar precisión y coherencia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Publicación en PDF</h4>
                    <p className="text-sm text-muted-foreground">
                      El documento validado se publica en formato PDF y se hace disponible en la Biblioteca
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Re-indexación del corpus</h4>
                    <p className="text-sm text-muted-foreground">
                      El nuevo documento se procesa y se integra al sistema RAG para que el Copiloto pueda consultarlo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-6 h-6 text-primary" />
              Equipo y Responsables
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              El desarrollo y mantenimiento del Copiloto RIAS 3280 está a cargo de un equipo multidisciplinario que incluye:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-foreground">Especialistas en salud pública:</strong> Validan el contenido técnico de las fichas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-foreground">Equipo de desarrollo:</strong> Mantiene la infraestructura tecnológica del Copiloto</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-foreground">Coordinación académica:</strong> Supervisa la calidad educativa de la herramienta</span>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Responsable del proyecto:</strong>
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                [Nombre de la institución o dependencia responsable]<br />
                Contacto: soporte@copilotorias.edu.co
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="bg-accent/20 border-accent">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Importante:</strong> El Copiloto RIAS 3280 es una herramienta de apoyo educativo. Las respuestas que proporciona deben ser verificadas con las fichas técnicas originales y no reemplazan el juicio clínico profesional ni la supervisión de personal calificado.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Acerca;
