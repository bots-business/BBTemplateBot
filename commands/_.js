/*CMD
  command: *
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let cmds = Bot.getProperty("commands");

function needRun(cmd){
  return (cmd.name == message)||(cmd.second_name == message)
}

function runCommand(cmd){
   if(cmd.keyboard){
      return Bot.sendKeyboard(cmd.keyboard, cmd.answer);
   }
   Bot.sendMessage(cmd.answer);
}

for(let i in cmds.commands){
  if(needRun(cmds.commands[i])){
     runCommand(cmds.commands[i]);
     break;
  }
}
