export type RoleType = 'superAdmin' | 'admin' | 'user';
export interface UserState {
  id?: number;
  username?: string;
  name?: string;
  avatar?: string;
  email?: string;
  phone?: string;
  student_id?: string;
  from?: string;
  guardian_name?: string;
  guardian_phone?: string;
  is_forzen?: boolean;
  role: RoleType;
}
