import { formatDateIT } from "../utils/dateUtils";

export default function TableRow({ user, index }) {
  const createdAtFormatted = formatDateIT(user.created_at)
  const updatedAtFormatted = formatDateIT(user.updated_at)

  return (
    <tr
      className={`${
        index % 2 === 0 ? "bg-white" : "bg-indigo-200"
      } hover:bg-indigo-50/50 transition-colors duration-150`}
    >
      <td className="px-2 py-4 text-sm font-bold text-slate-900">
        {user.name}
      </td>
      <td className="px-3 py-4 text-sm  text-slate-600">{user.email}</td>
      <td className="px-2 py-4 text-sm text-slate-600">{user.phone}</td>
      <td
        className="px-4 py-4 text-sm text-slate-600"
        title={user.address}
      >
        {user.address}
      </td>
      <td className="py-4 text-sm text-slate-800">
        {createdAtFormatted}
      </td>
      <td className="px-4 py-4 text-sm text-slate-800">
        {updatedAtFormatted}
      </td>
      <td className="px-4 py-4 text-center">
        <div className="flex items-center justify-center gap-2">
          <button
            className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-150"
            title="Modifica"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
          <button
            className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-150"
            title="Elimina"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
}
