import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { fichasTecnicas, cursosDeVida, intervenciones, FichaTecnica } from "@/data/biblioteca";
import { Search, FileText, Copy, Download, Eye, FileDown, Frown } from "lucide-react";

const Recursos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCurso, setSelectedCurso] = useState("Todos");
  const [selectedIntervencion, setSelectedIntervencion] = useState("Todas");
  const [selectedTipos, setSelectedTipos] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<FichaTecnica | null>(null);

  const tiposDisponibles = useMemo(() => {
    return Array.from(new Set(fichasTecnicas.map(f => f.tipo)));
  }, []);

  const toggleTipo = (tipo: string) => {
    setSelectedTipos(prev => 
      prev.includes(tipo) ? prev.filter(t => t !== tipo) : [...prev, tipo]
    );
  };

  const filteredFichas = fichasTecnicas.filter((ficha) => {
    const matchesSearch = ficha.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ficha.tema.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCurso = selectedCurso === "Todos" || ficha.cursoDeVida === selectedCurso;
    const matchesIntervencion = selectedIntervencion === "Todas" || ficha.intervencion === selectedIntervencion;
    const matchesTipo = selectedTipos.length === 0 || selectedTipos.includes(ficha.tipo);
    
    return matchesSearch && matchesCurso && matchesIntervencion && matchesTipo;
  });

  const FichaCard = ({ ficha }: { ficha: FichaTecnica }) => (
    <Card className="rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 flex flex-col h-full">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge variant="secondary" className="shrink-0">
            {ficha.cursoDeVida}
          </Badge>
          <Badge variant="outline" className="shrink-0">
            {ficha.tipo}
          </Badge>
        </div>
        <h3 className="font-semibold text-foreground leading-tight line-clamp-2 min-h-[2.5rem]">
          {ficha.titulo}
        </h3>
        {(ficha.fuente || ficha.version) && (
          <p className="text-xs text-muted-foreground mt-2">
            {ficha.fuente && <span>{ficha.fuente}</span>}
            {ficha.fuente && ficha.version && <span> • </span>}
            {ficha.version && <span>v{ficha.version}</span>}
          </p>
        )}
      </CardHeader>
      <CardContent className="pt-0 mt-auto">
        <div className="flex gap-2">
          <Button 
            className="flex-1" 
            variant="default"
            size="sm"
            onClick={() => {
              setCurrent(ficha);
              setOpen(true);
            }}
            aria-label={`Ver ${ficha.titulo}`}
          >
            <Eye className="w-4 h-4 mr-2" />
            Ver
          </Button>
          <Button 
            className="flex-1" 
            variant="outline"
            size="sm"
            asChild
            aria-label={`Descargar ${ficha.titulo}`}
          >
            <a href={ficha.pdfUrl} download>
              <FileDown className="w-4 h-4 mr-2" />
              Descargar
            </a>
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
                  aria-label="Buscar recurso por título o tema"
                />
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Curso de vida
                  </label>
                  <Select value={selectedCurso} onValueChange={setSelectedCurso}>
                    <SelectTrigger aria-label="Filtrar por curso de vida">
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
                    <SelectTrigger aria-label="Filtrar por intervención">
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

        {/* Chips de Tipo de Recurso */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-medium text-foreground">Tipo de recurso:</span>
          {tiposDisponibles.map((tipo) => (
            <Button
              key={tipo}
              variant={selectedTipos.includes(tipo) ? "default" : "outline"}
              size="sm"
              onClick={() => toggleTipo(tipo)}
              className="rounded-full"
              aria-label={`Filtrar por ${tipo}`}
              aria-pressed={selectedTipos.includes(tipo)}
            >
              {tipo}
            </Button>
          ))}
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-foreground">
            Mostrando {filteredFichas.length} de {fichasTecnicas.length} recursos
          </p>
          <p className="text-xs text-muted-foreground">
            Documentos validados
          </p>
        </div>

        {/* Fichas Grid */}
        {filteredFichas.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFichas.map((ficha) => (
              <FichaCard key={ficha.id} ficha={ficha} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <Card className="rounded-2xl shadow-soft border-2">
            <CardContent className="pt-16 pb-16 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
                  <Frown className="w-10 h-10 text-muted-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                No hay resultados con estos filtros
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-6">
                Intenta ajustar los filtros, términos de búsqueda o chips de tipo de recurso para encontrar lo que necesitas.
              </p>
              <Button 
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCurso("Todos");
                  setSelectedIntervencion("Todas");
                  setSelectedTipos([]);
                }}
                aria-label="Limpiar todos los filtros"
              >
                Limpiar filtros
              </Button>
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

      {/* PDF Viewer Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl h-[80vh]">
          <DialogHeader>
            <DialogTitle>{current?.titulo}</DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-hidden rounded-lg border h-full">
            {current?.pdfUrl?.toLowerCase().endsWith(".pdf") ? (
              <iframe 
                title={current?.titulo || "Documento"} 
                src={current?.pdfUrl} 
                className="w-full h-full" 
                loading="lazy" 
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <img 
                  src={current?.pdfUrl} 
                  alt={current?.titulo} 
                  className="max-w-full max-h-full" 
                  loading="lazy" 
                />
              </div>
            )}
          </div>
          <DialogFooter className="gap-2">
            {current?.fuente && (
              <Button 
                variant="outline" 
                onClick={() => {
                  const cita = `Fuente: ${current.fuente} — versión ${current.version || ""}`;
                  navigator.clipboard.writeText(cita);
                }}
              >
                <Copy className="w-4 h-4 mr-2" />
                Copiar cita
              </Button>
            )}
            {current?.pdfUrl && (
              <a 
                className="inline-flex items-center justify-center px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md text-sm font-medium transition-colors"
                href={current.pdfUrl} 
                download
              >
                <Download className="w-4 h-4 mr-2" />
                Descargar
              </a>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Recursos;
