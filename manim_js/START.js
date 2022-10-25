Blockly.Blocks['manim_start_scence'] = {
    init: function() {
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_CENTRE)
          .appendField("START_SCENCE");
      this.appendStatementInput("MANIM")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_CENTRE);
      this.setInputsInline(false);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

Blockly.Python['manim_start_scence'] = function(block) {
// TODO: Assemble Python into code variable.
var statements_body = Blockly.Python.statementToCode(block, 'MANIM');
var code = 'from manim import * \nclass demo(Scene): \n' + statements_body;
return code;
};



Blockly.Blocks['manim_start_construct'] = {
    init: function() {
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_CENTRE)
          .appendField("START_CONSTRUCT");
      this.appendStatementInput("BODY")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_CENTRE);
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

Blockly.Python['manim_start_construct'] = function(block) {
// TODO: Assemble Python into code variable.
var statements_body = Blockly.Python.statementToCode(block, 'BODY');
var code = 'def construct(self):\n' + statements_body;
return code;
};