import { DataSource } from "typeorm";

import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { UserTokens } from "@modules/accounts/infra/typeorm/entities/UserTokens";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { CarImage } from "@modules/cars/infra/typeorm/entities/CarImage";
import { Category } from "@modules/cars/infra/typeorm/entities/Category";
import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";
import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { CreateCategories1616082124654 } from "@shared/infra/typeorm/migrations/1616082124654-CreateCategories";
import { CreateSpecifications1616164806211 } from "@shared/infra/typeorm/migrations/1616164806211-CreateSpecifications";
import { CreateUsers1616181770136 } from "@shared/infra/typeorm/migrations/1616181770136-CreateUsers";
import { AlterUserDeleteUsername1616184124981 } from "@shared/infra/typeorm/migrations/1616184124981-AlterUserDeleteUsername";
import { AlterUserAddAvatar1616202763102 } from "@shared/infra/typeorm/migrations/1616202763102-AlterUserAddAvatar";
import { CreateCars1616767002011 } from "@shared/infra/typeorm/migrations/1616767002011-CreateCars";
import { CreateSpecificationsCars1616804636016 } from "@shared/infra/typeorm/migrations/1616804636016-CreateSpecificationsCars";
import { CreateCarImages1616813621403 } from "@shared/infra/typeorm/migrations/1616813621403-CreateCarImages";
import { CreateRentals1616846425130 } from "@shared/infra/typeorm/migrations/1616846425130-CreateRentals";
import { CreateUsersToken1617285235292 } from "@shared/infra/typeorm/migrations/1617285235292-CreateUsersToken";

const dataSource = new DataSource({
  type: "postgres",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: process.env.NODE_ENV === "test" ? "rentx_test" : "rentx",
  entities: [User, UserTokens, Car, CarImage, Category, Specification, Rental],
  migrations: [
    CreateCategories1616082124654,
    CreateSpecifications1616164806211,
    CreateUsers1616181770136,
    AlterUserDeleteUsername1616184124981,
    AlterUserAddAvatar1616202763102,
    CreateCars1616767002011,
    CreateSpecificationsCars1616804636016,
    CreateCarImages1616813621403,
    CreateRentals1616846425130,
    CreateUsersToken1617285235292,
  ],
});

export function createConnection(host = "database"): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize();
}

export default dataSource;
