import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FeatureCard from "@/components/FeatureCard";
import { MessageSquare, Users, Shield, Search, BookOpen, CheckCircle } from "lucide-react";

const Inicio = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Copiloto RIAS 3280
            </h1>
            <p className="text-xl text-muted-foreground">
              Asistente educativo para talento humano en salud
            </p>
            <p className="text-muted-foreground">
              Consulta información validada sobre promoción y mantenimiento de la salud según la Resolución 3280/2018
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/copiloto">
                <Button size="lg" className="w-full sm:w-auto">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Abrir Copiloto
                </Button>
              </Link>
              <Link to="/biblioteca">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Ver Biblioteca
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<MessageSquare className="w-6 h-6" />}
            title="¿Qué hace?"
            description="Responde consultas sobre intervenciones de la RIAS, extrayendo información exclusivamente de fichas técnicas validadas."
          />
          <FeatureCard
            icon={<Users className="w-6 h-6" />}
            title="¿Para quién?"
            description="Personal de salud: médicos, enfermeras, auxiliares y promotores que necesitan consultar lineamientos de la Resolución 3280/2018."
          />
          <FeatureCard
            icon={<Shield className="w-6 h-6" />}
            title="¿Cómo funciona?"
            description="Utiliza RAG (Retrieval Augmented Generation) sobre un corpus cerrado de PDFs validados, sin acceso a internet ni otras fuentes."
          />
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Cómo usarlo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground">Pregunta</h3>
              <p className="text-muted-foreground">
                Formula tu consulta sobre una intervención específica o procedimiento de la RIAS
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground">Respuesta con citas</h3>
              <p className="text-muted-foreground">
                Recibe información validada con referencias exactas a las fichas técnicas
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground">Verifica</h3>
              <p className="text-muted-foreground">
                Contrasta con las fichas originales disponibles en la Biblioteca
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Card className="border-border shadow-soft">
            <CardContent className="pt-6 text-center">
              <Search className="w-12 h-12 mx-auto mb-4 text-primary" />
              <p className="text-3xl font-bold text-foreground mb-2">42</p>
              <p className="text-muted-foreground">Fichas validadas</p>
            </CardContent>
          </Card>
          <Card className="border-border shadow-soft">
            <CardContent className="pt-6 text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
              <p className="text-3xl font-bold text-foreground mb-2">15/10/2024</p>
              <p className="text-muted-foreground">Última actualización del corpus</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Comienza a consultar ahora
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Accede a información validada y confiable para tu práctica profesional
          </p>
          <Link to="/copiloto">
            <Button size="lg" variant="secondary">
              Abrir Copiloto
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
