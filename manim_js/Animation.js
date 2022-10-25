Blockly.Blocks['selfplay'] = {
    init: function() {
        this.appendValueInput("animation")
            .setCheck("animations")
            .appendField("add an animation");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

Blockly.Python['selfplay'] = function(block) {
    var value_animation = Blockly.Python.valueToCode(block, 'animation', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'self.play(' + value_animation + ')\n';
    return code;
};

Blockly.Blocks['draw'] = {
    init: function() {
      this.appendValueInput("draw_var")
          .setCheck(null)
          .appendField("Draw");
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.Python['draw'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'draw_var', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'Create(' + value_name + ')';
    return [code, Blockly.Python.ORDER_NONE];
};