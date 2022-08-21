type Users = {
  name: string;
  email: string;
  role: string;
};

const users: Users[] = [
  { name: "Rogério", email: "roger@email.com", role: "user" },
  { name: "Ademir", email: "ademir@email.com", role: "admin" },
  { name: "Aline", email: "aline@email.com", role: "user" },
  { name: "Jéssica", email: "jessica@email.com", role: "user" },
  { name: "Adilson", email: "adilson@email.com", role: "user" },
  { name: "Carina", email: "carina@email.com", role: "admin" },
];

function getAdminsEmail(usersArray: Users[]) {
  const usersEmails: string[] = [];

  usersArray.filter((user) => {
    if (user.role === "admin") {
      return usersEmails.push(user.email);
    }
  });
  return usersEmails;
}

console.log(getAdminsEmail(users));
