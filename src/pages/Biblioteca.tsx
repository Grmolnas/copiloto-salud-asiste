import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { fichasTecnicas, cursosDeVida, intervenciones, FichaTecnica } from "@/data/biblioteca";
import { Search, ExternalLink, FileText, Users, Activity } from "lucide-react";

const Biblioteca = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCurso, setSelectedCurso] = useState("Todos");
  const [selectedIntervencion, setSelectedIntervencion] = useState("Todas");

  const filteredFichas = fichasTecnicas.filter((ficha) => {
    const matchesSearch = ficha.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ficha.tema.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCurso = selectedCurso === "Todos" || ficha.cursoDeVida === selectedCurso;
    const matchesIntervencion = selectedIntervencion === "Todas" || ficha.intervencion === selectedIntervencion;
    
    return matchesSearch && matchesCurso && matchesIntervencion;
  });

  const FichaCard = ({ ficha }: { ficha: FichaTecnica }) => (
    <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground mb-2 leading-tight">
                {ficha.titulo}
              </h3>
            </div>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-4 h-4 flex-shrink-0" />
              <span className="font-medium">Curso de vida:</span>
              <span className="text-foreground">{ficha.cursoDeVida}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Activity className="w-4 h-4 flex-shrink-0" />
              <span className="font-medium">Intervención:</span>
              <span className="text-foreground">{ficha.intervencion}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <FileText className="w-4 h-4 flex-shrink-0" />
              <span className="font-medium">Tema:</span>
              <span className="text-foreground">{ficha.tema}</span>
            </div>
          </div>
          
          <Button 
            className="w-full" 
            variant="outline"
            onClick={() => window.open(ficha.pdfUrl, '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Abrir PDF
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Biblioteca de Fichas Técnicas</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Accede directamente a las fichas técnicas validadas que utiliza el Copiloto. Todos los documentos han sido revisados y aprobados para su uso educativo.
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <div className="space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Buscar por título o tema..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Curso de vida
                  </label>
                  <Select value={selectedCurso} onValueChange={setSelectedCurso}>
                    <SelectTrigger>
                      <SelectValue />
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

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Tipo de intervención
                  </label>
                  <Select value={selectedIntervencion} onValueChange={setSelectedIntervencion}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {intervenciones.map((intervencion) => (
                        <SelectItem key={intervencion} value={intervencion}>
                          {intervencion}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {filteredFichas.length} {filteredFichas.length === 1 ? 'ficha encontrada' : 'fichas encontradas'}
          </p>
          <p className="text-xs text-muted-foreground">
            Solo se listan documentos validados
          </p>
        </div>

        {/* Fichas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFichas.map((ficha) => (
            <FichaCard key={ficha.id} ficha={ficha} />
          ))}
        </div>

        {/* Empty State */}
        {filteredFichas.length === 0 && (
          <Card className="shadow-soft">
            <CardContent className="pt-12 pb-12 text-center">
              <Search className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No se encontraron fichas
              </h3>
              <p className="text-muted-foreground">
                Intenta ajustar los filtros o términos de búsqueda
              </p>
            </CardContent>
          </Card>
        )}

        {/* Info Note */}
        <Card className="bg-accent/20 border-accent">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Nota:</strong> Las fichas técnicas son documentos oficiales que describen las intervenciones de promoción y mantenimiento de la salud establecidas en la Resolución 3280 de 2018. Cada ficha incluye objetivos, población objetivo, periodicidad, procedimientos y criterios de calidad.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Biblioteca;
