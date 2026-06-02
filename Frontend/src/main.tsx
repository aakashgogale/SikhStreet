import React, { Component, ErrorInfo, ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

class ErrorBoundary extends Component<{children: ReactNode}, {hasError: boolean, error: Error | null}> {
  constructor(props: {children: ReactNode}) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', background: '#ffe6e6', color: '#cc0000', fontFamily: 'monospace', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Development Server Glitch Detected</h2>
          <p style={{ marginBottom: '20px', color: '#333' }}>React failed to hot-reload because old components got stuck in the simulator.</p>
          
          <button 
            onClick={() => {
              sessionStorage.clear();
              localStorage.clear();
              window.location.reload();
            }}
            style={{ 
              padding: '16px 32px', 
              fontSize: '18px', 
              fontWeight: 'bold', 
              background: '#cc0000', 
              color: 'white', 
              border: 'none', 
              borderRadius: '12px', 
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(204,0,0,0.3)'
            }}
          >
            CLICK HERE TO FIX & RELOAD
          </button>

          <div style={{ marginTop: '40px', fontSize: '10px', opacity: 0.5 }}>
            <pre style={{ whiteSpace: 'pre-wrap', textAlign: 'left' }}>
              {this.state.error && this.state.error.toString()}
            </pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root')!;

// Properly reuse the React Root during Vite HMR to prevent multiple roots 
// from fighting over the DOM, which causes the NotFoundError crash.
let root = (window as any).__reactRoot;
if (!root) {
  root = createRoot(rootElement);
  (window as any).__reactRoot = root;
}

root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
