import { DEFAULT_RECORDS_PER_PAGE } from "./constants";

import { useEffect, useState } from "react";

import { userService } from "./services/userService";

import TableSelect from "./components/TableSelect";
import UserTable from "./components/UserTable";
import Pagination from "./components/Pagination";

import "./App.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(
    DEFAULT_RECORDS_PER_PAGE,
  );

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const users = await userService.getAllUsers();
        setUsers(users);
      } catch (err) {
        setError("Errore nel caricamento dei dati");
        console.error(err);
      }
    };
    loadUsers();
  }, []);

  const handleRecordsPerPageChange = (newRecordsPerPage) => {
    setRecordsPerPage(newRecordsPerPage);
    setCurrentPage(1);
  };

  const getTotalPages = () => Math.ceil(users.length / recordsPerPage);

  const getCurrentPageUsers = () => {
    const start = (currentPage - 1) * recordsPerPage;
    return users.slice(start, start + recordsPerPage);
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= getTotalPages()) {
      setCurrentPage(page);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < getTotalPages()) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (error) {
    return (
      <div className="h-full bg-slate-50  flex items-center justify-center ">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }
  return (
    <div className="h-full bg-slate-50 rounded-xl text-slate-800 ">
      <div className="h-full w-full overflow-auto flex justify-center ">
        <div className="w-full max-w-7xl min-h-220 p-4 md:p-6 lg:p-8 ">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-slate-900">
              Gestione Utenti
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Visualizza e gestisci i record degli utenti
            </p>
          </div>
          <TableSelect
            recordsPerPage={recordsPerPage}
            onChange={(e) =>
              handleRecordsPerPageChange(parseInt(e.target.value))
            }
          />
          <UserTable data={getCurrentPageUsers()} />
          <Pagination
            currentPage={currentPage}
            totalPages={getTotalPages()}
            onPageChange={goToPage}
            onPrevious={goToPrevPage}
            onNext={goToNextPage}
          />
        </div>
      </div>
    </div>
  );
}
