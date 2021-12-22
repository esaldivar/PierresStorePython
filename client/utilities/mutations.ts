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

export const addFavorite = (userId: number, productName: string): string => {
  return `mutation addFavorite {
        addFavorite(userId:${userId}, productName:"${productName}") {
          success
          errors
          favorites { 
          productName
          }
        }
      }`;
};
