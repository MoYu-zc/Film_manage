import com.zc.Service.UserService;
import com.zc.Service.UserServiceimpl;
import com.zc.pojo.user;
import org.junit.Test;

/**
 * @author MoYu-zc
 * @date 2020/12/17 8:41
 */
public class jdbc {

    @Test
    public void updateuser(){
        UserService userService = new UserServiceimpl();
        user user = new user(111111, "1", "1", 1, "1");
        int i = userService.upUser(user);
        System.out.println(i);

    }
}
