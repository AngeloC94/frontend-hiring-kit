import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export default function UserTable({ data }) {
  return (
    <div className="bg-white rounded-xl min-h-150 shadow-sm border border-slate-200 overflow-hidden ">
      <div
        className="overflow-auto scrollbar-custom "
        style={{ maxHeight: "600px" }}
      >
        <table className="w-full table-fixed">
          <TableHeader />
          <tbody className="divide-y divide-slate-100">
            {data.map((user, index) => (
              <TableRow
                key={user.id}
                user={user}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
