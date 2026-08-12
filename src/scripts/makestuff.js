const {writeTextFile, BaseDirectory} = window.__TAURI__.fs;






async function save(textarea)
{
    const savedata = textarea.value;

    await writeTextFile("notes.txt", savedata, { baseDir: BaseDirectory.AppData} );
    
}

