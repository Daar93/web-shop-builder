package crusty.stars.webshop.api;

import crusty.stars.webshop.model.User;
import org.hibernate.mapping.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/")
public class LandingPageController {
    @GetMapping("/")
    public List<User> title() {
        return null;
    }

    @GetMapping
}
