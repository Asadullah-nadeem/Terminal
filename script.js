const promptText = document.getElementById('prompt');
const commandInput = document.getElementById('command');
const output = document.getElementById('output');
commandInput.addEventListener('keydown', function(event) {
	if (event.key === 'Enter') {
		const command = commandInput.value;
		const args = command.split(' ');

		if (args[0] === 'clear') {
			output.innerHTML = '';
			commandInput.value = '';
			return;
		}

		if (args[0] === 'comment') {
			const comment = args.slice(1).join(' ');
			output.innerHTML += `Comment: ${comment}<br>`;
			commandInput.value = '';
			return;
		}

		if (args[0] === 'mkdir') {
			const folderName = args[1];
			output.innerHTML += `Created folder '${folderName}'<br>`;
			commandInput.value = '';
			return;
		}

		if (args[0] === 'ls') {
			output.innerHTML += 'folder1 folder2 file1 file2<br>';
			commandInput.value = '';
			return;
		}

		if (args[0] === 'color') {
			const color = args[1];
			output.style.color = color;
			output.innerHTML += `Changed text color to ${color}<br>`;
			commandInput.value = '';
			return;
		}

		const xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				const response = xhr.responseText;
				output.innerHTML += response;
				output.scrollTop = output.scrollHeight;
				commandInput.value = '';
			}
		}
		xhr.open('GET', `https://api.chucknorris.io/jokes/random?category=${args[0]}`, true);
		xhr.send();

		// // Add another line of code here
		// output.innerHTML += `You entered the command: ${command}<br>`;
		// commandInput.value = ''; // Clear the input field
		// promptText.innerHTML = '> '; // Set the prompt text back to the default
		output.innerHTML += `${command}: command not found<br>`;
		commandInput.value = '';
		return;
	}
});



function updatePrompt() {
	const now = new Date();
	const username = 'user';
	const hostname = 'localhost';
	const path = '~';
	// promptText.innerHTML = `<span id="username">${username}</span>@<span id="hostname">${hostname}</span>:<span id="path">${path}</span>$ `;
}
updatePrompt();
// setInterval(updatePrompt, 1000);