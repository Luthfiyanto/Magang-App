export default function Card({ data_magang }) {
  const { id, name, activity_name, total, location, mitra_id, mitra_name, logo } = data_magang;
  return (
    <a href={`https://kampusmerdeka.kemdikbud.go.id/program/magang/browse/${mitra_id}/${id}`}>
      <div className="font-sans rounded-md m-3 p-2 shadow-md shadow-slate-400">
        <div className="p-4">
          <h4 className="font-semibold text-blue-800">{name}</h4>
          <div className="text-slate-600 py-2 text-sm">
            <p>{activity_name}</p>
            <p>Kuota: {total}</p>
          </div>
          <div className="grid grid-cols-2">
            <div className="font-medium text-sm text-slate-500">
              <p>{mitra_name}</p>
              <p>{location}</p>
            </div>
            <div className="flex justify-end items-end">
              <img src={logo} alt={mitra_name} className="p-3 w-28 h-24 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
