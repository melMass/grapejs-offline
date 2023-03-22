import { CodeEditor } from './code-editor';
import { openCodeStr, getObject, getConstuctor } from './consts';
import grapesjs from 'grapesjs';
import { Options } from '.';


export default (editor: grapesjs.Editor, opts: Required<Options>) => {
    const cm = editor.Commands;
    let codeEditor: CodeEditor | null = null;

    cm.add(openCodeStr, {
        run: editor => {
            !codeEditor && (codeEditor = new CodeEditor(editor, opts)) && codeEditor.buildCodePanel();
            codeEditor.showCodePanel();
        },
        stop: editor => {
            codeEditor && codeEditor.hideCodePanel();
        },
    });

    cm.add(getObject, () => {
        return codeEditor;
    });

    cm.add(getConstuctor, () => {
        return CodeEditor;
    });
}