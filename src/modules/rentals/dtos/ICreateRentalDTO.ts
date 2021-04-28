interface ICreateRentalDTO {
  user_id: string;
  car_id: string;
  expected_return_date: Date;
  id?: string;
  end_date?: Date;
  total?: number;
}

export { ICreateRentalDTO };
