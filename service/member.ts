import { prisma } from "@/lib/db";
import { MemeberCreateProps, MemeberUpdateProps } from "@/lib/validators";
import { Member } from "@prisma/client";
import { z } from "zod";

const getAll = async (projectId: string): Promise<Member[]> => {
  return await prisma.member.findMany({ where: { projectId } });
};

const create = async (
  member: z.infer<typeof MemeberCreateProps>
): Promise<[boolean, unknown | Member]> => {
  try {
    const newMember = await prisma.member.create({
      data: { ...member },
    });
    if (newMember) return [true, newMember];
    else return [false, new Error("Member couldn't be created.")];
  } catch (error) {
    return [false, error];
  }
};

const update = async (
  id: z.infer<z.ZodNumber>,
  member: z.infer<typeof MemeberUpdateProps>
): Promise<[boolean, Member | unknown]> => {
  try {
    const updatedMember = await prisma.member.update({
      where: { id },
      data: { ...member },
    });
    if (updatedMember) return [true, updatedMember];
    else return [false, new Error("Member couldn't be updated.")];
  } catch (error) {
    return [false, error];
  }
};

const deleteMember = async (id: number): Promise<[boolean, unknown]> => {
  try {
    const deletedMember = await prisma.member.delete({ where: { id } });
    if (deletedMember) return [true, undefined];
    else return [false, new Error("Member couldn't be deleted.")];
  } catch (error) {
    return [false, error];
  }
};

export const member = { create, getAll, update, deleteMember };
