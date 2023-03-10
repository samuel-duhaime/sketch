import { createContext, useReducer } from "react";

export const UserContext = createContext();

// Initial context user
const initialUser = {};

// Reducer for all the actions type of user
const userReducer = (user, action) => {
   const { type } = action; // All the action object

   switch (type) {
      case "nameOfAction": {
         return {
            ...user,
            // State change
         };
      }
      default: {
         throw new Error(`Invalid type: ${type}`);
      }
   }
};

// Context user provider
export const UserProvider = ({ children }) => {
   const [user, dispatch] = useReducer(userReducer, initialUser);

   // Reducer action
   const nameOfAction = () => {
      dispatch({ type: "nameOfAction" });
   };

   return (
      <UserContext.Provider
         value={{
            user,
            actions: {
               nameOfAction,
            },
         }}
      >
         {children}
      </UserContext.Provider>
   );
};
