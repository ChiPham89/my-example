import { User } from "../../redux/users/user";
import UserCredential from "../../redux/users/userCredential";

export default class UsersApi {
    private static users():User[] {
        const users:User[] = [];
        users.push(new User("Norman", "Chi Pham", "123789"));
        users.push(new User("Kai", "Son Trinh", "13579"));
        users.push(new User("chuotchet", "Dao Lai", "24680"));

        return users;
    };

    public static login(credential:UserCredential):User {
        const loginUser = UsersApi.users()
                                .find(user => user.getUserName() === credential.username
                                        && user.getPassword() === credential.password);
        console.log("Login user: ", loginUser);
        return loginUser ? loginUser : new User();
    }
}