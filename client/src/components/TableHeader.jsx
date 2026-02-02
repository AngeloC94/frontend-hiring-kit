export default function TableHeader() {
  return (
    <thead className="sticky top-0 z-10">
      <tr className="bg-linear-to-r from-indigo-600 to-indigo-500">
        <th className="w-[15%] px-3 py-4 text-center text-xs font-semibold text-white uppercase tracking-wider whitespace-nowrap">
          Nome
        </th>
        <th className="w-[18%] px-4 py-4 text-center text-xs font-semibold text-white uppercase tracking-wider whitespace-nowrap">
          Email
        </th>
        <th className="w-[12%] px-2 py-4 text-center text-xs font-semibold text-white uppercase tracking-wider whitespace-nowrap">
          Telefono
        </th>
        <th className="w-[20%] px-4 py-4 text-center text-xs font-semibold text-white uppercase tracking-wider whitespace-nowrap">
          Indirizzo
        </th>
        <th className="w-[12%] py-4 text-center text-xs font-semibold text-white uppercase tracking-wider whitespace-nowrap">
          Data Creazione
        </th>
        <th className="w-[13%] px-4 py-4 text-center text-xs font-semibold text-white uppercase tracking-wider whitespace-nowrap">
          Data Aggiornamento
        </th>
        <th className="w-[10%] px-4 py-4 text-center text-xs font-semibold text-white uppercase tracking-wider whitespace-nowrap">
          Azioni
        </th>
      </tr>
    </thead>
  );
}

