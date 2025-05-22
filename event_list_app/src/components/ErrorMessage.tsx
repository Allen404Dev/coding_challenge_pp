const ErrorMessage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center bg-white p-4 rounded-md">
        <h2 className="text-2xl font-bold text-red-600 ">
          Fehler beim Laden der Daten!
        </h2>
        <p className="mt-2 text-red-500">Bitte versuche es später erneut.</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
