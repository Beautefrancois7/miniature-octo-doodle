const defaultBookmarks = [
  { name: 'GitHub', url: 'https://github.com', category: 'work' },
  { name: 'YouTube', url: 'https://youtube.com', category: 'learning' },
  { name: 'MDN', url: 'https://developer.mozilla.org', category: 'docs' },
  { name: 'Notion', url: 'https://notion.so', category: 'planning' },
  { name: 'Google Drive', url: 'https://drive.google.com', category: 'files' }
];

const focusMessages = [
  'Fai un piccolo passo concreto verso il tuo obiettivo principale.',
  'Concentra oggi una parte di energia sul lavoro più importante.',
  'Completa il task più utile prima di aprire distrazioni extra.',
  'Un breve progresso costante vale più di un grande sforzo sporadico.'
];

const storageKeys = {
  bookmarks: 'miniature-octo-bookmarks',
  tasks: 'miniature-octo-tasks',
  notes: 'miniature-octo-notes'
};

const element = (selector) => document.querySelector(selector);

const buildInitialState = () => {
  const saved = localStorage.getItem(storageKeys.bookmarks);
  return saved ? JSON.parse(saved) : defaultBookmarks;
};

function renderBookmarks() {
  const bookmarkList = element('#bookmarkList');
  const bookmarks = buildInitialState();

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

function renderTasks() {
  const taskList = element('#taskList');
  const tasks = JSON.parse(localStorage.getItem(storageKeys.tasks) || '[]');

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
          <button class="delete-btn" type="button" data-id="${task.id}">Elimina</button>
        </li>
      `
    )
    .join('');
}

function getTasks() {
  return JSON.parse(localStorage.getItem(storageKeys.tasks) || '[]');
}

function saveTasks(tasks) {
  localStorage.setItem(storageKeys.tasks, JSON.stringify(tasks));
  renderTasks();
}

function updateClock() {
  const timeLabel = element('#timeLabel');
  const dayLabel = element('#dayLabel');
  const now = new Date();

  timeLabel.textContent = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

  dayLabel.textContent = now.toLocaleDateString([], {
    weekday: 'short',
    day: 'numeric',
    month: 'short'
  });
}

function setGreeting() {
  const greeting = element('#greetingText');
  const hour = new Date().getHours();

  if (hour < 12) {
    greeting.textContent = 'Buongiorno, fai partire la giornata in modo chiaro.';
  } else if (hour < 18) {
    greeting.textContent = 'Buon pomeriggio, mantieni il focus sul punto giusto.';
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

    const bookmarks = buildInitialState();
    bookmarks.unshift({
      name,
      url,
      category: 'custom'
    });

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
    tasks.unshift({
      id: crypto.randomUUID(),
      text,
      done: false
    });

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
  const saved = localStorage.getItem(storageKeys.notes) || '';
  notes.value = saved;

  notes.addEventListener('input', (event) => {
    localStorage.setItem(storageKeys.notes, event.target.value);
  });
}

function initialize() {
  renderBookmarks();
  renderTasks();
  bindSearch();
  bindBookmarkForm();
  bindTaskForm();
  bindTaskActions();
  bindNotes();
  updateClock();
  setGreeting();
  setFocusMessage();
  setInterval(updateClock, 1000 * 30);
}

initialize();

window.addEventListener('storage', () => {
  renderBookmarks();
  renderTasks();
});
