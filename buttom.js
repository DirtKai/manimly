function clear_dom() {
    Blockly.mainWorkspace.clear();
}

async function save_dom() {
    var xmlDom = Blockly.Xml.workspaceToDom(demoWorkspace)
    var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
    const options = {
        types: [
          {
            description: "Test files",
            accept: {
              "text/plain": [".manimly"],
            },
          },
        ],
      };
      
      const handle = await window.showSaveFilePicker(options)
      const writable = await handle.createWritable()
      
      await writable.write(xmlText);
      await writable.close();
}

async function open_dom() {
    let fileHandle
    [fileHandle] = await window.showOpenFilePicker()
 
    const file = await fileHandle.getFile()
    const xmlText = await file.text()
   
    Blockly.mainWorkspace.clear();
    xmlDom = Blockly.Xml.textToDom(xmlText);
    Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xmlDom);
}

async function output_low() {
    // var PyCode = document.getElementById('textarea').innerText
    


    var cmd = new ActiveXObject("WScript.Shell");
    cmd.run("cmd.exe /k "+ "pwd");
    cmd = null;      
}