let socket;
let mediaRecorder;

// Start button click event
document.getElementById("startBtn").onclick = async () => {
  const apiKey = "5445a8e7bb28d00c33b0faf89e55743a34add08e"; // 📝 Insert your Deepgram API Key here
  const deepgramUrl = `wss://api.deepgram.com/v1/listen?punctuate=true`;

  // Connect to Deepgram WebSocket
  socket = new WebSocket(deepgramUrl, ["token", apiKey]);

  socket.onopen = () => {
    console.log("✅ Connected to Deepgram");
    startRecording();
  };

  // Handle transcription messages from Deepgram
  socket.onmessage = (message) => {
    const data = JSON.parse(message.data);
    if (data.channel && data.channel.alternatives[0]) {
      const transcript = data.channel.alternatives[0].transcript;
      if (transcript) {
        document.getElementById("output").value += transcript + " ";
      }
    }
  };

  // Error handling
  socket.onerror = (err) => console.error("❌ WebSocket Error:", err);
};

// Start microphone capture and stream audio chunks to Deepgram
function startRecording() {
  navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
    mediaRecorder = new MediaRecorder(stream, { mimeType: "audio/webm" });

    // When audio data is available, send it to the WebSocket
    mediaRecorder.addEventListener("dataavailable", (event) => {
      if (event.data.size > 0 && socket.readyState === 1) {
        socket.send(event.data);
      }
    });

    // Record audio in small chunks (250ms)
    mediaRecorder.start(250);
  }).catch((err) => {
    console.error("⚠️ Could not access microphone:", err);
    alert("Please allow microphone access to use this feature.");
  });
}

// Stop button click event
document.getElementById("stopBtn").onclick = () => {
  if (mediaRecorder) {
    mediaRecorder.stop();
    console.log("🎙️ Recording stopped.");
  }
  if (socket) {
    socket.close();
    console.log("🛑 WebSocket connection closed.");
  }
};
