interface IUserResponseDTO {
  email: string;
  name: string;
  id: string;
  avatar: string;
  driver_license: string;
  avatar_url(): string;
}

export { IUserResponseDTO };
