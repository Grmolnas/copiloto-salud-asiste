import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Shield, Database, FileCheck } from "lucide-react";

const Politica = () => {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Política de Uso</h1>
          <p className="text-lg text-muted-foreground">
            Lineamientos y alcances del Copiloto RIAS 3280
          </p>
        </div>

        {/* Important Notice */}
        <Card className="border-destructive/50 bg-destructive/5 shadow-medium">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-bold text-foreground text-lg mb-2">Alcance educativo</p>
                <p className="text-muted-foreground">
                  El Copiloto RIAS 3280 es una herramienta de <strong>apoyo educativo</strong> diseñada para consulta de información técnica sobre las intervenciones de promoción y mantenimiento de la salud. <strong>NO</strong> es un sistema de diagnóstico, prescripción médica ni sustituto del criterio clínico profesional.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Scope and Limitations */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              Alcance y limitaciones
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Usos apropiados:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Consultar lineamientos técnicos de las intervenciones de la RIAS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Verificar periodicidad y criterios de aplicación de procedimientos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Repasar pasos o checklists de intervenciones específicas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Identificar las fichas técnicas relevantes para cada caso</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Apoyo en la formación y actualización del personal de salud</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Limitaciones importantes:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✗</span>
                  <span><strong>NO</strong> realiza diagnósticos médicos ni prescribe tratamientos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✗</span>
                  <span><strong>NO</strong> reemplaza la evaluación clínica individualizada de pacientes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✗</span>
                  <span><strong>NO</strong> tiene acceso a historias clínicas ni datos de pacientes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✗</span>
                  <span><strong>NO</strong> consulta fuentes externas ni internet</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✗</span>
                  <span><strong>NO</strong> sustituye la supervisión de personal médico calificado</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Data Privacy */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-6 h-6 text-primary" />
              Privacidad y protección de datos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-accent/20 rounded-lg border border-accent">
              <p className="font-semibold text-foreground mb-2">
                ⚠️ NO ingreses datos personales sensibles
              </p>
              <p className="text-sm text-muted-foreground">
                No utilices información que permita identificar pacientes, como nombres, números de documento, historias clínicas o cualquier dato personal sensible en tus consultas al Copiloto.
              </p>
            </div>

            <div className="space-y-3 text-muted-foreground">
              <p>
                <strong className="text-foreground">Formato adecuado de consultas:</strong>
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>"¿Cuál es el esquema de vacunación para menores de 5 años?"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>"¿Qué incluye el control prenatal en el primer trimestre?"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>"¿Cuáles son los criterios para valoración del adulto mayor?"</span>
                </li>
              </ul>

              <p className="mt-4">
                <strong className="text-foreground">Formato inadecuado:</strong>
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✗</span>
                  <span>"Mi paciente Juan Pérez con CC 123456 necesita..."</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✗</span>
                  <span>"La señora de la cama 3 que tiene diabetes..."</span>
                </li>
              </ul>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              Las consultas al Copiloto pueden ser registradas con fines de mejora del sistema. Por esta razón, es fundamental mantener la confidencialidad y no incluir información que comprometa la privacidad de los pacientes.
            </p>
          </CardContent>
        </Card>

        {/* Sources */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCheck className="w-6 h-6 text-primary" />
              Fuentes de información
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              El Copiloto RIAS 3280 consulta <strong>exclusivamente</strong> las fichas técnicas validadas que componen su corpus cerrado. Estas fichas están basadas en:
            </p>

            <ul className="space-y-2 text-muted-foreground ml-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Resolución 3280 de 2018</strong> del Ministerio de Salud y Protección Social</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Guías de práctica clínica oficiales del Ministerio de Salud</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Lineamientos técnicos de la Política de Atención Integral en Salud (PAIS)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Normatividad vigente en Colombia sobre RIAS</span>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-foreground font-semibold mb-2">
                Responsabilidad del usuario
              </p>
              <p className="text-sm text-muted-foreground">
                Es responsabilidad del profesional de salud verificar la información proporcionada consultando las fichas técnicas originales disponibles en la Biblioteca y contrastarla con su criterio clínico, las características individuales de cada caso y la supervisión correspondiente.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Updates */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Actualizaciones de la política</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Esta política de uso puede actualizarse periódicamente para reflejar cambios en el funcionamiento del Copiloto, nuevas regulaciones o mejoras en el sistema. Se recomienda revisar esta sección regularmente.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              <strong className="text-foreground">Última actualización:</strong> 15 de octubre de 2024
            </p>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="bg-accent/20 border-accent">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              Si tienes dudas sobre el uso apropiado del Copiloto RIAS 3280 o necesitas reportar un problema, contacta al equipo de soporte a través de la página de <a href="/contacto" className="text-primary hover:underline font-medium">Contacto</a>.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Politica;
