import React from "react";

const Copiloto: React.FC = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-4">
        <h1 className="text-3xl font-bold">Copiloto RIAS 3280</h1>
        <p className="text-gray-600">
          Asistente educativo embebido (Dify). Usa el chat para consultas basadas en recursos y normativa 3280.
        </p>
      </header>

      <section
        className="w-full rounded-xl border overflow-hidden"
        style={{ minHeight: "700px", height: "80vh" }}
      >
        <iframe
          src="https://udify.app/chatbot/slFuGDocw8uM3w5s"
          title="Copiloto RIAS 3280 (Dify)"
          className="w-full h-full"
          style={{ minHeight: "700px" }}
          frameBorder={0}
          allow="microphone"
          aria-label="Chat Dify embebido"
        />
      </section>
    </main>
  );
};

export default Copiloto;
