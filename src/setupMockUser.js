const mockUsers = [
    {
      id: 1,
      username: 'user1',
      email: 'user1@gmail.com',
      password: 'password1',
    },
    {
      id: 2,
      username: 'user2',
      email: 'user2@gmail.com',
      password: 'password2',
    },
    // Add more mock user data as needed
  ];
  
  // Store mock users in session storage
  sessionStorage.setItem('mockUsers', JSON.stringify(mockUsers));
  