export const html = `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <title>Basthon Console</title>
    <link rel="icon" type="image/png" href="assets/img/favicon.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
    <link rel="stylesheet" type="text/css" href="assets/css/notie.css">
    <link rel="stylesheet" href="assets/css/style.css">
    
    <script src="assets/js/basthon-kernel/basthon.min.js"></script>
    <script src="assets/js/basthon-kernel/basthon_goodies.min.js"></script>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ext-language_tools.js"></script>
  </head>
  <body>
    <div id="header" style="font-size: 0;">
      <div id="title" style="text-align: center;">
        <img src="assets/img/basthon.svg" class="basthon-logo" alt="Basthon"/>
      </div>
      <div id="subtitle" style="text-align: center; font-size: 1.2vw; margin-bottom: 0.5vw; color: #888;">
        Un bac à sable pour Python
      </div>
    </div>
    <div id="container">
      <div id="left-div">
        <div id="editor"></div>
        <div style="padding: 1vw 0px 0px 0px; float: left;">
          <button id="run" class="btn" title="Exécuter le script">
            <i class="fas fa-cogs fa-fw btn-logo btn-titled"></i>
            Exécuter
          </button>
          <button id="open" class="btn" title="Ouvrir un script, charger un module ou un fichier">
            <i class="fas fa-folder-open fa-fw btn-logo"></i>
          </button>
          <button id="download" class="btn" title="Télécharger le script">
            <i class="fas fa-download fa-fw btn-logo"></i>
          </button>
          <button id="share" class="btn" title="Partager ce code">
            <i class="fas fa-share-alt-square fa-fw btn-logo"></i>
          </button>
          <button id="hide-editor" class="btn" title="Afficher seulement la console" style="display: none;">
            <i class="fas fa-eye-slash fa-fw btn-logo"></i>
          </button>
        </div>
      </div>
      <div id="right-div">
        <div id="graphics" style="display: none; justify-content: center;  align-items: center;"></div>
        <textarea id="shell" class="dark" autocomplete="off" spellcheck="false"></textarea>
        <div style="padding: 1vw 0px 0px 0px; float: left;">
          <button id="raz" class="btn" title="Redémarrer Python">
            <i class="fas fa-broom fa-fw btn-logo"></i>
          </button>
          <button id="btn_shell" class="btn" title="Afficher la console">
            <i class="fas fa-terminal fa-fw btn-logo"></i>
          </button>
          <button id="btn_graph_view" class="btn" title="Afficher la vue graphique">
            <i class="fas fa-image fa-fw btn-logo"></i>
          </button>
          <button id="darklight" class="btn" title="Changer le thème (sombre/lumineux)">
            <i class="fas fa-adjust fa-fw btn-logo"></i>
          </button>
          <button id="switch" class="btn" title="Échanger l'éditeur et la console">
            <i class="fas fa-exchange-alt fa-fw btn-logo"></i>
          </button>
          <button id="hide-console" class="btn" title="Afficher seulement l'éditeur">
            <i class="fas fa-eye-slash fa-fw btn-logo"></i>
          </button>
          <button id="show-editor-console" class="btn" title="Afficher l'éditeur et la console" style="display: none;">
            <i class="fas fa-columns fa-fw btn-logo"></i>
          </button>
        </div>
      </div>
    </div>
    <div id="footer">
      <a id="help" target="_blank" rel="noopener noreferrer" href="https://basthon.fr/doc.html">
        <i class="far fa-life-ring fa-fw" title="Obtenir de l'aide."></i>
      </a>
    </div>
    <object type="image/svg+xml" data="https://basthon.fr/theme/assets/img/ribbon.svg" style="width: 8vw; position: absolute; top: 0; right: 0; border: 0; z-index: 100;">
    </object>
    <div id="share_message" style="display: none;">
      Un lien vers la page de Basthon avec le contenu actuel du script a été créé.
      <br>
      <i class="fas fa-exclamation-circle"></i> Attention, partager un script trop long peut ne pas fonctionner avec certains navigateurs.
    </div>
    <script src="assets/js/shell.min.js"></script>
    <script src="assets/js/editor.min.js"></script>
    <script src="assets/js/graphics.min.js"></script>
    <script src="assets/js/gui.min.js"></script>
    <script src="assets/js/notie.min.js"></script>
  </body>
</html>`;
