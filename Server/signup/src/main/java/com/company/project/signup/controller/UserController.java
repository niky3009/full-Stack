package com.company.project.signup.controller;

import com.company.project.signup.model.User;
import com.company.project.signup.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.lang.model.util.Elements;
import java.util.List;

@RestController
@CrossOrigin(origins="*")
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping(method = RequestMethod.GET, value="/users")
    public List<User>getAllUsers(){
        return userService.getAllUser();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/users")
    public User createUser(@RequestBody User user){

        return userService.createUser(user);
}
}