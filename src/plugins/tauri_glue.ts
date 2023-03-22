import type grapesjs from 'grapesjs';
// import Database from "tauri-plugin-sql-api";



type PluginOptions = {};

type RequiredPluginOptions = Required<PluginOptions>;

const log = (...msg: any[]) => console.debug("TAURI GLUE", ...msg)


// sqlite. The path is relative to `tauri::api::path::BaseDirectory::App`.
// const db = await Database.load("sqlite:test.db");


/**
 * Add basic glue for a better tauri experience
 * - Draggable titlebar
 * - Offseting some elements from plugins
 */
export default (editor: grapesjs.Editor, opts?: RequiredPluginOptions) => {

    // const config = editor.getConfig();

    editor.on('load', () => {
        log("Adding drag handles to titlebar")
        const title_bar = document.querySelector(".gjs-pn-panel.gjs-pn-commands.gjs-one-bg.gjs-two-color") as HTMLDivElement
        if (title_bar) {
            // title_bar.style.backgroundColor = "red"
            title_bar.children[0].setAttribute("data-tauri-drag-region", "")
        }

        const button_bar = document.querySelectorAll(".gjs-pn-buttons")

        button_bar.forEach((e) => {
            e.setAttribute("data-tauri-drag-region", "")
        })

        // if (button_bar) {
        //     button_bar.style.backgroundColor = "blue"
        // }

        // the main container
        // const cvs = document.querySelector(".gjs-cv-canvas") as HTMLDivElement
        // cvs.style.width = "80%"



        // TODO: properly use the API, it seems to have everything needed to implement the following in a much cleaner way.
        log("Adding window resize handler")
        const gjs = document.querySelector("#gjs") as HTMLDivElement
        gjs.style.height = `${window.innerHeight}px`
        // const preview_on = document.querySelector(".gjs-pn-btn") as HTMLSpanElement

        /* Resize the editor to match the window.*/
        window.addEventListener("resize", (e) => {
            gjs.style.height = `${window.innerHeight}px`
        })


        // Disable the I text cursor on drag
        const buttons = document.querySelectorAll(".gjs-pn-buttons,.gjs-title")
        buttons.forEach((e) => {
            const elem = e as HTMLDivElement
            elem.style.userSelect = "none"
            elem.onmousedown = (e) => e.preventDefault()
        })


        log("Tauri glue loaded")
    });

    // Listen to all commands
    // editor.on("run", console.log)

    // Move the preview off icon to the right



}
