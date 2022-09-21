export interface IStaff {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IStaffList {
  data: IStaff[];
}
