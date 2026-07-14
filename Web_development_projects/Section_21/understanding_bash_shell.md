![1784043538574](image/understanding_bash_shell/1784043538574.png)

The **kernel** is the core, privileged heart of an operating system that directly manages hardware and system resources. The **shell** is a user-level interface (like a command-line) that interprets user commands and translates them into instructions the kernel can execute.

BASH = Bourne Again SHell - It is cmd line interpretor for unix system like linux.

It provided greater control than the GUI's and also speed.

[www.geeksforgeeks.org/linux-unix/complete-mac-terminal-commands-cheat-sheet](https://www.geeksforgeeks.org/linux-unix/complete-mac-terminal-commands-cheat-sheet/)


### Mac Terminal Keyboard Shortcuts

| ****Shortcut****          | ****Description****                                               |
| ------------------------------------- | ----------------------------------------------------------------------------- |
| `<span>Command + T</span>`          | Open a new Terminal tab.                                                      |
| `<span>Command + N</span>`          | Open a new Terminal window.                                                   |
| `<span>Command + W</span>`          | Close the current Terminal tab or window.                                     |
| `<span>Control + C</span>`          | Cancel the current command or process.                                        |
| `<span>Control + D</span>`          | Exit the current session or close the Terminal window.                        |
| `<span>Control + Z</span>`          | Pause the current process and send it to the background.                      |
| `<span>Command + K</span>`          | Clear the Terminal screen.                                                    |
| `<span>Control + L</span>`          | Clear the screen (similar to`<span>Command + K</span>`).                    |
| `<span>Command + Arrow Up</span>`   | Scroll up through previous commands in the history.                           |
| `<span>Command + Arrow Down</span>` | Scroll down through the command history.                                      |
| `<span>Control + A</span>`          | Move the cursor to the beginning of the line.                                 |
| `<span>Control + E</span>`          | Move the cursor to the end of the line.                                       |
| `<span>Control + U</span>`          | Delete everything from the cursor to the beginning of the line.               |
| `<span>Control + K</span>`          | Delete everything from the cursor to the end of the line.                     |
| `<span>Control + W</span>`          | Delete the word before the cursor.                                            |
| `<span>Control + Y</span>`          | Paste the last deleted text.                                                  |
| `<span>Control + R</span>`          | Search the command history.                                                   |
| `<span>Control + S</span>`          | Resume a paused process (if it was paused using`<span>Control + Z</span>`). |
| `<span>Control + C</span>`          | Interrupt a running process.                                                  |
| `<span>Option + Left Arrow</span>`  | Move the cursor one word left.                                                |
| `<span>Option + Right Arrow</span>` | Move the cursor one word right.                                               |
| `<span>Command + Shift + G</span>`  | Go to a specific directory by entering its path.                              |
| `<span>Tab</span>`                  | Auto-complete file or directory name.                                         |


## Complete Mac Terminal Commands

In this section, you will get a complete table for Mac Terminal commands, we will start with the basics Mac terminal commands to advance Mac terminal commands like "****Network, ****[****Homebrew****](https://www.geeksforgeeks.org/installation-guide/homebrew-installation-on-macos/)****, Environment Variable or Path,**** and more."

### Basics Mac Terminal Commands

| ****Command****                               | ****Description****                                                                  | ****Example****                  |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| **`<strong>/</strong>`****** (Forward Slash)****  | Represents the root directory in the file system.                                                | `<span>/</span>`                           |
| **`<strong>.</strong>`****** (Single Period)****  | Refers to the current directory in which you're working.                                         | `<span>.</span>`                           |
| **`<strong>..</strong>`****** (Double Period)**** | Refers to the parent directory (one level up from the current directory).                        | `<span>..</span>`                          |
| **`<strong>~</strong>`****** (Tilde)****          | Represents the home directory of the current user.                                               | `<span>~</span>`                           |
| **`<strong>sudo [command]</strong>`**             | Executes a command with elevated (super user) privileges.                                        | `<span>sudo rm -rf /path/to/folder</span>` |
| **`<strong>nano [file]</strong>`**                | Opens the****Nano**** text editor to create or edit a file directly in the terminal. | `<span>nano myfile.txt</span>`             |
| **`<strong>open [file]</strong>`**                | Opens a specified file with the default application associated with its type.                    | `<span>open myfile.txt</span>`             |

### ****Mac Terminal Command for Change Directory****

| ****Command****                | ****Description****                                                              | ****Example****   |
| ------------------------------------------ | -------------------------------------------------------------------------------------------- | ----------------------------- |
| **`<strong>cd</strong>`**          | Navigate to the home directory                                                               | `<span>cd</span>`           |
| **`<strong>cd [folder]</strong>`** | Change to a specific directory (e.g.,`<span>Documents</span>`, `<span>Downloads</span>`) | `<span>cd Documents</span>` |
| **`<strong>cd ~</strong>`**        | Go to the home directory (shortcut for the user's home directory)                            | `<span>cd ~</span>`         |
| **`<strong>cd /</strong>`**        | Navigate to the root directory of the file system                                            | `<span>cd /</span>`         |
| **`<strong>cd -</strong>`**        | Go back to the previous directory you were last working in                                   | `<span>cd -</span>`         |
| **`<strong>pwd</strong>`**         | Print the current working directory                                                          | `<span>pwd</span>`          |
| **`<strong>cd..</strong>`**        | Move up one level to the parent directory                                                    | `<span>cd..</span>`         |
| **`<strong>cd../..</strong>`**     | Move up two levels in the directory structure                                                | `<span>cd../..</span>`      |


### ****List Directory Contents Commands****

| ****Command****       | ****Description****                                                                                                                     | ****Example**** |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| **`<strong>ls</strong>`** | Lists all files and subdirectories in the current directory.                                                                                        | `<span>ls</span>`         |
| `<span>ls -C</span>`            | Displays the contents of the directory in a multi-column format.                                                                                    | `<span>ls -C</span>`      |
| `<span>ls -a</span>`            | Shows all entries in the directory, including hidden files (those starting with a period).                                                          | `<span>ls -a</span>`      |
| `<span>ls -1</span>`            | Lists files and directories, one entry per line.                                                                                                    | `<span>ls -1</span>`      |
| `<span>ls -F</span>`            | Adds special symbols: a`<span>/</span>` after directories, a `<span>*</span>` after executable files, and an `<span>@</span>` after symlinks. | `<span>ls -F</span>`      |
| `<span>ls -S</span>`            | Sorts files and directories by size, with the largest listed first.                                                                                 | `<span>ls -S</span>`      |
| `<span>ls -l</span>`            | Lists files in long format, including file permissions, owner, group, size, and modification date.                                                  | `<span>ls -l</span>`      |
| `<span>ls -l /</span>`          | Displays a detailed list of files starting from the root directory, including symbolic links.                                                       | `<span>ls -l /</span>`    |
| `<span>ls -lt</span>`           | Lists files in long format, sorted by modification time (newest first).                                                                             | `<span>ls -lt</span>`     |
| `<span>ls -lh</span>`           | Displays file sizes in human-readable format (KB, MB, GB, etc.) along with other detailed information.                                              | `<span>ls -lh</span>`     |
| `<span>ls -lo</span>`           | Lists files with detailed information, including file size, owner, and flags.                                                                       | `<span>ls -lo</span>`     |
| `<span>ls -la</span>`           | Shows a detailed list of all files, including hidden files (those starting with a period).                                                          | `<span>ls -la</span>`     |
