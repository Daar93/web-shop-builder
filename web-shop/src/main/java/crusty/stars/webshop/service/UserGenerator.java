package crusty.stars.webshop.service;

import crusty.stars.webshop.model.User;

import java.time.LocalDate;
public class UserGenerator {
    public User generateUser(UUIDGenerator uuidGenerator, String userName, String password, String email, LocalDate birthdate) {
        return new User(uuidGenerator.genrateUUID(), userName, password, email, birthdate);
    }
}
