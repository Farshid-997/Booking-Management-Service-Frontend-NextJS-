export interface IMeta {
  limit: number;
  page: number;
  total: number;
}
export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export interface IService {
  id: any;
  name: string;
  description: string;
  price: string;
  image: string;

  category: string;
  availability: string;
}
export interface IUser {
  id: any;
  name: string;
  username: string;
  email: string;
  role: string;
  contactNo: string;
  address: string;
  profileImg: string;
}

export interface IBooking {
  id: any;
  date: string;
  status: string;
  user?: IUser;
  service?: IService;
  customerAddress: string;
  phone: string;
}
export interface IReview {
  id: any;
  rating: string;
  text: string;
  userId?: string;
  serviceId?: string;
}
