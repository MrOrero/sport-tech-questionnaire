export type topic = {
  id: number;
  topic: string;
  color: string;
};

export type answer = {
  id: number;
  answer: string;
  color: string;
  selectedColor: string;
};

export const TOPICS: topic[] = [
  { id: 1, topic: "Phishing", color: "#F00000" },
  { id: 2, topic: "Malware", color: "#F0BB00" },
  { id: 3, topic: "Two factor authentication", color: "#A3F000" },
  { id: 4, topic: "Ransomware", color: "#44CCBC" },
  { id: 5, topic: "Social Engineering", color: "#0035F0" },
  { id: 6, topic: "Firewall", color: "#F000D8" },
  { id: 7, topic: "Data Breach", color: "#000000" },
  { id: 8, topic: "Encryption", color: "#BCA7FF" },
  { id: 9, topic: "VPN Virtual Private Network", color: "#FFD0D0" },
  { id: 10, topic: "Antivirus Software", color: "#A9CCFF" },
];

export const ANSWERS: answer[] = [
  {
    id: 1,
    answer:
      "An attempt to trick individuals into revealing sensitive information through deceptive emails or messages",
    color: "#F00000",
    selectedColor: "#D9D9D9",
  },
  {
    id: 2,
    answer:
      "Software designed to disrupt, damage, or gain unauthorized access to computer systems",
    color: "#F0BB00",
    selectedColor: "#D9D9D9",
  },
  {
    id: 3,
    answer:
      "A security measure that requires users to provide two forms of identification to access an account",
    color: "#A3F000",
    selectedColor: "#D9D9D9",
  },
  {
    id: 4,
    answer:
      "Software that blocks access to a computer system until a sum of money is paid",
    color: "#44CCBC",
    selectedColor: "#D9D9D9",
  },
  {
    id: 5,
    answer:
      "The unauthorized use of electronic communications to deceive and manipulate people into giving out confidential information",
    color: "#0035F0",
    selectedColor: "#D9D9D9",
  },
  {
    id: 6,
    answer:
      "A security device or software that monitors and controls incoming and outgoing network traffic based on predetermined security rules",
    color: "#F000D8",
    selectedColor: "#D9D9D9",
  },
  {
    id: 7,
    answer: "Unauthorized access to a system or network",
    color: "#000000",
    selectedColor: "#D9D9D9",
  },
  {
    id: 8,
    answer:
      "The process of encoding information to make it unreadable without the correct decryption key",
    color: "#BCA7FF",
    selectedColor: "#D9D9D9",
  },
  {
    id: 9,
    answer:
      "A method of securely connecting to a private network over the internet",
    color: "#FFD0D0",
    selectedColor: "#D9D9D9",
  },
  {
    id: 10,
    answer:
      "Software designed to detect, prevent, and remove malicious software (malware) from computers",
    color: "#A9CCFF",
    selectedColor: "#D9D9D9",
  },
];
