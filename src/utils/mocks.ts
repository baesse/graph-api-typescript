import * as faker from 'faker';

const UsersList = (howMany: number): Array<any> => {
    const users: any[] = [];
    for (let i = 0; i <= howMany; i += 1) {
        users.push({
            id: i,
            name: faker.fake('{{name.lastName}}, {{name.firstName}} {{name.suffix}}'),
            email: faker.internet.email(),
        });
    }
    return users;
};

export default UsersList;
