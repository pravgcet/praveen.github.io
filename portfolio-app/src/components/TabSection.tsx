import { NavLink } from "react-router-dom";

export default function TabsSection() {
  const tabs = [
    { key: "about", label: "About", path: "/about" },
    { key: "skills", label: "Skills", path: "/skills" },
    { key: "projects", label: "Projects", path: "/projects" },
    { key: "experience", label: "Experience", path: "/experience" },
    { key: "contact", label: "Contact", path: "/contact" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="flex justify-around border-b mb-6">
        {tabs.map((t) => (
          <NavLink
            key={t.key}
            to={t.path}
            className={({ isActive }) =>
              `px-4 py-2 font-medium ${
                isActive ? "border-b-2 border-blue-600 text-blue-600" : ""
              }`
            }
          >
            {t.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
