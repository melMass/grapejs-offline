import { each } from 'underscore';

import grapesjs from 'grapesjs';
import { cmdPanelSize } from '../consts';
const cmdOutline = 'core:component-outline';



export default {
    getPanels(editor: grapesjs.Editor) {
        if (!this.panels) {
            this.panels = editor.Panels.getPanels();
        }

        return this.panels;
    },

    preventDrag(opts: any) {
        opts.abort = 1;
    },

    tglEffects(on: boolean) {
        const { em } = this;
        const mthEv = on ? 'on' : 'off';
        if (em) {
            const canvas = em.Canvas;
            const body = canvas.getBody();
            const tlb = canvas.getToolbarEl();
            tlb && (tlb.style.display = on ? 'none' : '');
            const elP = body.querySelectorAll(`.${this.ppfx}no-pointer`);
            each(elP, item => ((item as HTMLElement).style.pointerEvents = on ? 'all' : ''));
            em[mthEv]('run:tlb-move:before', this.preventDrag);
        }
    },

    run(editor, sender) {
        this.sender = sender;
        this.selected = [...editor.getSelectedAll()];
        editor.select();

        if (!this.shouldRunSwVisibility) {
            this.shouldRunSwVisibility = editor.Commands.isActive(cmdOutline);
        }

        this.shouldRunSwVisibility && editor.stopCommand(cmdOutline);
        editor.getModel().stopDefault();

        const panels = this.getPanels(editor);
        const canvas = editor.Canvas.getElement();
        const editorEl = editor.getEl()!;
        const pfx = editor.Config.stylePrefix;

        if (!this.helper) {
            const helper = document.createElement('span');
            helper.className = `${pfx}off-prv fa fa-eye-slash`;
            helper.style.position = 'absolute'
            helper.style.right = "0"
            editorEl.appendChild(helper);
            helper.onclick = () => this.stopCommand();
            this.helper = helper;
        }

        if (!this.titlebar_helper) {
            const helper = document.createElement('div');

            helper.id = "tauri_preview_titlebar"
            helper.style.position = "absolute"
            helper.style.height = "24px"
            helper.style.width = "100%"
            helper.style.top = "0"
            helper.style.left = "0"
            // helper.style.backgroundColor = "purple"

            // helper.style.backgroundColor = "red"
            helper.setAttribute("data-tauri-drag-region", "")
            canvas.appendChild(helper);
            this.titlebar_helper = helper;
        }
        this.titlebar_helper.style.display = 'inline-block';


        this.helper.style.display = 'inline-block';

        panels.forEach((panel: any) => panel.set('visible', false));

        const canvasS = canvas.style;
        canvasS.width = '100%';
        canvasS.height = '100%';
        canvasS.top = '0';
        canvasS.left = '0';
        canvasS.padding = '0';
        canvasS.margin = '0';
        editor.refresh();
        this.tglEffects(1);
    },

    stop(editor) {
        const { sender = {}, selected } = this;
        sender.set && sender.set('active', 0);
        const panels = this.getPanels(editor);

        if (this.shouldRunSwVisibility) {
            editor.runCommand(cmdOutline);
            this.shouldRunSwVisibility = false;
        }

        editor.getModel().runDefault();
        panels.forEach((panel: any) => panel.set('visible', true));

        const canvas = editor.Canvas.getElement();
        canvas.setAttribute('style', '');
        selected && editor.select(selected);
        delete this.selected;

        if (this.helper) {
            this.helper.style.display = 'none';
        }

        if (this.titlebar_helper) {
            this.titlebar_helper.style.display = 'none';
        }
        editor.runCommand(cmdPanelSize)

        editor.refresh();
        this.tglEffects();
    },
} 