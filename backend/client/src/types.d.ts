type PetData = {
  totalPetsResults: number;
  data: Pet[];
};

type Pet = {
  _id: string;
  name: string;
  species: string;
  age: number;
  description: string;
  image: string;
  gender: string;
  dateAddedToSite: string;
  fee: number;
  image: string;
  town: string;
  zip: string;
  totalPetsResults: number;
};

type PetCard = {
  _id: string;
  name: string;
  species: string;
  age: number;
  image: string;
  gender: string;
  dateAddedToSite: string;
  fee: number;
  image: string;
};

type CartPet = {
  _id: string;
  name: string;
  species: string;
  image: string;
  gender: string;
  fee: number;
  image: string;
};

type CarouselPet = {
  _id: string;
  name: string;
  species: string;
  image: string;
};

type PetErrorType = {
  status: number;
  data: { message: string };
  message: string;
};

type Props = {
  children: React.ReactNode;
};

type CartActionType =
  | { type: "ADD_TO_CART"; payload: CartPet }
  | { type: "REMOVE_ITEM"; payload: CartPet }
  | { type: "CHECKOUT" }
  | { type: "CLEAR" };

type CartInitialState = {
  cartItems: CartPet[];
  checkout: boolean;
};

type User = {
  _id?: string;
  message?: string;
  username?: string;
  email: string;
  password: string;
};
// type UserWithOptionalPhone = Pick<IUser, 'id' | 'email'> & Partial<IUser>

type RegisterUser = Pick<User, "username" | "email" | "password">;

type LoginUser = Pick<User, "email" | "password">;

type AuthMessage = string;

type AuthContextType = {
  user?: User;
  message?: string;
  loading?: boolean;
  error?: any;
  login: (user: User) => void;
  register: (user: User) => void;
  logout: () => void;
};

type UserActionType = { type: "LOGIN"; payload: User } | { type: "LOGOUT" };

type UserInitialState = {
  user: User;
  loggedIn: boolean;
};
