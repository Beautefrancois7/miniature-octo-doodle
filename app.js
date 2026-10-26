* {
  box-sizing: border-box;
}

:root {
  --bg: #0f172a;
  --bg-soft: #111827;
  --panel: rgba(15, 23, 42, 0.8);
  --panel-alt: rgba(30, 41, 59, 0.9);
  --border: rgba(148, 163, 184, 0.18);
  --primary: #8b5cf6;
  --secondary: #22d3ee;
  --accent: #f59e0b;
  --text: #e2e8f0;
  --muted: #94a3b8;
  --success: #34d399;
  --danger: #f87171;
  --shadow: 0 18px 45px rgba(15, 23, 42, 0.45);
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(139, 92, 246, 0.35), transparent 30%),
    radial-gradient(circle at bottom right, rgba(34, 211, 238, 0.3), transparent 30%),
    var(--bg);
  color: var(--text);
}

body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 18px;
}

button, input, select, textarea {
  font: inherit;
}

.app-shell {
  width: min(1100px, 100%);
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid var(--border);
  border-radius: 28px;
  box-shadow: var(--shadow);
  backdrop-filter: blur(12px);
  padding: 26px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
}

h1, h2, h3, p {
  margin: 0;
}

h1 {
  font-size: clamp(1.8rem, 2vw, 2.5rem);
  letter-spacing: -0.05em;
}

.eyebrow {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--secondary);
  margin-bottom: 8px;
}

.muted {
  color: var(--muted);
}

.time-block {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 12px 16px;
}

#timeLabel {
  font-size: 1.2rem;
}

.layout {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 18px;
}

.panel {
  background: var(--panel-alt);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 20px;
}

.hero-panel {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 20px;
  align-items: center;
}

.hero-panel h2 {
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.06em;
}

.search-wrap {
  width: 100%;
}

#searchForm {
  display: flex;
  gap: 10px;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 10px;
}

#searchForm input,
#searchForm select,
.inline-form input,
textarea {
  background: rgba(15, 23, 42, 0.7);
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 12px 14px;
}

#searchForm input {
  flex: 1;
}

#searchForm select {
  min-width: 130px;
}

button {
  border: none;
  border-radius: 12px;
  padding: 12px 16px;
  background: linear-gradient(135deg, var(--primary), #7c3aed);
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.15s ease;
}

button:hover {
  transform: translateY(-1px);
  opacity: 0.98;
}

.panel-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.tag {
  color: var(--secondary);
  background: rgba(34, 211, 238, 0.08);
  border: 1px solid rgba(34, 211, 238, 0.2);
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.spotlight-panel p {
  font-size: 1.05rem;
  line-height: 1.6;
  color: #dfe7f5;
}

.bookmark-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
  margin-bottom: 18px;
}

.bookmark-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-decoration: none;
  color: var(--text);
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 14px;
  transition: border-color 0.15s ease;
}

.bookmark-item:hover {
  border-color: rgba(139, 92, 246, 0.6);
}

.bookmark-item strong {
  font-size: 1rem;
}

.bookmark-item span {
  color: var(--muted);
  font-size: 0.78rem;
}

.inline-form {
  display: flex;
  gap: 10px;
}

.inline-form input {
  flex: 1;
}

.task-list {
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
  display: grid;
  gap: 10px;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 12px 12px;
}

.task-item label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  flex: 1;
}

.task-item input[type="checkbox"] {
  accent-color: var(--success);
  width: 18px;
  height: 18px;
}

.task-item.completed {
  opacity: 0.6;
}

.task-item.completed .task-label {
  text-decoration: line-through;
}

.delete-btn {
  border: none;
  background: rgba(248, 113, 113, 0.12);
  color: #fecaca;
  padding: 7px 10px;
}

textarea {
  width: 100%;
  resize: vertical;
  min-height: 175px;
}

@media (max-width: 840px) {
  .layout {
    grid-template-columns: 1fr;
  }

  .hero-panel {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .time-block {
    align-items: flex-start;
  }
}

@media (max-width: 540px) {
  .app-shell {
    padding: 18px;
  }

  #searchForm,
  .inline-form {
    flex-direction: column;
  }
}
