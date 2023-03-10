*This plugin is no longer functional*.

Instead, add the following to your [CSS snippets](https://github.com/Dmytro-Shulha/obsidian-css-snippets):

```
.cm-cursorLayer {
    animation: none !important;
}
```

(Tested as of Obsidian v1.0.3 in 2022-12)

- If you want to disable cursor blink via codemirror options instead of CSS: It seems in some recent Obsidian update, the underlying CodeMirror (the library obsidian uses for its editor) was updated and since then, the JavaScript option set by this plugin no longer achieves the desired effect. It seems [the option is still available](https://codemirror.net/docs/ref/#view.drawSelection^config.cursorBlinkRate), so either it has to be set some other way now or the way the plugin is initialised no longer works.
- CSS snippets like [this one](https://forum.obsidian.md/t/how-to-stop-the-blinking-cursor-in-vim-mode/9431/10) based on setting `visibility: visible` no longer work either.

See:
- https://forum.obsidian.md/t/how-to-stop-the-blinking-cursor-in-vim-mode/9431
- https://forum.obsidian.md/t/allow-stopping-the-cursor-from-blinking/39819/6

# Customize Cursor Color
See:
- https://forum.obsidian.md/t/how-to-change-block-cursor-color-vim-mode/7429/13?u=xnhp
