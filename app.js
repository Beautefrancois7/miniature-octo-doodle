* {
  box-sizing: border-box;
}

:root {
  --bg: #07111f;
  --bg-alt: #0d1b2d;
  --panel: rgba(14, 22, 37, 0.7);
  --panel-strong: rgba(17, 28, 46, 0.88);
  --glass: rgba(18, 31, 48, 0.7);
  --border: rgba(148, 163, 184, 0.15);
  --primary: #8b5cf6;
  --primary-2: #7c3aed;
  --secondary: #22d3ee;
  --accent: #f59e0b;
  --text: #edf4ff;
  --muted: #9fb1c8;
  --success: #34d399;
  --danger: #f87171;
  --shadow: 0 22px 60px rgba(2, 6, 23, 0.55);
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(139, 92, 246, 0.28), transparent 22%),
    radial-gradient(circle at bottom right, rgba(34, 211, 238, 0.2), transparent 25%),
    linear-gradient(135deg, var(--bg) 0%, var(--bg-alt) 100%);
  color: var(--text);
}

body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px 18px;
}

button, input, select, textarea {
  font: inherit;
}

button {
  border: none;
  cursor: pointer;
}

.app-shell {
  width: min(1200px, 100%);
  min-height: 820px;
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  gap: 22px;
  background: rgba(7, 17, 31, 0.72);
  border: 1px solid var(--border);
  border-radius: 30px;
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px);
  padding: 22px;
}

.sidebar,
.main-content {
  min-width: 0;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 6px 6px 6px 0;
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 6px 8px 16px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  font-size: 1.2rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  box-shadow: 0 10px 25px rgba(124, 58, 237, 0.45);
}

h1, h2, h3, h4, p {
  margin: 0;
}

h1 {
  font-size: 1.35rem;
  letter-spacing: -0.05em;
}

.label {
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.68rem;
}

.label.small {
  font-size: 0.6rem;
}

.glass {
  background: var(--glass);
  border: 1px solid var(--border);
  border-radius: 22px;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.03);
}

.profile-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 16px;
}

.avatar {
  width: 46px;
  height: 46px;
  border-radius: 15px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #f59e0b, #f97316);
  color: white;
  font-weight: 800;
}

.nav-list {
  display: grid;
  gap: 10px;
}

.nav-link {
  text-align: left;
  width: 100%;
  padding: 12px 14px;
  border-radius: 14px;
  background: transparent;
  color: var(--muted);
  border: 1px solid transparent;
  transition: all 0.18s ease;
}

.nav-link.active,
.nav-link:hover {
  background: rgba(139, 92, 246, 0.12);
  border-color: rgba(139, 92, 246, 0.24);
  color: var(--text);
}

.mini-stats {
  margin-top: auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  padding: 18px 16px;
}

.mini-stats strong {
  display: block;
  margin-top: 8px;
  font-size: 1.12rem;
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 20px;
}

.topbar-meta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.datetime-box,
.weather-box {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(15, 23, 42, 0.65);
}

#timeLabel {
  font-size: 1.12rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(240px, 0.7fr);
  gap: 18px;
}

.panel {
  padding: 18px 18px 20px;
}

.hero-panel {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 18px;
}

.hero-copy h2 {
  font-size: clamp(1.75rem, 2vw, 2.5rem);
  line-height: 1.15;
  letter-spacing: -0.06em;
  max-width: 16ch;
}

.search-form {
  display: flex;
  gap: 10px;
  background: rgba(10, 18, 30, 0.7);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 10px;
}

.search-form input,
.search-form select,
.mini-form input,
textarea {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: rgba(15, 23, 42, 0.7);
  color: var(--text);
  padding: 12px 14px;
}

.search-form input {
  flex: 1;
}

.search-form select {
  max-width: 140px;
}

.search-form button,
.mini-form button,
.timer-actions button {
  border-radius: 12px;
  padding: 12px 16px;
  font-weight: 700;
  color: white;
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
}

.timer-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.panel-head {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 6px 10px;
  border: 1px solid rgba(34, 211, 238, 0.25);
  background: rgba(34, 211, 238, 0.08);
  color: var(--secondary);
  font-size: 0.7rem;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.timer-display {
  font-size: clamp(2.2rem, 3vw, 3.2rem);
  letter-spacing: -0.08em;
  font-weight: 800;
  margin: 10px 0 18px;
}

.timer-actions {
  display: flex;
  gap: 10px;
}

.timer-actions .secondary {
  background: rgba(148, 163, 184, 0.1);
  border: 1px solid var(--border);
}

.content-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 18px;
}

.bookmarks-panel,
.task-panel,
.notes-panel {
  min-height: 260px;
}

.bookmarks-panel {
  grid-column: 1;
}

.task-panel {
  grid-column: 2;
}

.notes-panel {
  grid-column: 1 / -1;
}

.bookmark-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 12px;
  margin-bottom: 18px;
}

.bookmark-item {
  text-decoration: none;
  color: var(--text);
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 16px;
  border: 1px solid var(--border);
  background: rgba(15, 23, 42, 0.7);
  padding: 14px;
  transition: transform 0.15s ease, border-color 0.15s ease;
}

.bookmark-item:hover {
  transform: translateY(-2px);
  border-color: rgba(139, 92, 246, 0.5);
}

.bookmark-item strong {
  font-size: 1rem;
}

.bookmark-item span {
  color: var(--muted);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.mini-form {
  display: flex;
  gap: 10px;
}

.mini-form.compact {
  margin-bottom: 12px;
}

.task-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border-radius: 14px;
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid var(--border);
  padding: 12px 12px;
}

.task-item label {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  cursor: pointer;
}

.task-item input[type="checkbox"] {
  accent-color: var(--success);
  width: 18px;
  height: 18px;
}

.task-item.completed {
  opacity: 0.7;
}

.task-item.completed .task-label {
  text-decoration: line-through;
}

.delete-btn {
  background: rgba(248, 113, 113, 0.12);
  color: #fecaca;
  border: 1px solid rgba(248, 113, 113, 0.2);
  border-radius: 10px;
  padding: 8px 10px;
}

textarea {
  min-height: 180px;
  resize: vertical;
}

@media (max-width: 900px) {
  .app-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    padding: 0;
  }

  .content-grid,
  .hero-grid {
    grid-template-columns: 1fr;
  }

  .bookmarks-panel,
  .task-panel,
  .notes-panel {
    grid-column: auto;
  }
}

@media (max-width: 560px) {
  body {
    padding: 18px 12px;
  }

  .app-shell {
    padding: 16px;
    border-radius: 24px;
  }

  .topbar,
  .search-form,
  .mini-form,
  .timer-actions {
    flex-direction: column;
  }

  .topbar-meta {
    width: 100%;
    justify-content: space-between;
  }

  .search-form select {
    max-width: none;
  }
}
