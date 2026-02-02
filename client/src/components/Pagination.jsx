export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  onPrevious,
  onNext,
}) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
      <div className="flex items-center gap-2">
        <button
          onClick={onPrevious}
          disabled={currentPage === 1}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-slate-200 transition-all duration-150"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Indietro
        </button>
        <div className="hidden sm:flex items-center gap-1">
          {[...Array(totalPages)].map((_, i) => {
            const pageNumber = i + 1;
            const isActive = pageNumber === currentPage;

            return (
              <button
                key={pageNumber}
                onClick={() => onPageChange(pageNumber)}
                className={`w-9 h-9 text-sm font-medium rounded-lg transition-all duration-150 ${
                  isActive
                    ? "bg-indigo-600 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>
        <button
          onClick={onNext}
          disabled={currentPage === totalPages}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-slate-200 transition-all duration-150"
        >
          Avanti
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
