package com.theironyard;

import org.junit.Test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ArrayList;

import static org.junit.Assert.*;

/**
 * Created by stevenburris on 10/19/16.
 */
public class MainTest {
    public Connection startConnection() throws SQLException {
        Connection conn = DriverManager.getConnection("jdbc:h2:mem:test");
        Main.createTables(conn);
        return conn;
    }

    @Test
    public void testUser() throws SQLException {
        Connection conn = startConnection();
        Main.insertUser(conn, "Alice", "pass");
        User user = Main.selectUser(conn, "Alice");
        conn.close();
        assertTrue(user != null);
    }


    @Test
    public void testGalleries() throws SQLException {
        Connection conn = startConnection();
        Main.insertUser(conn, "Alice", "pass");
        User user = Main.selectUser(conn, "Alice");
        Gallery gallery = new Gallery(1,"Gibbs", "Monet", "impressionist", "Today", 1);
        Main.insertGallery(conn,gallery,user);
        ArrayList<Gallery> galleries = Main.selectGalleries(conn);
        conn.close();
        assertTrue(!galleries.isEmpty());
    }

    @Test
    public void testUpdateGallery() throws SQLException {
        Connection conn = startConnection();
        Main.insertUser(conn, "Alice", "pass");
        User user = Main.selectUser(conn, "Alice");
        Gallery gallery = new Gallery(1,"Gibbs", "Monet", "impressionist", "Today", 1);
        Gallery gallery2 = new Gallery(1,"Museum", "Eddy", "impressionist", "Today", 1);
        Main.insertGallery(conn,gallery,user);
        Main.updateGallery(conn,gallery2,user);
        ArrayList<Gallery> galleries = Main.selectGalleries(conn);
        conn.close();
        assertTrue(galleries.get(0).artist == "Eddy");
    }

    @Test
    public void testDeleteGallery() throws SQLException {
        Connection conn = startConnection();
        Main.insertUser(conn, "Alice", "pass");
        User user = Main.selectUser(conn, "Alice");
        Gallery gallery = new Gallery(1,"Gibbs", "Monet", "impressionist", "Today", 1);
        Gallery gallery2 = new Gallery(2, "Museum", "Eddy", "impressionist", "Yesterday", 1);
        Main.insertGallery(conn,gallery,user);
        Main.insertGallery(conn,gallery2,user);
        Main.deleteGallery(conn,1);
        ArrayList<Gallery> galleries = Main.selectGalleries(conn);
        System.out.println(galleries);
        conn.close();
        assertTrue(galleries.size()==1);
    }

    @Test
    public void testDeleteUser() throws SQLException {
        Connection conn = startConnection();
        Main.insertUser(conn, "Alice", "pass");
        Main.insertUser(conn, "Bob", "123");
        Main.deleteUser(conn,1);
        ArrayList<User> users = Main.selectUsers(conn);
        conn.close();
        assertTrue(users.size() == 1);
    }
}


