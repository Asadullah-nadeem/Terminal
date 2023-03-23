![image](https://user-images.githubusercontent.com/88024587/227174786-eac5604e-1acf-494f-b689-7505381148c6.png)


$(document).on('click', function(e) {
  $('#' + CurrentId + ' input').focus();
});

//New line
function NewLine() {
  if (CurrentId !== undefined) {
    $('#' + CurrentId + ' input').prop('disabled', true);
  }
  CurrentId = 'consoleInput-' + GenerateId();
  if (username !== '') {
   
    $("#gfjk").append('<div class="console-line" id="' + CurrentId + '">' + username + '@' + hostname + ':<span class="terminal-purple">' + folder + '$</span><input autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" type="text" class="terminal-input" /><div class="console-carrot"></div></div>');
    
  } else {
    $("#gfjk").append('Terminal [Version 0.0.0.0]<br/>');
    $("#gfjk").append('(c) Terminal Corporation. All rights reserved. <br/>');
    $("#gfjk").append

    $("#gfjk").append('<div id="' + CurrentId + '">Login:<input autocomplete="on" autocorrect="on" autocapitalize="on" spellcheck="on" type="text" class="terminal-input"/><div class="console-carrot"></div></div>');

  }
  $('#' + CurrentId + ' input').focus();
  $('#' + CurrentId + ' input').attr("size", '1');
}



//Execute the line
function ExecuteLine(command) {
  $('.console-carrot').remove();
  var Commandline = command.toLowerCase();
  
  switch(true) {
    case (username === ''):
      const now = new Date();
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString();
      const ipAddress = window.location.hostname;
      $ ("#gfjk").append (`Current date: ${date}<br>Current time: ${time}<br"> IP address: ${ipAddress}<br>`);
      $("#gfjk").append (`Welcome To My Own Terminal Server ${username}`);
      Commandline.value = '';
      username = Commandline;
      return 500;
    

  // commandline


 case (Commandline == 'clear' || Commandline == 'cls'):
      $("#gfjk").empty();
      break;


    case (Commandline == 'exit' || Commandline == 'logout'):
      $("#gfjk").empty();
      username = '';
      break;



    case (Commandline.startsWith("print")):
      var NewLine = Commandline.replace("print", "");
      $("#gfjk").append(NewLine);
      break;


      case (Commandline == 'ls'):
        $("#gfjk").append("Folder Error");
        break;
    
        case (Commandline == 'mkdir'):
          $("#gfjk").append("Not create directory ");
          break;
          
    case (Commandline.startsWith("hostname")):
      var name = Commandline.replace("hostname ", "");
      if (name !== '') {
        hostname = name;
      }
      break;

    case (Commandline == "date"):
				const nowA = new Date();
				const dateb = nowA.toLocaleDateString();
				const timec = nowA.toLocaleTimeString();
				$ ("#gfjk").append(`Current date: ${dateb}<br>Current time: ${timec}<br>`);
				Commandline.value = '';
				break;

    case (Commandline.startsWith("cd")):
      var Address = Commandline.replace("cd ", "").replace(" ", "").replace("//", "");
      if (Address == '/' || Address == '' || Address == 'cd') {
        folder = '~';
      } else {
        folder = Address;
      }
      break;

    case (Commandline == 'help' || Commandline == '?'):
      $("#gfjk").append('Terminal [Version 0.0.0.0]<br/>');
      $("#gfjk").append('(c) Terminal Corporation. All rights reserved.<br/><br/>');
      $("#gfjk").append(
        `All commands <a href="/text/text.text">#######</a>`
      );      
      break;

    case (Commandline === ''):
      break;


    default:
   var NewLinea =  '<div id="mdkld"> Syntax Warning: ' + Commandline + ' command not found</div>';
    var NewLine =  '<div id="mdkld"> bash: ' + Commandline + ': command not found</div>';
    $("#gfjk").append(NewLinea);
    $("#gfjk").append(NewLine);


  }

}
