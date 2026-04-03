<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

<div align="center">
  <h1> 🎀 SANDES-BAILEYS-V2 🎀</h1>
  <p><em>Custom WhatsApp library built upon Baileys — enhanced, modernized, and elegant.</em></p>
</p>

  <img src="https://files.catbox.moe/2xpu3x.png" width="400" alt="Elaina Bail Banner" style="border-radius: 15px; border: 2px solid #ff0000;" />
  <br><br>

  <p>
  <!-- NPM Version -->
  <a href="https://www.npmjs.com/package/@rexxhayanasi/elaina-baileys">
    <img src="https://img.shields.io/npm/v/@rexxhayanasi/elaina-baileys?color=blueviolet&label=version&logo=npm" alt="npm version" />
  </a>

<p>
  <!-- WhatsApp Channel -->
  <a href="https://whatsapp.com/channel/0029VbAEkzNFi8xevDsbJS1L">
    <img src="https://img.shields.io/badge/Join-WhatsApp%20Channel-25D366?logo=whatsapp&logoColor=white" alt="WhatsApp Channel" />
  </a>
</p>
</div>

<div align="center">
  <img src="https://user-images.githubusercontent.com/74038190/212257468-1e9a91f1-b636-4676-a213-39d67b2d5d67.gif" width="100%">
</div>

---

> ⚠️ **Notice**  
> This project is based on the Baileys library. All core credits go to the original developers.  
> `sandes-baileys-v2` extends it with custom features, improved performance, and better developer experience.

---

## 📌 Overview

`sandes-baileys-v2` is a modern WhatsApp bot base built on top of Baileys.  
It is designed for **speed, stability, and flexibility**, making it easy to build powerful WhatsApp bots.


> **Update** 
> All update information is now redirected to the WhatsApp channel check at the bottom of the "homepage".

> Udpate changelog see on our WhatsApp channel

---

## 📦 Installation

### Via `package.json`

[ NPM ]
Fork Baileys (NPM) **@whiskeysockets/baileys** / **npm:sandes-baileys-v2**

```json
@whiskeysockets/baileys
"dependencies": {
    "@whiskeysockets/baileys": "npm:sandes-baileys-v2"
}
```
```json
@adiwajsing/baileys
"dependencies": {
    "@adiwajshing/baileys": "npm:sandes-baileys-v2"
}


```json
@whiskeysockets/baileys
"dependencies": {
    "@whiskeysockets/baileys": "npm:sandes-baileys-v2"
}
```
```json
@adiwajsing/baileys
"dependencies": {
    "@adiwajshing/baileys": "npm:sandes-baileys-v2"
}
```


Importing (for those who don't fork another repository)
ESM & CJS

> ESM
```bash
import makeWASocket from 'npm:sandes-baileys-v2
```

> CJS
```bash
const { default: makeWASocket } = require('npm:sandes-baileys-v2')
```
---
🌟 Key Features
| Category | Description |
|---|---|
|channels | Seamlessly send messages to WhatsApp Channels. |
| 🖱️ Buttons | Create interactive messages with button options and quick replies. |
| 🖼️ Albums | Send grouped images or videos as an album (carousel-like format). |
| 👤 LID Grouping | Handle group operations using the latest @lid addressing style. |
| 🤖 AI Message Style | Add a stylized “AI” icon to messages. |
| 📷 HD Profile Pics | Upload full-size profile pictures without cropping. |
| 🔐 Pairing Code | Generate custom alphanumeric pairing codes. |
| 🛠️ Dev Experience | Reduced noise from logs with optimized libsignal printouts. |
---

## 🚀 Features & Usage

### 📬 Newsletter Control
Manage WhatsApp Newsletters (Channels), from creation to message interaction.

<details>
<summary><strong>Example 👇</strong></summary>

```js
// Create a newsletter
await sock.newsletterCreate("sandes Updates");

// Update description
await sock.newsletterUpdateDescription(
  "sandes@newsletter",
  "Fresh updates weekly"
);

// React to a channel message
await sock.newsletterReactMessage(
  "sandes@newsletter",
  "175",
  "🔥"
);
```
</details>

---

### 📌 Interactive Messaging
Send interactive messages using buttons to increase user engagement.

<details>
<summary><strong>Example 👇</strong></summary>

```js
const buttons = [
  { buttonId: "btn1", buttonText: { displayText: "Click Me" }, type: 1 },
  { buttonId: "btn2", buttonText: { displayText: "Visit Site" }, type: 1 }
];

await sock.sendMessage(id, {
  text: "click one:",
  footer: "From sandes",
  buttons,
  headerType: 1
});
```

</details>

---

### 🖼️ Send Album
Send multiple media files (images or videos) within a single album message.

<details>
<summary><strong>Example 👇</strong></summary>

```js
const media = [
  { image: { url: "https://example.com/pic1.jpg" } },
  { video: { url: "https://example.com/clip.mp4" } }
];

await sock.sendMessage(
  id,
  { album: media, caption: "New album" }
);
```

</details>

---

### 🔐 Custom Pairing Code
Pair WhatsApp devices using a custom pairing code.

<details>
<summary><strong>Example 👇</strong></summary>

```js
const code = await sock.requestPairingCode("94xxxxxxx","SANDESMD");

console.log("Pairing Code:", code);
```

</details>

---

### 📊 Poll Creation
Create polls for quick voting in chats or groups.

<details>
<summary><strong>Example 👇</strong></summary>

```js
await sock.sendMessage(id, {
  poll: {
    name: "Favorite Color?",
    values: ["Red", "Blue", "Green"],
    selectableCount: 1
  }
});
```

</details>

---


### 👥 Group Management
Manage WhatsApp groups: create groups, add members, and update descriptions.


<details>
<summary><strong>Example 👇</strong></summary>

```js
const group = await sock.groupCreate(
  "My New Group",
  [number1, number2]
);

await sock.groupAdd(group.id, [number3]);
await sock.groupUpdateDescription(group.id,"This is our awesome group!"
);
```

</details>

---

🐞 Found a Bug?
If you encounter a bug or any issues while using this project, please choose one of the following options:

Open an Issue via the official website (coming soon)

Contact the maintainer directly via WhatsApp

<p align="center">
<a href="https://wa.me/94787518010" target="_blank" rel="noopener noreferrer">
<img
alt="Chat on WhatsApp"
src="https://img.shields.io/badge/Chat%20on%20WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"
/>
</a>
</p>

<details>
<summary>🎀 <strong>Special Thanks to</strong></summary>

Thanks to everyone who has provided support, inspiration, and contributions—both directly and indirectly—to the development of this project:

RexxHayanasi (Me) — the lead developer of this project.

</details>
<table>
<tr>
<td align="center">
<a href="https://github.com/sandesissu7-collab">
<img src="https://files.catbox.moe/hmao6h.jpg" width="80px;" style="border-radius:50%;" alt="Rexx"/>
<br />
<sub><b>MR.SANDES [ DEVELOPER AND FOUNDER ]</b></sub>
</a>
</td>

---

<div align="center">

## 🍒 SANDES-BAILEYS-V2 
### **MR.SANDES 🍒**

<p><em>Designed with passion • Built for performance ⚡</em></p>

</div>

---

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%" style="transform: rotate(180deg);">
