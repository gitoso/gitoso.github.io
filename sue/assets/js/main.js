
var GATE_KEY = 'livro_receitas_unlocked';
var GATE_PASS = 'digaamigoeentre';

function isUnlocked() {
  return localStorage.getItem(GATE_KEY) === 'true';
}

function initGate() {
  var overlay = document.querySelector('.moria-overlay');
  if (!overlay) {
    // Not the index page — just check if locked and redirect
    if (!isUnlocked()) {
      window.location.href = (window.location.pathname.indexOf('/receitas/') !== -1)
        ? '../index.html' : 'index.html';
    }
    return;
  }

  if (isUnlocked()) {
    overlay.classList.add('hidden');
    document.body.classList.remove('gate-locked');
    return;
  }

  document.body.classList.add('gate-locked');

  var input = document.getElementById('moria-input');
  var error = document.getElementById('moria-error');
  var door = document.querySelector('.moria-door');

  var errors = [
    'A porta permanece fechada...',
    'As runas n\u00e3o reagem...',
    'Gandalf suspira e tenta novamente...',
    'N\u00e3o \u00e9 essa a palavra...',
  ];
  var errorIdx = 0;

  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      var val = input.value.trim().toLowerCase().replace(/\s+/g, '');
      if (val === GATE_PASS) {
        // Success!
        localStorage.setItem(GATE_KEY, 'true');
        door.classList.add('unlocked');
        error.textContent = '';
        input.disabled = true;
        input.value = 'Diga "amigo" e entre';
        setTimeout(function() {
          overlay.classList.add('hidden');
          document.body.classList.remove('gate-locked');
        }, 1500);
      } else {
        // Wrong password
        input.classList.add('moria-shake');
        error.textContent = errors[errorIdx % errors.length];
        error.style.opacity = '1';
        errorIdx++;
        setTimeout(function() {
          input.classList.remove('moria-shake');
        }, 500);
        input.value = '';
      }
    }
  });

  input.focus();
}

document.addEventListener('DOMContentLoaded', function() {
  initGate();

  var searchBox = document.querySelector('.search-box');
  if (!searchBox) return;

  searchBox.addEventListener('input', function() {
    var query = this.value.toLowerCase().trim();
    var cards = document.querySelectorAll('.recipe-card');
    cards.forEach(function(card) {
      var title = card.querySelector('h3').textContent.toLowerCase();
      var source = card.querySelector('.card-source');
      var sourceText = source ? source.textContent.toLowerCase() : '';
      if (title.indexOf(query) !== -1 || sourceText.indexOf(query) !== -1) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
