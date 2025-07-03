# 🧹 Safaai: Maid Booking Platform

**Safaai** is a fully automated maid booking app that allows users to securely hire, review, and pay domestic workers without admin involvement. It ensures legal compliance, payment protection, safety, and transparency for both hirers and workers.

---

## 🔑 Key Features

- 🔐 OTP-based login (no password)
- 👩‍🔧 Maid identity verification (live photo, ID, optional video)
- 📍 GPS tracking with timestamp logs
- 🧾 Auto-generated legal contracts (multi-language)
- 💸 Secure payout release via one-time code
- 🎥 Optional live recording (if both parties agree)
- 📱 Multilingual support: English, Hindi, Bengali
- 🆘 SOS button with emergency alerts
- 💬 Voice-guided onboarding & feedback
- 💰 Razorpay integration (test & live mode)
- 🛡 Insurance & savings options for maids

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js >= 18
- Firebase CLI
- Git
- Vite (optional for dev)

### Setup
```bash
git clone https://github.com/Safaaiindia/safaai-app
cd safaai-app
npm install
cp .env.example .env
# Add your Firebase + Razorpay credentials to .env
npm run dev
