import { faker } from "@faker-js/faker";

import { prisma } from "./";

interface User {
  username: string;
  displayname: string;
  email: string;
  password: Password;
}

interface Password {
  hash: string;
}

const fakeUsers: User[] = [
  {
    username: faker.internet.userName(),
    displayname: faker.internet.userName(),
    email: faker.internet.email(),
    password: {
      hash: faker.internet.password(),
    },
  },
  {
    username: faker.internet.userName(),
    displayname: faker.internet.userName(),
    email: faker.internet.email(),
    password: {
      hash: faker.internet.password(),
    },
  },
];

async function main() {
  for (const user of fakeUsers) {
    await prisma.user.create({
      data: {
        username: user.username,
        displayname: user.displayname,
        email: user.email,
        password: {
          create: {
            hash: user.password.hash,
          },
        },
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
