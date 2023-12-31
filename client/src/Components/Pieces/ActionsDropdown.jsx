/* eslint-disable react/prop-types */
export default function ActionsDropdown({ onClick }) {
  return (
    <ul className="py-2 text-sm text-gray-700 whitespace-nowrap">
      <li>
        <a
          onClick={() => onClick('download')}
          className="block px-4 py-2 hover:bg-gray-200 hover:text-gray-600 cursor-pointer"
        >
          Download documents
        </a>
      </li>
      <li>
        <a
          onClick={() => onClick('settings')}
          className="block px-4 py-2 hover:bg-gray-200 hover:text-gray-600 cursor-pointer"
        >
          Client notes
        </a>
      </li>
      <li>
        <a
          onClick={() => onClick('dashboard')}
          className="block px-4 py-2 hover:bg-gray-200 hover:text-gray-600 cursor-pointer"
        >
          Edit client
        </a>
      </li>
      <li>
        <a
          onClick={() => onClick('earnings')}
          className="block px-4 py-2 hover:bg-gray-200 hover:text-gray-600 cursor-pointer"
        >
          Send email
        </a>
      </li>
    </ul>
  );
}