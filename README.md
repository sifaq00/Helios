# Helios

**Real-time global intelligence dashboard** — AI-powered news aggregation, geopolitical monitoring, and infrastructure tracking in a unified situational awareness interface.

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

---

## Features

- **Curated News Feeds** — Global and regional intelligence aggregation with AI-synthesized briefs.
- **Dual Map Engine** — 3D interactive globe (`globe.gl`) and WebGL flat map (`deck.gl`) with comprehensive layer controls.
- **Cross-Stream Correlation** — Military, economic, disaster, and escalation signal convergence.
- **Country Instability Index (CII)** — Real-time geopolitical stability scoring and stress tracking.
- **Finance Radar** — Live stock exchanges, commodities, cryptocurrencies, and macroeconomic indicators.
- **Local AI Support** — Run completely offline with Ollama, or connect to cloud providers (Groq, OpenRouter).
- **Desktop & Web** — Responsive web interface alongside native desktop applications (Tauri 2).
- **Multilingual** — Native language feeds, internationalization, and RTL support.

---

## Quick Start

### 1. Prerequisites
- **Node.js**: v24+ (recommended)
- **npm** / **pnpm**

### 2. Installation & Running Development Server

```bash
# Clone repository
git clone https://github.com/sifaq00/Helios.git
cd Helios

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Site Variants

Helios supports specialized situational awareness variants:

```bash
npm run dev           # Primary Variant (Global Intelligence)
npm run dev:tech      # Technology & Cyber Variant
npm run dev:finance   # Financial Markets Variant
npm run dev:commodity # Commodities & Supply Chain Variant
npm run dev:energy    # Energy & Infrastructure Variant
npm run dev:happy     # Constructive & Good News Variant
```

---

## Environment Configuration (`.env.local`)

The dashboard works out-of-the-box using public data feeds. To enable AI summarization or specialized features, add your API keys:

```env
# AI Summarization (Optional)
GROQ_API_KEY=your_groq_key_here
OPENROUTER_API_KEY=your_openrouter_key_here

# Custom Port (Optional, default: 3000)
DEV_PORT=3000
```

---

## Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | Vanilla TypeScript, Vite, globe.gl + Three.js, deck.gl + MapLibre GL |
| **Desktop** | Tauri 2 (Rust) + Node.js Sidecar |
| **AI / ML** | Ollama / Groq / OpenRouter, Transformers.js |
| **API Contracts** | Protocol Buffers & sebuf |
| **Caching** | Redis (Upstash), Local Service Worker, Multi-tier Cache |

---

## Contributing

Contributions are welcome! Please check [CONTRIBUTING.md](./CONTRIBUTING.md) for development guidelines and code standards.

```bash
npm run typecheck        # TypeScript validation
npm run build:full       # Full production build
```

---

## License

Licensed under **AGPL-3.0-only**. See [LICENSE](LICENSE) for full terms.

