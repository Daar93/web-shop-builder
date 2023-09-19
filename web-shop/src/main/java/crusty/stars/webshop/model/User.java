package crusty.stars.webshop.model;

import java.time.LocalDate;
import java.util.UUID;

public class User {
    private final UUID id;
    private final String userName;
    private final String password;
    private final String email;
    private final LocalDate birthdate;

    public User(UUID id, String userName, String password, String email, LocalDate birthdate) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.birthdate = birthdate;
    }
}
