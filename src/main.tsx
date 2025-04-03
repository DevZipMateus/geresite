
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
}
