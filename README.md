const defaultBookmarks = [
  { name: 'GitHub', url: 'https://github.com', category: 'dev' },
  { name: 'Notion', url: 'https://www.notion.so', category: 'ideas' },
  { name: 'YouTube', url: 'https://www.youtube.com', category: 'learn' },
  { name: 'MDN', url: 'https://developer.mozilla.org', category: 'docs' },
  { name: 'Drive', url: 'https://drive.google.com', category: 'files' }
];

const focusMessages = [
  'Scegli un compito importante e fai il primo passo concreto.',
  'Lavorare sul task più rilevante oggi crea più valore del multitasking.',
  'Un passo chiaro oggi apre una giornata più semplice domani.',
  'Mantieni il focus su ciò che davvero muove il risultato.'
];

const storageKeys = {
  bookmarks: 'octo-bookmarks',
  tasks: 'octo-tasks',
  notes: 'octo-notes',
  pomodoro: 'octo-pomodoro'
};

const element = (selector) => document.querySelector(selector);

function buildInitialBookmarks() {
  const saved = localStorage.getItem(storageKeys.bookmarks);
  return saved ? JSON.parse(saved) : defaultBookmarks;
}

function renderBookmarks() {
  const bookmarkList = element('#bookmarkList');
  const bookmarks = buildInitialBookmarks();

  bookmarkList.innerHTML = bookmarks
    .map(
      (bookmark) => `
        <a class="bookmark-item" href="${bookmark.url}" target="_blank" rel="noopener noreferrer">
          <strong>${bookmark.name}</strong>
          <span>${bookmark.category}</span>
        </a>
      `
    )
    .join('');
}

function saveBookmarks(bookmarks) {
  localStorage.setItem(storageKeys.bookmarks, JSON.stringify(bookmarks));
  renderBookmarks();
}

function getTasks() {
  return JSON.parse(localStorage.getItem(storageKeys.tasks) || '[]');
}

function saveTasks(tasks) {
  localStorage.setItem(storageKeys.tasks, JSON.stringify(tasks));
  renderTasks();
}

function renderTasks() {
  const taskList = element('#taskList');
  const tasks = getTasks();

  if (!tasks.length) {
    taskList.innerHTML = '<li class="task-item"><span>Nessun compito ancora. Aggiungine uno.</span></li>';
    return;
  }

  taskList.innerHTML = tasks
    .map(
      (task) => `
        <li class="task-item ${task.done ? 'completed' : ''}">
          <label>
            <input type="checkbox" ${task.done ? 'checked' : ''} data-id="${task.id}" />
            <span class="task-label">${task.text}</span>
          </label>
          <button type="button" class="delete-btn" data-id="${task.id}">Elimina</button>
        </li>
      `
    )
    .join('');
}

function updateClock() {
  const now = new Date();
  element('#timeLabel').textContent = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

  element('#dayLabel').textContent = now.toLocaleDateString([], {
    weekday: 'short',
    day: 'numeric',
    month: 'short'
  });
}

function setGreeting() {
  const hour = new Date().getHours();
  const greeting = element('#greetingText');

  if (hour < 12) {
    greeting.textContent = 'Buongiorno, mettiamo in moto la giornata.';
  } else if (hour < 18) {
    greeting.textContent = 'Buon pomeriggio, mantieni il focus sulla priorità.';
  } else {
    greeting.textContent = 'Buonasera, chiudi la giornata con un piccolo traguardo.';
  }
}

function setFocusMessage() {
  const focusMessage = element('#focusMessage');
  const selected = focusMessages[Math.floor(Math.random() * focusMessages.length)];
  focusMessage.textContent = selected;
}

function bindSearch() {
  const form = element('#searchForm');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = element('#searchInput').value.trim();
    const engine = element('#engineSelect').value;

    if (!query) {
      element('#searchInput').focus();
      return;
    }

    const urls = {
      google: `https://www.google.com/search?q=${encodeURIComponent(query)}`,
      bing: `https://www.bing.com/search?q=${encodeURIComponent(query)}`,
      duckduckgo: `https://duckduckgo.com/?q=${encodeURIComponent(query)}`
    };

    window.open(urls[engine], '_blank', 'noopener,noreferrer');
    form.reset();
  });
}

function bindBookmarkForm() {
  const form = element('#bookmarkForm');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = element('#bookmarkName').value.trim();
    const url = element('#bookmarkUrl').value.trim();

    if (!name || !url) {
      return;
    }

    const bookmarks = buildInitialBookmarks();
    bookmarks.unshift({ name, url, category: 'custom' });
    saveBookmarks(bookmarks);
    form.reset();
  });
}

function bindTaskForm() {
  const form = element('#taskForm');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = element('#taskInput');
    const text = input.value.trim();

    if (!text) {
      return;
    }

    const tasks = getTasks();
    tasks.unshift({ id: crypto.randomUUID(), text, done: false });
    saveTasks(tasks);
    input.value = '';
    input.focus();
  });
}

function bindTaskActions() {
  const taskList = element('#taskList');

  taskList.addEventListener('change', (event) => {
    if (event.target.matches('input[type="checkbox"]')) {
      const tasks = getTasks().map((task) => {
        if (task.id === event.target.dataset.id) {
          return { ...task, done: event.target.checked };
        }
        return task;
      });
      saveTasks(tasks);
    }
  });

  taskList.addEventListener('click', (event) => {
    if (event.target.matches('.delete-btn')) {
      const tasks = getTasks().filter((task) => task.id !== event.target.dataset.id);
      saveTasks(tasks);
    }
  });
}

function bindNotes() {
  const notes = element('#notes');
  notes.value = localStorage.getItem(storageKeys.notes) || '';

  notes.addEventListener('input', (event) => {
    localStorage.setItem(storageKeys.notes, event.target.value);
  });
}

function initializePomodoro() {
  const timerDisplay = element('#timerDisplay');
  const startBtn = element('#startTimer');
  const resetBtn = element('#resetTimer');
  const totalSeconds = 25 * 60;

  let remaining = Number(localStorage.getItem(storageKeys.pomodoro)) || totalSeconds;
  let timerId = null;

  const updateDisplay = () => {
    const minutes = Math.floor(remaining / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (remaining % 60).toString().padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${seconds}`;
  };

  const persist = () => localStorage.setItem(storageKeys.pomodoro, String(remaining));

  const stopTimer = () => {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  };

  const startTimer = () => {
    if (timerId) return;
    timerId = setInterval(() => {
      if (remaining > 0) {
        remaining -= 1;
        updateDisplay();
        persist();
      } else {
        stopTimer();
        if (Notification && Notification.permission === 'granted') {
          new Notification('Pomodoro completato!');
        }
      }
    }, 1000);
  };

  const resetTimer = () => {
    stopTimer();
    remaining = totalSeconds;
    updateDisplay();
    persist();
  };

  startBtn.addEventListener('click', startTimer);
  resetBtn.addEventListener('click', resetTimer);

  updateDisplay();
}

function initialize() {
  renderBookmarks();
  renderTasks();
  bindSearch();
  bindBookmarkForm();
  bindTaskForm();
  bindTaskActions();
  bindNotes();
  initializePomodoro();
  updateClock();
  setGreeting();
  setFocusMessage();
  setInterval(updateClock, 30000);
}

if (!('Notification' in window)) {
  console.info('Questo browser non supporta le notifiche del desktop.');
}

initialize();

window.addEventListener('storage', () => {
  renderBookmarks();
  renderTasks();
});
