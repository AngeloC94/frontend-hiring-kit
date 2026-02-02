import { RECORDS_PER_PAGE_OPTIONS } from "../constants";

export default function TableControls({
  recordsPerPage,
  onChange,
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
      <div className="flex items-center gap-3 px-2 ">
        <label
          htmlFor="records-per-page"
          className="text-sm font-medium text-slate-800"
        >
          Record per pagina:
        </label>
        <select
          id="records-per-page"
          value={recordsPerPage}
          onChange={onChange}
          className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer transition-all duration-150"
        >
          {RECORDS_PER_PAGE_OPTIONS.map((opt, index) => {
            return (
              <option key={index} value={opt}>
                {opt}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
