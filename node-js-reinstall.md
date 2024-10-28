# Complete Removal and Reinstallation of Node.js on Windows

This guide provides step-by-step instructions for fully removing Node.js on Windows, clearing cache, deleting \`node_modules\`, and verifying the Node.js version after reinstallation.

---

## 1. Uninstall Node.js

1. Open **Control Panel > Programs > Programs and Features**.
2. Find **Node.js** in the list, right-click, and select **Uninstall**.
3. Follow the prompts to complete the uninstallation.

---

## 2. Remove Node.js Files and Folders

1. **Delete the Node.js installation folder** (if it still exists after uninstalling).
- Typically located at \`C:\\Program Files\\nodejs\`.
2. **Delete the NPM and NPM cache folders**:
- Open **File Explorer** and go to \`C:\\Users\\<YourUsername>\\AppData\\Roaming\`.
- Delete the \`npm\` and \`npm-cache\` folders.

---

## 3. Delete \`node_modules\` and \`package-lock.json\`

1. In your project directory, delete the \`node_modules\` folder and \`package-lock.json\` file:
- Right-click on each and select **Delete** or run the following commands in your terminal:
    ```bash
    rm -rf node_modules
    rm package-lock.json
    ```

---

## 4. Clear NPM Cache

1. Open a new terminal or command prompt and run:
```bash
npm cache clean --force
```

---

## 5. Restart Your System

1. Close all open terminals or command prompts.
2. Restart your computer to ensure all changes take effect.

---

## 6. Reinstall Node.js

1. Download the latest version of Node.js from the [official Node.js website](https://nodejs.org).
2. Run the installer and follow the prompts to complete the installation.

---

## 7. Verify Node.js Installation

1. Open a new terminal or command prompt.
2. Check the Node.js version to confirm installation:
```bash
node -v
npm -v
```

If both commands return the correct versions, Node.js has been successfully reinstalled.

