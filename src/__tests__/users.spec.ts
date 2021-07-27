import prisma from "../client";
import { 
  createUser, createAuto,
  getUser, getAuto,
  getUsers, getAutos, 
  updateUser, updateAuto, 
  deleteUser, deleteAuto
} from "../functions/users";

const deleteUserRecords = async () => {
  await prisma.$transaction([
    prisma.user.deleteMany()
  ]);
}

const deleteAutoRecords = async () => {
  await prisma.$transaction([
    prisma.auto.deleteMany()
  ]);
}

beforeEach(async () => {
  await deleteUserRecords();
  await deleteAutoRecords();
})

afterAll(async () => {
  await deleteUserRecords();
  await deleteAutoRecords();
  await prisma.$disconnect();
})

test('should find user with id', async () => {
  const userId = 1;
  
  const userData = {
    id: userId,
    name: 'Arsen',
    email: 'a@a.a'
  }

  await createUser(userData);

  const user = await getUser(userId);

  expect(user?.id).toEqual(userId);
})

test('should find auto with id', async () => {
  const autoId = 1;
  
  const autoData = {
    id: autoId,
    brand: 'Hyundai',
    model: 'Elantra',
    cost: 20000,
    fuelLiter: 47
  }

  await createAuto(autoData);

  const auto = await getAuto(autoId);

  expect(auto?.id).toEqual(autoId);
})

// test('should find order with id', async () => {
//   const userId = 1;
//   const autoId = 1;
//   const orderId = 1;
  
//   const orderData = {
//     id: orderId,
//     userId, 
//     autoId,
//     delivery: "TO_ADDRESS",
//     payment: "VISA",
//     address: "Wall. St."
//   }

//   await createOrder(orderData);

//   const order = await getOrder(orderId);

//   expect(order?.id).toEqual(orderId);
// })

test('should find all users', async () => {
  const initialUsers = await getUsers();

  const userData = {
    id: 2,
    name: 'Bob',
    email: 'b@b.b'
  }

  await createUser(userData);

  const newUsers = await getUsers();

  expect(initialUsers.length + 1).toEqual(newUsers.length);
})

test('should find all autos', async () => {
  const initialAutos = await getAutos();

  const autoData = {
    id: 2,
    brand: 'Chevrolet',
    model: 'Aveo',
    cost: 3000,
    fuelLiter: 45
  }

  await createAuto(autoData);

  const newAutos = await getAutos();

  expect(initialAutos.length + 1).toEqual(newAutos.length);
})

test('should create new user ', async () => {
  const userId = 322;

  const userData = {
    id: userId,
    name: 'Dan',
    email: 'd@d.d'
  }

  const newUser = await createUser(userData);

  const expectedUser = {
    id: userId,
    name: 'Dan',
    email: 'd@d.d'
  }

  const user = await getUser(newUser.id);

  expect(expectedUser).toEqual(user);
})

test('should create new auto ', async () => {
  const autoId = 322;

  const autoData = {
    id: autoId,
    brand: 'Honda',
    model: 'Civic',
    cost: 25000,
    fuelLiter: 46
  }

  const newAuto = await createAuto(autoData);

  const expectedAuto = {
    id: autoId,
    brand: 'Honda',
    model: 'Civic',
    cost: 25000,
    fuelLiter: 46
  }

  const auto = await getAuto(newAuto.id);

  expect(expectedAuto).toEqual(auto);
})

// test('should create default user stats on user create', async () => {
//   const userId = 2021;

//   const userData = {
//     id: userId,
//     name: 'KunaCoder',
//   }

//   const baseUserStats = {
//     strength: 1,
//     magic: 1,
//     dexterity: 1,
//     vitality: 1,
//     life: 1,
//     mana: 1,
//   }

//   await createUser(userData);

//   const user = await getUserDetails(userId);

//   expect(user?.UserStats).toMatchObject(baseUserStats);
// })

test('should update user ', async () => {
  const userId = 228;

  const userData = {
    id: userId,
    name: 'Gary',
    email: 'g@g.g'
  }

  const newUser = await createUser(userData);

  const updateUserData = {
    name: 'Garfield',
    email: 'g@g.g'
  }

  const updatedUser = await updateUser(newUser.id, updateUserData);

  const user = await getUser(updatedUser.id);

  expect(user).toEqual(updatedUser);
})

test('should update auto ', async () => {
  const autoId = 228;

  const autoData = {
    id: autoId,
    brand: 'Toyota',
    model: 'RAV4',
    cost: 30000,
    fuelLiter: 55
  }

  const newAuto = await createAuto(autoData);

  const updateAutoData = {
    id: autoId,
    brand: 'Toyota',
    model: 'RAV4',
    cost: 37000,
    fuelLiter: 60
  }

  const updatedAuto = await updateAuto(newAuto.id, updateAutoData);

  const auto = await getAuto(updatedAuto.id);

  expect(auto).toEqual(updatedAuto);
})

test('should delete user with id', async () => {
  const userId = 3;

  const userData = {
    id: userId,
    name: 'Luise',
    email: 'l@l.l'
  }

  await createUser(userData);

  await deleteUser(userId);

  const user = await getUser(userId);

  expect(user).toEqual(null);
})

test('should delete auto with id', async () => {
  const autoId = 3;

  const autoData = {
    id: autoId,
    brand: 'Audi',
    model: 'RS Q8',
    cost: 115000,
    fuelLiter: 85
  }

  await createAuto(autoData);

  await deleteAuto(autoId);

  const auto = await getAuto(autoId);

  expect(auto).toEqual(null);
})
