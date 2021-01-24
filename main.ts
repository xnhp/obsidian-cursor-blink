import { Plugin } from 'obsidian';
export default class CursorBlinkPlugin extends Plugin {
	async onload() {
		this.registerCodeMirror((cm: CodeMirror.Editor) => {
			console.log('codemirror', cm);
        cm.setOption('cursorBlinkRate', 0);
		});
	}
}

