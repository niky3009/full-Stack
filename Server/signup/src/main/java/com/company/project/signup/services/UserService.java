package com.company.project.signup.services;

import com.company.project.signup.model.User;
import com.company.project.signup.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User>getAllUser(){
        List<User> users=new ArrayList<>();
        userRepository.findAll().forEach(user -> users.add(user));
        return users;
    }
    public User createUser(User user){
        userRepository.save(user);
        return user;
}
}