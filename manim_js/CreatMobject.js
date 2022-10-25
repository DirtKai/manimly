Blockly.Blocks['create_circle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create a circle with radius =")
        .appendField(new Blockly.FieldTextInput("1"), "CIRCLE_RADIUS")
        .appendField("x coordinate =")
        .appendField(new Blockly.FieldTextInput("0"), "CIRCLE_POSX")
        .appendField("y coordinate =")
        .appendField(new Blockly.FieldTextInput("0"), "CIRCLE_POSY");
    this.appendValueInput("CIRCLE_PAR")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['create_circle'] = function(block) {
  var text_circle_radius = block.getFieldValue('CIRCLE_RADIUS');
  var text_circle_posx = block.getFieldValue('CIRCLE_POSX');
  var text_circle_posy = block.getFieldValue('CIRCLE_POSY');
  var value_circle_par = Blockly.Python.valueToCode(block, 'CIRCLE_PAR', Blockly.Python.ORDER_ATOMIC);
  var code = 'Circle(radius=' + text_circle_radius + ').move_to([' + text_circle_posx + ',' + text_circle_posy + ',0])' + value_circle_par;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['create_square'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create a square with side length =")
        .appendField(new Blockly.FieldTextInput("1"), "SQUARE_SIDELENGTH")
        .appendField("x coordinate =")
        .appendField(new Blockly.FieldTextInput("0"), "SQUARE_POSX")
        .appendField("y coordinate =")
        .appendField(new Blockly.FieldTextInput("0"), "SQUARE_POSY");
    this.appendValueInput("SQUARE_PAR")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['create_square'] = function(block) {
  var text_square_sidelength = block.getFieldValue('SQUARE_SIDELENGTH');
  var text_square_posx = block.getFieldValue('SQUARE_POSX');
  var text_square_posy = block.getFieldValue('SQUARE_POSY');
  var value_square_par = Blockly.Python.valueToCode(block, 'SQUARE_PAR', Blockly.Python.ORDER_ATOMIC);
  var code = 'Square(side_length=' + text_square_sidelength + ').move_to([' + text_square_posx + ',' + text_square_posy + ',0])' + value_square_par;
  return [code, Blockly.Python.ORDER_NONE];
};