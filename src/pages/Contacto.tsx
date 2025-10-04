import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, MessageSquare } from "lucide-react";

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    sede: "",
    tipoSolicitud: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.nombre || !formData.correo || !formData.tipoSolicitud || !formData.mensaje) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos obligatorios",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to a backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Mensaje enviado",
      description: "Gracias por tu mensaje. Te responderemos pronto.",
    });

    // Reset form
    setFormData({
      nombre: "",
      correo: "",
      sede: "",
      tipoSolicitud: "",
      mensaje: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Contacto y Soporte</h1>
          <p className="text-lg text-muted-foreground">
            ¿Tienes dudas o sugerencias? Estamos aquí para ayudarte
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-soft">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Correo electrónico</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Respuesta en 24-48 horas hábiles
                  </p>
                  <a 
                    href="mailto:soporte@copilotorias.edu.co" 
                    className="text-sm text-primary hover:underline"
                  >
                    soporte@copilotorias.edu.co
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Formulario de contacto</h3>
                  <p className="text-sm text-muted-foreground">
                    Completa el formulario a continuación para enviarnos tu consulta o reporte
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Formulario de contacto</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="nombre">
                  Nombre completo <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="nombre"
                  value={formData.nombre}
                  onChange={(e) => handleChange("nombre", e.target.value)}
                  placeholder="Tu nombre"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="correo">
                  Correo electrónico <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="correo"
                  type="email"
                  value={formData.correo}
                  onChange={(e) => handleChange("correo", e.target.value)}
                  placeholder="tu.correo@ejemplo.com"
                  required
                />
              </div>

              {/* Institution/Role */}
              <div className="space-y-2">
                <Label htmlFor="sede">Sede o rol (opcional)</Label>
                <Input
                  id="sede"
                  value={formData.sede}
                  onChange={(e) => handleChange("sede", e.target.value)}
                  placeholder="Ej: Hospital X, Enfermero"
                />
              </div>

              {/* Request Type */}
              <div className="space-y-2">
                <Label htmlFor="tipoSolicitud">
                  Tipo de solicitud <span className="text-destructive">*</span>
                </Label>
                <Select 
                  value={formData.tipoSolicitud} 
                  onValueChange={(value) => handleChange("tipoSolicitud", value)}
                  required
                >
                  <SelectTrigger id="tipoSolicitud">
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="error-cita">Error en cita bibliográfica</SelectItem>
                    <SelectItem value="falta-ficha">Falta de ficha técnica</SelectItem>
                    <SelectItem value="error-contenido">Error en contenido de respuesta</SelectItem>
                    <SelectItem value="sugerencia">Sugerencia de mejora</SelectItem>
                    <SelectItem value="problema-tecnico">Problema técnico</SelectItem>
                    <SelectItem value="otra">Otra consulta</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="mensaje">
                  Mensaje <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="mensaje"
                  value={formData.mensaje}
                  onChange={(e) => handleChange("mensaje", e.target.value)}
                  placeholder="Describe tu consulta o reporte en detalle..."
                  rows={6}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Proporciona todos los detalles posibles para que podamos ayudarte mejor
                </p>
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full">
                <Send className="mr-2 h-5 w-5" />
                Enviar mensaje
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <Card className="bg-accent/20 border-accent">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-foreground mb-3">Tipos de soporte que ofrecemos:</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span><strong className="text-foreground">Errores en citas:</strong> Si detectas que una cita bibliográfica es incorrecta o no corresponde</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span><strong className="text-foreground">Fichas faltantes:</strong> Si necesitas información que no está disponible en el corpus actual</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span><strong className="text-foreground">Problemas técnicos:</strong> Si experimentas errores en el funcionamiento del Copiloto</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span><strong className="text-foreground">Sugerencias:</strong> Ideas para mejorar la herramienta</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span><strong className="text-foreground">Consultas generales:</strong> Dudas sobre el uso o alcance del Copiloto</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contacto;
