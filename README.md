# 🎙️ Live Voice to Text — Deepgram Web App
---

## 📖 Features

- 🎙️ Real-time voice transcription from your browser microphone
- 📝 Auto-punctuation and smart formatting using Deepgram’s API
- ✨ Clean, modern UI with start/stop controls
- 📜 Text area updates live as you speak
- ✅ Works on desktop browsers (Chrome, Edge)

---

## 🛠️ Tech Stack

- HTML5 / CSS3 / JavaScript
- [Deepgram WebSocket API](https://developers.deepgram.com/)
- MediaRecorder API (browser mic capture)

---

## 📦 Project Structure

```

/project-folder/
│
├── index.html            # Frontend UI layout
├── app.js                # JavaScript logic for WebSocket and audio capture
└── README.md             # Project description and instructions

````

---

## 🚀 How to Run This Project

### 1️⃣ Clone this repository or download the files

```bash
git clone https://github.com/yourusername/live-voice-to-text.git
cd live-voice-to-text
````

### 2️⃣ Get a Deepgram API Key

* Create a free account at [https://console.deepgram.com/signup](https://console.deepgram.com/signup)
* Go to **API Keys** section, generate a key, and copy it.

### 3️⃣ Insert Your API Key

In `app.js`, replace:

```javascript
const apiKey = ""; // 📝 Insert your Deepgram API Key here
```

with:

```javascript
const apiKey = "your_actual_api_key_here";
```

### 4️⃣ Open the App in Your Browser

Simply open `index.html` in your browser (Chrome preferred)

Right-click → **Open with** → your browser
or
Double-click the file.

---

## 📌 Notes

* Works best in **Google Chrome**
* Requires mic permission on first use
* Internet connection needed to access Deepgram API
* API key should be kept private if deploying this publicly

---

## ✨ Future Ideas

* Add language selector dropdown
* Display live connection status
* Add option to download transcript
* Style improvements for mobile devices

---

## 📄 License

MIT © 2025 Sai Chaitanya Poloju
Built with ❤️ for HackWeek

```
