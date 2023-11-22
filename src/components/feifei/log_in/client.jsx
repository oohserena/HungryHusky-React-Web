import axios from "axios";

const request = axios.create({
  withCredentials: true,
});

// ADD BACK when backend is ready!!

// export async function loginUser(credentials) {
//   try {
//     const response = await request.post("/api/login", credentials);
//     if (response.status !== 200) {
//       throw new Error('Wrong email or password, please try again');
//     }
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error
//   }
// }


// fake users for testing, DELETE when backend is ready
const fakeUsers = [
    {
      email: "user@example.com",
      password: "1"
    },
  ];
  
  export async function loginUser(credentials) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = fakeUsers.find(user => 
          user.email === credentials.email && user.password === credentials.password
        );
        if (user) {
          resolve({ data: "Fake login successful", user: user });
        } else {
          reject(new Error('Wrong email or password, please try again'));
        }
      }, 1000); 
    });
  }