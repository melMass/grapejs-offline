#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

fn main() -> Result<(), sqlx::Error> {
    tauri::Builder::default()
        .plugin(tauri_plugin_sql::Builder::default().build())
        .run(tauri::generate_context!("tauri.conf.json"))
        .expect("error while running tauri application");

    Ok(())
}
