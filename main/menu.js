const { Menu } = require('electron')
const { dialog } = require('electron')

var Blockly = require('blockly')
var electron = require('electron')

var app = electron.app

var template = [
    
        
]

var m = Menu.buildFromTemplate(template)

Menu.setApplicationMenu(m)