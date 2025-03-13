import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const VerifyDni = () => {
  const [documento, setDocumento] = useState("");
  const [error, setError] = useState("");
  const [isVerificado, setIsVerificado] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isVerificado) {
      navigate("/generar-tramite");
      console.log("paso");
    }
  }, [isVerificado, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const documentoNumero = parseInt(documento, 10);
    if (isNaN(documentoNumero) || documentoNumero <= 0) {
      setError("El documento no es válido.");
      //VERIFICACION MANUAL DE PRUEBA YA QUE NO SE CUENTA CON UN SERVICIO DE VERIFICACION DE DOCUMENTO
    } else if (documentoNumero > 50000000 && documentoNumero < 60000000) {
      setIsVerificado(true);
      navigate("/generar-tramite");
    } else {
      setError("Debe entre 16 y 18 años para realizar la beca.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Verificación de Documento
      </h2>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex flex-col gap-4">
          <input
            type="number"
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
            placeholder="Ingrese su número de documento"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Verificar
          </button>
        </div>
      </form>

      {error && <p className="text-red-600 text-center mt-4">{error}</p>}
    </div>
  );
};

export default VerifyDni;
