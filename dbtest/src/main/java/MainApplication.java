import model.User;
import org.hibernate.Session;

import java.util.Date;

public class MainApplication {

    public static void main(String[] args) {
        try{
            Session session = HibernateConfig.getSessionFactory().openSession();
            session.beginTransaction();
            User user = new User();
            user.setName("alksjdf");

            session.save(user);

            session.getTransaction().commit();

        }catch (Exception e){
            e.printStackTrace();
        }finally {
            HibernateConfig.shutdown();
        }
    }
}
