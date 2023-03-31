export const Rule = (props: { children: string }) => {
  return (
    <p className="flex items-center py-1 text-gray-800">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mx-2 h-6 w-6 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <span className="mr-1">{props.children}</span>
    </p>
  );
};