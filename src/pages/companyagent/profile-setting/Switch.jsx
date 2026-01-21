export default function Switch({ value, onChange }) {
  return (
    <button
      onClick={() => onChange(!value)}
      className={`w-7 h-4 rounded-full transition flex items-center px-1 ${
        value ? "bg-primary" : "bg-gray-300"
      }`}
    >
      <span
        className={`w-3 h-3 bg-white rounded-full transition transform ${
          value ? "translate-x-2.5" : ""
        }`}
      />
    </button>
  );
}
