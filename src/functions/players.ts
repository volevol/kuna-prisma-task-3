/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import prisma from '../client';

type CreateUser = {
  email: string,
  name: string
}

type CreateAuto = {
  brand: string,
  model: string,
  cost: number,
  fuelLiter: number
}

type CreateOrder = {
  delivery: string,
  payment: string,
  address: string
}

type UpdateUser = {
  email: string,
  name: string
}

type UpdateAuto = {
  brand: string,
  model: string,
  cost: number,
  fuelLiter: number
}

export async function getUsers() {
  return prisma.user.findMany({
    include: {
      Order: true,
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

export async function getUser(userId: number) {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
  })
}

export async function getAuto(autoId: number) {
  return prisma.auto.findUnique({
    where: {
      id: autoId,
    },
  })
}

export async function getOrder(orderId: number) {
  return prisma.order.findUnique({
    where: {
      id: orderId,
    },
  })
}

export async function getUserDetails(userId: number) {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      Order: true,
    },
  })
}

export async function createUser(user: CreateUser) {
  return prisma.user.create({
    data: {
      ...user
    }
  })
}

export async function createAuto(auto: CreateAuto) {
  return prisma.auto.create({
    data: {
      ...auto
    }
  })
}

export async function createOrder(order: CreateOrder) {
  return prisma.order.create({ data: order })
} 

export async function updateUser(userId: number, user: UpdateUser) {
  return prisma.user.update({
    where: {
      id: userId,
    },
    data: user,
  })
}

export async function updateAuto(autoId: number, auto: UpdateAuto) {
  return prisma.auto.update({
    where: {
      id: autoId,
    },
    data: auto,
  })
}

export async function deleteUser(userId: number) {
  return prisma.user.delete({
    where: {
      id: userId,
    },
  })
}

export async function deleteAuto(autoId: number) {
  return prisma.auto.delete({
    where: {
      id: autoId,
    },
  })
}