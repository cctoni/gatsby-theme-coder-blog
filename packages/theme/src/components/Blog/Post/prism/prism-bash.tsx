/* global Prism */

;(function(Prism) {
  if (!Prism) return console.warn('prism-bash: Prism is missing!')

  Prism.languages.bash = {
    line: /^.*\n/gm,
  }

  Prism.languages.shell = Prism.languages.bash
})(Prism)
