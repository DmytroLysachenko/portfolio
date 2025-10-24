export interface ICertificateItem {
  name: string;
  link: string;
  children?: ICertificateItem[];
}

export const certificates: ICertificateItem[] = [
  {
    name: "EF SET English C2 level certificate",
    link: "https://cert.efset.org/hMHpjX",
  },
  {
    name: "Bootcamp Fullstack Developer course completion certificate",
    link: "/certificates/dmytro_lysachenko_fullstack_cert.pdf",
  },
  {
    name: "IBM Generative AI for Software Developers career certificate",
    link: "/certificates/course-era-gen-ai.pdf",
    children: [
      {
        name: "Generative AI: Introduction and Applications",
        link: "/certificates/coursera-ai-introduction.pdf",
      },
      {
        name: "Generative AI: Prompt Engineering Basics",
        link: "/certificates/coursera-prompt-eng-basic.pdf",
      },
      {
        name: "Generative AI: Elevate your Software Development Career",
        link: "/certificates/coursera-elevate-software-dev.pdf",
      },
    ],
  },
  {
    name: "Microsoft Back-End Developer career certificate",
    link: "/",
    children: [
      {
        name: "Foundations of Coding Back-End",
        link: "/certificates/net-foundation-coding-backend.pdf",
      },
      {
        name: "Introduction to Programming with C#",
        link: "/certificates/net-introd-csharp.pdf",
      },
      {
        name: "Back-End Development with .NET",
        link: "/certificates/net-backend.pdf",
      },
      {
        name: "Database Integration and Management with .NET",
        link: "/certificates/net-db-integration-management.pdf",
      },
    ],
  },
  {
    name: "Google Umiejetnosci Jutra certificate",
    link: "/certificates/google-uj-cert.pdf",
  },
];
