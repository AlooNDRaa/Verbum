export interface User {
    username: string;
    email: string;
    password: string;
  }
  

  const User = function (this: any, user: {
    password: string;
    email: string; username: string; 
}) { 
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
  }

  