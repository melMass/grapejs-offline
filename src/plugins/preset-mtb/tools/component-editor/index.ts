import commands from './commands';
import grapesjs from 'grapesjs';
interface PanelSizeState {
    cv: string,
    pn: string
}

export interface Options {
    panelId?: string,
    //Append to element instead of views-container
    appendTo?: string,
    //State when open
    openState?: PanelSizeState
    //State when closed
    closedState?: PanelSizeState,
    //Code viewer options
    codeViewOptions?: any,
    //Stop resizing openState and closedState
    preserveWidth?: boolean,
    //Allow editing of javascript, set allowScripts to true for this to work
    editJs?: boolean,
    //Remove component data eg data-gjs-type="..."
    clearData?: boolean,
    //Used to remove css from the Selector Manager
    cleanCssBtn?: boolean,
    //Save HTML button text
    htmlBtnText?: string,
    //Save CSS button text
    cssBtnText?: string,
    //Clean CSS button text
    cleanCssBtnText?: string
}

export default (editor: grapesjs.Editor, opts: Options = {}) => {
    const options: Required<Options> = {
        ...{
            //Panel to append the code editor
            panelId: 'views-container',
            //Append to element instead of views-container
            appendTo: '',
            //State when open
            openState: {
                cv: '55%',
                pn: '45%'
            },
            //State when closed
            closedState: {
                cv: '75%',
                pn: '25%'
            },
            //Code viewer options
            codeViewOptions: {},
            //Stop resizing openState and closedState
            preserveWidth: false,
            //Allow editing of javascript, set allowScripts to true for this to work
            editJs: false,
            //Remove component data eg data-gjs-type="..."
            clearData: false,
            //Used to remove css from the Selector Manager
            cleanCssBtn: true,
            //Save HTML button text
            htmlBtnText: 'Apply',
            //Save CSS button text
            cssBtnText: 'Apply',
            //Clean CSS button text
            cleanCssBtnText: 'Delete'
        },
        ...opts
    };

    // Load commands
    commands(editor, options);
};
