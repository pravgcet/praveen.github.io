import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 text-center space-y-4">
      <p>Feel free to connect with me:</p>
      <div className="flex justify-center gap-6">
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <Github className="w-6 h-6 hover:text-gray-700" />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <Linkedin className="w-6 h-6 hover:text-blue-700" />
        </a>
        <a href="mailto:example@email.com">
          <Mail className="w-6 h-6 hover:text-red-600" />
        </a>
      </div>
    </div>
  );
}
