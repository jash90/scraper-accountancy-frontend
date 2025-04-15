import React from 'react';
import { Search, FileText, Clock, Shield } from 'lucide-react';

function App() {
  const [query, setQuery] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [showFeatures, setShowFeatures] = React.useState(true);
  const [result, setResult] = React.useState<{
    answer: string;
    source: string;
    timestamp: string;
  } | null>(null);

  const handleSearch = async () => {
    if (!query) return;

    setShowFeatures(false);
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/ask`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: query }),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({
        answer: 'Przepraszamy, wystąpił błąd podczas wyszukiwania.',
        source: '',
        timestamp: new Date().toISOString()
      });
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Polski Asystent Podatkowy
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Twój osobisty ekspert podatkowy dostępny 24/7. Zadaj pytanie i otrzymaj natychmiastową, 
            dokładną odpowiedź opartą na aktualnych przepisach podatkowych.
          </p>
        </div>

        {/* Search Box */}
        <div className="relative mb-12">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Np. Jakie są rodzaje deklaracji PIT?"
            className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500 transition-colors shadow-lg"
          />
          <button
            onClick={handleSearch}
            className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-md"
          >
            <Search className="w-5 h-5" />
            <span>Szukaj</span>
          </button>
        </div>

        {/* Features Grid */}
        <div className={`grid md:grid-cols-3 gap-8 mb-12 transition-all duration-500 ease-in-out ${
          showFeatures ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 overflow-hidden'
        }`}>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Aktualne Informacje</h3>
            <p className="text-gray-600">
              Zawsze aktualne odpowiedzi oparte na najnowszych przepisach podatkowych
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Błyskawiczne Odpowiedzi</h3>
            <p className="text-gray-600">
              Natychmiastowe odpowiedzi na Twoje pytania podatkowe
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Wiarygodne Źródła</h3>
            <p className="text-gray-600">
              Wszystkie informacje pochodzą z oficjalnych źródeł
            </p>
          </div>
        </div>

        {/* Search Results */}
        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
            <p className="mt-4 text-gray-600">Szukam odpowiedzi...</p>
          </div>
        )}

        {result && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="prose max-w-none mb-4">
              {result.answer.split('\n').map((line, i) => (
                <p key={i} className="mb-4 text-gray-700">
                  {line}
                </p>
              ))}
            </div>
            {result.source && (
              <div className="text-sm text-gray-500 border-t pt-4">
                <p>
                  Źródło:{' '}
                  <a
                    href={result.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {result.source}
                  </a>
                </p>
                <p>
                  Data aktualizacji:{' '}
                  {new Date(result.timestamp).toLocaleDateString('pl-PL')}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 mt-12 pt-8 border-t">
          <p>© 2024 Polski Asystent Podatkowy. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
