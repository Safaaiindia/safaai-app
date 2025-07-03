import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

// Replace with real Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MSG_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export default function BookingFlow() {
  const [stage, setStage] = useState('kyc');
  const [idFile, setIdFile] = useState(null);
  const [selfieFile, setSelfieFile] = useState(null);
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const uploadAndVerify = async () => {
    setLoading(true);
    try {
      const idRef = ref(storage, `kyc/id-${Date.now()}-${idFile.name}`);
      const selfieRef = ref(storage, `kyc/selfie-${Date.now()}-${selfieFile.name}`);
      await uploadBytes(idRef, idFile);
      await uploadBytes(selfieRef, selfieFile);

      // TODO: Integrate real face-match API
      setVerified(true);
      setStage('booking');
    } catch (err) {
      alert('Upload failed. Try again.');
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 border rounded-xl shadow-md space-y-6 bg-white">
      <h1 className="text-2xl font-bold text-center text-blue-600">Welcome to Safaai</h1>

      {stage === 'kyc' && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Identity Verification</h2>

          <div>
            <label className="block text-sm font-medium">Upload ID Document:</label>
            <input type="file" accept="image/*" onChange={e => setIdFile(e.target.files[0])} />
            {idFile && <p className="text-sm text-gray-600 mt-1">{idFile.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Upload Live Selfie:</label>
            <input type="file" accept="image/*" onChange={e => setSelfieFile(e.target.files[0])} />
            {selfieFile && <p className="text-sm text-gray-600 mt-1">{selfieFile.name}</p>}
          </div>

          <button
            onClick={uploadAndVerify}
            disabled={!idFile || !selfieFile || loading}
            className={`w-full py-2 px-4 rounded-md text-white ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            {loading ? 'Verifying...' : 'Verify & Continue'}
          </button>
        </div>
      )}

      {stage === 'booking' && verified && (
        <div className="text-center space-y-3">
          <h3 className="text-xl font-semibold text-green-600">Verification Successful ✅</h3>
          <p className="text-gray-700">You can now proceed to book a maid or complete your profile.</p>
          {/* You can now insert booking screens, UPI, GPS, etc. here */}
        </div>
      )}
    </div>
  );
}
