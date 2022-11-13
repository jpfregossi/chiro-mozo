import EncryptedStorage from 'react-native-encrypted-storage';

export interface IUserToken {
    token: string,
}

const TokenStore = {
    save: async function(userToken: IUserToken){
        try {
            await EncryptedStorage.setItem(
                "chiro_token",
                JSON.stringify(userToken)
            );
          } 
          catch (error) {
            return null 
          }
    }, 
    load: async function(){
        try{
            const session = await EncryptedStorage.getItem("chiro_token");
    
            if (session != undefined && session != null) {
                let userToken: IUserToken = JSON.parse(session);
                console.log("Stored token: ", userToken);
                return userToken; 
            }
            return false;
        }
        catch(error){
            return null;
        }
    }, 
    delete: async function(){
        try{
            await EncryptedStorage.removeItem("chiro_token");
            return true;
        }
        catch(error){
            return null;
        }
    }, 
}

export default TokenStore;