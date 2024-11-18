import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { fetchAttestationAction } from '../redux/actions/AttestationAction';

const AttestationScreen = () => {
  const [selectedAttestation, setSelectedAttestation] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const { data: attestationData, loading, error } = useSelector((state) => state.attestation);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      navigate('/');
    } else {
      dispatch(fetchAttestationAction());
    }
  }, [navigate, dispatch]);

  const handleCardClick = (attestation) => {
    setSelectedAttestation(attestation);
  };

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="container mx-auto py-12 px-10 mt-10">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-8">Attestation Cards</h1>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.isArray(attestationData) && attestationData.map((attestation) => (
          <div
            key={attestation.id}
            className="border border-gray-300 rounded-lg p-6 hover:shadow-2xl transition-shadow cursor-pointer transform hover:scale-105"
            onClick={() => handleCardClick(attestation)}
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 mb-4"></div>
              <p className="text-lg font-semibold text-gray-700">Nom: {attestation.first_name}</p>
              <p className="text-lg font-semibold text-gray-700">Prénom: {attestation.last_name}</p>
              <p className="text-lg font-semibold text-gray-700">Email: {attestation.email}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedAttestation && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-2xl p-8 w-96 max-w-sm">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Attestation Details</h2>
            <p className="text-gray-700 mb-2">Nom: {selectedAttestation.first_name}</p>
            <p className="text-gray-700 mb-2">Prénom: {selectedAttestation.last_name}</p>
            <p className="text-gray-700">
              Email:{" "}
              <button
                onClick={() => handleEmailClick(selectedAttestation.email)}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                {selectedAttestation.email}
              </button>
            </p>
            <button
              onClick={() => setSelectedAttestation(null)}
              className="mt-4 px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg hover:opacity-90 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttestationScreen;
