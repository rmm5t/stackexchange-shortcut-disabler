document.addEventListener('keydown', function(e) {
  // Prevent propagation of emacs key bindings
  if (e.ctrlKey) {
    switch (e.keyCode) {
    case 0x42: // ^B  backward-char
    case 0x49: // ^I  indent-line
    case 0x4B: // ^K  kill-line
    case 0x59: // ^Y  yank
      e.stopImmediatePropagation();
      return;
    }
  }
}, true);
