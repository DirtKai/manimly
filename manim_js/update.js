function updateCode(event) {
    const code = Blockly.Python.workspaceToCode(demoWorkspace);
    document.getElementById('code').value = code;
    }
    demoWorkspace.addChangeListener(updateCode);