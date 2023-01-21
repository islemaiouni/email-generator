const randomLeghnt = 5;
let output = [];

function getRandomString(length) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  let resultStr = '';
  for (let i = 0; i < length; i++) {
    resultStr += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return resultStr;
}

function prefixgen(exportAmount, email) {
  for (let i = 0; i < exportAmount; i++) {
    const ranID = getRandomString(5);
    const emailcore = email.replace('.com', '');
    const final = `${emailcore}+${ranID}@gmail.com`;
    output.push(final);
  }
  console.log(output);
  mainmenu();
}

function exportprefix(exportdir) {
  try {
    const directory = `${exportdir}\\Output.txt`;
    console.log(`file location: ${directory}`);
    let file = '';
    output.forEach(item => {
      file += `${item}\n`;
    });
    require('fs').writeFileSync(directory, file);
    console.log('suffix are exported in selected directory');
    mainmenu();
  } catch (error) {
    console.log('Directory not found or no generated suffix found');
    mainmenu();
  }
}

                                                                                           
function mainmenu() {
  console.log(`
  ____  ___ ___   ____  ____  _           _____ __ __  _____  _____  ____  __ __       ____    ___  ____  
 /    ||   |   | /    ||    || |         / ___/|  |  ||     ||     ||    ||  |  |     /    |  /  _]|    \\ 
|   __|| _   _ ||  o  | |  | | |        (   \\_ |  |  ||   __||   __| |  | |  |  |    |   __| /  [_ |  _  |
|  |  ||  \\_/  ||     | |  | | |___      \\__  ||  |  ||  |_  |  |_   |  | |_   _|    |  |  ||    _]|  |  |
|  |_ ||   |   ||  _  | |  | |     |     /  \\ ||  :  ||   _] |   _]  |  | |     |    |  |_ ||   [_ |  |  |
|     ||   |   ||  |  | |  | |     |     \\    ||     ||  |   |  |    |  | |  |  |    |     ||     ||  |  |
|___,_||___|___||__|__||____||_____|      \\___| \\__,_||__|   |__|   |____||__|__|    |___,_||_____||__|__|
                                                                                                          
                                                                                                                     
made by: IntelCoreI6#5753`);
  console.log(`
    [1] generate suffix
    [2] export suffix
    [3] close program`);
  const answer = prompt();
  if (answer === '1') {
    const genAmount = parseInt(prompt('How many suffix do you want to generate?'));
    const emailinput = prompt('give the gmail acc u wanna use');
    prefixgen(genAmount, emailinput);
  } else if (answer === '2') {
    const exportpath = prompt('Where do you want to save the file?');
    exportprefix(exportpath);
  } else if (answer === '3') {
    console.log('');
  } else {
    console.log('This is not a valid answer');
  }
}

mainmenu();
