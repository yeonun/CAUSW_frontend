import { UserState, Role } from '../../@types/Auth';

export class UserModel {
  email: string;
  name: string;
  admission_year: string;
  role: Role; 
  profile_image?: string;
  state: UserState;
  student_id?: string;

  constructor(data: any) {
    this.email = data.email;
    this.name = data.name;
    this.admission_year = data.admission_year;
    this.role = data.role;
    this.state = data.state;
  }
}