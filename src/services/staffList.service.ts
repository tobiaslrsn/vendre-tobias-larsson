import { IStaffList } from "../models/IStaff";
import { get } from "./handleRequest.service";

export async function staffListPagination(
  pagination: number
): Promise<IStaffList> {
  const response = `https://reqres.in/api/users?page=${pagination}`;
  return (await get<IStaffList>(response)).data;
}
