
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Capturar e registrar erros durante a inicialização
try {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    throw new Error("Root element not found");
  }
  
  createRoot(rootElement).render(<App />);
  console.log("Application rendered successfully");
} catch (error) {
  console.error("Failed to render application:", error);
  // Adicionar uma mensagem de erro visível no DOM
  const errorContainer = document.createElement("div");
  errorContainer.style.color = "red";
  errorContainer.style.padding = "20px";
  errorContainer.style.fontFamily = "Arial, sans-serif";
  errorContainer.innerHTML = `<h2>Erro ao carregar a aplicação</h2>
                             <p>Por favor, tente novamente ou contate o suporte.</p>
                             <p>Detalhes: ${error instanceof Error ? error.message : String(error)}</p>`;
  document.body.appendChild(errorContainer);
}
