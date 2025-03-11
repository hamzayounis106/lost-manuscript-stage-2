// eslint-disable-next-line react/prop-types
const DateRange = ({ title }) => (
  <div>
    <h3 className="font-medium text-lg mt-4 mb-2">{title}</h3>
    <div className="grid grid-cols-2 gap-x-2">
      <input
        type="date"
        placeholder="From"
        className="p-2 text-sm pr-0 flex-1 border rounded border-gray-400"
      />
      <input
        type="date"
        placeholder="To"
        className="p-2 text-sm pr-0 flex-1 border rounded border-gray-400"
      />
    </div>
  </div>
);

export default DateRange;
