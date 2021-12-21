export const addUser = (
  firstName: string,
  lastName: string,
  emailAddress: string,
  phoneNumber: string,
  password: string
): string => {
  return `mutation createUser{
        createUser(firstName:"${firstName}",lastName:"${lastName}", emailAddress:"${emailAddress}", phoneNumber:"${phoneNumber}", password:"${password}"){
          success
          errors
          user{
            firstName
            lastName
            emailAddress
            phoneNumber
            password
          }
        }
      }`;
};
