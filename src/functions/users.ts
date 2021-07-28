/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import prisma from '../client';

type CreateUser = {
  id?: string;
  email: string,
  name: string
}

type UpdateUser = {
  email: string,
  name: string
}


export async function createUser(user: CreateUser) {
  return prisma.user.create({
    data: {
      ...user
    }
  })
}

export async function getUser(userId: string) {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
  })
}

export async function getUsers() {
  return prisma.user.findMany({
    include: {
      Order: true,
    },
  })
}

export async function updateUser(userId: string, user: UpdateUser) {
  return prisma.user.update({
    where: {
      id: userId,
    },
    data: user,
  })
}

export async function deleteUser(userId: string) {
  return prisma.user.delete({
    where: {
      id: userId,
    },
  })
}

type CreateAuto = {
  id?: string;
  brand: string,
  model: string,
  cost: number,
  fuelLiter: number
}

type UpdateAuto = {
  brand: string,
  model: string,
  cost: number,
  fuelLiter: number
}

export async function createAuto(auto: CreateAuto) {
  return prisma.auto.create({
    data: {
      ...auto
    }
  })
}

export async function getAuto(autoId: string) {
  return prisma.auto.findUnique({
    where: {
      id: autoId,
    },
  })
}

export async function getAutos() {
  return prisma.auto.findMany({
    include: {
      Order: true,
    },
  })
}

export async function updateAuto(autoId: string, auto: UpdateAuto) {
  return prisma.auto.update({
    where: {
      id: autoId,
    },
    data: auto,
  })
}

export async function deleteAuto(autoId: string) {
  return prisma.auto.delete({
    where: {
      id: autoId,
    },
  })
}


type CreateOrder = {
  id?: string;
  userId: string;
  autoId: string;
  delivery?: string;
  payment?: string;
  address?: string;
}

type UpdateOrder = {
  delivery?: string;
  payment?: string;
  address?: string;
}

export async function createOrder(order: CreateOrder) {
  return prisma.order.create({data: order})
}

export async function getOrder(orderId: string) {
  return prisma.order.findUnique({
    where: {
      id: orderId,
    },
  })
}

export async function getOrders() {
  return prisma.order.findMany()
}

export async function updateOrder(orderId: string, order: UpdateOrder) {
  return prisma.order.update({
    where: {
      id: orderId,
    },
    data: order,
  })
}

export async function deleteOrder(orderId: string) {
  return prisma.order.delete({
    where: {
      id: orderId,
    },
  })
}
