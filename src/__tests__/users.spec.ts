import prisma from "../client";
import { 
  createUser, createAuto, createOrder,
  getUser,    getAuto,    getOrder,
  getUsers,   getAutos,   getOrders,
  updateUser, updateAuto, updateOrder,
  deleteUser, deleteAuto, deleteOrder
} from "../functions/users";

import {v4 as uuidv4} from 'uuid';

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

const deleteOrderRecords = async () => {
  await prisma.$transaction([
    prisma.order.deleteMany()
  ]);
}

beforeEach(async () => {
  await deleteUserRecords();
  await deleteAutoRecords();
  await deleteOrderRecords();
})

afterAll(async () => {
  await deleteUserRecords();
  await deleteAutoRecords();
  await deleteOrderRecords();
  await prisma.$disconnect();
})
 
test('should find user with id', async () => {
  const userId = uuidv4();
  
  const userData = {
    id: userId,
    name: 'Arsen',
    email: 'a@a.a'
  }

  await createUser(userData);

  const user = await getUser(userId);

  expect(user?.id).toEqual(userId);
})

test('should find all users', async () => {
  const initialUsers = await getUsers();

  const userData = {
    id: uuidv4(),
    name: 'Bob',
    email: 'b@b.b'
  }

  await createUser(userData);

  const newUsers = await getUsers();

  expect(initialUsers.length + 1).toEqual(newUsers.length);
})

test('should create new user ', async () => {
  const userId = uuidv4();

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

test('should update user ', async () => {
  const userId = uuidv4();

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

test('should delete user with id', async () => {
  const userId = uuidv4();

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

test('should find auto with id', async () => {
  const autoId = uuidv4();
  
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

test('should find all autos', async () => {
  const initialAutos = await getAutos();

  const autoData = {
    id: uuidv4(),
    brand: 'Chevrolet',
    model: 'Aveo',
    cost: 3000,
    fuelLiter: 45
  }

  await createAuto(autoData);

  const newAutos = await getAutos();

  expect(initialAutos.length + 1).toEqual(newAutos.length);
})

test('should create new auto ', async () => {
  const autoId = uuidv4();

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

test('should update auto ', async () => {
  const autoId = uuidv4();

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

test('should delete auto with id', async () => {
  const autoId = uuidv4();

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

test('should find order with id', async () => {
  const userId = uuidv4();
  const autoId = uuidv4();
  const orderId = uuidv4();

  const userData = {
    id: userId,
    name: 'Yan',
    email: 'y@y.y'
  }

  const autoData = {
    id: autoId,
    brand: 'Smth',
    model: 'Cool',
    cost: 13000,
    fuelLiter: 44
  }

  const orderData = {
    id: orderId,
    userId,
    autoId
  }

  const newUser = await createUser(userData);
  const newAuto = await createAuto(autoData);
  const newOrder = await createOrder(orderData);

  const expectedOrder = {
    id: orderId,
    userId,
    autoId,
    delivery: "pick up",
    payment: "cash",
    address: "none"
  }

  const order = await getOrder(orderId);

  expect(order?.id).toEqual(orderId);
})

test('should find all orders', async () => {
  const initialOrders = await getOrders();

  const userId = uuidv4();
  const autoId = uuidv4();
  const orderId = uuidv4();

  const userData = {
    id: userId,
    name: 'Rick',
    email: 'r@r.r'
  }

  const autoData = {
    id: autoId,
    brand: 'Space',
    model: 'Vehicle',
    cost: 66000,
    fuelLiter: 99
  }

  const orderData = {
    id: orderId,
    userId,
    autoId
  }

  const newUser = await createUser(userData);
  const newAuto = await createAuto(autoData);
  const newOrder = await createOrder(orderData);

  const newOrders = await getOrders();

  expect(initialOrders.length + 1).toEqual(newOrders.length);
})

test('should create new order ', async () => {
  const userId = uuidv4();
  const autoId = uuidv4();
  const orderId = uuidv4();

  const userData = {
    id: userId,
    name: 'Rick',
    email: 'r@r.r'
  }

  const autoData = {
    id: autoId,
    brand: 'Space',
    model: 'Vehicle',
    cost: 66000,
    fuelLiter: 99
  }

  const orderData = {
    id: orderId,
    userId,
    autoId
  }

  const newUser = await createUser(userData);
  const newAuto = await createAuto(autoData);
  const newOrder = await createOrder(orderData);

  const expectedOrder = {
    id: orderId,
    userId,
    autoId,
    delivery: "pick up",
    payment: "cash",
    address: "none"
  }

  const order = await getOrder(newOrder.id);

  expect(expectedOrder).toEqual(order);
})

test('should update order ', async () => {
  const userId = uuidv4();
  const autoId = uuidv4();
  const orderId = uuidv4();

  const userData = {
    id: userId,
    name: 'Morty',
    email: 'm@m.m'
  }

  const autoData = {
    id: autoId,
    brand: 'T',
    model: '600',
    cost: 70000,
    fuelLiter: 10
  }

  const orderData = {
    id: orderId,
    userId,
    autoId
  }

  const newUser = await createUser(userData);
  const newAuto = await createAuto(autoData);
  const newOrder = await createOrder(orderData);

  const updateOrderData = {
    delivery: "to address",
    payment: "VISA",
    address: "Wall St."
  }

  const updatedOrder = await updateOrder(newOrder.id, updateOrderData);

  const order = await getOrder(updatedOrder.id);

  expect(order).toEqual(updatedOrder);
})

test('should delete order with id', async () => {
  
  const userId = uuidv4();
  const autoId = uuidv4();
  const orderId = uuidv4();

  const userData = {
    id: userId,
    name: 'Alex',
    email: 'a@a.a'
  }

  const autoData = {
    id: autoId,
    brand: 'Das',
    model: 'Auto',
    cost: 111111,
    fuelLiter: 11
  }

  const orderData = {
    id: orderId,
    userId,
    autoId
  }

  const newUser = await createUser(userData);
  const newAuto = await createAuto(autoData);
  const newOrder = await createOrder(orderData);

  await deleteOrder(orderId);

  const order = await getOrder(orderId);

  expect(order).toEqual(null);
})