import Users from "./users";
export const meta = () => {
  return [
    { title: "User List" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen  p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-pink-700">
        Remix + Tailwind CSS + Axios
      </h1>
      <Users />
    </div>
  );
}
